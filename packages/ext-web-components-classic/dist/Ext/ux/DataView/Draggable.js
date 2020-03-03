import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_ux_DataView_Draggable = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_ux_DataView_Draggable, _Ext_Base);

  Ext_ux_DataView_Draggable.PROPERTIES = function PROPERTIES() {
    return ['ddConfig', 'ghostCls', 'ghostConfig', 'ghostTpl'];
  };

  Ext_ux_DataView_Draggable.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_DataView_Draggable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_DataView_Draggable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ux_DataView_Draggable.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_DataView_Draggable.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ux_DataView_Draggable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ux_DataView_Draggable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_DataView_Draggable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_DataView_Draggable(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ux_DataView_Draggable.PROPERTIES()), events.concat(Ext_ux_DataView_Draggable.EVENTS())) || this;
  }

  var _proto = Ext_ux_DataView_Draggable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_DataView_Draggable;
}(Ext_Base);

export { Ext_ux_DataView_Draggable as default };