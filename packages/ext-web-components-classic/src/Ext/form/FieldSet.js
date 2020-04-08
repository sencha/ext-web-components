import Ext_container_Container from '../../Ext/container/Container.js';

export default class Ext_form_FieldSet extends Ext_container_Container {
  static PROPERTIES() { return [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoShow',
    'baseCls',
    'bind',
    'border',
    'bubbleEvents',
    'checkbox',
    'checkboxToggle',
    'checkboxUI',
    'childEls',
    'cls',
    'collapsed',
    'collapsible',
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
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'descriptionText',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'expandText',
    'fieldDefaults',
    'fixed',
    'flex',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'height',
    'hidden',
    'hideMode',
    'html',
    'id',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'overCls',
    'padding',
    'plugins',
    'publishes',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'title',
    'toFrontOnShow',
    'toggleOnTitleClick',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'viewModel',
    'weight',
    'width',
    'xtype',
  ]};
  static EVENTS() { return [
    {name:'activate', parameters:'sender'},
    {name:'add', parameters:'sender,component,index'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayout', parameters:'sender,layout'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforeadd', parameters:'sender,component,index'},
    {name:'beforecollapse', parameters:'fieldset'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforeexpand', parameters:'fieldset'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeremove', parameters:'sender,component'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'childmove', parameters:'sender,component,prevIndex,newIndex'},
    {name:'collapse', parameters:'fieldset'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'expand', parameters:'fieldset'},
    {name:'fielderrorchange', parameters:'sender,field,error'},
    {name:'fieldvaliditychange', parameters:'sender,field,isValid'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'hide', parameters:'sender'},
    {name:'move', parameters:'sender,x,y'},
    {name:'remove', parameters:'sender,component'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_FieldSet.PROPERTIES());
    return Ext_container_Container.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_FieldSet.EVENTS());
    return Ext_container_Container.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_FieldSet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_FieldSet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_FieldSet.PROPERTIES()),
      events.concat(Ext_form_FieldSet.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
