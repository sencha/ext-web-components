import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_grid_plugin_BufferedRenderer = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_grid_plugin_BufferedRenderer, _Ext_plugin_Abstract);

  Ext_grid_plugin_BufferedRenderer.PROPERTIES = function PROPERTIES() {
    return ['id', 'leadingBufferZone', 'numFromEdge', 'scrollToLoadBuffer', 'stateEvents', 'synchronousRender', 'trailingBufferZone'];
  };

  Ext_grid_plugin_BufferedRenderer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_BufferedRenderer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_BufferedRenderer.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_grid_plugin_BufferedRenderer.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_BufferedRenderer.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_grid_plugin_BufferedRenderer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_grid_plugin_BufferedRenderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_BufferedRenderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_BufferedRenderer(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_grid_plugin_BufferedRenderer.PROPERTIES()), events.concat(Ext_grid_plugin_BufferedRenderer.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_BufferedRenderer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_BufferedRenderer;
}(Ext_plugin_Abstract);

export { Ext_grid_plugin_BufferedRenderer as default };