import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_container_Container_Component from '../../../Ext/container/Container';

var Ext_calendar_view_Multi_Component =
/*#__PURE__*/
function (_Ext_container_Contai) {
  _inheritsLoose(Ext_calendar_view_Multi_Component, _Ext_container_Contai);

  //events
  //configs
  Ext_calendar_view_Multi_Component.XTYPE = function XTYPE() {
    return 'calendar-multiview';
  };

  Ext_calendar_view_Multi_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "compact": ["boolean"],
      "compactOptions": ["object"],
      "defaultView": ["string"],
      "layout": ["object", "string"],
      "store": ["object", "Ext.calendar.store.Calendars"],
      "timezoneOffset": ["number"],
      "value": ["date"],
      "views": ["object"]
    };
  };

  Ext_calendar_view_Multi_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_view_Multi_Component.METHODS = function METHODS() {
    return [{
      name: 'moveNext',
      "function": function _function() {
        return this.ext.moveNext();
      }
    }, {
      name: 'movePrevious',
      "function": function _function() {
        return this.ext.movePrevious();
      }
    }, {
      name: 'navigate',
      "function": function _function(amount, interval) {
        return this.ext.navigate(amount, interval);
      }
    }, {
      name: 'setView',
      "function": function _function(view) {
        return this.ext.setView(view);
      }
    }];
  };

  _createClass(Ext_calendar_view_Multi_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_container_Contai.observedAttributes;

      for (var property in Ext_calendar_view_Multi_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_view_Multi_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Multi_Component() {
    var _this;

    _this = _Ext_container_Contai.call(this, Ext_calendar_view_Multi_Component.METHODS(), Ext_calendar_view_Multi_Component.XTYPE(), Ext_calendar_view_Multi_Component.PROPERTIESOBJECT(), Ext_calendar_view_Multi_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_view_Multi_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_view_Multi_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_view_Multi_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_view_Multi_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_view_Multi_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_container_Contai.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_container_Contai.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Multi_Component;
}(Ext_container_Container_Component);

export { Ext_calendar_view_Multi_Component as default };