import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_navigator_NavigatorBase_Component from '../../../Ext/chart/navigator/NavigatorBase';

var Ext_chart_navigator_Navigator_Component =
/*#__PURE__*/
function (_Ext_chart_navigator_) {
  _inheritsLoose(Ext_chart_navigator_Navigator_Component, _Ext_chart_navigator_);

  //events
  //configs
  Ext_chart_navigator_Navigator_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "axes": ["any"],
      "axis": ["string"],
      "docked": ["'bottom'", "'top'"],
      "flipXY": ["any"],
      "height": ["number"],
      "highlightItem": ["any"],
      "innerPadding": ["any"],
      "insetPadding": ["any"],
      "interactions": ["any"],
      "legend": ["any"],
      "maximum": ["number"],
      "minimum": ["number"],
      "navigatorContainer": ["Ext.chart.navigator.Container"],
      "series": ["any"],
      "span": ["'series'", "'chart'"],
      "store": ["any"],
      "theme": ["any"],
      "thumbGap": ["number"],
      "tolerance": ["number"]
    };
  };

  Ext_chart_navigator_Navigator_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_chart_navigator_Navigator_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_chart_navigator_Navigator_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_navigator_.observedAttributes;

      for (var property in Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_chart_navigator_Navigator_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_navigator_Navigator_Component(propertiesobject, methods, events) {
    return _Ext_chart_navigator_.call(this, Object.assign(propertiesobject, Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_chart_navigator_Navigator_Component.METHODS()), events.concat(Ext_chart_navigator_Navigator_Component.EVENTS())) || this; //this.XTYPE = Ext_chart_navigator_Navigator_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_chart_navigator_Navigator_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_chart_navigator_Navigator_Component.EVENTS());
  }

  var _proto = Ext_chart_navigator_Navigator_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_navigator_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_navigator_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_navigator_Navigator_Component;
}(Ext_chart_navigator_NavigatorBase_Component);

export { Ext_chart_navigator_Navigator_Component as default };