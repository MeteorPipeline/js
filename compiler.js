JavascriptPipelineCompiler = new Pipeline();
Plugin.registerCompiler({
  extensions: ['js'],
}, function () {
  return JavascriptPipelineCompiler;
});
