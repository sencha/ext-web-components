import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_action_Submit from '../../../Ext/form/action/Submit.js';

var Ext_form_action_DirectSubmit = /*#__PURE__*/function (_Ext_form_action_Subm) {
  _inheritsLoose(Ext_form_action_DirectSubmit, _Ext_form_action_Subm);

  var _super = _createSuper(Ext_form_action_DirectSubmit);

  Ext_form_action_DirectSubmit.PROPERTIES = function PROPERTIES() {
    return ['clientValidation', 'failure', 'form', 'headers', 'method', 'params', 'reset', 'scope', 'submitEmptyText', 'success', 'timeout', 'url', 'waitMsg', 'waitTitle'];
  };

  Ext_form_action_DirectSubmit.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_action_DirectSubmit.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_action_DirectSubmit.PROPERTIES());
    return Ext_form_action_Submit.getProperties(properties);
  };

  Ext_form_action_DirectSubmit.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_action_DirectSubmit.EVENTS());
    return Ext_form_action_Submit.getEvents(events);
  };

  _createClass(Ext_form_action_DirectSubmit, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_action_Subm.observedAttributes;
      Ext_form_action_DirectSubmit.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_action_DirectSubmit.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_action_DirectSubmit(properties, events) {
    return _Ext_form_action_Subm.call(this, properties.concat(Ext_form_action_DirectSubmit.PROPERTIES()), events.concat(Ext_form_action_DirectSubmit.EVENTS())) || this;
  }

  var _proto = Ext_form_action_DirectSubmit.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_action_Subm.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_action_Subm.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_action_DirectSubmit;
}(Ext_form_action_Submit);

export { Ext_form_action_DirectSubmit as default };