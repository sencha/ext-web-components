import Ext_form_field_Picker from '../../../Ext/form/field/Picker.js';

export default class Ext_form_field_Date extends Ext_form_field_Picker {
  static PROPERTIES() { return [
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowOnlyWhitespace',
    'altFormats',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaDisabledDatesText',
    'ariaDisabledDaysText',
    'ariaErrorText',
    'ariaFormat',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
    'ariaMaxText',
    'ariaMinText',
    'autoEl',
    'autoFitErrors',
    'autoHideInputMask',
    'autoRender',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'blankText',
    'border',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
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
    'dirtyCls',
    'disabled',
    'disabledCls',
    'disabledDates',
    'disabledDatesText',
    'disabledDays',
    'disabledDaysText',
    'disableKeyFilter',
    'dock',
    'draggable',
    'editable',
    'emptyCls',
    'emptyText',
    'enableKeyEvents',
    'enforceMaxLength',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldCls',
    'fieldLabel',
    'fieldStyle',
    'fieldSubTpl',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'format',
    'formatText',
    'formBind',
    'formItemCls',
    'frame',
    'grow',
    'growMax',
    'growMin',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'hideTrigger',
    'html',
    'id',
    'inputAttrTpl',
    'inputId',
    'inputMask',
    'inputType',
    'inputWrapCls',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maskRe',
    'matchFieldWidth',
    'maxHeight',
    'maxLength',
    'maxLengthText',
    'maxText',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minLength',
    'minLengthText',
    'minText',
    'minValue',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'name',
    'nameable',
    'openCls',
    'overCls',
    'padding',
    'pickerAlign',
    'pickerOffset',
    'plugins',
    'preventMark',
    'publishes',
    'readOnly',
    'readOnlyCls',
    'reference',
    'regex',
    'regexText',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'repeatTriggerClick',
    'requiredCls',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'selectOnFocus',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showToday',
    'shrinkWrap',
    'startDay',
    'stateEvents',
    'stateful',
    'stateId',
    'stripCharsRe',
    'style',
    'submitFormat',
    'submitValue',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'triggerCls',
    'triggers',
    'triggerWrapCls',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'useStrict',
    'validateBlank',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'validator',
    'value',
    'valuePublishEvent',
    'viewModel',
    'vtype',
    'vtypeText',
    'weight',
    'width',
    'xtype',
  ]};
  static EVENTS() { return [
    {name:'activate', parameters:'sender'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'autosize', parameters:'sender,width'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'change', parameters:'sender,newValue,oldValue'},
    {name:'collapse', parameters:'field'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'dirtychange', parameters:'sender,isDirty'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'errorchange', parameters:'sender,error'},
    {name:'expand', parameters:'field'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'hide', parameters:'sender'},
    {name:'keydown', parameters:'sender,e'},
    {name:'keypress', parameters:'sender,e'},
    {name:'keyup', parameters:'sender,e'},
    {name:'move', parameters:'sender,x,y'},
    {name:'paste', parameters:'sender,e'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'select', parameters:'field,value'},
    {name:'show', parameters:'sender'},
    {name:'specialkey', parameters:'sender,e'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'validitychange', parameters:'sender,isValid'},
    {name:'writeablechange', parameters:'sender,Read'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_field_Date.PROPERTIES());
    return Ext_form_field_Picker.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_field_Date.EVENTS());
    return Ext_form_field_Picker.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_field_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_field_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_field_Date.PROPERTIES()),
      events.concat(Ext_form_field_Date.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
