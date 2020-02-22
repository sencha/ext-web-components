import Ext_chart_theme_BaseTheme from '../../../Ext/chart/theme/BaseTheme.js';

export default class Ext_chart_theme_Base extends Ext_chart_theme_BaseTheme {
  static PROPERTIES() { return [
    'axis',
    'baseColor',
    'chart',
    'colors',
    'gradients',
    'legend',
    'series',
    'seriesThemes',
    'sprites',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_Base.PROPERTIES());
    return Ext_chart_theme_BaseTheme.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_theme_Base.EVENTS());
    return Ext_chart_theme_BaseTheme.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_theme_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_theme_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_theme_Base.PROPERTIES()),
      events.concat(Ext_chart_theme_Base.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
