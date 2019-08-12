import Ext_Evented_Component from '../Ext/Evented';

export default class Ext_Gadget_Component extends Ext_Evented_Component {
//events
get onbeforedisabledchange(){return this.getAttribute('onbeforedisabledchange')};set onbeforedisabledchange(onbeforedisabledchange){this.setAttribute('onbeforedisabledchange',onbeforedisabledchange)}
get onbeforeheightchange(){return this.getAttribute('onbeforeheightchange')};set onbeforeheightchange(onbeforeheightchange){this.setAttribute('onbeforeheightchange',onbeforeheightchange)}
get onbeforehiddenchange(){return this.getAttribute('onbeforehiddenchange')};set onbeforehiddenchange(onbeforehiddenchange){this.setAttribute('onbeforehiddenchange',onbeforehiddenchange)}
get onbeforetofront(){return this.getAttribute('onbeforetofront')};set onbeforetofront(onbeforetofront){this.setAttribute('onbeforetofront',onbeforetofront)}
get onbeforewidthchange(){return this.getAttribute('onbeforewidthchange')};set onbeforewidthchange(onbeforewidthchange){this.setAttribute('onbeforewidthchange',onbeforewidthchange)}
get ondisabledchange(){return this.getAttribute('ondisabledchange')};set ondisabledchange(ondisabledchange){this.setAttribute('ondisabledchange',ondisabledchange)}
get onheightchange(){return this.getAttribute('onheightchange')};set onheightchange(onheightchange){this.setAttribute('onheightchange',onheightchange)}
get onhiddenchange(){return this.getAttribute('onhiddenchange')};set onhiddenchange(onhiddenchange){this.setAttribute('onhiddenchange',onhiddenchange)}
get ontofront(){return this.getAttribute('ontofront')};set ontofront(ontofront){this.setAttribute('ontofront',ontofront)}
get onwidthchange(){return this.getAttribute('onwidthchange')};set onwidthchange(onwidthchange){this.setAttribute('onwidthchange',onwidthchange)}
//configs

static XTYPE() {return 'widget'}
static PROPERTIESOBJECT() { return {
"alignSelf":["string"],
"alwaysOnTop":["boolean","number"],
"border":["boolean"],
"cls":["string","string[]"],
"constrainAlign":["string","Ext.util.Region","Ext.dom.Element"],
"disabled":["boolean"],
"flex":["number","string","object"],
"floated":["boolean"],
"height":["number","string"],
"hidden":["boolean"],
"hideMode":["'clip'","'display'","'offsets'","'opacity'","'visibility'"],
"id":["string"],
"instanceCls":["string","string[]"],
"itemId":["string"],
"margin":["number","string"],
"name":["string"],
"relative":["boolean"],
"renderTo":["Ext.dom.Element"],
"ripple":["boolean","object","string"],
"shadow":["boolean"],
"shim":["boolean"],
"style":["string","object"],
"toFrontOnShow":["boolean"],
"touchAction":["object"],
"translatable":["object"],
"ui":["string","string[]"],
"userCls":["string","string[]"],
"width":["number","string"],
"x":["number"],
"y":["number"],
}}
static EVENTS() { return [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'undefined'},
{name:'widthchange',parameters:'sender,value,oldValue'},
]}
static METHODS() { return [
{ name:'addCls',function: function(cls,prefix,suffix) { return this.ext.addCls(cls,prefix,suffix) } },
{ name:'addElementReference',function: function(name,domNode) { return this.ext.addElementReference(name,domNode) } },
{ name:'addElementReferenceOnDemand',function: function(name,domNode) { return this.ext.addElementReferenceOnDemand(name,domNode) } },
{ name:'afterRender',function: function() { return this.ext.afterRender() } },
{ name:'alignTo',function: function(component,alignment,options) { return this.ext.alignTo(component,alignment,options) } },
{ name:'applyStyle',function: function(style,oldStyle) { return this.ext.applyStyle(style,oldStyle) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'disable',function: function() { return this.ext.disable() } },
{ name:'doAddListener',function: function(name,fn,scope,options,order,caller,manager) { return this.ext.doAddListener(name,fn,scope,options,order,caller,manager) } },
{ name:'doDestroy',function: function() { return this.ext.doDestroy() } },
{ name:'doInheritUi',function: function() { return this.ext.doInheritUi() } },
{ name:'doUninheritUi',function: function() { return this.ext.doUninheritUi() } },
{ name:'enable',function: function() { return this.ext.enable() } },
{ name:'findFloatParent',function: function(needsShow) { return this.ext.findFloatParent(needsShow) } },
{ name:'getAlignmentInfo',function: function(component,alignment) { return this.ext.getAlignmentInfo(component,alignment) } },
{ name:'getAlignRegion',function: function(component,alignment,options) { return this.ext.getAlignRegion(component,alignment,options) } },
{ name:'getClassCls',function: function() { return this.ext.getClassCls() } },
{ name:'getCurrentAlignmentInfo',function: function() { return this.ext.getCurrentAlignmentInfo() } },
{ name:'getElementConfig',function: function() { return this.ext.getElementConfig() } },
{ name:'getFloatParent',function: function() { return this.ext.getFloatParent() } },
{ name:'getFloatWrap',function: function() { return this.ext.getFloatWrap() } },
{ name:'getSize',function: function() { return this.ext.getSize() } },
{ name:'hasCls',function: function(className) { return this.ext.hasCls(className) } },
{ name:'initElement',function: function() { return this.ext.initElement() } },
{ name:'initElementListeners',function: function(elementConfig) { return this.ext.initElementListeners(elementConfig) } },
{ name:'initUiReference',function: function(referenceName,uiCls,isInstance) { return this.ext.initUiReference(referenceName,uiCls,isInstance) } },
{ name:'insertFloatedDom',function: function(needsShow) { return this.ext.insertFloatedDom(needsShow) } },
{ name:'is',function: function(selector) { return this.ext.is(selector) } },
{ name:'isDisabled',function: function() { return this.ext.isDisabled() } },
{ name:'isEnabled',function: function() { return this.ext.isEnabled() } },
{ name:'isHeighted',function: function() { return this.ext.isHeighted() } },
{ name:'isHidden',function: function(deep) { return this.ext.isHidden(deep) } },
{ name:'isHidden',function: function(deep) { return this.ext.isHidden(deep) } },
{ name:'isVisible',function: function(deep) { return this.ext.isVisible(deep) } },
{ name:'isWidthed',function: function() { return this.ext.isWidthed() } },
{ name:'isXType',function: function(xtype,shallow) { return this.ext.isXType(xtype,shallow) } },
{ name:'lookupTpl',function: function(name) { return this.ext.lookupTpl(name) } },
{ name:'onAdded',function: function(parent,instanced) { return this.ext.onAdded(parent,instanced) } },
{ name:'onRender',function: function() { return this.ext.onRender() } },
{ name:'owns',function: function(element) { return this.ext.owns(element) } },
{ name:'processElementConfig',function: function() { return this.ext.processElementConfig() } },
{ name:'realign',function: function(component,alignment,options) { return this.ext.realign(component,alignment,options) } },
{ name:'removeCls',function: function(cls,prefix,suffix) { return this.ext.removeCls(cls,prefix,suffix) } },
{ name:'replaceCls',function: function(oldCls,newCls,prefix,suffix) { return this.ext.replaceCls(oldCls,newCls,prefix,suffix) } },
{ name:'setCurrentAlignmentInfo',function: function(alignmentInfo) { return this.ext.setCurrentAlignmentInfo(alignmentInfo) } },
{ name:'setRendered',function: function(rendered,root) { return this.ext.setRendered(rendered,root) } },
{ name:'setSize',function: function(width,height) { return this.ext.setSize(width,height) } },
{ name:'syncAlwaysOnTop',function: function(fromMousedown) { return this.ext.syncAlwaysOnTop(fromMousedown) } },
{ name:'syncFloatWrap',function: function() { return this.ext.syncFloatWrap() } },
{ name:'toFront',function: function(fromMousedown) { return this.ext.toFront(fromMousedown) } },
{ name:'toggleCls',function: function(className,state) { return this.ext.toggleCls(className,state) } },
{ name:'up',function: function(selector,limit) { return this.ext.up(selector,limit) } },
{ name:'updateCls',function: function(newCls,oldCls) { return this.ext.updateCls(newCls,oldCls) } },
{ name:'updateHeight',function: function(height) { return this.ext.updateHeight(height) } },
{ name:'updateWidth',function: function(width) { return this.ext.updateWidth(width) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Gadget_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Gadget_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Gadget_Component.METHODS(),
            Ext_Gadget_Component.XTYPE(),
            Ext_Gadget_Component.PROPERTIESOBJECT(),
            Ext_Gadget_Component.EVENTS()
        )
        this.XTYPE = Ext_Gadget_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Gadget_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Gadget_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Gadget_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
