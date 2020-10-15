module.export = function (eleventyConfig) {

  return {
    passThroughFileCopy: true,
    dir: {
        include: "_includes"
    },
  };
};
