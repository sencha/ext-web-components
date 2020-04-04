import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Panel from '../../../Ext/panel/Panel.js';

var Ext_pivot_d3_AbstractContainer = /*#__PURE__*/function (_Ext_panel_Panel) {
  _inheritsLoose(Ext_pivot_d3_AbstractContainer, _Ext_panel_Panel);

  var _super = _createSuper(Ext_pivot_d3_AbstractContainer);

  Ext_pivot_d3_AbstractContainer.PROPERTIES = function PROPERTIES() {
    return ['configurator', 'drawing', 'matrix'];
  };

  Ext_pivot_d3_AbstractContainer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_d3_AbstractContainer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES());
    return Ext_panel_Panel.getProperties(properties);
  };

  Ext_pivot_d3_AbstractContainer.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_d3_AbstractContainer.EVENTS());
    return Ext_panel_Panel.getEvents(events);
  };

  _createClass(Ext_pivot_d3_AbstractContainer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_panel_Panel.observedAttributes;
      Ext_pivot_d3_AbstractContainer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_d3_AbstractContainer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_d3_AbstractContainer(properties, events) {
    return _Ext_panel_Panel.call(this, properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES()), events.concat(Ext_pivot_d3_AbstractContainer.EVENTS())) || this;
  }

  var _proto = Ext_pivot_d3_AbstractContainer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_panel_Panel.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_panel_Panel.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_d3_AbstractContainer;
}(Ext_panel_Panel);

export { Ext_pivot_d3_AbstractContainer as default };