import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_field_Field_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_field_Field_Component, _Ext_Component_Compon);

  //configs
  Ext_field_Field_Component.XTYPE = function XTYPE() {
    return 'field';
  };

  Ext_field_Field_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoFitErrors": ["boolean"],
      "bodyAlign": ["'start'", "'center'", "'end'", "'stretch'"],
      "dataType": ["Ext.data.field.Field", "object", "string"],
      "disabled": ["boolean"],
      "error": ["string", "string[]"],
      "errorMessage": ["string"],
      "errorTarget": ["string"],
      "errorTip": ["object"],
      "errorTpl": ["string", "string[]", "Ext.XTemplate"],
      "fullscreen": ["boolean"],
      "inline": ["boolean"],
      "label": ["string"],
      "labelAlign": ["'top'", "'left'", "'bottom'", "'right'"],
      "labelCls": ["string"],
      "labelMinWidth": ["number", "string"],
      "labelTextAlign": ["'top'", "'right'", "'bottom'", "'left'"],
      "labelWidth": ["number", "string"],
      "labelWrap": ["boolean"],
      "name": ["string"],
      "required": ["boolean"],
      "requiredMessage": ["string"],
      "sideError": ["string"],
      "tipError": ["string"],
      "titleError": ["string"],
      "underError": ["string"],
      "validateDisabled": ["boolean"],
      "validationMessage": ["string"],
      "validators": ["mixed"],
      "value": ["mixed"]
    };
  };

  Ext_field_Field_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,newValue,oldValue'
    }, {
      name: 'click',
      parameters: 'e'
    }, {
      name: 'errorchange',
      parameters: 'undefined,error'
    }, {
      name: 'keyup',
      parameters: 'e'
    }, {
      name: 'mousedown',
      parameters: 'e'
    }, {
      name: 'paste',
      parameters: 'e'
    }];
  };

  Ext_field_Field_Component.METHODS = function METHODS() {
    return [{
      name: 'applyValidators',
      "function": function _function(validators) {
        return this.ext.applyValidators(validators);
      }
    }, {
      name: 'clearInvalid',
      "function": function _function() {
        return this.ext.clearInvalid();
      }
    }, {
      name: 'completeEdit',
      "function": function _function() {
        return this.ext.completeEdit();
      }
    }, {
      name: 'didValueChange',
      "function": function _function(newVal, oldVal) {
        return this.ext.didValueChange(newVal, oldVal);
      }
    }, {
      name: 'doValidate',
      "function": function _function(value, errors, skipLazy) {
        return this.ext.doValidate(value, errors, skipLazy);
      }
    }, {
      name: 'formatErrors',
      "function": function _function(errors) {
        return this.ext.formatErrors(errors);
      }
    }, {
      name: 'getRawValue',
      "function": function _function() {
        return this.ext.getRawValue();
      }
    }, {
      name: 'isDirty',
      "function": function _function() {
        return this.ext.isDirty();
      }
    }, {
      name: 'isEqual',
      "function": function _function(value1, value2) {
        return this.ext.isEqual(value1, value2);
      }
    }, {
      name: 'isValid',
      "function": function _function() {
        return this.ext.isValid();
      }
    }, {
      name: 'markInvalid',
      "function": function _function(messages) {
        return this.ext.markInvalid(messages);
      }
    }, {
      name: 'processRawValue',
      "function": function _function(value) {
        return this.ext.processRawValue(value);
      }
    }, {
      name: 'rawToValue',
      "function": function _function(rawValue) {
        return this.ext.rawToValue(rawValue);
      }
    }, {
      name: 'reset',
      "function": function _function() {
        return this.ext.reset();
      }
    }, {
      name: 'resetOriginalValue',
      "function": function _function() {
        return this.ext.resetOriginalValue();
      }
    }, {
      name: 'serialize',
      "function": function _function() {
        return this.ext.serialize();
      }
    }, {
      name: 'toggleInvalidCls',
      "function": function _function(hasError) {
        return this.ext.toggleInvalidCls(hasError);
      }
    }, {
      name: 'transformRawValue',
      "function": function _function(value) {
        return this.ext.transformRawValue(value);
      }
    }, {
      name: 'validate',
      "function": function _function(skipLazy) {
        return this.ext.validate(skipLazy);
      }
    }];
  };

  _createClass(Ext_field_Field_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "onclick",
    get: function get() {
      return this.getAttribute('onclick');
    },
    set: function set(onclick) {
      this.setAttribute('onclick', onclick);
    }
  }, {
    key: "onerrorchange",
    get: function get() {
      return this.getAttribute('onerrorchange');
    },
    set: function set(onerrorchange) {
      this.setAttribute('onerrorchange', onerrorchange);
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
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_field_Field_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Field_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Field_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_field_Field_Component.METHODS(), Ext_field_Field_Component.XTYPE(), Ext_field_Field_Component.PROPERTIESOBJECT(), Ext_field_Field_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_Field_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_Field_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_Field_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_Field_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_Field_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Field_Component;
}(Ext_Component_Component);

export { Ext_field_Field_Component as default };