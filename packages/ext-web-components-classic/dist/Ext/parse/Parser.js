import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_Fly from '../../Ext/util/Fly.js';

var Ext_parse_Parser = /*#__PURE__*/function (_Ext_util_Fly) {
  _inheritsLoose(Ext_parse_Parser, _Ext_util_Fly);

  var _super = _createSuper(Ext_parse_Parser);

  Ext_parse_Parser.PROPERTIES = function PROPERTIES() {
    return ['constants', 'infix', 'infixRight', 'prefix', 'symbols', 'token', 'tokenizer'];
  };

  Ext_parse_Parser.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_parse_Parser.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_parse_Parser.PROPERTIES());
    return Ext_util_Fly.getProperties(properties);
  };

  Ext_parse_Parser.getEvents = function getEvents(events) {
    events = events.concat(Ext_parse_Parser.EVENTS());
    return Ext_util_Fly.getEvents(events);
  };

  _createClass(Ext_parse_Parser, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Fly.observedAttributes;
      Ext_parse_Parser.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_parse_Parser.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_parse_Parser(properties, events) {
    return _Ext_util_Fly.call(this, properties.concat(Ext_parse_Parser.PROPERTIES()), events.concat(Ext_parse_Parser.EVENTS())) || this;
  }

  var _proto = Ext_parse_Parser.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Fly.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Fly.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_parse_Parser;
}(Ext_util_Fly);

export { Ext_parse_Parser as default };