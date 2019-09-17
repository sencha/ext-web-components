import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker_Component from '../../../Ext/field/Picker';

var Ext_ux_colorpick_Field_Component =
/*#__PURE__*/
function (_Ext_field_Picker_Com) {
  _inheritsLoose(Ext_ux_colorpick_Field_Component, _Ext_field_Picker_Com);

  //configs
  Ext_ux_colorpick_Field_Component.XTYPE = function XTYPE() {
    return 'colorfield';
  };

  Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "popup": ["object"]
    };
  };

  Ext_ux_colorpick_Field_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,color,previousColor'
    }];
  };

  Ext_ux_colorpick_Field_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_ux_colorpick_Field_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Picker_Com.observedAttributes;

      for (var property in Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_ux_colorpick_Field_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_colorpick_Field_Component(propertiesobject, methods, events) {
    return _Ext_field_Picker_Com.call(this, Object.assign(propertiesobject, Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_ux_colorpick_Field_Component.METHODS()), events.concat(Ext_ux_colorpick_Field_Component.EVENTS())) || this; //this.XTYPE = Ext_ux_colorpick_Field_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_ux_colorpick_Field_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_ux_colorpick_Field_Component.EVENTS());
  }

  var _proto = Ext_ux_colorpick_Field_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Picker_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Picker_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_colorpick_Field_Component;
}(Ext_field_Picker_Component);

export { Ext_ux_colorpick_Field_Component as default };