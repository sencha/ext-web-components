import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_dd_DragTracker = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dd_DragTracker, _Ext_Base);

  Ext_dd_DragTracker.PROPERTIES = function PROPERTIES() {
    return ['autoStart', 'constrainTo', 'delegate', 'el', 'listeners', 'overCls', 'preventDefault', 'stopEvent', 'tolerance', 'trackOver'];
  };

  Ext_dd_DragTracker.EVENTS = function EVENTS() {
    return [{
      name: 'beforedragstart',
      parameters: 'sender,e'
    }, {
      name: 'drag',
      parameters: 'sender,e'
    }, {
      name: 'dragend',
      parameters: 'sender,e'
    }, {
      name: 'dragstart',
      parameters: 'sender,e'
    }, {
      name: 'mousedown',
      parameters: 'sender,e'
    }, {
      name: 'mousemove',
      parameters: 'sender,e'
    }, {
      name: 'mouseout',
      parameters: 'sender,e'
    }, {
      name: 'mouseover',
      parameters: 'sender,e,target'
    }, {
      name: 'mouseup',
      parameters: 'sender,e'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dd_DragTracker.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DragTracker.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dd_DragTracker.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DragTracker.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dd_DragTracker, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dd_DragTracker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DragTracker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DragTracker(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dd_DragTracker.PROPERTIES()), events.concat(Ext_dd_DragTracker.EVENTS())) || this;
  }

  var _proto = Ext_dd_DragTracker.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DragTracker;
}(Ext_Base);

export { Ext_dd_DragTracker as default };