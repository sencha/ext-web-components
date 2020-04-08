import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_mixin_Accessible = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_mixin_Accessible, _Ext_Mixin);

  Ext_mixin_Accessible.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy'];
  };

  Ext_mixin_Accessible.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_mixin_Accessible.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_Accessible.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_mixin_Accessible.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_Accessible.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_mixin_Accessible, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_mixin_Accessible.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_Accessible.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_Accessible(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_mixin_Accessible.PROPERTIES()), events.concat(Ext_mixin_Accessible.EVENTS())) || this;
  }

  var _proto = Ext_mixin_Accessible.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_Accessible;
}(Ext_Mixin);

export { Ext_mixin_Accessible as default };