import Ext_Widget_Component from '../../Ext/Widget';

export default class Ext_lib_Component_Component extends Ext_Widget_Component {
//events
get onadded(){return this.getAttribute('onadded')};set onadded(onadded){this.setAttribute('onadded',onadded)}
get onbeforebottomchange(){return this.getAttribute('onbeforebottomchange')};set onbeforebottomchange(onbeforebottomchange){this.setAttribute('onbeforebottomchange',onbeforebottomchange)}
get onbeforecenteredchange(){return this.getAttribute('onbeforecenteredchange')};set onbeforecenteredchange(onbeforecenteredchange){this.setAttribute('onbeforecenteredchange',onbeforecenteredchange)}
get onbeforedockedchange(){return this.getAttribute('onbeforedockedchange')};set onbeforedockedchange(onbeforedockedchange){this.setAttribute('onbeforedockedchange',onbeforedockedchange)}
get onbeforehide(){return this.getAttribute('onbeforehide')};set onbeforehide(onbeforehide){this.setAttribute('onbeforehide',onbeforehide)}
get onbeforeleftchange(){return this.getAttribute('onbeforeleftchange')};set onbeforeleftchange(onbeforeleftchange){this.setAttribute('onbeforeleftchange',onbeforeleftchange)}
get onbeforemaxHeightchange(){return this.getAttribute('onbeforemaxHeightchange')};set onbeforemaxHeightchange(onbeforemaxHeightchange){this.setAttribute('onbeforemaxHeightchange',onbeforemaxHeightchange)}
get onbeforemaxWidthchange(){return this.getAttribute('onbeforemaxWidthchange')};set onbeforemaxWidthchange(onbeforemaxWidthchange){this.setAttribute('onbeforemaxWidthchange',onbeforemaxWidthchange)}
get onbeforeminHeightchange(){return this.getAttribute('onbeforeminHeightchange')};set onbeforeminHeightchange(onbeforeminHeightchange){this.setAttribute('onbeforeminHeightchange',onbeforeminHeightchange)}
get onbeforeminWidthchange(){return this.getAttribute('onbeforeminWidthchange')};set onbeforeminWidthchange(onbeforeminWidthchange){this.setAttribute('onbeforeminWidthchange',onbeforeminWidthchange)}
get onbeforeorientationchange(){return this.getAttribute('onbeforeorientationchange')};set onbeforeorientationchange(onbeforeorientationchange){this.setAttribute('onbeforeorientationchange',onbeforeorientationchange)}
get onbeforerightchange(){return this.getAttribute('onbeforerightchange')};set onbeforerightchange(onbeforerightchange){this.setAttribute('onbeforerightchange',onbeforerightchange)}
get onbeforescrollablechange(){return this.getAttribute('onbeforescrollablechange')};set onbeforescrollablechange(onbeforescrollablechange){this.setAttribute('onbeforescrollablechange',onbeforescrollablechange)}
get onbeforeshow(){return this.getAttribute('onbeforeshow')};set onbeforeshow(onbeforeshow){this.setAttribute('onbeforeshow',onbeforeshow)}
get onbeforetopchange(){return this.getAttribute('onbeforetopchange')};set onbeforetopchange(onbeforetopchange){this.setAttribute('onbeforetopchange',onbeforetopchange)}
get onbottomchange(){return this.getAttribute('onbottomchange')};set onbottomchange(onbottomchange){this.setAttribute('onbottomchange',onbottomchange)}
get oncenteredchange(){return this.getAttribute('oncenteredchange')};set oncenteredchange(oncenteredchange){this.setAttribute('oncenteredchange',oncenteredchange)}
get ondestroy(){return this.getAttribute('ondestroy')};set ondestroy(ondestroy){this.setAttribute('ondestroy',ondestroy)}
get ondockedchange(){return this.getAttribute('ondockedchange')};set ondockedchange(ondockedchange){this.setAttribute('ondockedchange',ondockedchange)}
get onerased(){return this.getAttribute('onerased')};set onerased(onerased){this.setAttribute('onerased',onerased)}
get onfloatingchange(){return this.getAttribute('onfloatingchange')};set onfloatingchange(onfloatingchange){this.setAttribute('onfloatingchange',onfloatingchange)}
get onfullscreen(){return this.getAttribute('onfullscreen')};set onfullscreen(onfullscreen){this.setAttribute('onfullscreen',onfullscreen)}
get onhide(){return this.getAttribute('onhide')};set onhide(onhide){this.setAttribute('onhide',onhide)}
get oninitialize(){return this.getAttribute('oninitialize')};set oninitialize(oninitialize){this.setAttribute('oninitialize',oninitialize)}
get onleftchange(){return this.getAttribute('onleftchange')};set onleftchange(onleftchange){this.setAttribute('onleftchange',onleftchange)}
get onmaxHeightchange(){return this.getAttribute('onmaxHeightchange')};set onmaxHeightchange(onmaxHeightchange){this.setAttribute('onmaxHeightchange',onmaxHeightchange)}
get onmaxWidthchange(){return this.getAttribute('onmaxWidthchange')};set onmaxWidthchange(onmaxWidthchange){this.setAttribute('onmaxWidthchange',onmaxWidthchange)}
get onminHeightchange(){return this.getAttribute('onminHeightchange')};set onminHeightchange(onminHeightchange){this.setAttribute('onminHeightchange',onminHeightchange)}
get onminWidthchange(){return this.getAttribute('onminWidthchange')};set onminWidthchange(onminWidthchange){this.setAttribute('onminWidthchange',onminWidthchange)}
get onmoved(){return this.getAttribute('onmoved')};set onmoved(onmoved){this.setAttribute('onmoved',onmoved)}
get onorientationchange(){return this.getAttribute('onorientationchange')};set onorientationchange(onorientationchange){this.setAttribute('onorientationchange',onorientationchange)}
get onpainted(){return this.getAttribute('onpainted')};set onpainted(onpainted){this.setAttribute('onpainted',onpainted)}
get onpositionedchange(){return this.getAttribute('onpositionedchange')};set onpositionedchange(onpositionedchange){this.setAttribute('onpositionedchange',onpositionedchange)}
get onremoved(){return this.getAttribute('onremoved')};set onremoved(onremoved){this.setAttribute('onremoved',onremoved)}
get onresize(){return this.getAttribute('onresize')};set onresize(onresize){this.setAttribute('onresize',onresize)}
get onrightchange(){return this.getAttribute('onrightchange')};set onrightchange(onrightchange){this.setAttribute('onrightchange',onrightchange)}
get onscrollablechange(){return this.getAttribute('onscrollablechange')};set onscrollablechange(onscrollablechange){this.setAttribute('onscrollablechange',onscrollablechange)}
get onshow(){return this.getAttribute('onshow')};set onshow(onshow){this.setAttribute('onshow',onshow)}
get ontopchange(){return this.getAttribute('ontopchange')};set ontopchange(ontopchange){this.setAttribute('ontopchange',ontopchange)}
get onupdatedata(){return this.getAttribute('onupdatedata')};set onupdatedata(onupdatedata){this.setAttribute('onupdatedata',onupdatedata)}
//configs

static XTYPE() {return 'component'}
static PROPERTIESOBJECT() { return {
"axisLock":["boolean"],
"bottom":["number","string"],
"centered":["boolean"],
"contentEl":["Ext.dom.Element","htmlelement","string"],
"data":["object"],
"displayed":["boolean"],
"docked":["string"],
"draggable":["boolean","object","Ext.drag.Source"],
"fullscreen":["boolean"],
"hideAnimation":["string","mixed"],
"hideOnMaskTap":["boolean"],
"html":["string","Ext.dom.Element","htmlelement"],
"left":["number","string"],
"maxHeight":["number","string"],
"maxWidth":["number","string"],
"minHeight":["number","string"],
"minWidth":["number","string"],
"modal":["boolean"],
"modelValidation":["boolean"],
"padding":["number","string"],
"record":["Ext.data.Model"],
"right":["number","string"],
"scrollable":["boolean","string","object"],
"showAnimation":["string","mixed"],
"tabIndex":["number"],
"tooltip":["string","object"],
"top":["number","string"],
"tpl":["string","string[]","Ext.Template","Ext.XTemplate[]"],
"tplWriteMode":["string"],
"userSelectable":["boolean","string","object"],
"weight":["number"],
"xtype":["string"],
"zIndex":["number"],
}}
static EVENTS() { return [
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'destroy',parameters:''},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'fullscreen',parameters:'sender'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
]}
static METHODS() { return [
{ name:'afterEdit',function: function() { return this.ext.afterEdit() } },
{ name:'afterErase',function: function() { return this.ext.afterErase() } },
{ name:'alignTo',function: function(component,alignment,options) { return this.ext.alignTo(component,alignment,options) } },
{ name:'applyCentered',function: function(centered) { return this.ext.applyCentered(centered) } },
{ name:'applyTpl',function: function(tpl) { return this.ext.applyTpl(tpl) } },
{ name:'beforeInitialize',function: function() { return this.ext.beforeInitialize() } },
{ name:'center',function: function() { return this.ext.center() } },
{ name:'constructor',function: function(config) { return this.ext.constructor(config) } },
{ name:'doDestroy',function: function() { return this.ext.doDestroy() } },
{ name:'getModalSibling',function: function() { return this.ext.getModalSibling() } },
{ name:'getRenderTarget',function: function() { return this.ext.getRenderTarget() } },
{ name:'getScrollableClientRegion',function: function() { return this.ext.getScrollableClientRegion() } },
{ name:'getXTypes',function: function() { return this.ext.getXTypes() } },
{ name:'hide',function: function(animation) { return this.ext.hide(animation) } },
{ name:'initDragConstraints',function: function(draggable) { return this.ext.initDragConstraints(draggable) } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'initInheritedState',function: function(inheritedState) { return this.ext.initInheritedState(inheritedState) } },
{ name:'isCentered',function: function() { return this.ext.isCentered() } },
{ name:'isPainted',function: function() { return this.ext.isPainted() } },
{ name:'isRendered',function: function() { return this.ext.isRendered() } },
{ name:'onInitialized',function: function(fn,scope,args) { return this.ext.onInitialized(fn,scope,args) } },
{ name:'onResize',function: function(width,height,oldWidth,oldHeight) { return this.ext.onResize(width,height,oldWidth,oldHeight) } },
{ name:'onScrollEnd',function: function(x,y) { return this.ext.onScrollEnd(x,y) } },
{ name:'onScrollMove',function: function(x,y) { return this.ext.onScrollMove(x,y) } },
{ name:'onScrollStart',function: function(x,y) { return this.ext.onScrollStart(x,y) } },
{ name:'preprocessShow',function: function(component,alignment,options) { return this.ext.preprocessShow(component,alignment,options) } },
{ name:'resetFloating',function: function() { return this.ext.resetFloating() } },
{ name:'resetPositioned',function: function() { return this.ext.resetPositioned() } },
{ name:'setVisibility',function: function(isVisible) { return this.ext.setVisibility(isVisible) } },
{ name:'setXY',function: function(x,y,animation) { return this.ext.setXY(x,y,animation) } },
{ name:'show',function: function(animation,options) { return this.ext.show(animation,options) } },
{ name:'showAt',function: function(x,y) { return this.ext.showAt(x,y) } },
{ name:'showBy',function: function(component,alignment,options) { return this.ext.showBy(component,alignment,options) } },
{ name:'triggerInitialized',function: function() { return this.ext.triggerInitialized() } },
{ name:'updateData',function: function(newData) { return this.ext.updateData(newData) } },
{ name:'whenVisible',function: function(fn,args) { return this.ext.whenVisible(fn,args) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_lib_Component_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_lib_Component_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_lib_Component_Component.METHODS(),
            Ext_lib_Component_Component.XTYPE(),
            Ext_lib_Component_Component.PROPERTIESOBJECT(),
            Ext_lib_Component_Component.EVENTS()
        )
        this.XTYPE = Ext_lib_Component_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_lib_Component_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_lib_Component_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_lib_Component_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
