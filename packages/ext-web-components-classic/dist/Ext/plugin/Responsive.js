import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

var Ext_plugin_Responsive = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_plugin_Responsive, _Ext_plugin_Abstract);

  Ext_plugin_Responsive.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_plugin_Responsive.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_plugin_Responsive.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_plugin_Responsive.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_plugin_Responsive.getEvents = function getEvents(events) {
    events = events.concat(Ext_plugin_Responsive.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_plugin_Responsive, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_plugin_Responsive.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_plugin_Responsive.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_plugin_Responsive(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_plugin_Responsive.PROPERTIES()), events.concat(Ext_plugin_Responsive.EVENTS())) || this;
  }

  var _proto = Ext_plugin_Responsive.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_plugin_Responsive;
}(Ext_plugin_Abstract);

export { Ext_plugin_Responsive as default };