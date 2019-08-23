import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_legend_LegendBase_Component from '../../../Ext/chart/legend/LegendBase';

var Ext_chart_legend_Legend_Component =
/*#__PURE__*/
function (_Ext_chart_legend_Leg) {
  _inheritsLoose(Ext_chart_legend_Legend_Component, _Ext_chart_legend_Leg);

  //events
  //configs
  Ext_chart_legend_Legend_Component.XTYPE = function XTYPE() {
    return 'legend';
  };

  Ext_chart_legend_Legend_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "rect": ["array"],
      "store": ["Ext.chart.legend.store.Store"],
      "toggleable": ["boolean"]
    };
  };

  Ext_chart_legend_Legend_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_chart_legend_Legend_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_chart_legend_Legend_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_legend_Leg.observedAttributes;

      for (var property in Ext_chart_legend_Legend_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_chart_legend_Legend_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_legend_Legend_Component() {
    var _this;

    _this = _Ext_chart_legend_Leg.call(this, Ext_chart_legend_Legend_Component.METHODS(), Ext_chart_legend_Legend_Component.XTYPE(), Ext_chart_legend_Legend_Component.PROPERTIESOBJECT(), Ext_chart_legend_Legend_Component.EVENTS()) || this;
    _this.XTYPE = Ext_chart_legend_Legend_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_chart_legend_Legend_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_chart_legend_Legend_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_chart_legend_Legend_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_chart_legend_Legend_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_legend_Leg.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_legend_Leg.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_legend_Legend_Component;
}(Ext_chart_legend_LegendBase_Component);

export { Ext_chart_legend_Legend_Component as default };