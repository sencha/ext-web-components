import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_schema_Association from '../../../Ext/data/schema/Association.js';

var Ext_data_schema_ManyToMany = /*#__PURE__*/function (_Ext_data_schema_Asso) {
  _inheritsLoose(Ext_data_schema_ManyToMany, _Ext_data_schema_Asso);

  var _super = _createSuper(Ext_data_schema_ManyToMany);

  Ext_data_schema_ManyToMany.PROPERTIES = function PROPERTIES() {
    return ['associationKey', 'name'];
  };

  Ext_data_schema_ManyToMany.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_schema_ManyToMany.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_schema_ManyToMany.PROPERTIES());
    return Ext_data_schema_Association.getProperties(properties);
  };

  Ext_data_schema_ManyToMany.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_schema_ManyToMany.EVENTS());
    return Ext_data_schema_Association.getEvents(events);
  };

  _createClass(Ext_data_schema_ManyToMany, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_schema_Asso.observedAttributes;
      Ext_data_schema_ManyToMany.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_schema_ManyToMany.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_schema_ManyToMany(properties, events) {
    return _Ext_data_schema_Asso.call(this, properties.concat(Ext_data_schema_ManyToMany.PROPERTIES()), events.concat(Ext_data_schema_ManyToMany.EVENTS())) || this;
  }

  var _proto = Ext_data_schema_ManyToMany.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_schema_Asso.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_schema_Asso.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_schema_ManyToMany;
}(Ext_data_schema_Association);

export { Ext_data_schema_ManyToMany as default };