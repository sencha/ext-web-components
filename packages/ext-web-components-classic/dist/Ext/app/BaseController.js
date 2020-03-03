import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_app_BaseController = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_app_BaseController, _Ext_Base);

  Ext_app_BaseController.PROPERTIES = function PROPERTIES() {
    return ['control', 'id', 'listen', 'listeners', 'routes'];
  };

  Ext_app_BaseController.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_BaseController.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_BaseController.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_app_BaseController.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_BaseController.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_app_BaseController, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_app_BaseController.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_BaseController.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_BaseController(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_app_BaseController.PROPERTIES()), events.concat(Ext_app_BaseController.EVENTS())) || this;
  }

  var _proto = Ext_app_BaseController.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_BaseController;
}(Ext_Base);

export { Ext_app_BaseController as default };