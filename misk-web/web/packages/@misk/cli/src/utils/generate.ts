import * as fs from "fs-extra"
import { Files, IMiskTabJSON, JsonOptions } from "../utils"
import {
  createPackage,
  createTsconfig,
  generatedByCLI,
  gitignore,
  tslint,
  webpack
} from "./templates"

export const generateBuildFiles = async () => {
  const pkg = await fs.readJson(Files.package)
  const miskTab: IMiskTabJSON = await fs.readJson(Files.miskTab)
  // Write out fresh files
  await [
    fs.writeJson(Files.tsconfig, createTsconfig(miskTab), JsonOptions),
    fs.writeJson(Files.tslint, tslint, JsonOptions),
    fs.writeJson(Files.package, createPackage(miskTab, pkg), JsonOptions),
    fs.writeFile(Files.gitignore, gitignore),
    fs.writeFile(Files.webpack, webpack)
  ]

  // Append non-package JSON files with generated by comment
  await fs.writeFile(Files.tsconfig, generatedByCLI, { flag: "a" })
  await fs.writeFile(Files.tslint, generatedByCLI, { flag: "a" })
  console.log(
    `[GENERATE] Up to date build files generated using Misk Web version ${
      miskTab.version
    }`
  )
}
