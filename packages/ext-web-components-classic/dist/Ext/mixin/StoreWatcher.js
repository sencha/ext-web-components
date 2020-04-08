import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_mixin_StoreWatcher = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_mixin_StoreWatcher, _Ext_Base);

  Ext_mixin_StoreWatcher.PROPERTIES = function PROPERTIES() {
    return ['owner', 'ownerListeners', 'sourceListeners', 'storeListeners'];
  };

  Ext_mixin_StoreWatcher.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_mixin_StoreWatcher.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_StoreWatcher.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_mixin_StoreWatcher.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_StoreWatcher.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_mixin_StoreWatcher, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_mixin_StoreWatcher.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_StoreWatcher.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_StoreWatcher(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_mixin_StoreWatcher.PROPERTIES()), events.concat(Ext_mixin_StoreWatcher.EVENTS())) || this;
  }

  var _proto = Ext_mixin_StoreWatcher.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_StoreWatcher;
}(Ext_Base);

export { Ext_mixin_StoreWatcher as default };