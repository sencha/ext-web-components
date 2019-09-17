import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataItem_Component from '../../../Ext/dataview/DataItem';

var Ext_dataview_component_ListItem_Component =
/*#__PURE__*/
function (_Ext_dataview_DataIte) {
  _inheritsLoose(Ext_dataview_component_ListItem_Component, _Ext_dataview_DataIte);

  //events
  //configs
  Ext_dataview_component_ListItem_Component.XTYPE = function XTYPE() {
    return 'listitem';
  };

  Ext_dataview_component_ListItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_dataview_component_ListItem_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_component_ListItem_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_component_ListItem_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataIte.observedAttributes;

      for (var property in Ext_dataview_component_ListItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_component_ListItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_component_ListItem_Component(propertiesobject, methods, events) {
    return _Ext_dataview_DataIte.call(this, Object.assign(propertiesobject, Ext_dataview_component_ListItem_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_component_ListItem_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_component_ListItem_Component.METHODS()), events.concat(Ext_dataview_component_ListItem_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_component_ListItem_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_component_ListItem_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_component_ListItem_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_component_ListItem_Component.EVENTS());
  }

  var _proto = Ext_dataview_component_ListItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataIte.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataIte.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_component_ListItem_Component;
}(Ext_dataview_DataItem_Component);

export { Ext_dataview_component_ListItem_Component as default };