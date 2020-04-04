import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_axis_layout_Discrete from '../../../../Ext/chart/axis/layout/Discrete.js';

var Ext_chart_axis_layout_CombineDuplicate = /*#__PURE__*/function (_Ext_chart_axis_layou) {
  _inheritsLoose(Ext_chart_axis_layout_CombineDuplicate, _Ext_chart_axis_layou);

  var _super = _createSuper(Ext_chart_axis_layout_CombineDuplicate);

  Ext_chart_axis_layout_CombineDuplicate.PROPERTIES = function PROPERTIES() {
    return ['axis', 'listeners'];
  };

  Ext_chart_axis_layout_CombineDuplicate.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_layout_CombineDuplicate.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_CombineDuplicate.PROPERTIES());
    return Ext_chart_axis_layout_Discrete.getProperties(properties);
  };

  Ext_chart_axis_layout_CombineDuplicate.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_CombineDuplicate.EVENTS());
    return Ext_chart_axis_layout_Discrete.getEvents(events);
  };

  _createClass(Ext_chart_axis_layout_CombineDuplicate, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_layou.observedAttributes;
      Ext_chart_axis_layout_CombineDuplicate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_layout_CombineDuplicate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_layout_CombineDuplicate(properties, events) {
    return _Ext_chart_axis_layou.call(this, properties.concat(Ext_chart_axis_layout_CombineDuplicate.PROPERTIES()), events.concat(Ext_chart_axis_layout_CombineDuplicate.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_layout_CombineDuplicate.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_layou.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_layou.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_layout_CombineDuplicate;
}(Ext_chart_axis_layout_Discrete);

export { Ext_chart_axis_layout_CombineDuplicate as default };