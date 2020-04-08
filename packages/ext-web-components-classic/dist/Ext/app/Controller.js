import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_BaseController from '../../Ext/app/BaseController.js';

var Ext_app_Controller = /*#__PURE__*/function (_Ext_app_BaseControll) {
  _inheritsLoose(Ext_app_Controller, _Ext_app_BaseControll);

  Ext_app_Controller.PROPERTIES = function PROPERTIES() {
    return ['application', 'control', 'id', 'listen', 'listeners', 'models', 'moduleClassName', 'refs', 'routes', 'stores', 'views'];
  };

  Ext_app_Controller.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_Controller.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_Controller.PROPERTIES());
    return Ext_app_BaseController.getProperties(properties);
  };

  Ext_app_Controller.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_Controller.EVENTS());
    return Ext_app_BaseController.getEvents(events);
  };

  _createClass(Ext_app_Controller, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_BaseControll.observedAttributes;
      Ext_app_Controller.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_Controller.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_Controller(properties, events) {
    return _Ext_app_BaseControll.call(this, properties.concat(Ext_app_Controller.PROPERTIES()), events.concat(Ext_app_Controller.EVENTS())) || this;
  }

  var _proto = Ext_app_Controller.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_BaseControll.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_BaseControll.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_Controller;
}(Ext_app_BaseController);

export { Ext_app_Controller as default };