import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DragSource from '../../Ext/dd/DragSource.js';

var Ext_dd_DragZone = /*#__PURE__*/function (_Ext_dd_DragSource) {
  _inheritsLoose(Ext_dd_DragZone, _Ext_dd_DragSource);

  Ext_dd_DragZone.PROPERTIES = function PROPERTIES() {
    return ['animRepair', 'containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'repairHighlightColor', 'scrollEl'];
  };

  Ext_dd_DragZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dd_DragZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DragZone.PROPERTIES());
    return Ext_dd_DragSource.getProperties(properties);
  };

  Ext_dd_DragZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DragZone.EVENTS());
    return Ext_dd_DragSource.getEvents(events);
  };

  _createClass(Ext_dd_DragZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DragSource.observedAttributes;
      Ext_dd_DragZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DragZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DragZone(properties, events) {
    return _Ext_dd_DragSource.call(this, properties.concat(Ext_dd_DragZone.PROPERTIES()), events.concat(Ext_dd_DragZone.EVENTS())) || this;
  }

  var _proto = Ext_dd_DragZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DragSource.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DragSource.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DragZone;
}(Ext_dd_DragSource);

export { Ext_dd_DragZone as default };