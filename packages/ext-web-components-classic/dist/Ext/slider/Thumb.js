import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_slider_Thumb = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_slider_Thumb, _Ext_Base);

  Ext_slider_Thumb.PROPERTIES = function PROPERTIES() {
    return ['constrain', 'slider'];
  };

  Ext_slider_Thumb.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_slider_Thumb.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_slider_Thumb.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_slider_Thumb.getEvents = function getEvents(events) {
    events = events.concat(Ext_slider_Thumb.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_slider_Thumb, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_slider_Thumb.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_slider_Thumb.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_slider_Thumb(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_slider_Thumb.PROPERTIES()), events.concat(Ext_slider_Thumb.EVENTS())) || this;
  }

  var _proto = Ext_slider_Thumb.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_slider_Thumb;
}(Ext_Base);

export { Ext_slider_Thumb as default };