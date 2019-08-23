import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../Ext/Panel';

var Ext_panel_Accordion_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_panel_Accordion_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_panel_Accordion_Component.XTYPE = function XTYPE() {
    return 'accordion';
  };

  Ext_panel_Accordion_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultPanelUI": ["string"],
      "expandedFirst": ["boolean"],
      "openable": ["number"]
    };
  };

  Ext_panel_Accordion_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_panel_Accordion_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_panel_Accordion_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_panel_Accordion_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_panel_Accordion_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Accordion_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this, Ext_panel_Accordion_Component.METHODS(), Ext_panel_Accordion_Component.XTYPE(), Ext_panel_Accordion_Component.PROPERTIESOBJECT(), Ext_panel_Accordion_Component.EVENTS()) || this;
    _this.XTYPE = Ext_panel_Accordion_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_panel_Accordion_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_panel_Accordion_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_panel_Accordion_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_panel_Accordion_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Accordion_Component;
}(Ext_Panel_Component);

export { Ext_panel_Accordion_Component as default };