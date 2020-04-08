import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_drag_Info = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_drag_Info, _Ext_Base);

  Ext_drag_Info.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_drag_Info.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_drag_Info.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_drag_Info.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_drag_Info.getEvents = function getEvents(events) {
    events = events.concat(Ext_drag_Info.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_drag_Info, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_drag_Info.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_drag_Info.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_drag_Info(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_drag_Info.PROPERTIES()), events.concat(Ext_drag_Info.EVENTS())) || this;
  }

  var _proto = Ext_drag_Info.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_drag_Info;
}(Ext_Base);

export { Ext_drag_Info as default };