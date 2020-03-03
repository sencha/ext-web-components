import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_form_VTypes = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_form_VTypes, _Ext_Base);

  Ext_form_VTypes.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_form_VTypes.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_VTypes.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_VTypes.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_form_VTypes.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_VTypes.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_form_VTypes, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_form_VTypes.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_VTypes.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_VTypes(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_form_VTypes.PROPERTIES()), events.concat(Ext_form_VTypes.EVENTS())) || this;
  }

  var _proto = Ext_form_VTypes.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_VTypes;
}(Ext_Base);

export { Ext_form_VTypes as default };