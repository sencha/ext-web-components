Ext.create({"xtype":"button"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"column"});
Ext.onReady(function () {
  window.customElements.define('ext-renderercell', ExtRenderercellComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-widget', ExtWidgetComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-button', ExtButtonComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-treelist', ExtTreelistComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-container', ExtContainerComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-searchfield', ExtSearchfieldComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-tabpanel', ExtTabpanelComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-titlebar', ExtTitlebarComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-toolbar', ExtToolbarComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-panel', ExtPanelComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-column', ExtColumnComponent);
});
Ext.onReady(function () {
  window.customElements.define('ext-dataview', ExtDataviewComponent);
});
Ext.create({"xtype":"widget"});
Ext.application({
  name: 'MyEWCApp',
  launch: function launch() {
    console.log('Ext.Viewport.add(' + me.ext.xtype + ')');
    Ext.Viewport.add([me.ext]);
  }
});
Ext.application({
  name: 'MyEWCApp',
  launch: function launch() {
    console.log('Ext.Viewport.add(' + me.ext.xtype + ')');
    Ext.Viewport.add([me.ext]);

    if (window.router) {
      //console.log('router.init called')
      window.router.init();
    }
  }
});
Ext.get(cln);
Ext.create({
  xtype: 'widget',
  element: el
});
Ext.create(this.props);
Ext.onReady(function () {
  window.customElements.define('ext-grid', ExtGridComponent);
})