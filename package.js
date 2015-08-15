Package.describe({
  name: 'pipeline:js',
  version: '0.1.0',
  summary: 'Javascript Pipeline',
  git: 'https://github.com/MeteorPipeline/js',
  documentation: null
});

Package.onUse(function(api) {
  api.use([
    'pipeline:core@0.0.1',
    'ecmascript@0.1.3-rc.0',
    'isobuild:compiler-plugin@1.0.0'
  ]);
  api.addFiles('compiler.js');
  api.export('JavascriptPipelineCompiler');
});

Package.onTest(function(api) {
  api.use(["tinytest", "underscore"]);
  api.use(["pipeline:core"]);
  api.addFiles('compiler-tests.js');
});
