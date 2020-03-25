import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_axis_segmenter_Segmenter from '../../../../Ext/chart/axis/segmenter/Segmenter.js';

var Ext_chart_axis_segmenter_Names = /*#__PURE__*/function (_Ext_chart_axis_segme) {
  _inheritsLoose(Ext_chart_axis_segmenter_Names, _Ext_chart_axis_segme);

  var _super = _createSuper(Ext_chart_axis_segmenter_Names);

  Ext_chart_axis_segmenter_Names.PROPERTIES = function PROPERTIES() {
    return ['axis'];
  };

  Ext_chart_axis_segmenter_Names.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_segmenter_Names.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_segmenter_Names.PROPERTIES());
    return Ext_chart_axis_segmenter_Segmenter.getProperties(properties);
  };

  Ext_chart_axis_segmenter_Names.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_segmenter_Names.EVENTS());
    return Ext_chart_axis_segmenter_Segmenter.getEvents(events);
  };

  _createClass(Ext_chart_axis_segmenter_Names, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_segme.observedAttributes;
      Ext_chart_axis_segmenter_Names.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_segmenter_Names.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_segmenter_Names(properties, events) {
    return _Ext_chart_axis_segme.call(this, properties.concat(Ext_chart_axis_segmenter_Names.PROPERTIES()), events.concat(Ext_chart_axis_segmenter_Names.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_segmenter_Names.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_segme.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_segme.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_segmenter_Names;
}(Ext_chart_axis_segmenter_Segmenter);

export { Ext_chart_axis_segmenter_Names as default };