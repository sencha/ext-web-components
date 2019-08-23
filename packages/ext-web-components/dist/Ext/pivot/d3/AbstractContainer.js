import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Panel_Component from '../../../Ext/panel/Panel';

var Ext_pivot_d3_AbstractContainer_Component =
/*#__PURE__*/
function (_Ext_panel_Panel_Comp) {
  _inheritsLoose(Ext_pivot_d3_AbstractContainer_Component, _Ext_panel_Panel_Comp);

  //events
  //configs
  Ext_pivot_d3_AbstractContainer_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_pivot_d3_AbstractContainer_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "configurator": ["Ext.pivot.plugin.Configurator"],
      "drawing": ["Ext.Component"],
      "matrix": ["Ext.pivot.matrix.Base"]
    };
  };

  Ext_pivot_d3_AbstractContainer_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_d3_AbstractContainer_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_d3_AbstractContainer_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_panel_Panel_Comp.observedAttributes;

      for (var property in Ext_pivot_d3_AbstractContainer_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_d3_AbstractContainer_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_d3_AbstractContainer_Component() {
    var _this;

    _this = _Ext_panel_Panel_Comp.call(this, Ext_pivot_d3_AbstractContainer_Component.METHODS(), Ext_pivot_d3_AbstractContainer_Component.XTYPE(), Ext_pivot_d3_AbstractContainer_Component.PROPERTIESOBJECT(), Ext_pivot_d3_AbstractContainer_Component.EVENTS()) || this;
    _this.XTYPE = Ext_pivot_d3_AbstractContainer_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_pivot_d3_AbstractContainer_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_pivot_d3_AbstractContainer_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_pivot_d3_AbstractContainer_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_pivot_d3_AbstractContainer_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_panel_Panel_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_panel_Panel_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_d3_AbstractContainer_Component;
}(Ext_panel_Panel_Component);

export { Ext_pivot_d3_AbstractContainer_Component as default };