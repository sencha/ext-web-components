import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_easing_Abstract from '../../../Ext/fx/easing/Abstract.js';

var Ext_fx_easing_Linear = /*#__PURE__*/function (_Ext_fx_easing_Abstra) {
  _inheritsLoose(Ext_fx_easing_Linear, _Ext_fx_easing_Abstra);

  Ext_fx_easing_Linear.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_fx_easing_Linear.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_easing_Linear.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_easing_Linear.PROPERTIES());
    return Ext_fx_easing_Abstract.getProperties(properties);
  };

  Ext_fx_easing_Linear.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_easing_Linear.EVENTS());
    return Ext_fx_easing_Abstract.getEvents(events);
  };

  _createClass(Ext_fx_easing_Linear, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_easing_Abstra.observedAttributes;
      Ext_fx_easing_Linear.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_easing_Linear.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_easing_Linear(properties, events) {
    return _Ext_fx_easing_Abstra.call(this, properties.concat(Ext_fx_easing_Linear.PROPERTIES()), events.concat(Ext_fx_easing_Linear.EVENTS())) || this;
  }

  var _proto = Ext_fx_easing_Linear.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_easing_Abstra.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_easing_Abstra.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_easing_Linear;
}(Ext_fx_easing_Abstract);

export { Ext_fx_easing_Linear as default };