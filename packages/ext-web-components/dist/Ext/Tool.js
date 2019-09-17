import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Tool_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Tool_Component, _Ext_Component_Compon);

  //configs
  Ext_Tool_Component.XTYPE = function XTYPE() {
    return 'tool';
  };

  Ext_Tool_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "handler": ["function", "string"],
      "iconCls": ["string"],
      "passive": ["boolean"],
      "scope": ["object"],
      "stopEvent": ["boolean"],
      "toolOwner": ["Ext.Component"],
      "type": ["string"]
    };
  };

  Ext_Tool_Component.EVENTS = function EVENTS() {
    return [{
      name: 'click',
      parameters: 'undefined,e,owner'
    }];
  };

  Ext_Tool_Component.METHODS = function METHODS() {
    return [{
      name: 'onClick',
      "function": function _function(ev) {
        return this.ext.onClick(ev);
      }
    }, {
      name: 'onMouseDown',
      "function": function _function(e) {
        return this.ext.onMouseDown(e);
      }
    }, {
      name: 'onMouseOut',
      "function": function _function() {
        return this.ext.onMouseOut();
      }
    }, {
      name: 'onMouseOver',
      "function": function _function() {
        return this.ext.onMouseOver();
      }
    }, {
      name: 'onRelease',
      "function": function _function() {
        return this.ext.onRelease();
      }
    }];
  };

  _createClass(Ext_Tool_Component, [{
    key: "onclick",
    //events
    get: function get() {
      return this.getAttribute('onclick');
    },
    set: function set(onclick) {
      this.setAttribute('onclick', onclick);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Tool_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Tool_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Tool_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_Tool_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Tool_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Tool_Component.METHODS()), events.concat(Ext_Tool_Component.EVENTS())) || this; //this.XTYPE = Ext_Tool_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Tool_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Tool_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Tool_Component.EVENTS());
  }

  var _proto = Ext_Tool_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Tool_Component;
}(Ext_Component_Component);

export { Ext_Tool_Component as default };