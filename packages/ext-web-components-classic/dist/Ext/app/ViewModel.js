import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Base from '../../Ext/Base.js';

var Ext_app_ViewModel = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_app_ViewModel, _Ext_Base);

  var _super = _createSuper(Ext_app_ViewModel);

  Ext_app_ViewModel.PROPERTIES = function PROPERTIES() {
    return ['data', 'formulas', 'links', 'parent', 'root', 'scheduler', 'schema', 'session', 'stores', 'view'];
  };

  Ext_app_ViewModel.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_ViewModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_ViewModel.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_app_ViewModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_ViewModel.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_app_ViewModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_app_ViewModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_ViewModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_ViewModel(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_app_ViewModel.PROPERTIES()), events.concat(Ext_app_ViewModel.EVENTS())) || this;
  }

  var _proto = Ext_app_ViewModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_ViewModel;
}(Ext_Base);

export { Ext_app_ViewModel as default };