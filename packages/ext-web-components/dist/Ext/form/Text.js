import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Input_Component from '../../Ext/field/Input';

var Ext_form_Text_Component =
/*#__PURE__*/
function (_Ext_field_Input_Comp) {
  _inheritsLoose(Ext_form_Text_Component, _Ext_field_Input_Comp);

  //configs
  Ext_form_Text_Component.XTYPE = function XTYPE() {
    return 'textfield';
  };

  Ext_form_Text_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "animateUnderline": ["boolean"],
      "autoCapitalize": ["boolean"],
      "autoComplete": ["boolean"],
      "autoCorrect": ["boolean"],
      "autoHideInputMask": ["boolean"],
      "badFormatMessage": ["string"],
      "bodyAlign": ["any"],
      "clearable": ["boolean"],
      "editable": ["boolean"],
      "inputMask": ["string", "Ext.field.InputMask"],
      "inputType": ["string"],
      "labelAlign": ["'top'", "'left'", "'bottom'", "'right'"],
      "labelInPlaceholder": ["any"],
      "maxLength": ["number"],
      "parseValidator": ["Ext.data.validator.Validator"],
      "pattern": ["string"],
      "placeholder": ["string"],
      "publishes": ["string", "string[]", "object"],
      "stripCharsRe": ["regexp"],
      "textAlign": ["'left'", "'center'", "'right'"],
      "triggers": ["object"],
      "twoWayBindable": ["string", "string[]", "object"]
    };
  };

  Ext_form_Text_Component.EVENTS = function EVENTS() {
    return [{
      name: 'action',
      parameters: 'undefined,e'
    }, {
      name: 'blur',
      parameters: 'undefined,e'
    }, {
      name: 'clearicontap',
      parameters: 'undefined,input,e'
    }, {
      name: 'focus',
      parameters: 'undefined,e'
    }, {
      name: 'keydown',
      parameters: 'undefined,e'
    }, {
      name: 'keyup',
      parameters: 'undefined,e'
    }, {
      name: 'mousedown',
      parameters: 'undefined,e'
    }, {
      name: 'paste',
      parameters: 'undefined,e'
    }];
  };

  Ext_form_Text_Component.METHODS = function METHODS() {
    return [{
      name: 'addTrigger',
      "function": function _function(name, trigger) {
        return this.ext.addTrigger(name, trigger);
      }
    }, {
      name: 'clearValue',
      "function": function _function() {
        return this.ext.clearValue();
      }
    }, {
      name: 'createTrigger',
      "function": function _function(name, trigger) {
        return this.ext.createTrigger(name, trigger);
      }
    }, {
      name: 'doClearIconTap',
      "function": function _function() {
        return this.ext.doClearIconTap();
      }
    }, {
      name: 'doKeyUp',
      "function": function _function(me, e) {
        return this.ext.doKeyUp(me, e);
      }
    }, {
      name: 'fireKey',
      "function": function _function(e) {
        return this.ext.fireKey(e);
      }
    }, {
      name: 'getTextSelection',
      "function": function _function() {
        return this.ext.getTextSelection();
      }
    }, {
      name: 'parseValue',
      "function": function _function(value, errors) {
        return this.ext.parseValue(value, errors);
      }
    }, {
      name: 'processRawValue',
      "function": function _function(value) {
        return this.ext.processRawValue(value);
      }
    }, {
      name: 'removeTrigger',
      "function": function _function(trigger, destroy) {
        return this.ext.removeTrigger(trigger, destroy);
      }
    }, {
      name: 'select',
      "function": function _function(start, end, direction) {
        return this.ext.select(start, end, direction);
      }
    }, {
      name: 'syncTriggers',
      "function": function _function() {
        return this.ext.syncTriggers();
      }
    }];
  };

  _createClass(Ext_form_Text_Component, [{
    key: "onaction",
    //events
    get: function get() {
      return this.getAttribute('onaction');
    },
    set: function set(onaction) {
      this.setAttribute('onaction', onaction);
    }
  }, {
    key: "onblur",
    get: function get() {
      return this.getAttribute('onblur');
    },
    set: function set(onblur) {
      this.setAttribute('onblur', onblur);
    }
  }, {
    key: "onclearicontap",
    get: function get() {
      return this.getAttribute('onclearicontap');
    },
    set: function set(onclearicontap) {
      this.setAttribute('onclearicontap', onclearicontap);
    }
  }, {
    key: "onfocus",
    get: function get() {
      return this.getAttribute('onfocus');
    },
    set: function set(onfocus) {
      this.setAttribute('onfocus', onfocus);
    }
  }, {
    key: "onkeydown",
    get: function get() {
      return this.getAttribute('onkeydown');
    },
    set: function set(onkeydown) {
      this.setAttribute('onkeydown', onkeydown);
    }
  }, {
    key: "onkeyup",
    get: function get() {
      return this.getAttribute('onkeyup');
    },
    set: function set(onkeyup) {
      this.setAttribute('onkeyup', onkeyup);
    }
  }, {
    key: "onmousedown",
    get: function get() {
      return this.getAttribute('onmousedown');
    },
    set: function set(onmousedown) {
      this.setAttribute('onmousedown', onmousedown);
    }
  }, {
    key: "onpaste",
    get: function get() {
      return this.getAttribute('onpaste');
    },
    set: function set(onpaste) {
      this.setAttribute('onpaste', onpaste);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Input_Comp.observedAttributes;

      for (var property in Ext_form_Text_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Text_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Text_Component(propertiesobject, methods, events) {
    return _Ext_field_Input_Comp.call(this, Object.assign(propertiesobject, Ext_form_Text_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_form_Text_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_form_Text_Component.METHODS()), events.concat(Ext_form_Text_Component.EVENTS())) || this; //this.XTYPE = Ext_form_Text_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Text_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_form_Text_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_form_Text_Component.EVENTS());
  }

  var _proto = Ext_form_Text_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Input_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Input_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Text_Component;
}(Ext_field_Input_Component);

export { Ext_form_Text_Component as default };