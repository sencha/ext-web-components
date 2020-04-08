import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Evented from '../../../Ext/Evented.js';

var Ext_fx_runner_Css = /*#__PURE__*/function (_Ext_Evented) {
  _inheritsLoose(Ext_fx_runner_Css, _Ext_Evented);

  Ext_fx_runner_Css.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_fx_runner_Css.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_runner_Css.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_runner_Css.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  };

  Ext_fx_runner_Css.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_runner_Css.EVENTS());
    return Ext_Evented.getEvents(events);
  };

  _createClass(Ext_fx_runner_Css, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Evented.observedAttributes;
      Ext_fx_runner_Css.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_runner_Css.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_runner_Css(properties, events) {
    return _Ext_Evented.call(this, properties.concat(Ext_fx_runner_Css.PROPERTIES()), events.concat(Ext_fx_runner_Css.EVENTS())) || this;
  }

  var _proto = Ext_fx_runner_Css.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Evented.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Evented.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_runner_Css;
}(Ext_Evented);

export { Ext_fx_runner_Css as default };