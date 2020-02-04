import Ext_panel_Panel from '../../../Ext/panel/Panel.js';

export default class Ext_ux_colorpick_Selector extends Ext_panel_Panel {
  static PROPERTIES() { return [
    'alphaDecimalFormat',
    'cancelButtonText',
    'color',
    'fieldPad',
    'fieldWidth',
    'format',
    'okButtonText',
    'showOkCancelButtons',
    'showPreviousColor',
    'value',
  ]};
  static EVENTS() { return [
    {name:'cancel', parameters:'sender'},
    {name:'change', parameters:'sender,color,previousColor'},
    {name:'ok', parameters:'sender,color'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_colorpick_Selector.PROPERTIES());
    return Ext_panel_Panel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_colorpick_Selector.EVENTS());
    return Ext_panel_Panel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_colorpick_Selector.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_colorpick_Selector.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_colorpick_Selector.PROPERTIES()),
      events.concat(Ext_ux_colorpick_Selector.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
