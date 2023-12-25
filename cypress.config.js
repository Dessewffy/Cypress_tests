

const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
includeShadowDom: true,
chromeWebSecurity: false,
screenshotsFolder: "cypress/screenshots",
videosFolder: "cypress/videos",
video: false,
	e2e: {
		setupNodeEvents(on, config) {
		allureWriter(on, config);
		return config;
		// implement node event listeners here
    },
	env:{
		allureReuseAfterSpec: true
	}
  }
});
