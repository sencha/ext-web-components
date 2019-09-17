import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataView_Component from '../../../Ext/dataview/DataView';

var Ext_chart_legend_LegendBase_Component =
/*#__PURE__*/
function (_Ext_dataview_DataVie) {
  _inheritsLoose(Ext_chart_legend_LegendBase_Component, _Ext_dataview_DataVie);

  //events
  //configs
  Ext_chart_legend_LegendBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_chart_legend_LegendBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_chart_legend_LegendBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_chart_legend_LegendBase_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_chart_legend_LegendBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataVie.observedAttributes;

      for (var property in Ext_chart_legend_LegendBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_chart_legend_LegendBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_legend_LegendBase_Component(propertiesobject, methods, events) {
    return _Ext_dataview_DataVie.call(this, Object.assign(propertiesobject, Ext_chart_legend_LegendBase_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_chart_legend_LegendBase_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_chart_legend_LegendBase_Component.METHODS()), events.concat(Ext_chart_legend_LegendBase_Component.EVENTS())) || this; //this.XTYPE = Ext_chart_legend_LegendBase_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_legend_LegendBase_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_chart_legend_LegendBase_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_chart_legend_LegendBase_Component.EVENTS());
  }

  var _proto = Ext_chart_legend_LegendBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataVie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataVie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_legend_LegendBase_Component;
}(Ext_dataview_DataView_Component);

export { Ext_chart_legend_LegendBase_Component as default };