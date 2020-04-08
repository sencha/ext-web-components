import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_view_BoundListKeyNav from '../../Ext/view/BoundListKeyNav.js';

var Ext_view_TagKeyNav = /*#__PURE__*/function (_Ext_view_BoundListKe) {
  _inheritsLoose(Ext_view_TagKeyNav, _Ext_view_BoundListKe);

  Ext_view_TagKeyNav.PROPERTIES = function PROPERTIES() {
    return ['boundList', 'listeners'];
  };

  Ext_view_TagKeyNav.EVENTS = function EVENTS() {
    return [{
      name: 'navigate',
      parameters: 'event,keyEvent'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_view_TagKeyNav.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_view_TagKeyNav.PROPERTIES());
    return Ext_view_BoundListKeyNav.getProperties(properties);
  };

  Ext_view_TagKeyNav.getEvents = function getEvents(events) {
    events = events.concat(Ext_view_TagKeyNav.EVENTS());
    return Ext_view_BoundListKeyNav.getEvents(events);
  };

  _createClass(Ext_view_TagKeyNav, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_view_BoundListKe.observedAttributes;
      Ext_view_TagKeyNav.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_view_TagKeyNav.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_view_TagKeyNav(properties, events) {
    return _Ext_view_BoundListKe.call(this, properties.concat(Ext_view_TagKeyNav.PROPERTIES()), events.concat(Ext_view_TagKeyNav.EVENTS())) || this;
  }

  var _proto = Ext_view_TagKeyNav.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_view_BoundListKe.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_view_BoundListKe.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_view_TagKeyNav;
}(Ext_view_BoundListKeyNav);

export { Ext_view_TagKeyNav as default };