import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_tree_Tree_Component from '../../../../Ext/d3/hierarchy/tree/Tree';

var Ext_d3_hierarchy_tree_HorizontalTree_Component =
/*#__PURE__*/
function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(Ext_d3_hierarchy_tree_HorizontalTree_Component, _Ext_d3_hierarchy_tre);

  //events
  //configs
  Ext_d3_hierarchy_tree_HorizontalTree_Component.XTYPE = function XTYPE() {
    return 'd3-tree';
  };

  Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS = function METHODS() {
    return [{
      name: 'alignAfterLayout',
      "function": function _function() {
        return this.ext.alignAfterLayout();
      }
    }, {
      name: 'alignTree',
      "function": function _function() {
        return this.ext.alignTree();
      }
    }];
  };

  _createClass(Ext_d3_hierarchy_tree_HorizontalTree_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_tre.observedAttributes;

      for (var property in Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_tree_HorizontalTree_Component(propertiesobject, methods, events) {
    return _Ext_d3_hierarchy_tre.call(this, Object.assign(propertiesobject, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS()), events.concat(Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS())) || this; //this.XTYPE = Ext_d3_hierarchy_tree_HorizontalTree_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS());
  }

  var _proto = Ext_d3_hierarchy_tree_HorizontalTree_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_tre.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_tre.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_tree_HorizontalTree_Component;
}(Ext_d3_hierarchy_tree_Tree_Component);

export { Ext_d3_hierarchy_tree_HorizontalTree_Component as default };