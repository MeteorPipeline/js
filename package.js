Package.describe({
  name: 'pipeline:js',
  version: '0.0.1',
  summary: 'Javascript Pipeline',
  git: 'https://github.com/MeteorPipeline/js',
  documentation: null
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('pipeline:core@0.0.1');
  api.addFiles('compiler.js');
  api.export('JavascriptPipelineCompiler');
});

Package.onTest(function(api) {
  api.use(["tinytest", "underscore"]);
  api.use(["pipeline:core"]);
  api.addFiles('compiler-tests.js');
});
