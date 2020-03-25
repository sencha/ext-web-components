import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_action_Load from '../../../Ext/form/action/Load.js';

var Ext_form_action_DirectLoad = /*#__PURE__*/function (_Ext_form_action_Load) {
  _inheritsLoose(Ext_form_action_DirectLoad, _Ext_form_action_Load);

  var _super = _createSuper(Ext_form_action_DirectLoad);

  Ext_form_action_DirectLoad.PROPERTIES = function PROPERTIES() {
    return ['failure', 'form', 'headers', 'method', 'params', 'reset', 'scope', 'submitEmptyText', 'success', 'timeout', 'url', 'waitMsg', 'waitTitle'];
  };

  Ext_form_action_DirectLoad.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_action_DirectLoad.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_action_DirectLoad.PROPERTIES());
    return Ext_form_action_Load.getProperties(properties);
  };

  Ext_form_action_DirectLoad.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_action_DirectLoad.EVENTS());
    return Ext_form_action_Load.getEvents(events);
  };

  _createClass(Ext_form_action_DirectLoad, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_action_Load.observedAttributes;
      Ext_form_action_DirectLoad.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_action_DirectLoad.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_action_DirectLoad(properties, events) {
    return _Ext_form_action_Load.call(this, properties.concat(Ext_form_action_DirectLoad.PROPERTIES()), events.concat(Ext_form_action_DirectLoad.EVENTS())) || this;
  }

  var _proto = Ext_form_action_DirectLoad.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_action_Load.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_action_Load.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_action_DirectLoad;
}(Ext_form_action_Load);

export { Ext_form_action_DirectLoad as default };