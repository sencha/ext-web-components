import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Model from '../../../../Ext/data/Model.js';

var Ext_chart_legend_store_Item = /*#__PURE__*/function (_Ext_data_Model) {
  _inheritsLoose(Ext_chart_legend_store_Item, _Ext_data_Model);

  Ext_chart_legend_store_Item.PROPERTIES = function PROPERTIES() {
    return ['belongsTo', 'clientIdProperty', 'convertOnSet', 'fields', 'hasMany', 'hasOne', 'identifier', 'idProperty', 'manyToMany', 'proxy', 'schema', 'summary', 'validationSeparator', 'validators', 'versionProperty'];
  };

  Ext_chart_legend_store_Item.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_legend_store_Item.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_legend_store_Item.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  };

  Ext_chart_legend_store_Item.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_legend_store_Item.EVENTS());
    return Ext_data_Model.getEvents(events);
  };

  _createClass(Ext_chart_legend_store_Item, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Model.observedAttributes;
      Ext_chart_legend_store_Item.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_legend_store_Item.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_legend_store_Item(properties, events) {
    return _Ext_data_Model.call(this, properties.concat(Ext_chart_legend_store_Item.PROPERTIES()), events.concat(Ext_chart_legend_store_Item.EVENTS())) || this;
  }

  var _proto = Ext_chart_legend_store_Item.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_legend_store_Item;
}(Ext_data_Model);

export { Ext_chart_legend_store_Item as default };