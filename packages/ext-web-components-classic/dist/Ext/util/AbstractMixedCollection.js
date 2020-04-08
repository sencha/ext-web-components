import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_AbstractMixedCollection = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_AbstractMixedCollection, _Ext_Base);

  Ext_util_AbstractMixedCollection.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'listeners'];
  };

  Ext_util_AbstractMixedCollection.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'index,o,key'
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

  Ext_util_AbstractMixedCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_AbstractMixedCollection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_AbstractMixedCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_AbstractMixedCollection.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_AbstractMixedCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_AbstractMixedCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_AbstractMixedCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_AbstractMixedCollection(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_AbstractMixedCollection.PROPERTIES()), events.concat(Ext_util_AbstractMixedCollection.EVENTS())) || this;
  }

  var _proto = Ext_util_AbstractMixedCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_AbstractMixedCollection;
}(Ext_Base);

export { Ext_util_AbstractMixedCollection as default };