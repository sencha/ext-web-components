import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_dd_DragDropManager = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dd_DragDropManager, _Ext_Base);

  Ext_dd_DragDropManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dd_DragDropManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dd_DragDropManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DragDropManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dd_DragDropManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DragDropManager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dd_DragDropManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dd_DragDropManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DragDropManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DragDropManager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dd_DragDropManager.PROPERTIES()), events.concat(Ext_dd_DragDropManager.EVENTS())) || this;
  }

  var _proto = Ext_dd_DragDropManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DragDropManager;
}(Ext_Base);

export { Ext_dd_DragDropManager as default };