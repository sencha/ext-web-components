import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_update_Base from '../../../Ext/pivot/update/Base.js';

var Ext_pivot_update_Increment = /*#__PURE__*/function (_Ext_pivot_update_Bas) {
  _inheritsLoose(Ext_pivot_update_Increment, _Ext_pivot_update_Bas);

  Ext_pivot_update_Increment.PROPERTIES = function PROPERTIES() {
    return ['dataIndex', 'leftKey', 'listeners', 'matrix', 'topKey', 'value'];
  };

  Ext_pivot_update_Increment.EVENTS = function EVENTS() {
    return [{
      name: 'beforeupdate',
      parameters: 'updater'
    }, {
      name: 'update',
      parameters: 'updater'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_update_Increment.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_update_Increment.PROPERTIES());
    return Ext_pivot_update_Base.getProperties(properties);
  };

  Ext_pivot_update_Increment.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_update_Increment.EVENTS());
    return Ext_pivot_update_Base.getEvents(events);
  };

  _createClass(Ext_pivot_update_Increment, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_update_Bas.observedAttributes;
      Ext_pivot_update_Increment.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_update_Increment.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_update_Increment(properties, events) {
    return _Ext_pivot_update_Bas.call(this, properties.concat(Ext_pivot_update_Increment.PROPERTIES()), events.concat(Ext_pivot_update_Increment.EVENTS())) || this;
  }

  var _proto = Ext_pivot_update_Increment.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_update_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_update_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_update_Increment;
}(Ext_pivot_update_Base);

export { Ext_pivot_update_Increment as default };