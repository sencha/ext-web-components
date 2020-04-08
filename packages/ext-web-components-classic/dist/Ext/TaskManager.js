import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_TaskRunner from '../Ext/util/TaskRunner.js';

var Ext_TaskManager = /*#__PURE__*/function (_Ext_util_TaskRunner) {
  _inheritsLoose(Ext_TaskManager, _Ext_util_TaskRunner);

  Ext_TaskManager.PROPERTIES = function PROPERTIES() {
    return ['fireIdleEvent', 'interval'];
  };

  Ext_TaskManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_TaskManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_TaskManager.PROPERTIES());
    return Ext_util_TaskRunner.getProperties(properties);
  };

  Ext_TaskManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_TaskManager.EVENTS());
    return Ext_util_TaskRunner.getEvents(events);
  };

  _createClass(Ext_TaskManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_TaskRunner.observedAttributes;
      Ext_TaskManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_TaskManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_TaskManager(properties, events) {
    return _Ext_util_TaskRunner.call(this, properties.concat(Ext_TaskManager.PROPERTIES()), events.concat(Ext_TaskManager.EVENTS())) || this;
  }

  var _proto = Ext_TaskManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_TaskRunner.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_TaskRunner.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_TaskManager;
}(Ext_util_TaskRunner);

export { Ext_TaskManager as default };