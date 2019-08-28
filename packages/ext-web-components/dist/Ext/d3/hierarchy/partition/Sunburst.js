import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_partition_Partition_Component from '../../../../Ext/d3/hierarchy/partition/Partition';

var Ext_d3_hierarchy_partition_Sunburst_Component =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(Ext_d3_hierarchy_partition_Sunburst_Component, _Ext_d3_hierarchy_par);

  //events
  //configs
  Ext_d3_hierarchy_partition_Sunburst_Component.XTYPE = function XTYPE() {
    return 'd3-sunburst';
  };

  Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "textPadding": ["array"],
      "zoomParentDotRadius": ["number"]
    };
  };

  Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_hierarchy_partition_Sunburst_Component.METHODS = function METHODS() {
    return [{
      name: 'isBBoxInSlice',
      "function": function _function(bbox, a1, a2, r1, r2, px, py) {
        return this.ext.isBBoxInSlice(bbox, a1, a2, r1, r2, px, py);
      }
    }, {
      name: 'onSceneResize',
      "function": function _function(scene, rect) {
        return this.ext.onSceneResize(scene, rect);
      }
    }, {
      name: 'positionTextFn',
      "function": function _function(selection) {
        return this.ext.positionTextFn(selection);
      }
    }, {
      name: 'textVisibilityFn',
      "function": function _function(selection) {
        return this.ext.textVisibilityFn(selection);
      }
    }, {
      name: 'zoomInNode',
      "function": function _function(record, instantly) {
        return this.ext.zoomInNode(record, instantly);
      }
    }];
  };

  _createClass(Ext_d3_hierarchy_partition_Sunburst_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_par.observedAttributes;

      for (var property in Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_partition_Sunburst_Component() {
    var _this;

    _this = _Ext_d3_hierarchy_par.call(this, Ext_d3_hierarchy_partition_Sunburst_Component.METHODS(), Ext_d3_hierarchy_partition_Sunburst_Component.XTYPE(), Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT(), Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_hierarchy_partition_Sunburst_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_hierarchy_partition_Sunburst_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_hierarchy_partition_Sunburst_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_par.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_par.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_partition_Sunburst_Component;
}(Ext_d3_hierarchy_partition_Partition_Component);

export { Ext_d3_hierarchy_partition_Sunburst_Component as default };