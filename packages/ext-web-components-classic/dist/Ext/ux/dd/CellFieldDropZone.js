import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dd_DropZone from '../../../Ext/dd/DropZone.js';

var Ext_ux_dd_CellFieldDropZone = /*#__PURE__*/function (_Ext_dd_DropZone) {
  _inheritsLoose(Ext_ux_dd_CellFieldDropZone, _Ext_dd_DropZone);

  var _super = _createSuper(Ext_ux_dd_CellFieldDropZone);

  Ext_ux_dd_CellFieldDropZone.PROPERTIES = function PROPERTIES() {
    return ['containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'onCellDrop', 'overClass'];
  };

  Ext_ux_dd_CellFieldDropZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_dd_CellFieldDropZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_dd_CellFieldDropZone.PROPERTIES());
    return Ext_dd_DropZone.getProperties(properties);
  };

  Ext_ux_dd_CellFieldDropZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_dd_CellFieldDropZone.EVENTS());
    return Ext_dd_DropZone.getEvents(events);
  };

  _createClass(Ext_ux_dd_CellFieldDropZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DropZone.observedAttributes;
      Ext_ux_dd_CellFieldDropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_dd_CellFieldDropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_dd_CellFieldDropZone(properties, events) {
    return _Ext_dd_DropZone.call(this, properties.concat(Ext_ux_dd_CellFieldDropZone.PROPERTIES()), events.concat(Ext_ux_dd_CellFieldDropZone.EVENTS())) || this;
  }

  var _proto = Ext_ux_dd_CellFieldDropZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DropZone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DropZone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_dd_CellFieldDropZone;
}(Ext_dd_DropZone);

export { Ext_ux_dd_CellFieldDropZone as default };