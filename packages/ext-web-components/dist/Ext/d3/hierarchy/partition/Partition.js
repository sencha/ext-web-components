import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Hierarchy_Component from '../../../../Ext/d3/hierarchy/Hierarchy';

var Ext_d3_hierarchy_partition_Partition_Component =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Hie) {
  _inheritsLoose(Ext_d3_hierarchy_partition_Partition_Component, _Ext_d3_hierarchy_Hie);

  //events
  //configs
  Ext_d3_hierarchy_partition_Partition_Component.XTYPE = function XTYPE() {
    return 'd3-partition';
  };

  Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_d3_hierarchy_partition_Partition_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_hierarchy_partition_Partition_Component.METHODS = function METHODS() {
    return [{
      name: 'resetZoom',
      "function": function _function(instantly) {
        return this.ext.resetZoom(instantly);
      }
    }];
  };

  _createClass(Ext_d3_hierarchy_partition_Partition_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_Hie.observedAttributes;

      for (var property in Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_hierarchy_partition_Partition_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_partition_Partition_Component() {
    var _this;

    _this = _Ext_d3_hierarchy_Hie.call(this, Ext_d3_hierarchy_partition_Partition_Component.METHODS(), Ext_d3_hierarchy_partition_Partition_Component.XTYPE(), Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT(), Ext_d3_hierarchy_partition_Partition_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_hierarchy_partition_Partition_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_hierarchy_partition_Partition_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_hierarchy_partition_Partition_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_hierarchy_partition_Partition_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_Hie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_Hie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_partition_Partition_Component;
}(Ext_d3_hierarchy_Hierarchy_Component);

export { Ext_d3_hierarchy_partition_Partition_Component as default };