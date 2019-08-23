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

  function Ext_Toast_Component() {
    var _this;

    _this = _Ext_Sheet_Component.call(this, Ext_Toast_Component.METHODS(), Ext_Toast_Component.XTYPE(), Ext_Toast_Component.PROPERTIESOBJECT(), Ext_Toast_Component.EVENTS()) || this;
    _this.XTYPE = Ext_Toast_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Toast_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_Toast_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_Toast_Component.EVENTS());
    return _this;
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