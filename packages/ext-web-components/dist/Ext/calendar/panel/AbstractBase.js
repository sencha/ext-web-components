import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../Ext/Panel';

var Ext_calendar_panel_AbstractBase_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_calendar_panel_AbstractBase_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_calendar_panel_AbstractBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_calendar_panel_AbstractBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_panel_AbstractBase_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_panel_AbstractBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_panel_AbstractBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_AbstractBase_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_panel_AbstractBase_Component.METHODS()), events.concat(Ext_calendar_panel_AbstractBase_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_panel_AbstractBase_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_panel_AbstractBase_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_panel_AbstractBase_Component.EVENTS());
  }

  var _proto = Ext_calendar_panel_AbstractBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_AbstractBase_Component;
}(Ext_Panel_Component);

export { Ext_calendar_panel_AbstractBase_Component as default };