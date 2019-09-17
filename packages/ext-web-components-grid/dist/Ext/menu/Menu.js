import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../Ext/Panel';

var Ext_menu_Menu_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_menu_Menu_Component, _Ext_Panel_Component);

  //configs
  Ext_menu_Menu_Component.XTYPE = function XTYPE() {
    return 'menu';
  };

  Ext_menu_Menu_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "align": ["string"],
      "allowOtherMenus": ["boolean"],
      "autoHide": ["boolean"],
      "groups": ["object"],
      "ignoreParentClicks": ["boolean"],
      "indented": ["boolean"],
      "mouseLeaveDelay": ["number"],
      "separator": ["boolean"]
    };
  };

  Ext_menu_Menu_Component.EVENTS = function EVENTS() {
    return [{
      name: 'groupchange',
      parameters: 'menu,groupName,newValue,oldValue'
    }];
  };

  Ext_menu_Menu_Component.METHODS = function METHODS() {
    return [{
      name: 'getItemFromEvent',
      "function": function _function(e) {
        return this.ext.getItemFromEvent(e);
      }
    }, {
      name: 'handleItemOver',
      "function": function _function(e, item) {
        return this.ext.handleItemOver(e, item);
      }
    }, {
      name: 'onMouseOver',
      "function": function _function(e) {
        return this.ext.onMouseOver(e);
      }
    }];
  };

  _createClass(Ext_menu_Menu_Component, [{
    key: "ongroupchange",
    //events
    get: function get() {
      return this.getAttribute('ongroupchange');
    },
    set: function set(ongroupchange) {
      this.setAttribute('ongroupchange', ongroupchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_menu_Menu_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_menu_Menu_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_Menu_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this) || this;
    _this.XTYPE = Ext_menu_Menu_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_menu_Menu_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_menu_Menu_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_menu_Menu_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_menu_Menu_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_Menu_Component;
}(Ext_Panel_Component);

export { Ext_menu_Menu_Component as default };