import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_ViewController from '../../../Ext/app/ViewController.js';

var Ext_ux_colorpick_ButtonController = /*#__PURE__*/function (_Ext_app_ViewControll) {
  _inheritsLoose(Ext_ux_colorpick_ButtonController, _Ext_app_ViewControll);

  Ext_ux_colorpick_ButtonController.PROPERTIES = function PROPERTIES() {
    return ['bindings', 'control', 'id', 'listen', 'listeners', 'routes'];
  };

  Ext_ux_colorpick_ButtonController.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_colorpick_ButtonController.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_colorpick_ButtonController.PROPERTIES());
    return Ext_app_ViewController.getProperties(properties);
  };

  Ext_ux_colorpick_ButtonController.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_colorpick_ButtonController.EVENTS());
    return Ext_app_ViewController.getEvents(events);
  };

  _createClass(Ext_ux_colorpick_ButtonController, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_ViewControll.observedAttributes;
      Ext_ux_colorpick_ButtonController.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_colorpick_ButtonController.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_colorpick_ButtonController(properties, events) {
    return _Ext_app_ViewControll.call(this, properties.concat(Ext_ux_colorpick_ButtonController.PROPERTIES()), events.concat(Ext_ux_colorpick_ButtonController.EVENTS())) || this;
  }

  var _proto = Ext_ux_colorpick_ButtonController.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_ViewControll.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_ViewControll.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_colorpick_ButtonController;
}(Ext_app_ViewController);

export { Ext_ux_colorpick_ButtonController as default };