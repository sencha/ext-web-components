import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_NavigationView_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_NavigationView_Component, _Ext_Container_Compon);

  //configs
  Ext_NavigationView_Component.XTYPE = function XTYPE() {
    return 'navigationview';
  };

  Ext_NavigationView_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultBackButtonText": ["string"],
      "items": ["array", "object"],
      "layout": ["object"],
      "navigationBar": ["boolean", "object"],
      "useTitleForBackButtonText": ["boolean"]
    };
  };

  Ext_NavigationView_Component.EVENTS = function EVENTS() {
    return [{
      name: 'back',
      parameters: 'undefined'
    }, {
      name: 'pop',
      parameters: 'undefined,view'
    }, {
      name: 'push',
      parameters: 'undefined,view'
    }];
  };

  Ext_NavigationView_Component.METHODS = function METHODS() {
    return [{
      name: 'applyActiveItem',
      "function": function _function(activeItem, currentActiveItem) {
        return this.ext.applyActiveItem(activeItem, currentActiveItem);
      }
    }, {
      name: 'applyNavigationBar',
      "function": function _function(config) {
        return this.ext.applyNavigationBar(config);
      }
    }, {
      name: 'beforePop',
      "function": function _function(count) {
        return this.ext.beforePop(count);
      }
    }, {
      name: 'doPop',
      "function": function _function() {
        return this.ext.doPop();
      }
    }, {
      name: 'doRemove',
      "function": function _function() {
        return this.ext.doRemove();
      }
    }, {
      name: 'getPreviousItem',
      "function": function _function() {
        return this.ext.getPreviousItem();
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'onBackButtonContainerAdd',
      "function": function _function(toolbar, item) {
        return this.ext.onBackButtonContainerAdd(toolbar, item);
      }
    }, {
      name: 'onBackButtonContainerRemove',
      "function": function _function(toolbar, item) {
        return this.ext.onBackButtonContainerRemove(toolbar, item);
      }
    }, {
      name: 'onBackButtonTap',
      "function": function _function() {
        return this.ext.onBackButtonTap();
      }
    }, {
      name: 'onItemAdd',
      "function": function _function(item, index) {
        return this.ext.onItemAdd(item, index);
      }
    }, {
      name: 'pop',
      "function": function _function(count) {
        return this.ext.pop(count);
      }
    }, {
      name: 'push',
      "function": function _function(view) {
        return this.ext.push(view);
      }
    }, {
      name: 'refreshBackButtonContainer',
      "function": function _function() {
        return this.ext.refreshBackButtonContainer();
      }
    }, {
      name: 'reset',
      "function": function _function() {
        return this.ext.reset();
      }
    }, {
      name: 'updateDefaultBackButtonText',
      "function": function _function(defaultBackButtonText) {
        return this.ext.updateDefaultBackButtonText(defaultBackButtonText);
      }
    }, {
      name: 'updateNavigationBar',
      "function": function _function(newNavigationBar, oldNavigationBar) {
        return this.ext.updateNavigationBar(newNavigationBar, oldNavigationBar);
      }
    }, {
      name: 'updateTitleContainerTitle',
      "function": function _function(title) {
        return this.ext.updateTitleContainerTitle(title);
      }
    }, {
      name: 'updateUseTitleForBackButtonText',
      "function": function _function(useTitleForBackButtonText) {
        return this.ext.updateUseTitleForBackButtonText(useTitleForBackButtonText);
      }
    }];
  };

  _createClass(Ext_NavigationView_Component, [{
    key: "onback",
    //events
    get: function get() {
      return this.getAttribute('onback');
    },
    set: function set(onback) {
      this.setAttribute('onback', onback);
    }
  }, {
    key: "onpop",
    get: function get() {
      return this.getAttribute('onpop');
    },
    set: function set(onpop) {
      this.setAttribute('onpop', onpop);
    }
  }, {
    key: "onpush",
    get: function get() {
      return this.getAttribute('onpush');
    },
    set: function set(onpush) {
      this.setAttribute('onpush', onpush);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_NavigationView_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_NavigationView_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_NavigationView_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this) || this;
    _this.XTYPE = Ext_NavigationView_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_NavigationView_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_NavigationView_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_NavigationView_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_NavigationView_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_NavigationView_Component;
}(Ext_Container_Component);

export { Ext_NavigationView_Component as default };