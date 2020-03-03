import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_resizer_SplitterTracker from '../../../Ext/resizer/SplitterTracker.js';

var Ext_layout_container_ColumnSplitterTracker = /*#__PURE__*/function (_Ext_resizer_Splitter) {
  _inheritsLoose(Ext_layout_container_ColumnSplitterTracker, _Ext_resizer_Splitter);

  Ext_layout_container_ColumnSplitterTracker.PROPERTIES = function PROPERTIES() {
    return ['autoStart', 'constrainTo', 'delegate', 'el', 'listeners', 'overCls', 'preventDefault', 'stopEvent', 'tolerance', 'trackOver'];
  };

  Ext_layout_container_ColumnSplitterTracker.EVENTS = function EVENTS() {
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

  Ext_layout_container_ColumnSplitterTracker.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_ColumnSplitterTracker.PROPERTIES());
    return Ext_resizer_SplitterTracker.getProperties(properties);
  };

  Ext_layout_container_ColumnSplitterTracker.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_ColumnSplitterTracker.EVENTS());
    return Ext_resizer_SplitterTracker.getEvents(events);
  };

  _createClass(Ext_layout_container_ColumnSplitterTracker, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_resizer_Splitter.observedAttributes;
      Ext_layout_container_ColumnSplitterTracker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_ColumnSplitterTracker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_ColumnSplitterTracker(properties, events) {
    return _Ext_resizer_Splitter.call(this, properties.concat(Ext_layout_container_ColumnSplitterTracker.PROPERTIES()), events.concat(Ext_layout_container_ColumnSplitterTracker.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_ColumnSplitterTracker.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_resizer_Splitter.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_resizer_Splitter.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_ColumnSplitterTracker;
}(Ext_resizer_SplitterTracker);

export { Ext_layout_container_ColumnSplitterTracker as default };