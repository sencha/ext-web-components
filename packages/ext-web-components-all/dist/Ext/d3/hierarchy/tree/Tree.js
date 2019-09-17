import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Hierarchy_Component from '../../../../Ext/d3/hierarchy/Hierarchy';

var Ext_d3_hierarchy_tree_Tree_Component =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Hie) {
  _inheritsLoose(Ext_d3_hierarchy_tree_Tree_Component, _Ext_d3_hierarchy_Hie);

  //events
  //configs
  Ext_d3_hierarchy_tree_Tree_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_d3_hierarchy_tree_Tree_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "depth": ["number"],
      "nodeRadius": ["number"],
      "nodeSize": ["number[]"]
    };
  };

  Ext_d3_hierarchy_tree_Tree_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_hierarchy_tree_Tree_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_d3_hierarchy_tree_Tree_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_Hie.observedAttributes;

      for (var property in Ext_d3_hierarchy_tree_Tree_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_hierarchy_tree_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_tree_Tree_Component() {
    var _this;

    _this = _Ext_d3_hierarchy_Hie.call(this) || this;
    _this.XTYPE = Ext_d3_hierarchy_tree_Tree_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_hierarchy_tree_Tree_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_d3_hierarchy_tree_Tree_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_d3_hierarchy_tree_Tree_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_hierarchy_tree_Tree_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_Hie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_Hie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_tree_Tree_Component;
}(Ext_d3_hierarchy_Hierarchy_Component);

export { Ext_d3_hierarchy_tree_Tree_Component as default };