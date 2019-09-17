import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_TreeMap_Component from '../../../Ext/d3/hierarchy/TreeMap';

var Ext_pivot_d3_TreeMap_Component =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Tre) {
  _inheritsLoose(Ext_pivot_d3_TreeMap_Component, _Ext_d3_hierarchy_Tre);

  //events
  //configs
  Ext_pivot_d3_TreeMap_Component.XTYPE = function XTYPE() {
    return 'pivottreemap';
  };

  Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoExpand": ["boolean"],
      "matrix": ["Ext.pivot.matrix.Base"]
    };
  };

  Ext_pivot_d3_TreeMap_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_d3_TreeMap_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_d3_TreeMap_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_Tre.observedAttributes;

      for (var property in Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_d3_TreeMap_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_d3_TreeMap_Component() {
    var _this;

    _this = _Ext_d3_hierarchy_Tre.call(this) || this;
    _this.XTYPE = Ext_pivot_d3_TreeMap_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_pivot_d3_TreeMap_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_pivot_d3_TreeMap_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_pivot_d3_TreeMap_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_Tre.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_Tre.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_d3_TreeMap_Component;
}(Ext_d3_hierarchy_TreeMap_Component);

export { Ext_pivot_d3_TreeMap_Component as default };