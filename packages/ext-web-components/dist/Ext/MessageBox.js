import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Dialog_Component from '../Ext/Dialog';

var Ext_MessageBox_Component =
/*#__PURE__*/
function (_Ext_Dialog_Component) {
  _inheritsLoose(Ext_MessageBox_Component, _Ext_Dialog_Component);

  //events
  //configs
  Ext_MessageBox_Component.XTYPE = function XTYPE() {
    return 'messagebox';
  };

  Ext_MessageBox_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "buttons": ["array", "object"],
      "closeAction": ["string"],
      "defaultTextHeight": ["number"],
      "iconCls": ["string"],
      "layout": ["object", "string"],
      "message": ["string"],
      "msg": ["string"],
      "prompt": ["object"]
    };
  };

  Ext_MessageBox_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_MessageBox_Component.METHODS = function METHODS() {
    return [{
      name: 'alert',
      "function": function _function(title, message, fn, scope) {
        return this.ext.alert(title, message, fn, scope);
      }
    }, {
      name: 'applyIconCls',
      "function": function _function(config) {
        return this.ext.applyIconCls(config);
      }
    }, {
      name: 'applyMessage',
      "function": function _function(config) {
        return this.ext.applyMessage(config);
      }
    }, {
      name: 'applyPrompt',
      "function": function _function(prompt) {
        return this.ext.applyPrompt(prompt);
      }
    }, {
      name: 'applyTitle',
      "function": function _function(config) {
        return this.ext.applyTitle(config);
      }
    }, {
      name: 'confirm',
      "function": function _function(title, message, fn, scope) {
        return this.ext.confirm(title, message, fn, scope);
      }
    }, {
      name: 'constructor',
      "function": function _function(config) {
        return this.ext.constructor(config);
      }
    }, {
      name: 'onClick',
      "function": function _function(button) {
        return this.ext.onClick(button);
      }
    }, {
      name: 'prompt',
      "function": function _function(title, message, fn, scope, multiLine, value, prompt) {
        return this.ext.prompt(title, message, fn, scope, multiLine, value, prompt);
      }
    }, {
      name: 'show',
      "function": function _function(msgBoxOptions, options) {
        return this.ext.show(msgBoxOptions, options);
      }
    }, {
      name: 'updateIconCls',
      "function": function _function(newIconCls, oldIconCls) {
        return this.ext.updateIconCls(newIconCls, oldIconCls);
      }
    }, {
      name: 'updateMessage',
      "function": function _function(newMessage) {
        return this.ext.updateMessage(newMessage);
      }
    }, {
      name: 'updatePrompt',
      "function": function _function(newPrompt, oldPrompt) {
        return this.ext.updatePrompt(newPrompt, oldPrompt);
      }
    }, {
      name: 'updateTitle',
      "function": function _function(newTitle) {
        return this.ext.updateTitle(newTitle);
      }
    }];
  };

  _createClass(Ext_MessageBox_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Dialog_Component.observedAttributes;

      for (var property in Ext_MessageBox_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_MessageBox_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_MessageBox_Component(propertiesobject, methods, events) {
    return _Ext_Dialog_Component.call(this, Object.assign(propertiesobject, Ext_MessageBox_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_MessageBox_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_MessageBox_Component.METHODS()), events.concat(Ext_MessageBox_Component.EVENTS())) || this; //this.XTYPE = Ext_MessageBox_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_MessageBox_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_MessageBox_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_MessageBox_Component.EVENTS());
  }

  var _proto = Ext_MessageBox_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Dialog_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Dialog_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_MessageBox_Component;
}(Ext_Dialog_Component);

export { Ext_MessageBox_Component as default };