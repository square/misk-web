export const testPackageScript = {
  test: "jest --passWithNoTests --maxWorkers=2"
}

export const testPackageJson_0_1_x = {
  jest: {
    testEnvironment: "jsdom",
    snapshotSerializers: ["jest-serializer-html", "jest-emotion"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    moduleNameMapper: {
      "^src(.*)$": "<rootDir>/src/$1",
      "^tests(.*)$": "<rootDir>/tests/$1"
    }
  }
}

export const testPackageJson = {
  jest: {
    testEnvironment: "jsdom",
    snapshotSerializers: ["jest-serializer-html", "@emotion/jest/serializer"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    moduleNameMapper: {
      "^src(.*)$": "<rootDir>/src/$1",
      "^tests(.*)$": "<rootDir>/tests/$1"
    }
  }
}
