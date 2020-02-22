import Ext_app_ViewController from '../../../Ext/app/ViewController.js';

export default class Ext_ux_colorpick_SliderController extends Ext_app_ViewController {
  static PROPERTIES() { return [
    'bindings',
    'control',
    'id',
    'listen',
    'listeners',
    'routes',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_colorpick_SliderController.PROPERTIES());
    return Ext_app_ViewController.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_colorpick_SliderController.EVENTS());
    return Ext_app_ViewController.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_colorpick_SliderController.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_colorpick_SliderController.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_colorpick_SliderController.PROPERTIES()),
      events.concat(Ext_ux_colorpick_SliderController.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
