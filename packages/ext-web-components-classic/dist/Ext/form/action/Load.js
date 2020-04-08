import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_action_Action from '../../../Ext/form/action/Action.js';

var Ext_form_action_Load = /*#__PURE__*/function (_Ext_form_action_Acti) {
  _inheritsLoose(Ext_form_action_Load, _Ext_form_action_Acti);

  Ext_form_action_Load.PROPERTIES = function PROPERTIES() {
    return ['failure', 'form', 'headers', 'method', 'params', 'reset', 'scope', 'submitEmptyText', 'success', 'timeout', 'url', 'waitMsg', 'waitTitle'];
  };

  Ext_form_action_Load.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_action_Load.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_action_Load.PROPERTIES());
    return Ext_form_action_Action.getProperties(properties);
  };

  Ext_form_action_Load.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_action_Load.EVENTS());
    return Ext_form_action_Action.getEvents(events);
  };

  _createClass(Ext_form_action_Load, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_action_Acti.observedAttributes;
      Ext_form_action_Load.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_action_Load.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_action_Load(properties, events) {
    return _Ext_form_action_Acti.call(this, properties.concat(Ext_form_action_Load.PROPERTIES()), events.concat(Ext_form_action_Load.EVENTS())) || this;
  }

  var _proto = Ext_form_action_Load.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_action_Acti.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_action_Acti.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_action_Load;
}(Ext_form_action_Action);

export { Ext_form_action_Load as default };