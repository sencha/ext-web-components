import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_app_ViewController from '../../../Ext/app/ViewController.js';

var Ext_ux_colorpick_SliderController = /*#__PURE__*/function (_Ext_app_ViewControll) {
  _inheritsLoose(Ext_ux_colorpick_SliderController, _Ext_app_ViewControll);

  var _super = _createSuper(Ext_ux_colorpick_SliderController);

  Ext_ux_colorpick_SliderController.PROPERTIES = function PROPERTIES() {
    return ['bindings', 'control', 'id', 'listen', 'listeners', 'routes'];
  };

  Ext_ux_colorpick_SliderController.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_colorpick_SliderController.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_colorpick_SliderController.PROPERTIES());
    return Ext_app_ViewController.getProperties(properties);
  };

  Ext_ux_colorpick_SliderController.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_colorpick_SliderController.EVENTS());
    return Ext_app_ViewController.getEvents(events);
  };

  _createClass(Ext_ux_colorpick_SliderController, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_ViewControll.observedAttributes;
      Ext_ux_colorpick_SliderController.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_colorpick_SliderController.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_colorpick_SliderController(properties, events) {
    return _Ext_app_ViewControll.call(this, properties.concat(Ext_ux_colorpick_SliderController.PROPERTIES()), events.concat(Ext_ux_colorpick_SliderController.EVENTS())) || this;
  }

  var _proto = Ext_ux_colorpick_SliderController.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_ViewControll.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_ViewControll.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_colorpick_SliderController;
}(Ext_app_ViewController);

export { Ext_ux_colorpick_SliderController as default };