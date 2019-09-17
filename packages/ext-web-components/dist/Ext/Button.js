import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Button_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Button_Component, _Ext_Component_Compon);

  //configs
  Ext_Button_Component.XTYPE = function XTYPE() {
    return 'button';
  };

  Ext_Button_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowDepress": ["boolean"],
      "arrow": ["boolean"],
      "arrowAlign": ["'right'", "'bottom'"],
      "autoEvent": ["string"],
      "badgeText": ["string"],
      "buttonType": ["string"],
      "destroyMenu": ["boolean"],
      "enableToggle": ["boolean"],
      "handler": ["function"],
      "html": ["string"],
      "icon": ["string"],
      "iconAlign": ["'top'", "'right'", "'bottom'", "'left'"],
      "iconCls": ["string"],
      "menu": ["Ext.menu.Menu", "string", "object"],
      "menuAlign": ["string"],
      "pressed": ["boolean"],
      "pressedDelay": ["number", "boolean"],
      "publishes": ["string", "string[]", "object"],
      "scope": ["object"],
      "stretchMenu": ["boolean"],
      "text": ["string"],
      "textAlign": ["'left'", "'right'", "'center'"],
      "toggleHandler": ["function"],
      "ui": ["string"],
      "value": ["string", "number"]
    };
  };

  Ext_Button_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforepressedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'pressedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'release',
      parameters: 'undefined,e'
    }, {
      name: 'tap',
      parameters: 'undefined,e'
    }];
  };

  Ext_Button_Component.METHODS = function METHODS() {
    return [{
      name: 'doRelease',
      "function": function _function(me, e) {
        return this.ext.doRelease(me, e);
      }
    }, {
      name: 'doTap',
      "function": function _function(me, e) {
        return this.ext.doTap(me, e);
      }
    }, {
      name: 'findEventTarget',
      "function": function _function() {
        return this.ext.findEventTarget();
      }
    }, {
      name: 'getButtonTemplate',
      "function": function _function() {
        return this.ext.getButtonTemplate();
      }
    }, {
      name: 'isPressed',
      "function": function _function() {
        return this.ext.isPressed();
      }
    }, {
      name: 'onPress',
      "function": function _function(e) {
        return this.ext.onPress(e);
      }
    }, {
      name: 'onRelease',
      "function": function _function(e) {
        return this.ext.onRelease(e);
      }
    }, {
      name: 'onTap',
      "function": function _function(e) {
        return this.ext.onTap(e);
      }
    }, {
      name: 'shouldRipple',
      "function": function _function() {
        return this.ext.shouldRipple();
      }
    }, {
      name: 'toggle',
      "function": function _function() {
        return this.ext.toggle();
      }
    }];
  };

  _createClass(Ext_Button_Component, [{
    key: "onbeforepressedchange",
    //events
    get: function get() {
      return this.getAttribute('onbeforepressedchange');
    },
    set: function set(onbeforepressedchange) {
      this.setAttribute('onbeforepressedchange', onbeforepressedchange);
    }
  }, {
    key: "onpressedchange",
    get: function get() {
      return this.getAttribute('onpressedchange');
    },
    set: function set(onpressedchange) {
      this.setAttribute('onpressedchange', onpressedchange);
    }
  }, {
    key: "onrelease",
    get: function get() {
      return this.getAttribute('onrelease');
    },
    set: function set(onrelease) {
      this.setAttribute('onrelease', onrelease);
    }
  }, {
    key: "ontap",
    get: function get() {
      return this.getAttribute('ontap');
    },
    set: function set(ontap) {
      this.setAttribute('ontap', ontap);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Button_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Button_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Button_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_Button_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Button_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Button_Component.METHODS()), events.concat(Ext_Button_Component.EVENTS())) || this; //this.XTYPE = Ext_Button_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Button_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Button_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Button_Component.EVENTS());
  }

  var _proto = Ext_Button_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Button_Component;
}(Ext_Component_Component);

export { Ext_Button_Component as default };