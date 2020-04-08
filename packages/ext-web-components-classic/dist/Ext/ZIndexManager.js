import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_ZIndexManager = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_ZIndexManager, _Ext_Base);

  Ext_ZIndexManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_ZIndexManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ZIndexManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ZIndexManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ZIndexManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_ZIndexManager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ZIndexManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ZIndexManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ZIndexManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ZIndexManager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ZIndexManager.PROPERTIES()), events.concat(Ext_ZIndexManager.EVENTS())) || this;
  }

  var _proto = Ext_ZIndexManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ZIndexManager;
}(Ext_Base);

export { Ext_ZIndexManager as default };