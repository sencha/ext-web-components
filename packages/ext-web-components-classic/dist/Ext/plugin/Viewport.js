import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

var Ext_plugin_Viewport =
/*#__PURE__*/
function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_plugin_Viewport, _Ext_plugin_Abstract);

  Ext_plugin_Viewport.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_plugin_Viewport.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_plugin_Viewport.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_plugin_Viewport.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_plugin_Viewport.getEvents = function getEvents(events) {
    events = events.concat(Ext_plugin_Viewport.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_plugin_Viewport, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_plugin_Viewport.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_plugin_Viewport.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_plugin_Viewport(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_plugin_Viewport.PROPERTIES()), events.concat(Ext_plugin_Viewport.EVENTS())) || this;
  }

  var _proto = Ext_plugin_Viewport.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_plugin_Viewport;
}(Ext_plugin_Abstract);

export { Ext_plugin_Viewport as default };