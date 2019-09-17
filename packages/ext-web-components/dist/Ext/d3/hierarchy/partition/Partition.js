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

  function Ext_d3_hierarchy_partition_Partition_Component(propertiesobject, methods, events) {
    return _Ext_d3_hierarchy_Hie.call(this, Object.assign(propertiesobject, Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_d3_hierarchy_partition_Partition_Component.METHODS()), events.concat(Ext_d3_hierarchy_partition_Partition_Component.EVENTS())) || this; //this.XTYPE = Ext_d3_hierarchy_partition_Partition_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_d3_hierarchy_partition_Partition_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_d3_hierarchy_partition_Partition_Component.EVENTS());
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