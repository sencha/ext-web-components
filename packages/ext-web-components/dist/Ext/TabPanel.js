import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_TabPanel_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_TabPanel_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_TabPanel_Component.XTYPE = function XTYPE() {
    return 'tabpanel';
  };

  Ext_TabPanel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
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

  Ext_TabPanel_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_TabPanel_Component.METHODS = function METHODS() {
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

  _createClass(Ext_TabPanel_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_TabPanel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_TabPanel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_TabPanel_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_TabPanel_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_TabPanel_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_TabPanel_Component.METHODS()), events.concat(Ext_TabPanel_Component.EVENTS())) || this; //this.XTYPE = Ext_TabPanel_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_TabPanel_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_TabPanel_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_TabPanel_Component.EVENTS());
  }

  var _proto = Ext_TabPanel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_TabPanel_Component;
}(Ext_Container_Component);

export { Ext_TabPanel_Component as default };