import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_boxOverflow_None from '../../../Ext/layout/container/boxOverflow/None.js';

var Ext_layout_boxOverflow_Scroller = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_boxOverflow_Scroller, _Ext_layout_container);

  Ext_layout_boxOverflow_Scroller.PROPERTIES = function PROPERTIES() {
    return ['animateScroll', 'listeners', 'scrollDuration', 'scrollIncrement', 'scrollRepeatInterval', 'wheelIncrement'];
  };

  Ext_layout_boxOverflow_Scroller.EVENTS = function EVENTS() {
    return [{
      name: 'scroll',
      parameters: 'scroller,newPosition'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_boxOverflow_Scroller.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_boxOverflow_Scroller.PROPERTIES());
    return Ext_layout_container_boxOverflow_None.getProperties(properties);
  };

  Ext_layout_boxOverflow_Scroller.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_boxOverflow_Scroller.EVENTS());
    return Ext_layout_container_boxOverflow_None.getEvents(events);
  };

  _createClass(Ext_layout_boxOverflow_Scroller, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_boxOverflow_Scroller.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_boxOverflow_Scroller.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_boxOverflow_Scroller(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_boxOverflow_Scroller.PROPERTIES()), events.concat(Ext_layout_boxOverflow_Scroller.EVENTS())) || this;
  }

  var _proto = Ext_layout_boxOverflow_Scroller.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_boxOverflow_Scroller;
}(Ext_layout_container_boxOverflow_None);

export { Ext_layout_boxOverflow_Scroller as default };