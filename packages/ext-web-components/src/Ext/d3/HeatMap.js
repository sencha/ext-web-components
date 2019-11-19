import Ext_d3_svg_Svg from '../../Ext/d3/svg/Svg.js';

export default class Ext_d3_HeatMap extends Ext_d3_svg_Svg {
    static PROPERTIES() {return [
        'alignSelf',
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'axisLock',
        'bind',
        'border',
        'bottom',
        'centered',
        'clipScene',
        'cls',
        'colorAxis',
        'componentCls',
        'constrainAlign',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'flex',
        'floated',
        'focusCls',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'html',
        'id',
        'instanceCls',
        'interactions',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'labels',
        'left',
        'legend',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'ripple',
        'scrollable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'size',
        'stateful',
        'statefulDefaults',
        'stateId',
        'store',
        'style',
        'tabIndex',
        'tiles',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'transitions',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'userSelectable',
        'viewModel',
        'weight',
        'width',
        'x',
        'xAxis',
        'xtype',
        'y',
        'yAxis',
        'zIndex',
    ]};
    static EVENTS() {return [
        {name:'added', parameters:'sender,container,index'},
        {name:'beforebottomchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforecenteredchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforedockedchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforehide', parameters:'sender'},
        {name:'beforeleftchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforemaxHeightchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforemaxWidthchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforeminHeightchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforeminWidthchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforeorientationchange', parameters:''},
        {name:'beforerightchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforescrollablechange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforeshow', parameters:'sender'},
        {name:'beforetofront', parameters:'sender'},
        {name:'beforetopchange', parameters:'sender,value,oldValue,undefined'},
        {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
        {name:'blur', parameters:'sender,event'},
        {name:'bottomchange', parameters:'sender,value,oldValue'},
        {name:'centeredchange', parameters:'sender,value,oldValue'},
        {name:'destroy', parameters:''},
        {name:'disabledchange', parameters:'sender,value,oldValue'},
        {name:'dockedchange', parameters:'sender,value,oldValue'},
        {name:'erased', parameters:'sender'},
        {name:'floatingchange', parameters:'sender,positioned'},
        {name:'focus', parameters:'sender,event'},
        {name:'focusenter', parameters:'sender,event'},
        {name:'focusleave', parameters:'sender,event'},
        {name:'fullscreen', parameters:'sender'},
        {name:'heightchange', parameters:'sender,value,oldValue'},
        {name:'hiddenchange', parameters:'sender,value,oldValue'},
        {name:'hide', parameters:'sender'},
        {name:'initialize', parameters:'sender'},
        {name:'leftchange', parameters:'sender,value,oldValue'},
        {name:'maxHeightchange', parameters:'sender,value,oldValue'},
        {name:'maxWidthchange', parameters:'sender,value,oldValue'},
        {name:'minHeightchange', parameters:'sender,value,oldValue'},
        {name:'minWidthchange', parameters:'sender,value,oldValue'},
        {name:'moved', parameters:'sender,container,toIndex,fromIndex'},
        {name:'orientationchange', parameters:''},
        {name:'painted', parameters:'sender,element'},
        {name:'positionedchange', parameters:'sender,positioned'},
        {name:'removed', parameters:'sender,container,index'},
        {name:'resize', parameters:'element,info'},
        {name:'rightchange', parameters:'sender,value,oldValue'},
        {name:'sceneresize', parameters:'component,scene,size'},
        {name:'scenesetup', parameters:'component,scene'},
        {name:'scrollablechange', parameters:'sender,value,oldValue'},
        {name:'show', parameters:'sender'},
        {name:'tofront', parameters:'sender'},
        {name:'topchange', parameters:'sender,value,oldValue'},
        {name:'updatedata', parameters:'sender,newData'},
        {name:'widthchange', parameters:'sender,value,oldValue'},
        {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_d3_HeatMap.PROPERTIES());
        return Ext_d3_svg_Svg.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_d3_HeatMap.EVENTS());
        return Ext_d3_svg_Svg.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'd3-heatmap'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_d3_HeatMap.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_d3_HeatMap.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_d3_HeatMap.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_d3_HeatMap.PROPERTIES()),
            events.concat(Ext_d3_HeatMap.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
