if (!this.JavascriptPipelineCompiler) {
  this.JavascriptPipelineCompiler = new Pipeline();
  Plugin.registerCompiler({
    extensions: ['js'],
  }, function () {
    return this.JavascriptPipelineCompiler;
  });
}

JavascriptPipelineCompiler = this.JavascriptPipelineCompiler;
