import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Base_Component from '../../../Ext/calendar/panel/Base';

var Ext_calendar_panel_Days_Component =
/*#__PURE__*/
function (_Ext_calendar_panel_B) {
  _inheritsLoose(Ext_calendar_panel_Days_Component, _Ext_calendar_panel_B);

  //configs
  Ext_calendar_panel_Days_Component.XTYPE = function XTYPE() {
    return 'calendar-days';
  };

  Ext_calendar_panel_Days_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowSelection": ["boolean"],
      "dayHeader": ["object"],
      "dayHeaderFormat": ["string"],
      "displayOverlap": ["boolean"],
      "draggable": ["boolean"],
      "droppable": ["boolean"],
      "endTime": ["number"],
      "eventRelayers": ["object"],
      "highlightToday": ["any"],
      "resizeEvents": ["boolean"],
      "showNowMarker": ["boolean"],
      "startTime": ["number"],
      "timeFormat": ["string"],
      "view": ["object"],
      "visibleDays": ["number"]
    };
  };

  Ext_calendar_panel_Days_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforeeventdragstart',
      parameters: 'undefined,context'
    }, {
      name: 'beforeeventresizestart',
      parameters: 'undefined,context'
    }, {
      name: 'eventdrop',
      parameters: 'undefined,context'
    }, {
      name: 'eventresize',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventresize',
      parameters: 'undefined,context'
    }];
  };

  Ext_calendar_panel_Days_Component.METHODS = function METHODS() {
    return [{
      name: 'setTimeRange',
      "function": function _function(start, end) {
        return this.ext.setTimeRange(start, end);
      }
    }];
  };

  _createClass(Ext_calendar_panel_Days_Component, [{
    key: "onbeforeeventdragstart",
    //events
    get: function get() {
      return this.getAttribute('onbeforeeventdragstart');
    },
    set: function set(onbeforeeventdragstart) {
      this.setAttribute('onbeforeeventdragstart', onbeforeeventdragstart);
    }
  }, {
    key: "onbeforeeventresizestart",
    get: function get() {
      return this.getAttribute('onbeforeeventresizestart');
    },
    set: function set(onbeforeeventresizestart) {
      this.setAttribute('onbeforeeventresizestart', onbeforeeventresizestart);
    }
  }, {
    key: "oneventdrop",
    get: function get() {
      return this.getAttribute('oneventdrop');
    },
    set: function set(oneventdrop) {
      this.setAttribute('oneventdrop', oneventdrop);
    }
  }, {
    key: "oneventresize",
    get: function get() {
      return this.getAttribute('oneventresize');
    },
    set: function set(oneventresize) {
      this.setAttribute('oneventresize', oneventresize);
    }
  }, {
    key: "onvalidateeventdrop",
    get: function get() {
      return this.getAttribute('onvalidateeventdrop');
    },
    set: function set(onvalidateeventdrop) {
      this.setAttribute('onvalidateeventdrop', onvalidateeventdrop);
    }
  }, {
    key: "onvalidateeventresize",
    get: function get() {
      return this.getAttribute('onvalidateeventresize');
    },
    set: function set(onvalidateeventresize) {
      this.setAttribute('onvalidateeventresize', onvalidateeventresize);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_B.observedAttributes;

      for (var property in Ext_calendar_panel_Days_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_panel_Days_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Days_Component(propertiesobject, methods, events) {
    return _Ext_calendar_panel_B.call(this, Object.assign(propertiesobject, Ext_calendar_panel_Days_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_panel_Days_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_panel_Days_Component.METHODS()), events.concat(Ext_calendar_panel_Days_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_panel_Days_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_Days_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_panel_Days_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_panel_Days_Component.EVENTS());
  }

  var _proto = Ext_calendar_panel_Days_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_B.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_B.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Days_Component;
}(Ext_calendar_panel_Base_Component);

export { Ext_calendar_panel_Days_Component as default };