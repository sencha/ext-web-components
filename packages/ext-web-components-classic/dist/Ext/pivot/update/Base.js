import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_mixin_Observable from '../../../Ext/mixin/Observable.js';

var Ext_pivot_update_Base = /*#__PURE__*/function (_Ext_mixin_Observable) {
  _inheritsLoose(Ext_pivot_update_Base, _Ext_mixin_Observable);

  var _super = _createSuper(Ext_pivot_update_Base);

  Ext_pivot_update_Base.PROPERTIES = function PROPERTIES() {
    return ['dataIndex', 'leftKey', 'listeners', 'matrix', 'topKey', 'value'];
  };

  Ext_pivot_update_Base.EVENTS = function EVENTS() {
    return [{
      name: 'beforeupdate',
      parameters: 'updater'
    }, {
      name: 'update',
      parameters: 'updater'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_update_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_update_Base.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  };

  Ext_pivot_update_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_update_Base.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  };

  _createClass(Ext_pivot_update_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_mixin_Observable.observedAttributes;
      Ext_pivot_update_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_update_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_update_Base(properties, events) {
    return _Ext_mixin_Observable.call(this, properties.concat(Ext_pivot_update_Base.PROPERTIES()), events.concat(Ext_pivot_update_Base.EVENTS())) || this;
  }

  var _proto = Ext_pivot_update_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_mixin_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_mixin_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_update_Base;
}(Ext_mixin_Observable);

export { Ext_pivot_update_Base as default };