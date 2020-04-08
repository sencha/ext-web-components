import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../../Ext/Mixin.js';

var Ext_calendar_form_Base = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_calendar_form_Base, _Ext_Mixin);

  Ext_calendar_form_Base.PROPERTIES = function PROPERTIES() {
    return ['event', 'view'];
  };

  Ext_calendar_form_Base.EVENTS = function EVENTS() {
    return [{
      name: 'cancel',
      parameters: 'sender'
    }, {
      name: 'drop',
      parameters: 'sender'
    }, {
      name: 'save',
      parameters: 'sender,context'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_form_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_form_Base.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_calendar_form_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_form_Base.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_calendar_form_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_calendar_form_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_form_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_Base(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_calendar_form_Base.PROPERTIES()), events.concat(Ext_calendar_form_Base.EVENTS())) || this;
  }

  var _proto = Ext_calendar_form_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_Base;
}(Ext_Mixin);

export { Ext_calendar_form_Base as default };