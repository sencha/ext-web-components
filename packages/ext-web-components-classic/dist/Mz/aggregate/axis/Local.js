import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_axis_Base from '../../../Ext/pivot/axis/Base.js';

var Mz_aggregate_axis_Local = /*#__PURE__*/function (_Ext_pivot_axis_Base) {
  _inheritsLoose(Mz_aggregate_axis_Local, _Ext_pivot_axis_Base);

  var _super = _createSuper(Mz_aggregate_axis_Local);

  Mz_aggregate_axis_Local.PROPERTIES = function PROPERTIES() {
    return ['dimensions'];
  };

  Mz_aggregate_axis_Local.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Mz_aggregate_axis_Local.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_axis_Local.PROPERTIES());
    return Ext_pivot_axis_Base.getProperties(properties);
  };

  Mz_aggregate_axis_Local.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_axis_Local.EVENTS());
    return Ext_pivot_axis_Base.getEvents(events);
  };

  _createClass(Mz_aggregate_axis_Local, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_axis_Base.observedAttributes;
      Mz_aggregate_axis_Local.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_axis_Local.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_axis_Local(properties, events) {
    return _Ext_pivot_axis_Base.call(this, properties.concat(Mz_aggregate_axis_Local.PROPERTIES()), events.concat(Mz_aggregate_axis_Local.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_axis_Local.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_axis_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_axis_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_axis_Local;
}(Ext_pivot_axis_Base);

export { Mz_aggregate_axis_Local as default };