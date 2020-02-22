import Ext_field_trigger_Trigger from '../../../Ext/field/trigger/Trigger.js';

export default class Ext_field_trigger_SpinDown extends Ext_field_trigger_Trigger {
  static PROPERTIES() { return [
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'disabled',
    'field',
    'flex',
    'floated',
    'focusCls',
    'focusOnTap',
    'group',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'iconCls',
    'id',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'relative',
    'renderTo',
    'repeat',
    'ripple',
    'scope',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'side',
    'style',
    'toFrontOnShow',
    'touchAction',
    'translatable',
    'triggers',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'x',
    'y',
  ]};
  static EVENTS() { return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforetofront', parameters:'sender'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'tofront', parameters:'sender'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_field_trigger_SpinDown.PROPERTIES());
    return Ext_field_trigger_Trigger.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_field_trigger_SpinDown.EVENTS());
    return Ext_field_trigger_Trigger.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_field_trigger_SpinDown.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_field_trigger_SpinDown.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_field_trigger_SpinDown.PROPERTIES()),
      events.concat(Ext_field_trigger_SpinDown.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
