import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Evented from '../../../Ext/Evented.js';

var Ext_util_translatable_Abstract = /*#__PURE__*/function (_Ext_Evented) {
  _inheritsLoose(Ext_util_translatable_Abstract, _Ext_Evented);

  Ext_util_translatable_Abstract.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_util_translatable_Abstract.EVENTS = function EVENTS() {
    return [{
      name: 'animationend',
      parameters: 'sender,x,y'
    }, {
      name: 'animationframe',
      parameters: 'sender,x,y'
    }, {
      name: 'animationstart',
      parameters: 'sender,x,y'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_translatable_Abstract.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_translatable_Abstract.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  };

  Ext_util_translatable_Abstract.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_translatable_Abstract.EVENTS());
    return Ext_Evented.getEvents(events);
  };

  _createClass(Ext_util_translatable_Abstract, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Evented.observedAttributes;
      Ext_util_translatable_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_translatable_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_translatable_Abstract(properties, events) {
    return _Ext_Evented.call(this, properties.concat(Ext_util_translatable_Abstract.PROPERTIES()), events.concat(Ext_util_translatable_Abstract.EVENTS())) || this;
  }

  var _proto = Ext_util_translatable_Abstract.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Evented.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Evented.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_translatable_Abstract;
}(Ext_Evented);

export { Ext_util_translatable_Abstract as default };