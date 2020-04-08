import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_BaseController from '../../Ext/app/BaseController.js';

var Ext_app_ViewController = /*#__PURE__*/function (_Ext_app_BaseControll) {
  _inheritsLoose(Ext_app_ViewController, _Ext_app_BaseControll);

  Ext_app_ViewController.PROPERTIES = function PROPERTIES() {
    return ['bindings', 'control', 'id', 'listen', 'listeners', 'routes'];
  };

  Ext_app_ViewController.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_ViewController.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_ViewController.PROPERTIES());
    return Ext_app_BaseController.getProperties(properties);
  };

  Ext_app_ViewController.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_ViewController.EVENTS());
    return Ext_app_BaseController.getEvents(events);
  };

  _createClass(Ext_app_ViewController, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_BaseControll.observedAttributes;
      Ext_app_ViewController.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_ViewController.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_ViewController(properties, events) {
    return _Ext_app_BaseControll.call(this, properties.concat(Ext_app_ViewController.PROPERTIES()), events.concat(Ext_app_ViewController.EVENTS())) || this;
  }

  var _proto = Ext_app_ViewController.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_BaseControll.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_BaseControll.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_ViewController;
}(Ext_app_BaseController);

export { Ext_app_ViewController as default };