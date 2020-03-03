import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DragTracker from '../../Ext/dd/DragTracker.js';

var Ext_resizer_SplitterTracker = /*#__PURE__*/function (_Ext_dd_DragTracker) {
  _inheritsLoose(Ext_resizer_SplitterTracker, _Ext_dd_DragTracker);

  Ext_resizer_SplitterTracker.PROPERTIES = function PROPERTIES() {
    return ['autoStart', 'constrainTo', 'delegate', 'el', 'listeners', 'overCls', 'preventDefault', 'stopEvent', 'tolerance', 'trackOver'];
  };

  Ext_resizer_SplitterTracker.EVENTS = function EVENTS() {
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

  Ext_resizer_SplitterTracker.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_resizer_SplitterTracker.PROPERTIES());
    return Ext_dd_DragTracker.getProperties(properties);
  };

  Ext_resizer_SplitterTracker.getEvents = function getEvents(events) {
    events = events.concat(Ext_resizer_SplitterTracker.EVENTS());
    return Ext_dd_DragTracker.getEvents(events);
  };

  _createClass(Ext_resizer_SplitterTracker, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DragTracker.observedAttributes;
      Ext_resizer_SplitterTracker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_resizer_SplitterTracker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_resizer_SplitterTracker(properties, events) {
    return _Ext_dd_DragTracker.call(this, properties.concat(Ext_resizer_SplitterTracker.PROPERTIES()), events.concat(Ext_resizer_SplitterTracker.EVENTS())) || this;
  }

  var _proto = Ext_resizer_SplitterTracker.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DragTracker.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DragTracker.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_resizer_SplitterTracker;
}(Ext_dd_DragTracker);

export { Ext_resizer_SplitterTracker as default };