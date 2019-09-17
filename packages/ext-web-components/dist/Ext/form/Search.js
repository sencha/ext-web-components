import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Text_Component from '../../Ext/field/Text';

var Ext_form_Search_Component =
/*#__PURE__*/
function (_Ext_field_Text_Compo) {
  _inheritsLoose(Ext_form_Search_Component, _Ext_field_Text_Compo);

  //events
  //configs
  Ext_form_Search_Component.XTYPE = function XTYPE() {
    return 'searchfield';
  };

  Ext_form_Search_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_form_Search_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_form_Search_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_form_Search_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Text_Compo.observedAttributes;

      for (var property in Ext_form_Search_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Search_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Search_Component(propertiesobject, methods, events) {
    return _Ext_field_Text_Compo.call(this, Object.assign(propertiesobject, Ext_form_Search_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_form_Search_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_form_Search_Component.METHODS()), events.concat(Ext_form_Search_Component.EVENTS())) || this; //this.XTYPE = Ext_form_Search_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Search_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_form_Search_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_form_Search_Component.EVENTS());
  }

  var _proto = Ext_form_Search_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Text_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Text_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Search_Component;
}(Ext_field_Text_Component);

export { Ext_form_Search_Component as default };