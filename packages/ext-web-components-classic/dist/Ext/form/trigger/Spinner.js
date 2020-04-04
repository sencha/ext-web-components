import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_trigger_Trigger from '../../../Ext/form/trigger/Trigger.js';

var Ext_form_trigger_Spinner = /*#__PURE__*/function (_Ext_form_trigger_Tri) {
  _inheritsLoose(Ext_form_trigger_Spinner, _Ext_form_trigger_Tri);

  var _super = _createSuper(Ext_form_trigger_Spinner);

  Ext_form_trigger_Spinner.PROPERTIES = function PROPERTIES() {
    return ['cls', 'downHandler', 'extraCls', 'focusOnMouseDown', 'handler', 'hidden', 'hideOnReadOnly', 'preventMouseDown', 'repeatClick', 'scope', 'tooltip', 'upHandler', 'vertical', 'weight', 'width'];
  };

  Ext_form_trigger_Spinner.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_trigger_Spinner.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_trigger_Spinner.PROPERTIES());
    return Ext_form_trigger_Trigger.getProperties(properties);
  };

  Ext_form_trigger_Spinner.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_trigger_Spinner.EVENTS());
    return Ext_form_trigger_Trigger.getEvents(events);
  };

  _createClass(Ext_form_trigger_Spinner, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_trigger_Tri.observedAttributes;
      Ext_form_trigger_Spinner.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_trigger_Spinner.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_trigger_Spinner(properties, events) {
    return _Ext_form_trigger_Tri.call(this, properties.concat(Ext_form_trigger_Spinner.PROPERTIES()), events.concat(Ext_form_trigger_Spinner.EVENTS())) || this;
  }

  var _proto = Ext_form_trigger_Spinner.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_trigger_Tri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_trigger_Tri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_trigger_Spinner;
}(Ext_form_trigger_Trigger);

export { Ext_form_trigger_Spinner as default };