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

  function Ext_pivot_d3_AbstractContainer_Component(propertiesobject, methods, events) {
    return _Ext_panel_Panel_Comp.call(this, Object.assign(propertiesobject, Ext_pivot_d3_AbstractContainer_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_d3_AbstractContainer_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_d3_AbstractContainer_Component.METHODS()), events.concat(Ext_pivot_d3_AbstractContainer_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_d3_AbstractContainer_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_d3_AbstractContainer_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_d3_AbstractContainer_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_d3_AbstractContainer_Component.EVENTS());
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