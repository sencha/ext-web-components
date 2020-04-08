import Ext_Component from '../Ext/Component.js';

export default class Ext_Button extends Ext_Component {
  static PROPERTIES() { return [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'allowDepress',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'arrowAlign',
    'arrowCls',
    'arrowVisible',
    'autoEl',
    'autoRender',
    'autoShow',
    'baseCls',
    'baseParams',
    'bind',
    'border',
    'childEls',
    'clickEvent',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'destroyMenu',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'enableToggle',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'glyph',
    'handleMouseEvents',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'href',
    'hrefTarget',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuAlign',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowText',
    'padding',
    'params',
    'plugins',
    'pressed',
    'preventDefault',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'repeat',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scale',
    'scope',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showEmptyMenu',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
    'text',
    'textAlign',
    'toFrontOnShow',
    'toggleGroup',
    'toggleHandler',
    'tooltip',
    'tooltipType',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'value',
    'viewModel',
    'weight',
    'width',
    'xtype',
  ]};
  static EVENTS() { return [
    {name:'activate', parameters:'sender'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'beforetoggle', parameters:'sender,pressed'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'click', parameters:'sender,e'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'glyphchange', parameters:'sender,newGlyph,oldGlyph'},
    {name:'hide', parameters:'sender'},
    {name:'iconchange', parameters:'sender,oldIcon,newIcon'},
    {name:'menuhide', parameters:'sender,menu'},
    {name:'menushow', parameters:'sender,menu'},
    {name:'menutriggerout', parameters:'sender,menu,e'},
    {name:'menutriggerover', parameters:'sender,menu,e'},
    {name:'mouseout', parameters:'sender,e'},
    {name:'mouseover', parameters:'sender,e'},
    {name:'move', parameters:'sender,x,y'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'textchange', parameters:'sender,oldText,newText'},
    {name:'toggle', parameters:'sender,pressed'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_Button.PROPERTIES());
    return Ext_Component.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_Button.EVENTS());
    return Ext_Component.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_Button.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_Button.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_Button.PROPERTIES()),
      events.concat(Ext_Button.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
