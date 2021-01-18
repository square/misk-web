import * as fs from "fs-extra"
import klaw from "klaw"
import path from "path"
import semver from "semver"
import { IMiskTabJSON, logDebug } from ".."

// Run a set of configured migrations based on tab version to migrate it to new standards

/**
 * @param item full file path
 * Want to stop traversal over directory names that are unlikely to have a Misk Web tab inside.
 * These files include:
 *   * hidden directories (prefix: .)
 *   * node_modules directory
 */
const filterFunc = (item: string) => {
  const basename = path.basename(item)
  return (
    (basename === "." || basename[0] !== ".") && basename !== "node_modules"
  )
}

interface IMigration {
  description: string
  versionRange: string
  find: RegExp
  replace: string
  filePathFilter?: RegExp
}

const migrations: IMigration[] = [
  {
    description: "Emotion 11.x",
    versionRange: "<0.2.0",
    find: RegExp(`@emotion\/core`),
    replace: "@emotion/react",
    filePathFilter: RegExp(`\/src\/.*\.ts`),
  },
  {
    description: "Emotion 11.x",
    versionRange: "<0.2.0",
    find: RegExp(`jest-emotion`),
    replace: "@emotion/jest",
    filePathFilter: RegExp(`\/tests\/.*\.test\.ts`),
  },
]

const runMigration = async (
  version: semver.SemVer,
  filePath: string,
  migration: IMigration
) => {
  try {
    const fileStringRaw = fs.readFileSync(filePath).toString()
    let fileStringToWrite = fileStringRaw
    // const shouldRunMigration =
    //   semver.satisfies(version, migration.versionRange) &&
    //   migration.filePathIncludesFilter &&
    //   migration.filePathIncludesFilter != "" &&
    //   filePath.includes(migration.filePathIncludesFilter)
    if (semver.satisfies(version, migration.versionRange)) {
      fileStringToWrite = fileStringToWrite.replace(
        migration.find,
        migration.replace
      )
    }
    if (fileStringToWrite != fileStringRaw) {
      console.log("Differences found, writing migrated code to file", filePath)
      await fs.writeFile(filePath, fileStringToWrite)
    }
  } catch (err) {
    console.log(err)
  }
}

export const runMigrationsOnTabCodebase = async (dir: string, slug: string) => {
  let miskTabPath: string
  let codeFiles: string[] = []

  klaw(dir, { filter: filterFunc })
    .on("data", item => {
      if (item.stats.isFile() && item.path.includes("/miskTab.json")) {
        miskTabPath = item.path
      }
      if (
        item.stats.isFile()
        // &&
        // (item.path.includes("/src/") ||
        //   item.path.includes("/tests/") ||
        //   item.path.includes("/test/"))
      ) {
        codeFiles = [...codeFiles, item.path]
      }
    })
    .on("error", (err: Error) => console.error(err))
    .on("end", async () => {
      const miskTabJson: IMiskTabJSON = fs.readJSONSync(miskTabPath)
      const tabVersion = semver.coerce(miskTabJson.version)
      migrations.forEach(migration => {
        logDebug("Code Migration", migration.description, slug)
        codeFiles.forEach(filePath => {
          runMigration(tabVersion, filePath, migration)
        })
      })
    })
}
