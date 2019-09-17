import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_CheckItem_Component from '../../../../Ext/menu/CheckItem';

var Ext_grid_filters_menu_Base_Component =
/*#__PURE__*/
function (_Ext_menu_CheckItem_C) {
  _inheritsLoose(Ext_grid_filters_menu_Base_Component, _Ext_menu_CheckItem_C);

  //events
  //configs
  Ext_grid_filters_menu_Base_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "text": ["string"]
    };
  };

  Ext_grid_filters_menu_Base_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_filters_menu_Base_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_filters_menu_Base_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_menu_CheckItem_C.observedAttributes;

      for (var property in Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_filters_menu_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_filters_menu_Base_Component(propertiesobject, methods, events) {
    return _Ext_menu_CheckItem_C.call(this, Object.assign(propertiesobject, Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_filters_menu_Base_Component.METHODS()), events.concat(Ext_grid_filters_menu_Base_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_filters_menu_Base_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_filters_menu_Base_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_filters_menu_Base_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_filters_menu_Base_Component.EVENTS());
  }

  var _proto = Ext_grid_filters_menu_Base_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_menu_CheckItem_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_menu_CheckItem_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_filters_menu_Base_Component;
}(Ext_menu_CheckItem_Component);

export { Ext_grid_filters_menu_Base_Component as default };