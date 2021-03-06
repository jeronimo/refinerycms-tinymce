tinyMCE.PluginManager.add('stylebuttons', function(editor, url) {
  ['p', 'h1', 'h2', 'h3'].forEach(function(name){
   editor.ui.registry.addToggleButton("style-" + name, {
       tooltip: name.toUpperCase(),
       text: name.toUpperCase(),
       onAction: function(_) { editor.execCommand('mceToggleFormat', false, name); },
       onSetup: function (api) {
       	 editor.formatter.formatChanged(name, function (state) {
       	   api.setActive(state);
       	 })
       }
     })
  });
});
