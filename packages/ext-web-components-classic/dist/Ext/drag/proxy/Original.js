import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_drag_proxy_None from '../../../Ext/drag/proxy/None.js';

var Ext_drag_proxy_Original = /*#__PURE__*/function (_Ext_drag_proxy_None) {
  _inheritsLoose(Ext_drag_proxy_Original, _Ext_drag_proxy_None);

  var _super = _createSuper(Ext_drag_proxy_Original);

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