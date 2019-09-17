import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Picker_Component from '../../Ext/picker/Picker';

var Ext_picker_SelectPicker_Component =
/*#__PURE__*/
function (_Ext_picker_Picker_Co) {
  _inheritsLoose(Ext_picker_SelectPicker_Component, _Ext_picker_Picker_Co);

  //events
  //configs
  Ext_picker_SelectPicker_Component.XTYPE = function XTYPE() {
    return 'selectpicker';
  };

  Ext_picker_SelectPicker_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_picker_SelectPicker_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_picker_SelectPicker_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_picker_SelectPicker_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_picker_Picker_Co.observedAttributes;

      for (var property in Ext_picker_SelectPicker_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_picker_SelectPicker_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_picker_SelectPicker_Component(propertiesobject, methods, events) {
    return _Ext_picker_Picker_Co.call(this, Object.assign(propertiesobject, Ext_picker_SelectPicker_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_picker_SelectPicker_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_picker_SelectPicker_Component.METHODS()), events.concat(Ext_picker_SelectPicker_Component.EVENTS())) || this; //this.XTYPE = Ext_picker_SelectPicker_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_picker_SelectPicker_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_picker_SelectPicker_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_picker_SelectPicker_Component.EVENTS());
  }

  var _proto = Ext_picker_SelectPicker_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_picker_Picker_Co.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_picker_Picker_Co.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_picker_SelectPicker_Component;
}(Ext_picker_Picker_Component);

export { Ext_picker_SelectPicker_Component as default };