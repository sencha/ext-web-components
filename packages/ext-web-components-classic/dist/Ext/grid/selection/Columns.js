import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_selection_Selection from '../../../Ext/grid/selection/Selection.js';

var Ext_grid_selection_Columns = /*#__PURE__*/function (_Ext_grid_selection_S) {
  _inheritsLoose(Ext_grid_selection_Columns, _Ext_grid_selection_S);

  var _super = _createSuper(Ext_grid_selection_Columns);

  Ext_grid_selection_Columns.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_grid_selection_Columns.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_selection_Columns.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_Columns.PROPERTIES());
    return Ext_grid_selection_Selection.getProperties(properties);
  };

  Ext_grid_selection_Columns.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_selection_Columns.EVENTS());
    return Ext_grid_selection_Selection.getEvents(events);
  };

  _createClass(Ext_grid_selection_Columns, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_selection_S.observedAttributes;
      Ext_grid_selection_Columns.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_selection_Columns.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_selection_Columns(properties, events) {
    return _Ext_grid_selection_S.call(this, properties.concat(Ext_grid_selection_Columns.PROPERTIES()), events.concat(Ext_grid_selection_Columns.EVENTS())) || this;
  }

  var _proto = Ext_grid_selection_Columns.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_selection_S.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_selection_S.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_selection_Columns;
}(Ext_grid_selection_Selection);

export { Ext_grid_selection_Columns as default };