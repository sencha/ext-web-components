import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_BasicFilter = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_BasicFilter, _Ext_Base);

  Ext_util_BasicFilter.PROPERTIES = function PROPERTIES() {
    return ['disabled', 'id', 'serializer'];
  };

  Ext_util_BasicFilter.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_BasicFilter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_BasicFilter.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_BasicFilter.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_BasicFilter.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_BasicFilter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_BasicFilter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_BasicFilter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_BasicFilter(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_BasicFilter.PROPERTIES()), events.concat(Ext_util_BasicFilter.EVENTS())) || this;
  }

  var _proto = Ext_util_BasicFilter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_BasicFilter;
}(Ext_Base);

export { Ext_util_BasicFilter as default };