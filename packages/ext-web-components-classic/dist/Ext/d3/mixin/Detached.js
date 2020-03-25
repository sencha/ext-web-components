import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Mixin from '../../../Ext/Mixin.js';

var Ext_d3_mixin_Detached = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_d3_mixin_Detached, _Ext_Mixin);

  var _super = _createSuper(Ext_d3_mixin_Detached);

  Ext_d3_mixin_Detached.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_d3_mixin_Detached.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_d3_mixin_Detached.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_mixin_Detached.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_d3_mixin_Detached.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_mixin_Detached.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_d3_mixin_Detached, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_d3_mixin_Detached.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_mixin_Detached.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_mixin_Detached(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_d3_mixin_Detached.PROPERTIES()), events.concat(Ext_d3_mixin_Detached.EVENTS())) || this;
  }

  var _proto = Ext_d3_mixin_Detached.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_mixin_Detached;
}(Ext_Mixin);

export { Ext_d3_mixin_Detached as default };