/* eslint-env meteor */
Package.describe({
  name: 'jkuester:autoform-nouislider',
  summary: 'Dual value slider for autoform.',
  version: '0.7.0',
  git: 'https://github.com/muqube/meteor-autoform-nouislider'
})

Npm.depends({
  'nouislider': '15.8.1',
})

Package.onUse(function (api) {
  api.versionsFrom(['1.3', '2.3', '3.0'])
  api.use('ecmascript')
  api.use('templating@1.0.0')
  api.use('blaze@2.0.0 || 3.0.0')
  api.use('aldeed:autoform@7.0.0 || 8.0.0')
  api.mainModule('main.js', 'client')
})
