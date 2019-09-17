import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_menu_Item_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_menu_Item_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_menu_Item_Component.XTYPE = function XTYPE() {
    return 'menuitem';
  };

  Ext_menu_Item_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "clickHideDelay": ["number"],
      "destroyMenu": ["boolean"],
      "handler": ["function", "string"],
      "hideOnClick": ["boolean"],
      "href": ["string"],
      "icon": ["string"],
      "iconAlign": ["'left'", "'right'"],
      "iconCls": ["string"],
      "indented": ["boolean"],
      "menu": ["Ext.menu.Menu", "object"],
      "menuAlign": ["string"],
      "menuExpandDelay": ["number"],
      "menuHideDelay": ["number"],
      "scope": ["object"],
      "separator": ["boolean"],
      "target": ["string"],
      "text": ["string"]
    };
  };

  Ext_menu_Item_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_menu_Item_Component.METHODS = function METHODS() {
    return [{
      name: 'expandMenu',
      "function": function _function(event) {
        return this.ext.expandMenu(event);
      }
    }, {
      name: 'handleTouch',
      "function": function _function() {
        return this.ext.handleTouch();
      }
    }, {
      name: 'hideParentMenus',
      "function": function _function() {
        return this.ext.hideParentMenus();
      }
    }];
  };

  _createClass(Ext_menu_Item_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_menu_Item_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_menu_Item_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_Item_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_menu_Item_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_menu_Item_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_menu_Item_Component.METHODS()), events.concat(Ext_menu_Item_Component.EVENTS())) || this; //this.XTYPE = Ext_menu_Item_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_Item_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_menu_Item_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_menu_Item_Component.EVENTS());
  }

  var _proto = Ext_menu_Item_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_Item_Component;
}(Ext_Component_Component);

export { Ext_menu_Item_Component as default };