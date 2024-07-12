module.exports = function(eleventyConfig) {

  // Copy `assets/fonts` to `_site/assets/fonts`
	eleventyConfig.addPassthroughCopy("giving-back/assets/fonts");

  eleventyConfig.addPassthroughCopy("giving-back/assets/css/application.css");
  eleventyConfig.addPassthroughCopy("giving-back/assets/css/application_es.css");
  eleventyConfig.addPassthroughCopy("giving-back/assets/css/modal-video.min.css");
  eleventyConfig.addPassthroughCopy("giving-back/assets/css/vr.min.css");

  // Copy `assets/images` to `_site/assets/images`
	eleventyConfig.addPassthroughCopy("giving-back/assets/images");

  // Copy `assets/javascripts` to `_site/assets/javascripts`
	eleventyConfig.addPassthroughCopy("giving-back/assets/javascripts");

  // Copy `assets/video` to `_site/assets/video`
	eleventyConfig.addPassthroughCopy("giving-back/assets/video");

  // Copy `assets/audio` to `_site/assets/audio`
	eleventyConfig.addPassthroughCopy("giving-back/assets/audio");
};