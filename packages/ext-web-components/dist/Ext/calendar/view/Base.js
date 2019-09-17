import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from '../../../Ext/Gadget';

var Ext_calendar_view_Base_Component =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(Ext_calendar_view_Base_Component, _Ext_Gadget_Component);

  //configs
  Ext_calendar_view_Base_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_view_Base_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "addForm": ["object"],
      "compact": ["boolean"],
      "compactOptions": ["object"],
      "controlStoreRange": ["boolean"],
      "editForm": ["object"],
      "eventDefaults": ["object"],
      "gestureNavigation": ["boolean"],
      "header": ["Ext.calendar.header.Base"],
      "store": ["object", "Ext.calendar.store.Calendars"],
      "timezoneOffset": ["number"],
      "value": ["date"]
    };
  };

  Ext_calendar_view_Base_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforeeventadd',
      parameters: 'undefined,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'undefined,context'
    }, {
      name: 'eventadd',
      parameters: 'undefined,context'
    }, {
      name: 'eventdrop',
      parameters: 'undefined,context'
    }, {
      name: 'eventedit',
      parameters: 'undefined,context'
    }, {
      name: 'eventtap',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventadd',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventedit',
      parameters: 'undefined,context'
    }, {
      name: 'valuechange',
      parameters: 'undefined,context'
    }];
  };

  Ext_calendar_view_Base_Component.METHODS = function METHODS() {
    return [{
      name: 'calculateMoveNext',
      "function": function _function() {
        return this.ext.calculateMoveNext();
      }
    }, {
      name: 'calculateMovePrevious',
      "function": function _function() {
        return this.ext.calculateMovePrevious();
      }
    }, {
      name: 'clearEvents',
      "function": function _function() {
        return this.ext.clearEvents();
      }
    }, {
      name: 'createAddForm',
      "function": function _function() {
        return this.ext.createAddForm();
      }
    }, {
      name: 'createEditForm',
      "function": function _function(event) {
        return this.ext.createEditForm(event);
      }
    }, {
      name: 'createEvent',
      "function": function _function(event, cfg, dummy) {
        return this.ext.createEvent(event, cfg, dummy);
      }
    }, {
      name: 'createEvents',
      "function": function _function(events, cfg) {
        return this.ext.createEvents(events, cfg);
      }
    }, {
      name: 'doRefresh',
      "function": function _function() {
        return this.ext.doRefresh();
      }
    }, {
      name: 'doRefreshEvents',
      "function": function _function() {
        return this.ext.doRefreshEvents();
      }
    }, {
      name: 'doShowForm',
      "function": function _function(event, type, cfg, successFn, options) {
        return this.ext.doShowForm(event, type, cfg, successFn, options);
      }
    }, {
      name: 'getBodyElement',
      "function": function _function() {
        return this.ext.getBodyElement();
      }
    }, {
      name: 'getCalendar',
      "function": function _function(id) {
        return this.ext.getCalendar(id);
      }
    }, {
      name: 'getDaysSpanned',
      "function": function _function(start, end, allDay) {
        return this.ext.getDaysSpanned(start, end, allDay);
      }
    }, {
      name: 'getDefaultCreateRange',
      "function": function _function() {
        return this.ext.getDefaultCreateRange();
      }
    }, {
      name: 'getDefaultPalette',
      "function": function _function() {
        return this.ext.getDefaultPalette();
      }
    }, {
      name: 'getDisplayRange',
      "function": function _function() {
        return this.ext.getDisplayRange();
      }
    }, {
      name: 'getEditableCalendars',
      "function": function _function() {
        return this.ext.getEditableCalendars();
      }
    }, {
      name: 'getEvent',
      "function": function _function(el) {
        return this.ext.getEvent(el);
      }
    }, {
      name: 'getEventDaysSpanned',
      "function": function _function(event) {
        return this.ext.getEventDaysSpanned(event);
      }
    }, {
      name: 'getEventPalette',
      "function": function _function(event) {
        return this.ext.getEventPalette(event);
      }
    }, {
      name: 'getEventSource',
      "function": function _function() {
        return this.ext.getEventSource();
      }
    }, {
      name: 'getForm',
      "function": function _function() {
        return this.ext.getForm();
      }
    }, {
      name: 'getMoveBaseValue',
      "function": function _function() {
        return this.ext.getMoveBaseValue();
      }
    }, {
      name: 'getMoveInteral',
      "function": function _function() {
        return this.ext.getMoveInteral();
      }
    }, {
      name: 'getSourceListeners',
      "function": function _function() {
        return this.ext.getSourceListeners();
      }
    }, {
      name: 'getStoreListeners',
      "function": function _function() {
        return this.ext.getStoreListeners();
      }
    }, {
      name: 'getUtcNow',
      "function": function _function() {
        return this.ext.getUtcNow();
      }
    }, {
      name: 'getVisibleRange',
      "function": function _function() {
        return this.ext.getVisibleRange();
      }
    }, {
      name: 'handleChange',
      "function": function _function(type, event, newRange, callback) {
        return this.ext.handleChange(type, event, newRange, callback);
      }
    }, {
      name: 'handleChangeStart',
      "function": function _function(type, event) {
        return this.ext.handleChangeStart(type, event);
      }
    }, {
      name: 'handleResize',
      "function": function _function() {
        return this.ext.handleResize();
      }
    }, {
      name: 'hasEditableCalendars',
      "function": function _function() {
        return this.ext.hasEditableCalendars();
      }
    }, {
      name: 'isEventHidden',
      "function": function _function(event) {
        return this.ext.isEventHidden(event);
      }
    }, {
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
      name: 'onBodySwipe',
      "function": function _function(e) {
        return this.ext.onBodySwipe(e);
      }
    }, {
      name: 'onEventTap',
      "function": function _function(event) {
        return this.ext.onEventTap(event);
      }
    }, {
      name: 'onFormCancel',
      "function": function _function(form) {
        return this.ext.onFormCancel(form);
      }
    }, {
      name: 'onFormCreateSave',
      "function": function _function(form, event, data) {
        return this.ext.onFormCreateSave(form, event, data);
      }
    }, {
      name: 'onFormEditSave',
      "function": function _function(form, event, data) {
        return this.ext.onFormEditSave(form, event, data);
      }
    }, {
      name: 'onSourceAdd',
      "function": function _function(source, events) {
        return this.ext.onSourceAdd(source, events);
      }
    }, {
      name: 'onSourceAttach',
      "function": function _function() {
        return this.ext.onSourceAttach();
      }
    }, {
      name: 'onSourceRefresh',
      "function": function _function(source) {
        return this.ext.onSourceRefresh(source);
      }
    }, {
      name: 'onSourceRemove',
      "function": function _function(source, events) {
        return this.ext.onSourceRemove(source, events);
      }
    }, {
      name: 'onSourceUpdate',
      "function": function _function(source, event) {
        return this.ext.onSourceUpdate(source, event);
      }
    }, {
      name: 'onStoreUpdate',
      "function": function _function(store, calendar) {
        return this.ext.onStoreUpdate(store, calendar);
      }
    }, {
      name: 'refresh',
      "function": function _function() {
        return this.ext.refresh();
      }
    }, {
      name: 'refreshEvents',
      "function": function _function() {
        return this.ext.refreshEvents();
      }
    }, {
      name: 'refreshHeaders',
      "function": function _function() {
        return this.ext.refreshHeaders();
      }
    }, {
      name: 'resumeEventRefresh',
      "function": function _function() {
        return this.ext.resumeEventRefresh();
      }
    }, {
      name: 'setSourceRange',
      "function": function _function(range) {
        return this.ext.setSourceRange(range);
      }
    }, {
      name: 'showAddForm',
      "function": function _function(event, options) {
        return this.ext.showAddForm(event, options);
      }
    }, {
      name: 'showEditForm',
      "function": function _function(event, options) {
        return this.ext.showEditForm(event, options);
      }
    }, {
      name: 'suspendEventRefresh',
      "function": function _function() {
        return this.ext.suspendEventRefresh();
      }
    }, {
      name: 'toUtcOffset',
      "function": function _function(date) {
        return this.ext.toUtcOffset(date);
      }
    }, {
      name: 'utcToLocal',
      "function": function _function(d) {
        return this.ext.utcToLocal(d);
      }
    }];
  };

  _createClass(Ext_calendar_view_Base_Component, [{
    key: "onbeforeeventadd",
    //events
    get: function get() {
      return this.getAttribute('onbeforeeventadd');
    },
    set: function set(onbeforeeventadd) {
      this.setAttribute('onbeforeeventadd', onbeforeeventadd);
    }
  }, {
    key: "onbeforeeventedit",
    get: function get() {
      return this.getAttribute('onbeforeeventedit');
    },
    set: function set(onbeforeeventedit) {
      this.setAttribute('onbeforeeventedit', onbeforeeventedit);
    }
  }, {
    key: "oneventadd",
    get: function get() {
      return this.getAttribute('oneventadd');
    },
    set: function set(oneventadd) {
      this.setAttribute('oneventadd', oneventadd);
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
    key: "oneventedit",
    get: function get() {
      return this.getAttribute('oneventedit');
    },
    set: function set(oneventedit) {
      this.setAttribute('oneventedit', oneventedit);
    }
  }, {
    key: "oneventtap",
    get: function get() {
      return this.getAttribute('oneventtap');
    },
    set: function set(oneventtap) {
      this.setAttribute('oneventtap', oneventtap);
    }
  }, {
    key: "onvalidateeventadd",
    get: function get() {
      return this.getAttribute('onvalidateeventadd');
    },
    set: function set(onvalidateeventadd) {
      this.setAttribute('onvalidateeventadd', onvalidateeventadd);
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
    key: "onvalidateeventedit",
    get: function get() {
      return this.getAttribute('onvalidateeventedit');
    },
    set: function set(onvalidateeventedit) {
      this.setAttribute('onvalidateeventedit', onvalidateeventedit);
    }
  }, {
    key: "onvaluechange",
    get: function get() {
      return this.getAttribute('onvaluechange');
    },
    set: function set(onvaluechange) {
      this.setAttribute('onvaluechange', onvaluechange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget_Component.observedAttributes;

      for (var property in Ext_calendar_view_Base_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_view_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Base_Component(propertiesobject, methods, events) {
    return _Ext_Gadget_Component.call(this, Object.assign(propertiesobject, Ext_calendar_view_Base_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_view_Base_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_view_Base_Component.METHODS()), events.concat(Ext_calendar_view_Base_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_view_Base_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_view_Base_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_view_Base_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_view_Base_Component.EVENTS());
  }

  var _proto = Ext_calendar_view_Base_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Base_Component;
}(Ext_Gadget_Component);

export { Ext_calendar_view_Base_Component as default };