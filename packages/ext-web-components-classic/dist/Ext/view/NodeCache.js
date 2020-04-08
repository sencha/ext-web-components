import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_view_NodeCache = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_view_NodeCache, _Ext_Base);

  Ext_view_NodeCache.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_view_NodeCache.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_view_NodeCache.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_view_NodeCache.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_view_NodeCache.getEvents = function getEvents(events) {
    events = events.concat(Ext_view_NodeCache.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_view_NodeCache, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_view_NodeCache.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_view_NodeCache.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_view_NodeCache(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_view_NodeCache.PROPERTIES()), events.concat(Ext_view_NodeCache.EVENTS())) || this;
  }

  var _proto = Ext_view_NodeCache.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_view_NodeCache;
}(Ext_Base);

export { Ext_view_NodeCache as default };