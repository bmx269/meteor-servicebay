Package.describe({
  name: 'autoform-modals',
  summary: "Create, update and delete collections with modals",
  version: "0.3.9",
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');

  api.use([
    'jquery',
    'templating',
    'less@2.5.0_2',
    'session',
    'coffeescript',
    'ui',
    'aldeed:autoform@6.2.0',
    'raix:handlebar-helpers@0.2.5',
    'mpowaga:string-template@0.1.0'
  ], 'client');

  api.add_files('lib/client/modals.html', 'client');
  api.add_files('lib/client/modals.coffee', 'client');
  api.add_files('lib/client/modals.less', 'client');
});
