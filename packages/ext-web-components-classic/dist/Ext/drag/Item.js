import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_drag_Item = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_drag_Item, _Ext_Base);

  Ext_drag_Item.PROPERTIES = function PROPERTIES() {
    return ['autoDestroy', 'component', 'element', 'groups', 'listeners'];
  };

  Ext_drag_Item.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_drag_Item.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_drag_Item.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_drag_Item.getEvents = function getEvents(events) {
    events = events.concat(Ext_drag_Item.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_drag_Item, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_drag_Item.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_drag_Item.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_drag_Item(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_drag_Item.PROPERTIES()), events.concat(Ext_drag_Item.EVENTS())) || this;
  }

  var _proto = Ext_drag_Item.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_drag_Item;
}(Ext_Base);

export { Ext_drag_Item as default };