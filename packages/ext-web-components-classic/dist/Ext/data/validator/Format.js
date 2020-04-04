import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

var Ext_data_validator_Format = /*#__PURE__*/function (_Ext_data_validator_V) {
  _inheritsLoose(Ext_data_validator_Format, _Ext_data_validator_V);

  var _super = _createSuper(Ext_data_validator_Format);

  Ext_data_validator_Format.PROPERTIES = function PROPERTIES() {
    return ['matcher', 'message'];
  };

  Ext_data_validator_Format.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Format.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Format.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  };

  Ext_data_validator_Format.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Format.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  };

  _createClass(Ext_data_validator_Format, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_V.observedAttributes;
      Ext_data_validator_Format.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Format.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Format(properties, events) {
    return _Ext_data_validator_V.call(this, properties.concat(Ext_data_validator_Format.PROPERTIES()), events.concat(Ext_data_validator_Format.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Format.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_V.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_V.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Format;
}(Ext_data_validator_Validator);

export { Ext_data_validator_Format as default };