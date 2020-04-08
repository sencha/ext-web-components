import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DDProxy from '../../Ext/dd/DDProxy.js';

var Ext_dd_DragSource = /*#__PURE__*/function (_Ext_dd_DDProxy) {
  _inheritsLoose(Ext_dd_DragSource, _Ext_dd_DDProxy);

  Ext_dd_DragSource.PROPERTIES = function PROPERTIES() {
    return ['animRepair', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'repairHighlightColor'];
  };

  Ext_dd_DragSource.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dd_DragSource.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DragSource.PROPERTIES());
    return Ext_dd_DDProxy.getProperties(properties);
  };

  Ext_dd_DragSource.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DragSource.EVENTS());
    return Ext_dd_DDProxy.getEvents(events);
  };

  _createClass(Ext_dd_DragSource, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DDProxy.observedAttributes;
      Ext_dd_DragSource.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DragSource.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DragSource(properties, events) {
    return _Ext_dd_DDProxy.call(this, properties.concat(Ext_dd_DragSource.PROPERTIES()), events.concat(Ext_dd_DragSource.EVENTS())) || this;
  }

  var _proto = Ext_dd_DragSource.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DDProxy.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DDProxy.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DragSource;
}(Ext_dd_DDProxy);

export { Ext_dd_DragSource as default };