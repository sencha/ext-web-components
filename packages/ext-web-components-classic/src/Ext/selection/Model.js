import Ext_mixin_Observable from '../../Ext/mixin/Observable.js';

export default class Ext_selection_Model extends Ext_mixin_Observable {
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
    properties = properties.concat(Ext_selection_Model.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_selection_Model.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_selection_Model.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_selection_Model.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_selection_Model.PROPERTIES()),
      events.concat(Ext_selection_Model.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
