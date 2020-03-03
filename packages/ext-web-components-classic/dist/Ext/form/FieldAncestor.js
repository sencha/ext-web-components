import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_form_FieldAncestor = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_form_FieldAncestor, _Ext_Mixin);

  Ext_form_FieldAncestor.PROPERTIES = function PROPERTIES() {
    return ['fieldDefaults'];
  };

  Ext_form_FieldAncestor.EVENTS = function EVENTS() {
    return [{
      name: 'fielderrorchange',
      parameters: 'sender,field,error'
    }, {
      name: 'fieldvaliditychange',
      parameters: 'sender,field,isValid'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_FieldAncestor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_FieldAncestor.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_form_FieldAncestor.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_FieldAncestor.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_form_FieldAncestor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_form_FieldAncestor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_FieldAncestor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_FieldAncestor(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_form_FieldAncestor.PROPERTIES()), events.concat(Ext_form_FieldAncestor.EVENTS())) || this;
  }

  var _proto = Ext_form_FieldAncestor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_FieldAncestor;
}(Ext_Mixin);

export { Ext_form_FieldAncestor as default };