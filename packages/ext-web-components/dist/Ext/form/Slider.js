import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Field_Component from '../../Ext/field/Field';

var Ext_form_Slider_Component =
/*#__PURE__*/
function (_Ext_field_Field_Comp) {
  _inheritsLoose(Ext_form_Slider_Component, _Ext_field_Field_Comp);

  //configs
  Ext_form_Slider_Component.XTYPE = function XTYPE() {
    return 'sliderfield';
  };

  Ext_form_Slider_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "bodyAlign": ["'start'", "'center'", "'end'", "'stretch'"],
      "increment": ["number"],
      "liveUpdate": ["boolean"],
      "maxValue": ["number"],
      "minValue": ["number"],
      "readOnly": ["any"],
      "slider": ["any"],
      "tabIndex": ["number"],
      "twoWayBindable": ["string", "string[]", "object"],
      "value": ["number", "number[]"],
      "values": ["number", "number[]"]
    };
  };

  Ext_form_Slider_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'me,newValue,oldValue'
    }, {
      name: 'drag',
      parameters: 'undefined,sl,thumb,e'
    }, {
      name: 'dragchange',
      parameters: 'me,sl,thumb,newValue,oldValue'
    }, {
      name: 'dragend',
      parameters: 'undefined,sl,thumb,value,e'
    }, {
      name: 'dragstart',
      parameters: 'undefined,sl,thumb,value,e'
    }];
  };

  Ext_form_Slider_Component.METHODS = function METHODS() {
    return [{
      name: 'getValues',
      "function": function _function() {
        return this.ext.getValues();
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'setValues',
      "function": function _function(value) {
        return this.ext.setValues(value);
      }
    }];
  };

  _createClass(Ext_form_Slider_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "ondrag",
    get: function get() {
      return this.getAttribute('ondrag');
    },
    set: function set(ondrag) {
      this.setAttribute('ondrag', ondrag);
    }
  }, {
    key: "ondragchange",
    get: function get() {
      return this.getAttribute('ondragchange');
    },
    set: function set(ondragchange) {
      this.setAttribute('ondragchange', ondragchange);
    }
  }, {
    key: "ondragend",
    get: function get() {
      return this.getAttribute('ondragend');
    },
    set: function set(ondragend) {
      this.setAttribute('ondragend', ondragend);
    }
  }, {
    key: "ondragstart",
    get: function get() {
      return this.getAttribute('ondragstart');
    },
    set: function set(ondragstart) {
      this.setAttribute('ondragstart', ondragstart);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Field_Comp.observedAttributes;

      for (var property in Ext_form_Slider_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Slider_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Slider_Component() {
    var _this;

    _this = _Ext_field_Field_Comp.call(this, Ext_form_Slider_Component.METHODS(), Ext_form_Slider_Component.XTYPE(), Ext_form_Slider_Component.PROPERTIESOBJECT(), Ext_form_Slider_Component.EVENTS()) || this;
    _this.XTYPE = Ext_form_Slider_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_form_Slider_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_form_Slider_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_form_Slider_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_form_Slider_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Field_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Field_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Slider_Component;
}(Ext_field_Field_Component);

export { Ext_form_Slider_Component as default };