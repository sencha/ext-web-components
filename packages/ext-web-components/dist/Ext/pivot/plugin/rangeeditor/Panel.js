import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Panel_Component from '../../../../Ext/form/Panel';

var Ext_pivot_plugin_rangeeditor_Panel_Component =
/*#__PURE__*/
function (_Ext_form_Panel_Compo) {
  _inheritsLoose(Ext_pivot_plugin_rangeeditor_Panel_Component, _Ext_form_Panel_Compo);

  //events
  //configs
  Ext_pivot_plugin_rangeeditor_Panel_Component.XTYPE = function XTYPE() {
    return 'pivotrangeeditor';
  };

  Ext_pivot_plugin_rangeeditor_Panel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_pivot_plugin_rangeeditor_Panel_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_plugin_rangeeditor_Panel_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_plugin_rangeeditor_Panel_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_Panel_Compo.observedAttributes;

      for (var property in Ext_pivot_plugin_rangeeditor_Panel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_plugin_rangeeditor_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_rangeeditor_Panel_Component(propertiesobject, methods, events) {
    return _Ext_form_Panel_Compo.call(this, Object.assign(propertiesobject, Ext_pivot_plugin_rangeeditor_Panel_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_plugin_rangeeditor_Panel_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_plugin_rangeeditor_Panel_Component.METHODS()), events.concat(Ext_pivot_plugin_rangeeditor_Panel_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_plugin_rangeeditor_Panel_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_rangeeditor_Panel_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_plugin_rangeeditor_Panel_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_plugin_rangeeditor_Panel_Component.EVENTS());
  }

  var _proto = Ext_pivot_plugin_rangeeditor_Panel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_Panel_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_Panel_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_rangeeditor_Panel_Component;
}(Ext_form_Panel_Component);

export { Ext_pivot_plugin_rangeeditor_Panel_Component as default };