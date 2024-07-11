module.exports = function(eleventyConfig) {

  // Copy `assets/fonts` to `_site/assets/fonts`
	eleventyConfig.addPassthroughCopy("assets/fonts");

  eleventyConfig.addPassthroughCopy("assets/css/application.css");
  eleventyConfig.addPassthroughCopy("assets/css/application_es.css");
  eleventyConfig.addPassthroughCopy("assets/css/modal-video.min.css");
  eleventyConfig.addPassthroughCopy("assets/css/vr.min.css");

  // Copy `assets/images` to `_site/assets/images`
	eleventyConfig.addPassthroughCopy("assets/images");

  // Copy `assets/javascripts` to `_site/assets/javascripts`
	eleventyConfig.addPassthroughCopy("assets/javascripts");

  // Copy `assets/video` to `_site/assets/video`
	eleventyConfig.addPassthroughCopy("assets/video");

  // Copy `assets/audio` to `_site/assets/audio`
	eleventyConfig.addPassthroughCopy("assets/audio");
};