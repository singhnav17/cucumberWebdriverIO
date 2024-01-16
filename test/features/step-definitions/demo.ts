// demo.ts
import { Given } from "@wdio/cucumber-framework"

Given('Google page is opened', async () => {
    await browser.url('https://www.google.com/');
});

// When('Search with {string}', async (searchItem:string) => {
//     // Implementation for searching
// });

// Then('Click on first search result', async () => {
//     // Implementation for clicking on the first search result
// });

// Then('URL should match {string}', async (expectedURL: string) => {
//     const currentURL = await browser.getUrl();
//     expect(currentURL).to.equal(expectedURL);
// });
