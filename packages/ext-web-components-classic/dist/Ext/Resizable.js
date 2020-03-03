import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_Resizable = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_Resizable, _Ext_Base);

  Ext_Resizable.PROPERTIES = function PROPERTIES() {
    return ['constrainTo', 'dynamic', 'handles', 'height', 'heightIncrement', 'listeners', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'pinned', 'preserveRatio', 'target', 'transparent', 'width', 'widthIncrement'];
  };

  Ext_Resizable.EVENTS = function EVENTS() {
    return [{
      name: 'beforeresize',
      parameters: 'sender,width,height,e'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,e'
    }, {
      name: 'resizedrag',
      parameters: 'sender,width,height,e'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_Resizable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Resizable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_Resizable.getEvents = function getEvents(events) {
    events = events.concat(Ext_Resizable.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_Resizable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_Resizable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Resizable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Resizable(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_Resizable.PROPERTIES()), events.concat(Ext_Resizable.EVENTS())) || this;
  }

  var _proto = Ext_Resizable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Resizable;
}(Ext_Base);

export { Ext_Resizable as default };