import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Toolbar_Component from '../../Ext/Toolbar';

var Ext_tab_Bar_Component =
/*#__PURE__*/
function (_Ext_Toolbar_Componen) {
  _inheritsLoose(Ext_tab_Bar_Component, _Ext_Toolbar_Componen);

  //configs
  Ext_tab_Bar_Component.XTYPE = function XTYPE() {
    return 'tabbar';
  };

  Ext_tab_Bar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "activeTab": ["number", "string", "Ext.Component"],
      "animateIndicator": ["boolean"],
      "defaultTabUI": ["string"],
      "defaultType": ["string"],
      "layout": ["object", "string"],
      "tabRotation": ["string"]
    };
  };

  Ext_tab_Bar_Component.EVENTS = function EVENTS() {
    return [{
      name: 'activeTabchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'beforeactiveTabchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'tabchange',
      parameters: 'undefined,newTab,oldTab'
    }];
  };

  Ext_tab_Bar_Component.METHODS = function METHODS() {
    return [{
      name: 'applyActiveTab',
      "function": function _function(newActiveTab, oldActiveTab) {
        return this.ext.applyActiveTab(newActiveTab, oldActiveTab);
      }
    }, {
      name: 'closeTab',
      "function": function _function(tab) {
        return this.ext.closeTab(tab);
      }
    }, {
      name: 'findNextActivatableTab',
      "function": function _function(tabToClose) {
        return this.ext.findNextActivatableTab(tabToClose);
      }
    }, {
      name: 'getTabs',
      "function": function _function() {
        return this.ext.getTabs();
      }
    }, {
      name: 'onTabTap',
      "function": function _function(tab) {
        return this.ext.onTabTap(tab);
      }
    }, {
      name: 'parseActiveTab',
      "function": function _function(tab) {
        return this.ext.parseActiveTab(tab);
      }
    }, {
      name: 'updateActiveTab',
      "function": function _function(newTab, oldTab) {
        return this.ext.updateActiveTab(newTab, oldTab);
      }
    }, {
      name: 'updateDocked',
      "function": function _function(newDocked) {
        return this.ext.updateDocked(newDocked);
      }
    }, {
      name: 'updateTabRotation',
      "function": function _function(rotation) {
        return this.ext.updateTabRotation(rotation);
      }
    }];
  };

  _createClass(Ext_tab_Bar_Component, [{
    key: "onactiveTabchange",
    //events
    get: function get() {
      return this.getAttribute('onactiveTabchange');
    },
    set: function set(onactiveTabchange) {
      this.setAttribute('onactiveTabchange', onactiveTabchange);
    }
  }, {
    key: "onbeforeactiveTabchange",
    get: function get() {
      return this.getAttribute('onbeforeactiveTabchange');
    },
    set: function set(onbeforeactiveTabchange) {
      this.setAttribute('onbeforeactiveTabchange', onbeforeactiveTabchange);
    }
  }, {
    key: "ontabchange",
    get: function get() {
      return this.getAttribute('ontabchange');
    },
    set: function set(ontabchange) {
      this.setAttribute('ontabchange', ontabchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Toolbar_Componen.observedAttributes;

      for (var property in Ext_tab_Bar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_tab_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tab_Bar_Component() {
    var _this;

    _this = _Ext_Toolbar_Componen.call(this, Ext_tab_Bar_Component.METHODS(), Ext_tab_Bar_Component.XTYPE(), Ext_tab_Bar_Component.PROPERTIESOBJECT(), Ext_tab_Bar_Component.EVENTS()) || this;
    _this.XTYPE = Ext_tab_Bar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_tab_Bar_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_tab_Bar_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_tab_Bar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_tab_Bar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Toolbar_Componen.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Toolbar_Componen.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tab_Bar_Component;
}(Ext_Toolbar_Component);

export { Ext_tab_Bar_Component as default };