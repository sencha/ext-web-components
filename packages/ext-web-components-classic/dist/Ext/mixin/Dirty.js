import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_mixin_Dirty = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_mixin_Dirty, _Ext_Base);

  Ext_mixin_Dirty.PROPERTIES = function PROPERTIES() {
    return ['dirty', 'ignoreDirty', 'recordStateIsDirtyState'];
  };

  Ext_mixin_Dirty.EVENTS = function EVENTS() {
    return [{
      name: 'dirtychange',
      parameters: 'sender,dirty'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_mixin_Dirty.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_Dirty.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_mixin_Dirty.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_Dirty.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_mixin_Dirty, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_mixin_Dirty.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_Dirty.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_Dirty(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_mixin_Dirty.PROPERTIES()), events.concat(Ext_mixin_Dirty.EVENTS())) || this;
  }

  var _proto = Ext_mixin_Dirty.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_Dirty;
}(Ext_Base);

export { Ext_mixin_Dirty as default };