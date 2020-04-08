import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DragDrop from '../../Ext/dd/DragDrop.js';

var Ext_dd_DDTarget = /*#__PURE__*/function (_Ext_dd_DragDrop) {
  _inheritsLoose(Ext_dd_DDTarget, _Ext_dd_DragDrop);

  Ext_dd_DDTarget.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dd_DDTarget.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dd_DDTarget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DDTarget.PROPERTIES());
    return Ext_dd_DragDrop.getProperties(properties);
  };

  Ext_dd_DDTarget.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DDTarget.EVENTS());
    return Ext_dd_DragDrop.getEvents(events);
  };

  _createClass(Ext_dd_DDTarget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DragDrop.observedAttributes;
      Ext_dd_DDTarget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DDTarget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DDTarget(properties, events) {
    return _Ext_dd_DragDrop.call(this, properties.concat(Ext_dd_DDTarget.PROPERTIES()), events.concat(Ext_dd_DDTarget.EVENTS())) || this;
  }

  var _proto = Ext_dd_DDTarget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DragDrop.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DragDrop.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DDTarget;
}(Ext_dd_DragDrop);

export { Ext_dd_DDTarget as default };