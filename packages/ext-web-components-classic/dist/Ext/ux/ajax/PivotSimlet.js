import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_ajax_JsonSimlet from '../../../Ext/ux/ajax/JsonSimlet.js';

var Ext_ux_ajax_PivotSimlet = /*#__PURE__*/function (_Ext_ux_ajax_JsonSiml) {
  _inheritsLoose(Ext_ux_ajax_PivotSimlet, _Ext_ux_ajax_JsonSiml);

  var _super = _createSuper(Ext_ux_ajax_PivotSimlet);

  Ext_ux_ajax_PivotSimlet.PROPERTIES = function PROPERTIES() {
    return ['responseHeaders', 'responseText', 'responseXML', 'status', 'statusText'];
  };

  Ext_ux_ajax_PivotSimlet.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_ajax_PivotSimlet.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_ajax_PivotSimlet.PROPERTIES());
    return Ext_ux_ajax_JsonSimlet.getProperties(properties);
  };

  Ext_ux_ajax_PivotSimlet.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_ajax_PivotSimlet.EVENTS());
    return Ext_ux_ajax_JsonSimlet.getEvents(events);
  };

  _createClass(Ext_ux_ajax_PivotSimlet, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ux_ajax_JsonSiml.observedAttributes;
      Ext_ux_ajax_PivotSimlet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_ajax_PivotSimlet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_ajax_PivotSimlet(properties, events) {
    return _Ext_ux_ajax_JsonSiml.call(this, properties.concat(Ext_ux_ajax_PivotSimlet.PROPERTIES()), events.concat(Ext_ux_ajax_PivotSimlet.EVENTS())) || this;
  }

  var _proto = Ext_ux_ajax_PivotSimlet.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ux_ajax_JsonSiml.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ux_ajax_JsonSiml.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_ajax_PivotSimlet;
}(Ext_ux_ajax_JsonSimlet);

export { Ext_ux_ajax_PivotSimlet as default };