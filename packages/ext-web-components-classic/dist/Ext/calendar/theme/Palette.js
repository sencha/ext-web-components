import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_calendar_theme_Palette = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_calendar_theme_Palette, _Ext_Base);

  Ext_calendar_theme_Palette.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_calendar_theme_Palette.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_theme_Palette.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_theme_Palette.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_calendar_theme_Palette.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_theme_Palette.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_calendar_theme_Palette, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_calendar_theme_Palette.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_theme_Palette.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_theme_Palette(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_calendar_theme_Palette.PROPERTIES()), events.concat(Ext_calendar_theme_Palette.EVENTS())) || this;
  }

  var _proto = Ext_calendar_theme_Palette.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_theme_Palette;
}(Ext_Base);

export { Ext_calendar_theme_Palette as default };