import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Panel_Component from '../../../Ext/form/Panel';

var Ext_calendar_form_AbstractForm_Component =
/*#__PURE__*/
function (_Ext_form_Panel_Compo) {
  _inheritsLoose(Ext_calendar_form_AbstractForm_Component, _Ext_form_Panel_Compo);

  //events
  //configs
  Ext_calendar_form_AbstractForm_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_form_AbstractForm_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allDayField": ["object"],
      "calendarField": ["object"],
      "cancelButton": ["object"],
      "descriptionField": ["object"],
      "dropButton": ["object"],
      "endDateField": ["object"],
      "endTimeField": ["object"],
      "saveButton": ["object"],
      "startDateField": ["object"],
      "startTimeField": ["object"],
      "titleField": ["object"]
    };
  };

  Ext_calendar_form_AbstractForm_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_form_AbstractForm_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_form_AbstractForm_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_Panel_Compo.observedAttributes;

      for (var property in Ext_calendar_form_AbstractForm_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_form_AbstractForm_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_AbstractForm_Component() {
    var _this;

    _this = _Ext_form_Panel_Compo.call(this, Ext_calendar_form_AbstractForm_Component.METHODS(), Ext_calendar_form_AbstractForm_Component.XTYPE(), Ext_calendar_form_AbstractForm_Component.PROPERTIESOBJECT(), Ext_calendar_form_AbstractForm_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_form_AbstractForm_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_form_AbstractForm_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_form_AbstractForm_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_form_AbstractForm_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_form_AbstractForm_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_Panel_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_Panel_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_AbstractForm_Component;
}(Ext_form_Panel_Component);

export { Ext_calendar_form_AbstractForm_Component as default };