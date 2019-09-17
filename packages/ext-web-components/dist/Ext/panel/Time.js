import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../Ext/Panel';

var Ext_panel_Time_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_panel_Time_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_panel_Time_Component.XTYPE = function XTYPE() {
    return 'timepanel';
  };

  Ext_panel_Time_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "alignPMInside": ["boolean"],
      "autoAdvance": ["boolean"],
      "buttonAlign": ["string"],
      "confirmable": ["boolean"],
      "declineHandler": ["function"],
      "defaultButtons": ["object"],
      "handler": ["function"],
      "hourDisplayFormat": ["string"],
      "meridiem": ["boolean"],
      "mode": ["string"],
      "scope": ["object"],
      "value": ["date"],
      "vertical": ["boolean"]
    };
  };

  Ext_panel_Time_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_panel_Time_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_panel_Time_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_panel_Time_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_panel_Time_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Time_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_panel_Time_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_panel_Time_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_panel_Time_Component.METHODS()), events.concat(Ext_panel_Time_Component.EVENTS())) || this; //this.XTYPE = Ext_panel_Time_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Time_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_panel_Time_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_panel_Time_Component.EVENTS());
  }

  var _proto = Ext_panel_Time_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Time_Component;
}(Ext_Panel_Component);

export { Ext_panel_Time_Component as default };