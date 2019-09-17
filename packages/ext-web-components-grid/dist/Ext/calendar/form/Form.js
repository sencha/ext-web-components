import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_AbstractForm_Component from '../../../Ext/calendar/form/AbstractForm';

var Ext_calendar_form_Form_Component =
/*#__PURE__*/
function (_Ext_calendar_form_Ab) {
  _inheritsLoose(Ext_calendar_form_Form_Component, _Ext_calendar_form_Ab);

  //events
  //configs
  Ext_calendar_form_Form_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_form_Form_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultEndTime": ["number[]"],
      "defaultStartTime": ["number[]"]
    };
  };

  Ext_calendar_form_Form_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_form_Form_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_form_Form_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_form_Ab.observedAttributes;

      for (var property in Ext_calendar_form_Form_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_form_Form_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_Form_Component() {
    var _this;

    _this = _Ext_calendar_form_Ab.call(this) || this;
    _this.XTYPE = Ext_calendar_form_Form_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_form_Form_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_calendar_form_Form_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_calendar_form_Form_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_form_Form_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_form_Ab.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_form_Ab.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_Form_Component;
}(Ext_calendar_form_AbstractForm_Component);

export { Ext_calendar_form_Form_Component as default };