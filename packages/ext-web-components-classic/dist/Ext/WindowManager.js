import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ZIndexManager from '../Ext/ZIndexManager.js';

var Ext_WindowManager = /*#__PURE__*/function (_Ext_ZIndexManager) {
  _inheritsLoose(Ext_WindowManager, _Ext_ZIndexManager);

  Ext_WindowManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_WindowManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_WindowManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_WindowManager.PROPERTIES());
    return Ext_ZIndexManager.getProperties(properties);
  };

  Ext_WindowManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_WindowManager.EVENTS());
    return Ext_ZIndexManager.getEvents(events);
  };

  _createClass(Ext_WindowManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ZIndexManager.observedAttributes;
      Ext_WindowManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_WindowManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_WindowManager(properties, events) {
    return _Ext_ZIndexManager.call(this, properties.concat(Ext_WindowManager.PROPERTIES()), events.concat(Ext_WindowManager.EVENTS())) || this;
  }

  var _proto = Ext_WindowManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ZIndexManager.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ZIndexManager.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_WindowManager;
}(Ext_ZIndexManager);

export { Ext_WindowManager as default };