import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_HeatMap_Component from '../../../Ext/d3/HeatMap';

var Ext_pivot_d3_HeatMap_Component =
/*#__PURE__*/
function (_Ext_d3_HeatMap_Compo) {
  _inheritsLoose(Ext_pivot_d3_HeatMap_Component, _Ext_d3_HeatMap_Compo);

  //events
  //configs
  Ext_pivot_d3_HeatMap_Component.XTYPE = function XTYPE() {
    return 'pivotheatmap';
  };

  Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultFormatter": ["string"],
      "matrix": ["Ext.pivot.matrix.Base"]
    };
  };

  Ext_pivot_d3_HeatMap_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_d3_HeatMap_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_d3_HeatMap_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_HeatMap_Compo.observedAttributes;

      for (var property in Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_d3_HeatMap_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_d3_HeatMap_Component(propertiesobject, methods, events) {
    return _Ext_d3_HeatMap_Compo.call(this, Object.assign(propertiesobject, Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_d3_HeatMap_Component.METHODS()), events.concat(Ext_pivot_d3_HeatMap_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_d3_HeatMap_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_d3_HeatMap_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_d3_HeatMap_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_d3_HeatMap_Component.EVENTS());
  }

  var _proto = Ext_pivot_d3_HeatMap_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_HeatMap_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_HeatMap_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_d3_HeatMap_Component;
}(Ext_d3_HeatMap_Component);

export { Ext_pivot_d3_HeatMap_Component as default };