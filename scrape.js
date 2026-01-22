const scrape = require("website-scraper").default;
const path = require("path");

scrape({
  urls: ["https://go-ride.jp/"],
  directory: path.resolve(__dirname, "site"),
})
  .then(() => {
    console.log("Scrape finished");
  })
  .catch((error) => {
    console.error("Scrape failed:", error.message);
  });
