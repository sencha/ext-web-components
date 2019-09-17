import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tip_ToolTip_Component from '../../../Ext/tip/ToolTip';

var Ext_dataview_plugin_ItemTip_Component =
/*#__PURE__*/
function (_Ext_tip_ToolTip_Comp) {
  _inheritsLoose(Ext_dataview_plugin_ItemTip_Component, _Ext_tip_ToolTip_Comp);

  //events
  //configs
  Ext_dataview_plugin_ItemTip_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_dataview_plugin_ItemTip_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "constrainToView": ["any"]
    };
  };

  Ext_dataview_plugin_ItemTip_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_plugin_ItemTip_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_plugin_ItemTip_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_tip_ToolTip_Comp.observedAttributes;

      for (var property in Ext_dataview_plugin_ItemTip_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_plugin_ItemTip_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_plugin_ItemTip_Component(propertiesobject, methods, events) {
    return _Ext_tip_ToolTip_Comp.call(this, Object.assign(propertiesobject, Ext_dataview_plugin_ItemTip_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_plugin_ItemTip_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_plugin_ItemTip_Component.METHODS()), events.concat(Ext_dataview_plugin_ItemTip_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_plugin_ItemTip_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_plugin_ItemTip_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_plugin_ItemTip_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_plugin_ItemTip_Component.EVENTS());
  }

  var _proto = Ext_dataview_plugin_ItemTip_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_tip_ToolTip_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_tip_ToolTip_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_plugin_ItemTip_Component;
}(Ext_tip_ToolTip_Component);

export { Ext_dataview_plugin_ItemTip_Component as default };