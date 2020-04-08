import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_CSS = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_CSS, _Ext_Base);

  Ext_util_CSS.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_CSS.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_CSS.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_CSS.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_CSS.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_CSS.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_CSS, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_CSS.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_CSS.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_CSS(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_CSS.PROPERTIES()), events.concat(Ext_util_CSS.EVENTS())) || this;
  }

  var _proto = Ext_util_CSS.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_CSS;
}(Ext_Base);

export { Ext_util_CSS as default };