import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_navigator_ContainerBase_Component from '../../../Ext/chart/navigator/ContainerBase';

var Ext_chart_navigator_Container_Component =
/*#__PURE__*/
function (_Ext_chart_navigator_) {
  _inheritsLoose(Ext_chart_navigator_Container_Component, _Ext_chart_navigator_);

  //events
  //configs
  Ext_chart_navigator_Container_Component.XTYPE = function XTYPE() {
    return 'chartnavigator';
  };

  Ext_chart_navigator_Container_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "chart": ["Ext.chart.CartesianChart"],
      "navigator": ["Ext.chart.navigator.Navigator"]
    };
  };

  Ext_chart_navigator_Container_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_chart_navigator_Container_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_chart_navigator_Container_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_navigator_.observedAttributes;

      for (var property in Ext_chart_navigator_Container_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_chart_navigator_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_navigator_Container_Component() {
    var _this;

    _this = _Ext_chart_navigator_.call(this) || this;
    _this.XTYPE = Ext_chart_navigator_Container_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_chart_navigator_Container_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_chart_navigator_Container_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_chart_navigator_Container_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_chart_navigator_Container_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_navigator_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_navigator_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_navigator_Container_Component;
}(Ext_chart_navigator_ContainerBase_Component);

export { Ext_chart_navigator_Container_Component as default };