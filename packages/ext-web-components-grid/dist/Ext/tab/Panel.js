import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_tab_Panel_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_tab_Panel_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_tab_Panel_Component.XTYPE = function XTYPE() {
    return 'tabpanel';
  };

  Ext_tab_Panel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoOrientAnimation": ["boolean"],
      "cls": ["string", "string[]"],
      "layout": ["object", "string"],
      "scroll": ["boolean", "string", "object"],
      "scrollable": ["boolean", "string", "object"],
      "tabBar": ["object"],
      "tabBarPosition": ["string"],
      "tabRotation": ["string"]
    };
  };

  Ext_tab_Panel_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_tab_Panel_Component.METHODS = function METHODS() {
    return [{
      name: 'applyScrollable',
      "function": function _function() {
        return this.ext.applyScrollable();
      }
    }, {
      name: 'applyTabBar',
      "function": function _function(config) {
        return this.ext.applyTabBar(config);
      }
    }, {
      name: 'doTabChange',
      "function": function _function(tabBar, newTab) {
        return this.ext.doTabChange(tabBar, newTab);
      }
    }, {
      name: 'onItemDisabledChange',
      "function": function _function(item, newDisabled) {
        return this.ext.onItemDisabledChange(item, newDisabled);
      }
    }, {
      name: 'updateActiveItem',
      "function": function _function(newActiveItem, oldActiveItem) {
        return this.ext.updateActiveItem(newActiveItem, oldActiveItem);
      }
    }, {
      name: 'updateTabBar',
      "function": function _function(tabBar, oldTabBar) {
        return this.ext.updateTabBar(tabBar, oldTabBar);
      }
    }, {
      name: 'updateTabBarPosition',
      "function": function _function(position) {
        return this.ext.updateTabBarPosition(position);
      }
    }, {
      name: 'updateUi',
      "function": function _function(ui, oldUi) {
        return this.ext.updateUi(ui, oldUi);
      }
    }];
  };

  _createClass(Ext_tab_Panel_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_tab_Panel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_tab_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tab_Panel_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this) || this;
    _this.XTYPE = Ext_tab_Panel_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_tab_Panel_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_tab_Panel_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_tab_Panel_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_tab_Panel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tab_Panel_Component;
}(Ext_Container_Component);

export { Ext_tab_Panel_Component as default };