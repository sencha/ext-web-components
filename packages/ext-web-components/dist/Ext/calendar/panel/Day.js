import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Days_Component from '../../../Ext/calendar/panel/Days';

var Ext_calendar_panel_Day_Component =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(Ext_calendar_panel_Day_Component, _Ext_calendar_panel_D);

  //events
  //configs
  Ext_calendar_panel_Day_Component.XTYPE = function XTYPE() {
    return 'calendar-day';
  };

  Ext_calendar_panel_Day_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "view": ["object"],
      "visibleDays": ["number"]
    };
  };

  Ext_calendar_panel_Day_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_panel_Day_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_panel_Day_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_D.observedAttributes;

      for (var property in Ext_calendar_panel_Day_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_panel_Day_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Day_Component(propertiesobject, methods, events) {
    return _Ext_calendar_panel_D.call(this, Object.assign(propertiesobject, Ext_calendar_panel_Day_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_panel_Day_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_panel_Day_Component.METHODS()), events.concat(Ext_calendar_panel_Day_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_panel_Day_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Day_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_panel_Day_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_panel_Day_Component.EVENTS());
  }

  var _proto = Ext_calendar_panel_Day_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_D.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_D.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Day_Component;
}(Ext_calendar_panel_Days_Component);

export { Ext_calendar_panel_Day_Component as default };