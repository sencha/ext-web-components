import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_panel_Pinnable = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_panel_Pinnable, _Ext_Mixin);

  Ext_panel_Pinnable.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_panel_Pinnable.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_panel_Pinnable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_panel_Pinnable.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_panel_Pinnable.getEvents = function getEvents(events) {
    events = events.concat(Ext_panel_Pinnable.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_panel_Pinnable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_panel_Pinnable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_panel_Pinnable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Pinnable(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_panel_Pinnable.PROPERTIES()), events.concat(Ext_panel_Pinnable.EVENTS())) || this;
  }

  var _proto = Ext_panel_Pinnable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Pinnable;
}(Ext_Mixin);

export { Ext_panel_Pinnable as default };