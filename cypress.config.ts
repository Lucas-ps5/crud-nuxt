import { defineConfig } from "cypress";

export default defineConfig({
  screenshotOnRunFailure: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "tests-reports/e2e/cypress-junit-[hash].xml",
    attachments: true,
    jenkinsMode: true,
    toConsole: true
  },
  defaultCommandTimeout: 10000,
  numTestsKeptInMemory: 5,
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000",
    supportFile: false,
    experimentalRunAllSpecs: true
  },
  watchForFileChanges: false
});