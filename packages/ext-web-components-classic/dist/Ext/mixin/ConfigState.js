import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_mixin_ConfigState = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_mixin_ConfigState, _Ext_Mixin);

  Ext_mixin_ConfigState.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_mixin_ConfigState.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_mixin_ConfigState.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_ConfigState.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_mixin_ConfigState.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_ConfigState.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_mixin_ConfigState, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_mixin_ConfigState.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_ConfigState.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_ConfigState(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_mixin_ConfigState.PROPERTIES()), events.concat(Ext_mixin_ConfigState.EVENTS())) || this;
  }

  var _proto = Ext_mixin_ConfigState.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_ConfigState;
}(Ext_Mixin);

export { Ext_mixin_ConfigState as default };