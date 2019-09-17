import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Form_Component from '../../../Ext/calendar/form/Form';

var Ext_calendar_form_Add_Component =
/*#__PURE__*/
function (_Ext_calendar_form_Fo) {
  _inheritsLoose(Ext_calendar_form_Add_Component, _Ext_calendar_form_Fo);

  //events
  //configs
  Ext_calendar_form_Add_Component.XTYPE = function XTYPE() {
    return 'calendar-form-add';
  };

  Ext_calendar_form_Add_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "title": ["string"]
    };
  };

  Ext_calendar_form_Add_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_form_Add_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_form_Add_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_form_Fo.observedAttributes;

      for (var property in Ext_calendar_form_Add_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_form_Add_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_Add_Component() {
    var _this;

    _this = _Ext_calendar_form_Fo.call(this) || this;
    _this.XTYPE = Ext_calendar_form_Add_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_form_Add_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_calendar_form_Add_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_calendar_form_Add_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_form_Add_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_form_Fo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_form_Fo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_Add_Component;
}(Ext_calendar_form_Form_Component);

export { Ext_calendar_form_Add_Component as default };