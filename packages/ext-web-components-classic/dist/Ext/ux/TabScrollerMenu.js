import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_ux_TabScrollerMenu = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_ux_TabScrollerMenu, _Ext_Base);

  Ext_ux_TabScrollerMenu.PROPERTIES = function PROPERTIES() {
    return ['maxText', 'menuPrefixText', 'pageSize'];
  };

  Ext_ux_TabScrollerMenu.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_TabScrollerMenu.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_TabScrollerMenu.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ux_TabScrollerMenu.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_TabScrollerMenu.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ux_TabScrollerMenu, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ux_TabScrollerMenu.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_TabScrollerMenu.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_TabScrollerMenu(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ux_TabScrollerMenu.PROPERTIES()), events.concat(Ext_ux_TabScrollerMenu.EVENTS())) || this;
  }

  var _proto = Ext_ux_TabScrollerMenu.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_TabScrollerMenu;
}(Ext_Base);

export { Ext_ux_TabScrollerMenu as default };