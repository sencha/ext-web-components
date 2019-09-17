import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ListItem_Component from '../../../../Ext/dataview/ListItem';

var Ext_pivot_plugin_configurator_Column_Component =
/*#__PURE__*/
function (_Ext_dataview_ListIte) {
  _inheritsLoose(Ext_pivot_plugin_configurator_Column_Component, _Ext_dataview_ListIte);

  //events
  //configs
  Ext_pivot_plugin_configurator_Column_Component.XTYPE = function XTYPE() {
    return 'pivotconfigfield';
  };

  Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_pivot_plugin_configurator_Column_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_plugin_configurator_Column_Component.METHODS = function METHODS() {
    return [{
      name: 'applyChanges',
      "function": function _function() {
        return this.ext.applyChanges();
      }
    }];
  };

  _createClass(Ext_pivot_plugin_configurator_Column_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_ListIte.observedAttributes;

      for (var property in Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_plugin_configurator_Column_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_Column_Component(propertiesobject, methods, events) {
    return _Ext_dataview_ListIte.call(this, Object.assign(propertiesobject, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_plugin_configurator_Column_Component.METHODS()), events.concat(Ext_pivot_plugin_configurator_Column_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_plugin_configurator_Column_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_plugin_configurator_Column_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_plugin_configurator_Column_Component.EVENTS());
  }

  var _proto = Ext_pivot_plugin_configurator_Column_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_ListIte.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_ListIte.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_Column_Component;
}(Ext_dataview_ListItem_Component);

export { Ext_pivot_plugin_configurator_Column_Component as default };