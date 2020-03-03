import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_menu_Manager = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_menu_Manager, _Ext_Base);

  Ext_menu_Manager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_menu_Manager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_menu_Manager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_menu_Manager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_menu_Manager.getEvents = function getEvents(events) {
    events = events.concat(Ext_menu_Manager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_menu_Manager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_menu_Manager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_menu_Manager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_Manager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_menu_Manager.PROPERTIES()), events.concat(Ext_menu_Manager.EVENTS())) || this;
  }

  var _proto = Ext_menu_Manager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_Manager;
}(Ext_Base);

export { Ext_menu_Manager as default };