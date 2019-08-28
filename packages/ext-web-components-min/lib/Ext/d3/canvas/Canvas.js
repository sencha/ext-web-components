import Ext_d3_Component_Component from '../../../Ext/d3/Component';

export default class Ext_d3_canvas_Canvas_Component extends Ext_d3_Component_Component {
//events
get onsceneresize(){return this.getAttribute('onsceneresize')};set onsceneresize(onsceneresize){this.setAttribute('onsceneresize',onsceneresize)}
//configs

static XTYPE() {return 'd3-canvas'}
static PROPERTIESOBJECT() { return {
"hdpi":["boolean"],
"size":["object"],
}}
static EVENTS() { return [
{name:'sceneresize',parameters:'component,canvas,size'},
]}
static METHODS() { return [
{ name:'getCanvas',function: function() { return this.ext.getCanvas() } },
{ name:'getSceneRect',function: function() { return this.ext.getSceneRect() } },
{ name:'onSceneResize',function: function(canvas,rect) { return this.ext.onSceneResize(canvas,rect) } },
{ name:'renderScene',function: function(ctx) { return this.ext.renderScene(ctx) } },
{ name:'resizeHandler',function: function(size) { return this.ext.resizeHandler(size) } },
]}

constructor() {
    super (
        Ext_d3_canvas_Canvas_Component.METHODS(),
        Ext_d3_canvas_Canvas_Component.XTYPE(),
        Ext_d3_canvas_Canvas_Component.PROPERTIESOBJECT(),
        Ext_d3_canvas_Canvas_Component.EVENTS()
    )
    this.XTYPE = Ext_d3_canvas_Canvas_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_canvas_Canvas_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_d3_canvas_Canvas_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_d3_canvas_Canvas_Component.EVENTS());
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
    window.customElements.define('ext-d3-canvas', Ext_d3_canvas_Canvas_Component);
  });
})();

