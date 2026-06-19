module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");
  
  // Watch for CSS changes
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("src/scripts/");
  
  // Add current year filter for copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Add active navigation helper
  eleventyConfig.addFilter("isActive", function(currentUrl, itemUrl) {
    return currentUrl === itemUrl ? "active" : "";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};