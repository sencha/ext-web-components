import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_view_NavigationModel from '../../Ext/view/NavigationModel.js';

var Ext_view_BoundListKeyNav = /*#__PURE__*/function (_Ext_view_NavigationM) {
  _inheritsLoose(Ext_view_BoundListKeyNav, _Ext_view_NavigationM);

  var _super = _createSuper(Ext_view_BoundListKeyNav);

  Ext_view_BoundListKeyNav.PROPERTIES = function PROPERTIES() {
    return ['boundList', 'listeners'];
  };

  Ext_view_BoundListKeyNav.EVENTS = function EVENTS() {
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

  Ext_view_BoundListKeyNav.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_view_BoundListKeyNav.PROPERTIES());
    return Ext_view_NavigationModel.getProperties(properties);
  };

  Ext_view_BoundListKeyNav.getEvents = function getEvents(events) {
    events = events.concat(Ext_view_BoundListKeyNav.EVENTS());
    return Ext_view_NavigationModel.getEvents(events);
  };

  _createClass(Ext_view_BoundListKeyNav, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_view_NavigationM.observedAttributes;
      Ext_view_BoundListKeyNav.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_view_BoundListKeyNav.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_view_BoundListKeyNav(properties, events) {
    return _Ext_view_NavigationM.call(this, properties.concat(Ext_view_BoundListKeyNav.PROPERTIES()), events.concat(Ext_view_BoundListKeyNav.EVENTS())) || this;
  }

  var _proto = Ext_view_BoundListKeyNav.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_view_NavigationM.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_view_NavigationM.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_view_BoundListKeyNav;
}(Ext_view_NavigationModel);

export { Ext_view_BoundListKeyNav as default };