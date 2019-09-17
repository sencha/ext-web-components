import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_CheckItem_Component from '../../Ext/menu/CheckItem';

var Ext_menu_RadioItem_Component =
/*#__PURE__*/
function (_Ext_menu_CheckItem_C) {
  _inheritsLoose(Ext_menu_RadioItem_Component, _Ext_menu_CheckItem_C);

  //events
  //configs
  Ext_menu_RadioItem_Component.XTYPE = function XTYPE() {
    return 'menuradioitem';
  };

  Ext_menu_RadioItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowUncheck": ["boolean"],
      "group": ["string"],
      "name": ["string"]
    };
  };

  Ext_menu_RadioItem_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_menu_RadioItem_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_menu_RadioItem_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_menu_CheckItem_C.observedAttributes;

      for (var property in Ext_menu_RadioItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_menu_RadioItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_RadioItem_Component(propertiesobject, methods, events) {
    return _Ext_menu_CheckItem_C.call(this, Object.assign(propertiesobject, Ext_menu_RadioItem_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_menu_RadioItem_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_menu_RadioItem_Component.METHODS()), events.concat(Ext_menu_RadioItem_Component.EVENTS())) || this; //this.XTYPE = Ext_menu_RadioItem_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_RadioItem_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_menu_RadioItem_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_menu_RadioItem_Component.EVENTS());
  }

  var _proto = Ext_menu_RadioItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_menu_CheckItem_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_menu_CheckItem_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_RadioItem_Component;
}(Ext_menu_CheckItem_Component);

export { Ext_menu_RadioItem_Component as default };