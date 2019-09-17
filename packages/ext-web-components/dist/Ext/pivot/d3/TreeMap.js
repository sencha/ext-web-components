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

  function Ext_pivot_d3_TreeMap_Component(propertiesobject, methods, events) {
    return _Ext_d3_hierarchy_Tre.call(this, Object.assign(propertiesobject, Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_d3_TreeMap_Component.METHODS()), events.concat(Ext_pivot_d3_TreeMap_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_d3_TreeMap_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_d3_TreeMap_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_d3_TreeMap_Component.EVENTS());
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