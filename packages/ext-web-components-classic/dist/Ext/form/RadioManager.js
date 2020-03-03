import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Ext_form_RadioManager = /*#__PURE__*/function (_Ext_util_MixedCollec) {
  _inheritsLoose(Ext_form_RadioManager, _Ext_util_MixedCollec);

  Ext_form_RadioManager.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_form_RadioManager.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'index,o,key'
    }, {
      name: 'beforesort',
      parameters: 'me,sorters'
    }, {
      name: 'clear',
      parameters: ''
    }, {
      name: 'remove',
      parameters: 'o,key'
    }, {
      name: 'replace',
      parameters: 'key,old,new'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_RadioManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_RadioManager.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Ext_form_RadioManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_RadioManager.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  _createClass(Ext_form_RadioManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Ext_form_RadioManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_RadioManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_RadioManager(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Ext_form_RadioManager.PROPERTIES()), events.concat(Ext_form_RadioManager.EVENTS())) || this;
  }

  var _proto = Ext_form_RadioManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_RadioManager;
}(Ext_util_MixedCollection);

export { Ext_form_RadioManager as default };