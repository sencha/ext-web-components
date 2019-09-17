import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet_Component from '../Ext/Sheet';

var Ext_Toast_Component =
/*#__PURE__*/
function (_Ext_Sheet_Component) {
  _inheritsLoose(Ext_Toast_Component, _Ext_Sheet_Component);

  //events
  //configs
  Ext_Toast_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_Toast_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "alignment": ["string"],
      "centered": ["boolean"],
      "hideAnimation": ["string", "mixed"],
      "hideOnMaskTap": ["boolean"],
      "layout": ["object", "string"],
      "maxQueue": ["number"],
      "message": ["string"],
      "messageAnimation": ["boolean", "object"],
      "modal": ["any"],
      "showAnimation": ["string", "mixed"],
      "timeout": ["number"],
      "zIndex": ["any"]
    };
  };

  Ext_Toast_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Toast_Component.METHODS = function METHODS() {
    return [{
      name: 'applyMessage',
      "function": function _function(value) {
        return this.ext.applyMessage(value);
      }
    }, {
      name: 'beforeHide',
      "function": function _function(animation) {
        return this.ext.beforeHide(animation);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'getQueueCount',
      "function": function _function() {
        return this.ext.getQueueCount();
      }
    }, {
      name: 'next',
      "function": function _function() {
        return this.ext.next();
      }
    }, {
      name: 'onTimeout',
      "function": function _function() {
        return this.ext.onTimeout();
      }
    }, {
      name: 'showToast',
      "function": function _function(config) {
        return this.ext.showToast(config);
      }
    }, {
      name: 'startTimer',
      "function": function _function() {
        return this.ext.startTimer();
      }
    }, {
      name: 'updateMessage',
      "function": function _function(newMessage) {
        return this.ext.updateMessage(newMessage);
      }
    }];
  };

  _createClass(Ext_Toast_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Sheet_Component.observedAttributes;

      for (var property in Ext_Toast_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Toast_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Toast_Component(propertiesobject, methods, events) {
    return _Ext_Sheet_Component.call(this, Object.assign(propertiesobject, Ext_Toast_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Toast_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Toast_Component.METHODS()), events.concat(Ext_Toast_Component.EVENTS())) || this; //this.XTYPE = Ext_Toast_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Toast_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Toast_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Toast_Component.EVENTS());
  }

  var _proto = Ext_Toast_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Sheet_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Sheet_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Toast_Component;
}(Ext_Sheet_Component);

export { Ext_Toast_Component as default };