import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_drag_proxy_None from '../../../Ext/drag/proxy/None.js';

var Ext_drag_proxy_Placeholder = /*#__PURE__*/function (_Ext_drag_proxy_None) {
  _inheritsLoose(Ext_drag_proxy_Placeholder, _Ext_drag_proxy_None);

  Ext_drag_proxy_Placeholder.PROPERTIES = function PROPERTIES() {
    return ['cls', 'cursorOffset', 'html', 'invalidCls', 'validCls'];
  };

  Ext_drag_proxy_Placeholder.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_drag_proxy_Placeholder.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_drag_proxy_Placeholder.PROPERTIES());
    return Ext_drag_proxy_None.getProperties(properties);
  };

  Ext_drag_proxy_Placeholder.getEvents = function getEvents(events) {
    events = events.concat(Ext_drag_proxy_Placeholder.EVENTS());
    return Ext_drag_proxy_None.getEvents(events);
  };

  _createClass(Ext_drag_proxy_Placeholder, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_proxy_None.observedAttributes;
      Ext_drag_proxy_Placeholder.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_drag_proxy_Placeholder.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_drag_proxy_Placeholder(properties, events) {
    return _Ext_drag_proxy_None.call(this, properties.concat(Ext_drag_proxy_Placeholder.PROPERTIES()), events.concat(Ext_drag_proxy_Placeholder.EVENTS())) || this;
  }

  var _proto = Ext_drag_proxy_Placeholder.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_proxy_None.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_proxy_None.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_drag_proxy_Placeholder;
}(Ext_drag_proxy_None);

export { Ext_drag_proxy_Placeholder as default };