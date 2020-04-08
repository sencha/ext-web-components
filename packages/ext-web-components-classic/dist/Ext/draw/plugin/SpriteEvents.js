import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_draw_plugin_SpriteEvents = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_draw_plugin_SpriteEvents, _Ext_plugin_Abstract);

  Ext_draw_plugin_SpriteEvents.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_draw_plugin_SpriteEvents.EVENTS = function EVENTS() {
    return [{
      name: 'spriteclick',
      parameters: 'sprite,event'
    }, {
      name: 'spritedblclick',
      parameters: 'sprite,event'
    }, {
      name: 'spritemousedown',
      parameters: 'sprite,event'
    }, {
      name: 'spritemousemove',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseout',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseover',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseup',
      parameters: 'sprite,event'
    }, {
      name: 'spritetap',
      parameters: 'sprite,event'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_plugin_SpriteEvents.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_plugin_SpriteEvents.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_draw_plugin_SpriteEvents.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_plugin_SpriteEvents.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_draw_plugin_SpriteEvents, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_draw_plugin_SpriteEvents.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_plugin_SpriteEvents.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_plugin_SpriteEvents(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_draw_plugin_SpriteEvents.PROPERTIES()), events.concat(Ext_draw_plugin_SpriteEvents.EVENTS())) || this;
  }

  var _proto = Ext_draw_plugin_SpriteEvents.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_plugin_SpriteEvents;
}(Ext_plugin_Abstract);

export { Ext_draw_plugin_SpriteEvents as default };