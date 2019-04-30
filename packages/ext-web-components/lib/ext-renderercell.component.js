import ExtBase from './base';

export class ExtRenderercellComponent extends ExtBase {
	get renderer(){return this.getAttribute('renderer')};set renderer(renderer){this.setAttribute('renderer',renderer)}

	static XTYPE() {return 'renderercell'}
  static PROPERTIESOBJECT() { return {
    "renderer": "Number",

  }}
  static EVENTS() { return [
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'_addDeclaredListeners',function: function(listeners) { return this.ext._addDeclaredListeners(listeners) } },
  ]}

  constructor() {
    super()
    this.METHODS = ExtRenderercellComponent.METHODS()
    this.XTYPE = ExtRenderercellComponent.XTYPE()
    //this.PROPERTIES = ExtRenderercellComponent.PROPERTIES()
    this.PROPERTIESOBJECT = ExtRenderercellComponent.PROPERTIESOBJECT()
    this.EVENTS = ExtRenderercellComponent.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-renderercell', ExtRenderercellComponent);
  });
})();