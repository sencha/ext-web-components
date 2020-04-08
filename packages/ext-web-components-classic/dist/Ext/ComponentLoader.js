import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ElementLoader from '../Ext/ElementLoader.js';

var Ext_ComponentLoader = /*#__PURE__*/function (_Ext_ElementLoader) {
  _inheritsLoose(Ext_ComponentLoader, _Ext_ElementLoader);

  Ext_ComponentLoader.PROPERTIES = function PROPERTIES() {
    return ['ajaxOptions', 'autoLoad', 'baseParams', 'callback', 'failure', 'listeners', 'loadMask', 'loadOnRender', 'params', 'renderer', 'rendererScope', 'scope', 'scripts', 'success', 'target', 'url'];
  };

  Ext_ComponentLoader.EVENTS = function EVENTS() {
    return [{
      name: 'beforeload',
      parameters: 'sender,options'
    }, {
      name: 'exception',
      parameters: 'sender,response,options'
    }, {
      name: 'load',
      parameters: 'sender,response,options'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ComponentLoader.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ComponentLoader.PROPERTIES());
    return Ext_ElementLoader.getProperties(properties);
  };

  Ext_ComponentLoader.getEvents = function getEvents(events) {
    events = events.concat(Ext_ComponentLoader.EVENTS());
    return Ext_ElementLoader.getEvents(events);
  };

  _createClass(Ext_ComponentLoader, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ElementLoader.observedAttributes;
      Ext_ComponentLoader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ComponentLoader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ComponentLoader(properties, events) {
    return _Ext_ElementLoader.call(this, properties.concat(Ext_ComponentLoader.PROPERTIES()), events.concat(Ext_ComponentLoader.EVENTS())) || this;
  }

  var _proto = Ext_ComponentLoader.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ElementLoader.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ElementLoader.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ComponentLoader;
}(Ext_ElementLoader);

export { Ext_ComponentLoader as default };