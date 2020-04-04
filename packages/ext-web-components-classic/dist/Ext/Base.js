import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import WebComponentsBaseComponent from '../common/webcomponentsbase.js';

var Ext_Base = /*#__PURE__*/function (_WebComponentsBaseCom) {
  _inheritsLoose(Ext_Base, _WebComponentsBaseCom);

  var _super = _createSuper(Ext_Base);

  Ext_Base.PROPERTIES = function PROPERTIES() {
    return ['badgeText', 'group', 'value', 'createExtComponentDefer', 'createExtComponent', 'closable', 'title', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'summaryRenderer', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas'];
  };

  Ext_Base.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_Base.getProperties = function getProperties(properties) {
    return properties.concat(Ext_Base.PROPERTIES);
  };

  Ext_Base.getEvents = function getEvents(events) {
    return events.concat(Ext_Base.EVENTS);
  };

  _createClass(Ext_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = []; //for (var property in Ext_Base.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}
      //Ext_Base.EVENTS().forEach(function (eventparameter, index, array) {
      //    attrs.push('on' + eventparameter.name)
      //})

      Ext_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Base(properties, events) {
    return _WebComponentsBaseCom.call(this, properties.concat(Ext_Base.PROPERTIES()), events.concat(Ext_Base.EVENTS())) || this;
  }

  return Ext_Base;
}(WebComponentsBaseComponent);

export { Ext_Base as default };