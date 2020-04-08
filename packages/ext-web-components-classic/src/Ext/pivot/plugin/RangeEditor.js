import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Ext_pivot_plugin_RangeEditor extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'defaultUpdater',
    'grid',
    'height',
    'id',
    'onAfterRecordsUpdate',
    'onBeforeRecordsUpdate',
    'scope',
    'stateEvents',
    'textButtonCancel',
    'textButtonOk',
    'textFieldEdit',
    'textFieldType',
    'textFieldValue',
    'textWindowTitle',
    'updaters',
    'view',
    'width',
  ]};
  static EVENTS() { return [
    {name:'hiderangeeditorpanel', parameters:'panel'},
    {name:'pivotbeforeupdate', parameters:'updater'},
    {name:'pivotupdate', parameters:'updater'},
    {name:'showrangeeditorpanel', parameters:'panel'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_RangeEditor.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_plugin_RangeEditor.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_plugin_RangeEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_plugin_RangeEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_plugin_RangeEditor.PROPERTIES()),
      events.concat(Ext_pivot_plugin_RangeEditor.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
