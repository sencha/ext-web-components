import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_AbstractChart_Component from '../../Ext/chart/AbstractChart';

var Ext_chart_PolarChart_Component =
/*#__PURE__*/
function (_Ext_chart_AbstractCh) {
  _inheritsLoose(Ext_chart_PolarChart_Component, _Ext_chart_AbstractCh);

  //events
  //configs
  Ext_chart_PolarChart_Component.XTYPE = function XTYPE() {
    return 'polar';
  };

  Ext_chart_PolarChart_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "center": ["array"],
      "innerPadding": ["number"],
      "radius": ["number"]
    };
  };

  Ext_chart_PolarChart_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_chart_PolarChart_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_chart_PolarChart_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_AbstractCh.observedAttributes;

      for (var property in Ext_chart_PolarChart_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_chart_PolarChart_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_PolarChart_Component(propertiesobject, methods, events) {
    return _Ext_chart_AbstractCh.call(this, Object.assign(propertiesobject, Ext_chart_PolarChart_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_chart_PolarChart_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_chart_PolarChart_Component.METHODS()), events.concat(Ext_chart_PolarChart_Component.EVENTS())) || this; //this.XTYPE = Ext_chart_PolarChart_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_PolarChart_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_chart_PolarChart_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_chart_PolarChart_Component.EVENTS());
  }

  var _proto = Ext_chart_PolarChart_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_AbstractCh.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_AbstractCh.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_PolarChart_Component;
}(Ext_chart_AbstractChart_Component);

export { Ext_chart_PolarChart_Component as default };