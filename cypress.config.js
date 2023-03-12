const { defineConfig } = require('cypress')


module.exports = defineConfig({
 
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
        // implement node event listeners here
      },
  
    baseUrl: 'https://www.kiwi.com/en/airport/bcn/barcelona-el-prat-barcelona-spain/',
    supportFile: false,
    experimentalModifyObstructiveThirdPartyCode: true,
   
  },
})
