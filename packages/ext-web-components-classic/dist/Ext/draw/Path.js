import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_draw_Path = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_draw_Path, _Ext_Base);

  Ext_draw_Path.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_draw_Path.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_Path.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_Path.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_draw_Path.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_Path.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_draw_Path, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_draw_Path.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_Path.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_Path(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_draw_Path.PROPERTIES()), events.concat(Ext_draw_Path.EVENTS())) || this;
  }

  var _proto = Ext_draw_Path.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_Path;
}(Ext_Base);

export { Ext_draw_Path as default };