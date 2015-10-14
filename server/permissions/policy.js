//BrowserPolicy.framing.disallow();
//BrowserPolicy.content.disallowInlineScripts();
//BrowserPolicy.content.disallowEval();
//BrowserPolicy.content.allowInlineStyles();
//BrowserPolicy.content.allowFontDataUrl();
//
//var trusted = [
//  '*.google-analytics.com',
//  '*.google.com',
//  '*.mxpnl.com',
//  '*.zendesk.com',
//  '*.dropbox.com',
//  '*.stripe.com'
//];
//
//_.each(trusted, function(origin) {
//  origin = "https://" + origin;
//  BrowserPolicy.content.allowOriginForAll(origin);
//});