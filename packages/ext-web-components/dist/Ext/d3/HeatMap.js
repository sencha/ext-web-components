import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg_Component from '../../Ext/d3/svg/Svg';

var Ext_d3_HeatMap_Component =
/*#__PURE__*/
function (_Ext_d3_svg_Svg_Compo) {
  _inheritsLoose(Ext_d3_HeatMap_Component, _Ext_d3_svg_Svg_Compo);

  //events
  //configs
  Ext_d3_HeatMap_Component.XTYPE = function XTYPE() {
    return 'd3-heatmap';
  };

  Ext_d3_HeatMap_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "colorAxis": ["Ext.d3.axis.Color"],
      "labels": ["object", "boolean"],
      "legend": ["Ext.d3.legend.Color"],
      "tiles": ["object"],
      "xAxis": ["Ext.d3.axis.Data"],
      "yAxis": ["Ext.d3.axis.Data"]
    };
  };

  Ext_d3_HeatMap_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_HeatMap_Component.METHODS = function METHODS() {
    return [{
      name: 'setDomainFromData',
      "function": function _function(items, field, scale, step) {
        return this.ext.setDomainFromData(items, field, scale, step);
      }
    }];
  };

  _createClass(Ext_d3_HeatMap_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_svg_Svg_Compo.observedAttributes;

      for (var property in Ext_d3_HeatMap_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_HeatMap_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_HeatMap_Component(propertiesobject, methods, events) {
    return _Ext_d3_svg_Svg_Compo.call(this, Object.assign(propertiesobject, Ext_d3_HeatMap_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_d3_HeatMap_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_d3_HeatMap_Component.METHODS()), events.concat(Ext_d3_HeatMap_Component.EVENTS())) || this; //this.XTYPE = Ext_d3_HeatMap_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_HeatMap_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_d3_HeatMap_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_d3_HeatMap_Component.EVENTS());
  }

  var _proto = Ext_d3_HeatMap_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_svg_Svg_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_svg_Svg_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_HeatMap_Component;
}(Ext_d3_svg_Svg_Component);

export { Ext_d3_HeatMap_Component as default };