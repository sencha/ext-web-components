import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_paintmonitor_Abstract from '../../../Ext/util/paintmonitor/Abstract.js';

var Ext_util_paintmonitor_CssAnimation = /*#__PURE__*/function (_Ext_util_paintmonito) {
  _inheritsLoose(Ext_util_paintmonitor_CssAnimation, _Ext_util_paintmonito);

  Ext_util_paintmonitor_CssAnimation.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_paintmonitor_CssAnimation.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_paintmonitor_CssAnimation.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_paintmonitor_CssAnimation.PROPERTIES());
    return Ext_util_paintmonitor_Abstract.getProperties(properties);
  };

  Ext_util_paintmonitor_CssAnimation.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_paintmonitor_CssAnimation.EVENTS());
    return Ext_util_paintmonitor_Abstract.getEvents(events);
  };

  _createClass(Ext_util_paintmonitor_CssAnimation, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_paintmonito.observedAttributes;
      Ext_util_paintmonitor_CssAnimation.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_paintmonitor_CssAnimation.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_paintmonitor_CssAnimation(properties, events) {
    return _Ext_util_paintmonito.call(this, properties.concat(Ext_util_paintmonitor_CssAnimation.PROPERTIES()), events.concat(Ext_util_paintmonitor_CssAnimation.EVENTS())) || this;
  }

  var _proto = Ext_util_paintmonitor_CssAnimation.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_paintmonito.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_paintmonito.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_paintmonitor_CssAnimation;
}(Ext_util_paintmonitor_Abstract);

export { Ext_util_paintmonitor_CssAnimation as default };