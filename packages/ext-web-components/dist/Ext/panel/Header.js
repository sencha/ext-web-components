import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_panel_Header_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_panel_Header_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_panel_Header_Component.XTYPE = function XTYPE() {
    return 'panelheader';
  };

  Ext_panel_Header_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "glyph": ["number", "string"],
      "icon": ["string"],
      "iconAlign": ["'top'", "'right'", "'bottom'", "'left'"],
      "iconCls": ["string"],
      "position": ["any"],
      "title": ["string", "Ext.panel.Title"],
      "titleAlign": ["'left'", "'center'", "'right'"],
      "titleRotation": ["'auto'", "'90'", "'270'", "'0'"]
    };
  };

  Ext_panel_Header_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_panel_Header_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_panel_Header_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_panel_Header_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_panel_Header_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Header_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_panel_Header_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_panel_Header_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_panel_Header_Component.METHODS()), events.concat(Ext_panel_Header_Component.EVENTS())) || this; //this.XTYPE = Ext_panel_Header_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Header_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_panel_Header_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_panel_Header_Component.EVENTS());
  }

  var _proto = Ext_panel_Header_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Header_Component;
}(Ext_Container_Component);

export { Ext_panel_Header_Component as default };