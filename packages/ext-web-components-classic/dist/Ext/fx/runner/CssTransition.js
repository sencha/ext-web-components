import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_runner_Css from '../../../Ext/fx/runner/Css.js';

var Ext_fx_runner_CssTransition = /*#__PURE__*/function (_Ext_fx_runner_Css) {
  _inheritsLoose(Ext_fx_runner_CssTransition, _Ext_fx_runner_Css);

  Ext_fx_runner_CssTransition.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_fx_runner_CssTransition.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_runner_CssTransition.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_runner_CssTransition.PROPERTIES());
    return Ext_fx_runner_Css.getProperties(properties);
  };

  Ext_fx_runner_CssTransition.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_runner_CssTransition.EVENTS());
    return Ext_fx_runner_Css.getEvents(events);
  };

  _createClass(Ext_fx_runner_CssTransition, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_runner_Css.observedAttributes;
      Ext_fx_runner_CssTransition.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_runner_CssTransition.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_runner_CssTransition(properties, events) {
    return _Ext_fx_runner_Css.call(this, properties.concat(Ext_fx_runner_CssTransition.PROPERTIES()), events.concat(Ext_fx_runner_CssTransition.EVENTS())) || this;
  }

  var _proto = Ext_fx_runner_CssTransition.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_runner_Css.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_runner_Css.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_runner_CssTransition;
}(Ext_fx_runner_Css);

export { Ext_fx_runner_CssTransition as default };