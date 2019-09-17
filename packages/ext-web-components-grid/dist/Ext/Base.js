import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import EwcBaseComponent from '../ewc-base.component';

var Ext_Base_Component =
/*#__PURE__*/
function (_EwcBaseComponent) {
  _inheritsLoose(Ext_Base_Component, _EwcBaseComponent);

  //configs
  Ext_Base_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_Base_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "ext": ["string"],
      "align": ["string"],
      "viewport": ["boolean"],
      "plugins": ["Array", "Ext.enums.Plugin", "Object", "Ext.plugin.Abstract"],
      "responsiveConfig": ["Object"],
      "responsiveFormulas": ["Object"]
    };
  };

  Ext_Base_Component.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_Base_Component.METHODS = function METHODS() {
    return [{
      name: 'addDeprecations',
      "function": function _function(deprecations) {
        return this.ext.addDeprecations(deprecations);
      }
    }, {
      name: 'callOverridden',
      "function": function _function(args) {
        return this.ext.callOverridden(args);
      }
    }, {
      name: 'callParent',
      "function": function _function(args) {
        return this.ext.callParent(args);
      }
    }, {
      name: 'callSuper',
      "function": function _function(args) {
        return this.ext.callSuper(args);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'destroyMembers',
      "function": function _function(args) {
        return this.ext.destroyMembers(args);
      }
    }, {
      name: 'getConfig',
      "function": function _function(name, peek, ifInitialized) {
        return this.ext.getConfig(name, peek, ifInitialized);
      }
    }, {
      name: 'getCurrentConfig',
      "function": function _function() {
        return this.ext.getCurrentConfig();
      }
    }, {
      name: 'getInitialConfig',
      "function": function _function(name) {
        return this.ext.getInitialConfig(name);
      }
    }, {
      name: 'hasConfig',
      "function": function _function(name) {
        return this.ext.hasConfig(name);
      }
    }, {
      name: 'initConfig',
      "function": function _function(instanceConfig) {
        return this.ext.initConfig(instanceConfig);
      }
    }, {
      name: 'link',
      "function": function _function(name, value) {
        return this.ext.link(name, value);
      }
    }, {
      name: 'setConfig',
      "function": function _function(name, value, options) {
        return this.ext.setConfig(name, value, options);
      }
    }, {
      name: 'statics',
      "function": function _function() {
        return this.ext.statics();
      }
    }, {
      name: 'unlink',
      "function": function _function(names) {
        return this.ext.unlink(names);
      }
    }, {
      name: 'watchConfig',
      "function": function _function(name, fn, scope) {
        return this.ext.watchConfig(name, fn, scope);
      }
    }];
  };

  _createClass(Ext_Base_Component, [{
    key: "onready",
    //events
    get: function get() {
      return this.getAttribute('onready');
    },
    set: function set(onready) {
      this.setAttribute('onready', onready);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = [];

      for (var property in Ext_Base_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      attrs.push('onready');
      return attrs;
    }
  }]);

  function Ext_Base_Component() {
    var _this;

    _this = _EwcBaseComponent.call(this, Ext_Base_Component.METHODS(), Ext_Base_Component.XTYPE(), Ext_Base_Component.PROPERTIESOBJECT(), Ext_Base_Component.EVENTS()) || this;
    _this.XTYPE = Ext_Base_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Base_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_Base_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_Base_Component.EVENTS());
    return _this;
  }

  return Ext_Base_Component;
}(EwcBaseComponent);

export { Ext_Base_Component as default };