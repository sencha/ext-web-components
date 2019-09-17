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

  function Ext_panel_Time_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this) || this;
    _this.XTYPE = Ext_panel_Time_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_panel_Time_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_panel_Time_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_panel_Time_Component.EVENTS());
    return _this;
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