import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_draw_Draw = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_draw_Draw, _Ext_Base);

  Ext_draw_Draw.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_draw_Draw.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_Draw.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_Draw.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_draw_Draw.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_Draw.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_draw_Draw, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_draw_Draw.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_Draw.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_Draw(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_draw_Draw.PROPERTIES()), events.concat(Ext_draw_Draw.EVENTS())) || this;
  }

  var _proto = Ext_draw_Draw.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_Draw;
}(Ext_Base);

export { Ext_draw_Draw as default };