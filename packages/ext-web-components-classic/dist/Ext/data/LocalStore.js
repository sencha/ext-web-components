import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_data_LocalStore = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_data_LocalStore, _Ext_Mixin);

  Ext_data_LocalStore.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_LocalStore.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_LocalStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_LocalStore.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_data_LocalStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_LocalStore.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_data_LocalStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_data_LocalStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_LocalStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_LocalStore(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_data_LocalStore.PROPERTIES()), events.concat(Ext_data_LocalStore.EVENTS())) || this;
  }

  var _proto = Ext_data_LocalStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_LocalStore;
}(Ext_Mixin);

export { Ext_data_LocalStore as default };