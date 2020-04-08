import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_drag_proxy_None from '../../../Ext/drag/proxy/None.js';

var Ext_drag_proxy_Original = /*#__PURE__*/function (_Ext_drag_proxy_None) {
  _inheritsLoose(Ext_drag_proxy_Original, _Ext_drag_proxy_None);

  Ext_drag_proxy_Original.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_drag_proxy_Original.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_drag_proxy_Original.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_drag_proxy_Original.PROPERTIES());
    return Ext_drag_proxy_None.getProperties(properties);
  };

  Ext_drag_proxy_Original.getEvents = function getEvents(events) {
    events = events.concat(Ext_drag_proxy_Original.EVENTS());
    return Ext_drag_proxy_None.getEvents(events);
  };

  _createClass(Ext_drag_proxy_Original, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_proxy_None.observedAttributes;
      Ext_drag_proxy_Original.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_drag_proxy_Original.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_drag_proxy_Original(properties, events) {
    return _Ext_drag_proxy_None.call(this, properties.concat(Ext_drag_proxy_Original.PROPERTIES()), events.concat(Ext_drag_proxy_Original.EVENTS())) || this;
  }

  var _proto = Ext_drag_proxy_Original.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_proxy_None.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_proxy_None.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_drag_proxy_Original;
}(Ext_drag_proxy_None);

export { Ext_drag_proxy_Original as default };