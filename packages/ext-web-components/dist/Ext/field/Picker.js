import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Text_Component from '../../Ext/field/Text';

var Ext_field_Picker_Component =
/*#__PURE__*/
function (_Ext_field_Text_Compo) {
  _inheritsLoose(Ext_field_Picker_Component, _Ext_field_Text_Compo);

  //configs
  Ext_field_Picker_Component.XTYPE = function XTYPE() {
    return 'pickerfield';
  };

  Ext_field_Picker_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "alignTarget": ["string"],
      "autoComplete": ["boolean"],
      "edgePicker": ["object"],
      "floatedPicker": ["object"],
      "floatedPickerAlign": ["string"],
      "focusTrap": ["any"],
      "hideTrigger": ["boolean"],
      "matchFieldWidth": ["boolean"],
      "picker": ["string", "object"],
      "pickerSlotAlign": ["string"]
    };
  };

  Ext_field_Picker_Component.EVENTS = function EVENTS() {
    return [{
      name: 'collapse',
      parameters: 'field'
    }, {
      name: 'expand',
      parameters: 'field'
    }];
  };

  Ext_field_Picker_Component.METHODS = function METHODS() {
    return [{
      name: 'collapseIf',
      "function": function _function(e) {
        return this.ext.collapseIf(e);
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'onEsc',
      "function": function _function(e) {
        return this.ext.onEsc(e);
      }
    }, {
      name: 'realignFloatedPicker',
      "function": function _function(picker) {
        return this.ext.realignFloatedPicker(picker);
      }
    }, {
      name: 'setPickerLocation',
      "function": function _function(fromKeyboard) {
        return this.ext.setPickerLocation(fromKeyboard);
      }
    }];
  };

  _createClass(Ext_field_Picker_Component, [{
    key: "oncollapse",
    //events
    get: function get() {
      return this.getAttribute('oncollapse');
    },
    set: function set(oncollapse) {
      this.setAttribute('oncollapse', oncollapse);
    }
  }, {
    key: "onexpand",
    get: function get() {
      return this.getAttribute('onexpand');
    },
    set: function set(onexpand) {
      this.setAttribute('onexpand', onexpand);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Text_Compo.observedAttributes;

      for (var property in Ext_field_Picker_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Picker_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Picker_Component() {
    var _this;

    _this = _Ext_field_Text_Compo.call(this, Ext_field_Picker_Component.METHODS(), Ext_field_Picker_Component.XTYPE(), Ext_field_Picker_Component.PROPERTIESOBJECT(), Ext_field_Picker_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_Picker_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_Picker_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_Picker_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_Picker_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_Picker_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Text_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Text_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Picker_Component;
}(Ext_field_Text_Component);

export { Ext_field_Picker_Component as default };