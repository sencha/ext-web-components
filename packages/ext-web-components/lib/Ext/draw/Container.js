import Ext_draw_ContainerBase_Component from '../../Ext/draw/ContainerBase';

export default class Ext_draw_Container_Component extends Ext_draw_ContainerBase_Component {
//events
get onbodyresize(){return this.getAttribute('onbodyresize')};set onbodyresize(onbodyresize){this.setAttribute('onbodyresize',onbodyresize)}
get onspriteclick(){return this.getAttribute('onspriteclick')};set onspriteclick(onspriteclick){this.setAttribute('onspriteclick',onspriteclick)}
get onspritedblclick(){return this.getAttribute('onspritedblclick')};set onspritedblclick(onspritedblclick){this.setAttribute('onspritedblclick',onspritedblclick)}
get onspritemousedown(){return this.getAttribute('onspritemousedown')};set onspritemousedown(onspritemousedown){this.setAttribute('onspritemousedown',onspritemousedown)}
get onspritemousemove(){return this.getAttribute('onspritemousemove')};set onspritemousemove(onspritemousemove){this.setAttribute('onspritemousemove',onspritemousemove)}
get onspritemouseout(){return this.getAttribute('onspritemouseout')};set onspritemouseout(onspritemouseout){this.setAttribute('onspritemouseout',onspritemouseout)}
get onspritemouseover(){return this.getAttribute('onspritemouseover')};set onspritemouseover(onspritemouseover){this.setAttribute('onspritemouseover',onspritemouseover)}
get onspritemouseup(){return this.getAttribute('onspritemouseup')};set onspritemouseup(onspritemouseup){this.setAttribute('onspritemouseup',onspritemouseup)}
get onspritetap(){return this.getAttribute('onspritetap')};set onspritetap(onspritetap){this.setAttribute('onspritetap',onspritetap)}
//configs

static XTYPE() {return 'draw'}
static PROPERTIESOBJECT() { return {
"downloadServerUrl":["string"],
"engine":["string"],
"gradients":["object[]"],
"resizeHandler":["function"],
"sprites":["object[]"],
"surfaceZIndexes":["object"],
}}
static EVENTS() { return [
{name:'bodyresize',parameters:'size'},
{name:'spriteclick',parameters:'sprite,event'},
{name:'spritedblclick',parameters:'sprite,event'},
{name:'spritemousedown',parameters:'sprite,event'},
{name:'spritemousemove',parameters:'sprite,event'},
{name:'spritemouseout',parameters:'sprite,event'},
{name:'spritemouseover',parameters:'sprite,event'},
{name:'spritemouseup',parameters:'sprite,event'},
{name:'spritetap',parameters:'sprite,event'},
]}
static METHODS() { return [
{ name:'download',function: function(config) { return this.ext.download(config) } },
{ name:'getImage',function: function(format) { return this.ext.getImage(format) } },
{ name:'getSurface',function: function(id,type) { return this.ext.getSurface(id,type) } },
{ name:'getSurfaces',function: function(sort) { return this.ext.getSurfaces(sort) } },
{ name:'handleResize',function: function(size,instantly) { return this.ext.handleResize(size,instantly) } },
{ name:'preview',function: function() { return this.ext.preview() } },
{ name:'renderFrame',function: function() { return this.ext.renderFrame() } },
{ name:'stopResizeTimer',function: function() { return this.ext.stopResizeTimer() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_draw_Container_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_draw_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_draw_Container_Component.METHODS(),
            Ext_draw_Container_Component.XTYPE(),
            Ext_draw_Container_Component.PROPERTIESOBJECT(),
            Ext_draw_Container_Component.EVENTS()
        )
        this.XTYPE = Ext_draw_Container_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_Container_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_draw_Container_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_draw_Container_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
