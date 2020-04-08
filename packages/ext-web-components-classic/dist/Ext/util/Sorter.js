import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_Sorter = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_Sorter, _Ext_Base);

  Ext_util_Sorter.PROPERTIES = function PROPERTIES() {
    return ['direction', 'id', 'property', 'root', 'sorterFn', 'transform'];
  };

  Ext_util_Sorter.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_Sorter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Sorter.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_Sorter.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Sorter.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_Sorter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_Sorter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Sorter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Sorter(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_Sorter.PROPERTIES()), events.concat(Ext_util_Sorter.EVENTS())) || this;
  }

  var _proto = Ext_util_Sorter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Sorter;
}(Ext_Base);

export { Ext_util_Sorter as default };