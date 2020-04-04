import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_Observable from '../../../Ext/util/Observable.js';

var Ext_grid_feature_GroupStore = /*#__PURE__*/function (_Ext_util_Observable) {
  _inheritsLoose(Ext_grid_feature_GroupStore, _Ext_util_Observable);

  var _super = _createSuper(Ext_grid_feature_GroupStore);

  Ext_grid_feature_GroupStore.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_grid_feature_GroupStore.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_feature_GroupStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_GroupStore.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  };

  Ext_grid_feature_GroupStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_GroupStore.EVENTS());
    return Ext_util_Observable.getEvents(events);
  };

  _createClass(Ext_grid_feature_GroupStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Observable.observedAttributes;
      Ext_grid_feature_GroupStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_GroupStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_feature_GroupStore(properties, events) {
    return _Ext_util_Observable.call(this, properties.concat(Ext_grid_feature_GroupStore.PROPERTIES()), events.concat(Ext_grid_feature_GroupStore.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_GroupStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_feature_GroupStore;
}(Ext_util_Observable);

export { Ext_grid_feature_GroupStore as default };