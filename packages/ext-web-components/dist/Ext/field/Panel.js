import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../Ext/Panel';

var Ext_field_Panel_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_field_Panel_Component, _Ext_Panel_Component);

  //configs
  Ext_field_Panel_Component.XTYPE = function XTYPE() {
    return 'fieldpanel';
  };

  Ext_field_Panel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "api": ["object"],
      "baseParams": ["object"],
      "nameable": ["boolean"],
      "nameHolder": ["boolean"],
      "paramOrder": ["string", "string[]"],
      "paramsAsHash": ["boolean"],
      "scrollable": ["boolean", "string", "object"],
      "shareableName": ["boolean"],
      "timeout": ["number"],
      "url": ["string"]
    };
  };

  Ext_field_Panel_Component.EVENTS = function EVENTS() {
    return [{
      name: 'exception',
      parameters: 'undefined,result'
    }];
  };

  Ext_field_Panel_Component.METHODS = function METHODS() {
    return [{
      name: 'getParams',
      "function": function _function(params) {
        return this.ext.getParams(params);
      }
    }, {
      name: 'load',
      "function": function _function(options) {
        return this.ext.load(options);
      }
    }];
  };

  _createClass(Ext_field_Panel_Component, [{
    key: "onexception",
    //events
    get: function get() {
      return this.getAttribute('onexception');
    },
    set: function set(onexception) {
      this.setAttribute('onexception', onexception);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_field_Panel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Panel_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_field_Panel_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_Panel_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_Panel_Component.METHODS()), events.concat(Ext_field_Panel_Component.EVENTS())) || this; //this.XTYPE = Ext_field_Panel_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Panel_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_Panel_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_Panel_Component.EVENTS());
  }

  var _proto = Ext_field_Panel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Panel_Component;
}(Ext_Panel_Component);

export { Ext_field_Panel_Component as default };