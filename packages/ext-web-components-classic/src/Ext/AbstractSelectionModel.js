import Ext_mixin_Observable from '../Ext/mixin/Observable.js';

export default class Ext_AbstractSelectionModel extends Ext_mixin_Observable {
  static PROPERTIES() { return [
    'allowDeselect',
    'ignoreRightMouseSelection',
    'listeners',
    'mode',
    'ordered',
    'pruneRemoved',
    'selected',
    'store',
    'toggleOnClick',
  ]};
  static EVENTS() { return [
    {name:'focuschange', parameters:'sender,oldFocused,newFocused'},
    {name:'selectionchange', parameters:'sender,selected'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_AbstractSelectionModel.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_AbstractSelectionModel.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_AbstractSelectionModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_AbstractSelectionModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_AbstractSelectionModel.PROPERTIES()),
      events.concat(Ext_AbstractSelectionModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
