import Ext_Container_Component from '../../Ext/Container';

export default class Ext_viewport_Default_Component extends Ext_Container_Component {
//events
get onmaximize(){return this.getAttribute('onmaximize')};set onmaximize(onmaximize){this.setAttribute('onmaximize',onmaximize)}
get onorientationchange(){return this.getAttribute('onorientationchange')};set onorientationchange(onorientationchange){this.setAttribute('onorientationchange',onorientationchange)}
get onready(){return this.getAttribute('onready')};set onready(onready){this.setAttribute('onready',onready)}
//configs

static XTYPE() {return 'viewport'}
static PROPERTIESOBJECT() { return {
"autoBlurInput":["any"],
"autoMaximize":["any"],
"autoRender":["any"],
"height":["any"],
"layout":["object","string"],
"menus":["any"],
"orientation":["any"],
"preventZooming":["boolean"],
"swipeThreshold":["number"],
"width":["any"],
}}
static EVENTS() { return [
{name:'maximize',parameters:'undefined'},
{name:'orientationchange',parameters:'undefined,newOrientation,width,height'},
{name:'ready',parameters:'undefined'},
]}
static METHODS() { return [
{ name:'beforeMenuAnimate',function: function(menu) { return this.ext.beforeMenuAnimate(menu) } },
{ name:'getWindowHeight',function: function() { return this.ext.getWindowHeight() } },
{ name:'getWindowWidth',function: function() { return this.ext.getWindowWidth() } },
{ name:'hideAllMenus',function: function(animation) { return this.ext.hideAllMenus(animation) } },
{ name:'hideMenu',function: function(side,animation) { return this.ext.hideMenu(side,animation) } },
{ name:'hideOtherMenus',function: function(side,animate) { return this.ext.hideOtherMenus(side,animate) } },
{ name:'isScalable',function: function() { return this.ext.isScalable() } },
{ name:'onEdgeSwipe',function: function(e) { return this.ext.onEdgeSwipe(e) } },
{ name:'onEdgeSwipeEnd',function: function(e) { return this.ext.onEdgeSwipeEnd(e) } },
{ name:'onEdgeSwipeStart',function: function(e) { return this.ext.onEdgeSwipeStart(e) } },
{ name:'onSwipeStart',function: function(e) { return this.ext.onSwipeStart(e) } },
{ name:'onTap',function: function(e) { return this.ext.onTap(e) } },
{ name:'removeMenu',function: function(side,animation) { return this.ext.removeMenu(side,animation) } },
{ name:'setMenu',function: function(menu,config) { return this.ext.setMenu(menu,config) } },
{ name:'showMenu',function: function(side,animation) { return this.ext.showMenu(side,animation) } },
{ name:'sideForDirection',function: function(direction) { return this.ext.sideForDirection(direction) } },
{ name:'sideForSwipeDirection',function: function(direction) { return this.ext.sideForSwipeDirection(direction) } },
{ name:'toggleMenu',function: function(side) { return this.ext.toggleMenu(side) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_viewport_Default_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_viewport_Default_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_viewport_Default_Component.METHODS(),
            Ext_viewport_Default_Component.XTYPE(),
            Ext_viewport_Default_Component.PROPERTIESOBJECT(),
            Ext_viewport_Default_Component.EVENTS()
        )
        this.XTYPE = Ext_viewport_Default_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_viewport_Default_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_viewport_Default_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_viewport_Default_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
