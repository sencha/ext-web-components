import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

var Ext_ux_BoxReorderer = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_ux_BoxReorderer, _Ext_plugin_Abstract);

  Ext_ux_BoxReorderer.PROPERTIES = function PROPERTIES() {
    return ['animate', 'id', 'itemSelector', 'listeners', 'stateEvents'];
  };

  Ext_ux_BoxReorderer.EVENTS = function EVENTS() {
    return [{
      name: 'ChangeIndex',
      parameters: 'sender,container,dragCmp,startIdx,idx'
    }, {
      name: 'Drag',
      parameters: 'sender,container,dragCmp,startIdx,idx'
    }, {
      name: 'Drop',
      parameters: 'sender,container,dragCmp,startIdx,idx'
    }, {
      name: 'StartDrag',
      parameters: 'sender,container,dragCmp,idx'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_BoxReorderer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_BoxReorderer.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_ux_BoxReorderer.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_BoxReorderer.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_ux_BoxReorderer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_ux_BoxReorderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_BoxReorderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_BoxReorderer(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_ux_BoxReorderer.PROPERTIES()), events.concat(Ext_ux_BoxReorderer.EVENTS())) || this;
  }

  var _proto = Ext_ux_BoxReorderer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_BoxReorderer;
}(Ext_plugin_Abstract);

export { Ext_ux_BoxReorderer as default };