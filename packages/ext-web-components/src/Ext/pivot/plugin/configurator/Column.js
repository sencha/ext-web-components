import Ext_dataview_ListItem from '../../../../Ext/dataview/ListItem.js';

export default class Ext_pivot_plugin_configurator_Column extends Ext_dataview_ListItem {
    static PROPERTIES() {return [
        'activeChildTabIndex',
        'activeItem',
        'alignSelf',
        'allowFocusingDisabledChildren',
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoDestroy',
        'autoSize',
        'axisLock',
        'bind',
        'bodyCls',
        'border',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'cls',
        'constrainAlign',
        'contentEl',
        'control',
        'controller',
        'data',
        'dataMap',
        'defaultFocus',
        'defaultListenerScope',
        'defaults',
        'defaultToolWeights',
        'defaultType',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'flex',
        'floated',
        'focusableContainer',
        'focusCls',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'html',
        'id',
        'inactiveChildTabIndex',
        'innerCls',
        'instanceCls',
        'itemCls',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'listeners',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'nameHolder',
        'padding',
        'pinned',
        'plugins',
        'publishes',
        'record',
        'recordIndex',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'resetFocusPosition',
        'right',
        'ripple',
        'scrollable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'stateful',
        'statefulDefaults',
        'stateId',
        'style',
        'tabIndex',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'userSelectable',
        'viewModel',
        'weight',
        'weighted',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
    ]};
    static EVENTS() {return [
        {name:'activate', parameters:'newActiveItem,sender,oldActiveItem'},
        {name:'activeItemchange', parameters:'sender,value,oldValue'},
        {name:'add', parameters:'sender,item,index'},
        {name:'added', parameters:'sender,container,index'},
        {name:'beforeactiveItemchange', parameters:'sender,value,oldValue,undefined'},
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
        {name:'deactivate', parameters:'oldActiveItem,sender,newActiveItem'},
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
        {name:'move', parameters:'sender,item,toIndex,fromIndex'},
        {name:'moved', parameters:'sender,container,toIndex,fromIndex'},
        {name:'orientationchange', parameters:''},
        {name:'painted', parameters:'sender,element'},
        {name:'positionedchange', parameters:'sender,positioned'},
        {name:'remove', parameters:'sender,item,index'},
        {name:'removed', parameters:'sender,container,index'},
        {name:'renderedchange', parameters:'sender,item,rendered'},
        {name:'resize', parameters:'element,info'},
        {name:'rightchange', parameters:'sender,value,oldValue'},
        {name:'scrollablechange', parameters:'sender,value,oldValue'},
        {name:'show', parameters:'sender'},
        {name:'tofront', parameters:'sender'},
        {name:'topchange', parameters:'sender,value,oldValue'},
        {name:'updatedata', parameters:'dataItem,newData'},
        {name:'widthchange', parameters:'sender,value,oldValue'},
        {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_pivot_plugin_configurator_Column.PROPERTIES());
        return Ext_dataview_ListItem.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_plugin_configurator_Column.EVENTS());
        return Ext_dataview_ListItem.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'pivotconfigfield'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_pivot_plugin_configurator_Column.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_pivot_plugin_configurator_Column.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_pivot_plugin_configurator_Column.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_pivot_plugin_configurator_Column.PROPERTIES()),
            events.concat(Ext_pivot_plugin_configurator_Column.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
