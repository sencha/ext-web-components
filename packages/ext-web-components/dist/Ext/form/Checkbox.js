import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Input_Component from '../../Ext/field/Input';

var Ext_form_Checkbox_Component =
/*#__PURE__*/
function (_Ext_field_Input_Comp) {
  _inheritsLoose(Ext_form_Checkbox_Component, _Ext_field_Input_Comp);

  //configs
  Ext_form_Checkbox_Component.XTYPE = function XTYPE() {
    return 'checkbox';
  };

  Ext_form_Checkbox_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "checked": ["boolean"],
      "labelMaskTap": ["boolean"],
      "publishes": ["string", "string[]", "object"],
      "shareableName": ["boolean"],
      "twoWayBindable": ["string", "string[]", "object"],
      "value": ["string"]
    };
  };

  Ext_form_Checkbox_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,newValue,oldValue'
    }, {
      name: 'check',
      parameters: 'undefined'
    }, {
      name: 'uncheck',
      parameters: 'undefined'
    }];
  };

  Ext_form_Checkbox_Component.METHODS = function METHODS() {
    return [{
      name: 'check',
      "function": function _function() {
        return this.ext.check();
      }
    }, {
      name: 'getBoxTemplate',
      "function": function _function() {
        return this.ext.getBoxTemplate();
      }
    }, {
      name: 'getChecked',
      "function": function _function() {
        return this.ext.getChecked();
      }
    }, {
      name: 'getGroupValues',
      "function": function _function() {
        return this.ext.getGroupValues();
      }
    }, {
      name: 'getRawValue',
      "function": function _function() {
        return this.ext.getRawValue();
      }
    }, {
      name: 'getSameGroupFields',
      "function": function _function() {
        return this.ext.getSameGroupFields();
      }
    }, {
      name: 'getSubmitValue',
      "function": function _function() {
        return this.ext.getSubmitValue();
      }
    }, {
      name: 'isChecked',
      "function": function _function() {
        return this.ext.isChecked();
      }
    }, {
      name: 'resetGroupValues',
      "function": function _function() {
        return this.ext.resetGroupValues();
      }
    }, {
      name: 'setGroupValues',
      "function": function _function(values) {
        return this.ext.setGroupValues(values);
      }
    }, {
      name: 'uncheck',
      "function": function _function() {
        return this.ext.uncheck();
      }
    }];
  };

  _createClass(Ext_form_Checkbox_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "oncheck",
    get: function get() {
      return this.getAttribute('oncheck');
    },
    set: function set(oncheck) {
      this.setAttribute('oncheck', oncheck);
    }
  }, {
    key: "onuncheck",
    get: function get() {
      return this.getAttribute('onuncheck');
    },
    set: function set(onuncheck) {
      this.setAttribute('onuncheck', onuncheck);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Input_Comp.observedAttributes;

      for (var property in Ext_form_Checkbox_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Checkbox_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Checkbox_Component() {
    var _this;

    _this = _Ext_field_Input_Comp.call(this, Ext_form_Checkbox_Component.METHODS(), Ext_form_Checkbox_Component.XTYPE(), Ext_form_Checkbox_Component.PROPERTIESOBJECT(), Ext_form_Checkbox_Component.EVENTS()) || this;
    _this.XTYPE = Ext_form_Checkbox_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_form_Checkbox_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_form_Checkbox_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_form_Checkbox_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_form_Checkbox_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Input_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Input_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Checkbox_Component;
}(Ext_field_Input_Component);

export { Ext_form_Checkbox_Component as default };