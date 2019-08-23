import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Item_Component from '../../Ext/menu/Item';

var Ext_menu_CheckItem_Component =
/*#__PURE__*/
function (_Ext_menu_Item_Compon) {
  _inheritsLoose(Ext_menu_CheckItem_Component, _Ext_menu_Item_Compon);

  //configs
  Ext_menu_CheckItem_Component.XTYPE = function XTYPE() {
    return 'menucheckitem';
  };

  Ext_menu_CheckItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "checkChangeDisabled": ["boolean"],
      "checked": ["boolean"],
      "checkHandler": ["function", "string"],
      "hideOnClick": ["boolean"],
      "publishes": ["string", "string[]", "object"],
      "scope": ["object"],
      "submenuText": ["string"],
      "value": ["string"]
    };
  };

  Ext_menu_CheckItem_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforecheckchange',
      parameters: 'undefined,checked'
    }, {
      name: 'checkchange',
      parameters: 'undefined,checked'
    }];
  };

  Ext_menu_CheckItem_Component.METHODS = function METHODS() {
    return [{
      name: 'setChecked',
      "function": function _function(checked, suppressEvents) {
        return this.ext.setChecked(checked, suppressEvents);
      }
    }];
  };

  _createClass(Ext_menu_CheckItem_Component, [{
    key: "onbeforecheckchange",
    //events
    get: function get() {
      return this.getAttribute('onbeforecheckchange');
    },
    set: function set(onbeforecheckchange) {
      this.setAttribute('onbeforecheckchange', onbeforecheckchange);
    }
  }, {
    key: "oncheckchange",
    get: function get() {
      return this.getAttribute('oncheckchange');
    },
    set: function set(oncheckchange) {
      this.setAttribute('oncheckchange', oncheckchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_menu_Item_Compon.observedAttributes;

      for (var property in Ext_menu_CheckItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_menu_CheckItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_CheckItem_Component() {
    var _this;

    _this = _Ext_menu_Item_Compon.call(this, Ext_menu_CheckItem_Component.METHODS(), Ext_menu_CheckItem_Component.XTYPE(), Ext_menu_CheckItem_Component.PROPERTIESOBJECT(), Ext_menu_CheckItem_Component.EVENTS()) || this;
    _this.XTYPE = Ext_menu_CheckItem_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_menu_CheckItem_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_menu_CheckItem_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_menu_CheckItem_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_menu_CheckItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_menu_Item_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_menu_Item_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_CheckItem_Component;
}(Ext_menu_Item_Component);

export { Ext_menu_CheckItem_Component as default };