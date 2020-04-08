import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../../Ext/Mixin.js';

var Ext_d3_mixin_ToolTip = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_d3_mixin_ToolTip, _Ext_Mixin);

  Ext_d3_mixin_ToolTip.PROPERTIES = function PROPERTIES() {
    return ['tooltip'];
  };

  Ext_d3_mixin_ToolTip.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_d3_mixin_ToolTip.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_mixin_ToolTip.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_d3_mixin_ToolTip.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_mixin_ToolTip.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_d3_mixin_ToolTip, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_d3_mixin_ToolTip.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_mixin_ToolTip.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_mixin_ToolTip(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_d3_mixin_ToolTip.PROPERTIES()), events.concat(Ext_d3_mixin_ToolTip.EVENTS())) || this;
  }

  var _proto = Ext_d3_mixin_ToolTip.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_mixin_ToolTip;
}(Ext_Mixin);

export { Ext_d3_mixin_ToolTip as default };