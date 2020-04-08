import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_grid_column_ActionProxy = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_grid_column_ActionProxy, _Ext_Base);

  Ext_grid_column_ActionProxy.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_grid_column_ActionProxy.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_column_ActionProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_column_ActionProxy.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_grid_column_ActionProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_column_ActionProxy.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_grid_column_ActionProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_grid_column_ActionProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_column_ActionProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_column_ActionProxy(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_grid_column_ActionProxy.PROPERTIES()), events.concat(Ext_grid_column_ActionProxy.EVENTS())) || this;
  }

  var _proto = Ext_grid_column_ActionProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_column_ActionProxy;
}(Ext_Base);

export { Ext_grid_column_ActionProxy as default };