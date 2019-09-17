import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Decorator_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Decorator_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_Decorator_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_Decorator_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "component": ["object"]
    };
  };

  Ext_Decorator_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Decorator_Component.METHODS = function METHODS() {
    return [{
      name: 'applyComponent',
      "function": function _function(config) {
        return this.ext.applyComponent(config);
      }
    }, {
      name: 'doSetComponent',
      "function": function _function(component) {
        return this.ext.doSetComponent(component);
      }
    }, {
      name: 'doUnsetComponent',
      "function": function _function(component) {
        return this.ext.doUnsetComponent(component);
      }
    }, {
      name: 'setDisabled',
      "function": function _function(disabled) {
        return this.ext.setDisabled(disabled);
      }
    }, {
      name: 'updateComponent',
      "function": function _function(newComponent, oldComponent) {
        return this.ext.updateComponent(newComponent, oldComponent);
      }
    }];
  };

  _createClass(Ext_Decorator_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Decorator_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Decorator_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Decorator_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_Decorator_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Decorator_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Decorator_Component.METHODS()), events.concat(Ext_Decorator_Component.EVENTS())) || this; //this.XTYPE = Ext_Decorator_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Decorator_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Decorator_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Decorator_Component.EVENTS());
  }

  var _proto = Ext_Decorator_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Decorator_Component;
}(Ext_Component_Component);

export { Ext_Decorator_Component as default };