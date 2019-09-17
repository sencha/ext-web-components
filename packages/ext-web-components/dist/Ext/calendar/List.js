import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_AbstractList_Component from '../../Ext/calendar/AbstractList';

var Ext_calendar_List_Component =
/*#__PURE__*/
function (_Ext_calendar_Abstrac) {
  _inheritsLoose(Ext_calendar_List_Component, _Ext_calendar_Abstrac);

  //events
  //configs
  Ext_calendar_List_Component.XTYPE = function XTYPE() {
    return 'calendar-list';
  };

  Ext_calendar_List_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "enableToggle": ["boolean"]
    };
  };

  Ext_calendar_List_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_List_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_List_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_Abstrac.observedAttributes;

      for (var property in Ext_calendar_List_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_List_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_List_Component(propertiesobject, methods, events) {
    return _Ext_calendar_Abstrac.call(this, Object.assign(propertiesobject, Ext_calendar_List_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_List_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_List_Component.METHODS()), events.concat(Ext_calendar_List_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_List_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_List_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_List_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_List_Component.EVENTS());
  }

  var _proto = Ext_calendar_List_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_List_Component;
}(Ext_calendar_AbstractList_Component);

export { Ext_calendar_List_Component as default };