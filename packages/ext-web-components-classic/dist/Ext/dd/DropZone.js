import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DropTarget from '../../Ext/dd/DropTarget.js';

var Ext_dd_DropZone = /*#__PURE__*/function (_Ext_dd_DropTarget) {
  _inheritsLoose(Ext_dd_DropZone, _Ext_dd_DropTarget);

  Ext_dd_DropZone.PROPERTIES = function PROPERTIES() {
    return ['containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'overClass'];
  };

  Ext_dd_DropZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dd_DropZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DropZone.PROPERTIES());
    return Ext_dd_DropTarget.getProperties(properties);
  };

  Ext_dd_DropZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DropZone.EVENTS());
    return Ext_dd_DropTarget.getEvents(events);
  };

  _createClass(Ext_dd_DropZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DropTarget.observedAttributes;
      Ext_dd_DropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DropZone(properties, events) {
    return _Ext_dd_DropTarget.call(this, properties.concat(Ext_dd_DropZone.PROPERTIES()), events.concat(Ext_dd_DropZone.EVENTS())) || this;
  }

  var _proto = Ext_dd_DropZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DropTarget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DropTarget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DropZone;
}(Ext_dd_DropTarget);

export { Ext_dd_DropZone as default };