import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_AbstractBase_Component from '../../../Ext/calendar/panel/AbstractBase';

var Ext_calendar_panel_Base_Component =
/*#__PURE__*/
function (_Ext_calendar_panel_A) {
  _inheritsLoose(Ext_calendar_panel_Base_Component, _Ext_calendar_panel_A);

  //configs
  Ext_calendar_panel_Base_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_panel_Base_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "addForm": ["object"],
      "cls": ["string", "string[]"],
      "compact": ["boolean"],
      "compactOptions": ["object"],
      "controlStoreRange": ["boolean"],
      "dayHeader": ["object"],
      "editForm": ["object"],
      "eventDefaults": ["object"],
      "eventRelayers": ["object"],
      "gestureNavigation": ["boolean"],
      "store": ["object", "Ext.calendar.store.Calendars"],
      "timezoneOffset": ["number"],
      "twoWayBindable": ["string", "string[]", "object"],
      "value": ["date"],
      "view": ["object"]
    };
  };

  Ext_calendar_panel_Base_Component.EVENTS = function EVENTS() {
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

  Ext_calendar_panel_Base_Component.METHODS = function METHODS() {
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
      name: 'createItemRelayer',
      "function": function _function(name) {
        return this.ext.createItemRelayer(name);
      }
    }, {
      name: 'generateProxyMethod',
      "function": function _function(thisCfg, targetCfg, targetName) {
        return this.ext.generateProxyMethod(thisCfg, targetCfg, targetName);
      }
    }, {
      name: 'getDisplayRange',
      "function": function _function() {
        return this.ext.getDisplayRange();
      }
    }, {
      name: 'getVisibleRange',
      "function": function _function() {
        return this.ext.getVisibleRange();
      }
    }, {
      name: 'initRelayers',
      "function": function _function() {
        return this.ext.initRelayers();
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
      name: 'refreshEvents',
      "function": function _function() {
        return this.ext.refreshEvents();
      }
    }, {
      name: 'setupProxy',
      "function": function _function(configs, targetName) {
        return this.ext.setupProxy(configs, targetName);
      }
    }, {
      name: 'showAddForm',
      "function": function _function(data, options) {
        return this.ext.showAddForm(data, options);
      }
    }, {
      name: 'showEditForm',
      "function": function _function(event, options) {
        return this.ext.showEditForm(event, options);
      }
    }];
  };

  _createClass(Ext_calendar_panel_Base_Component, [{
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
      var attrs = _Ext_calendar_panel_A.observedAttributes;

      for (var property in Ext_calendar_panel_Base_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_panel_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Base_Component() {
    var _this;

    _this = _Ext_calendar_panel_A.call(this, Ext_calendar_panel_Base_Component.METHODS(), Ext_calendar_panel_Base_Component.XTYPE(), Ext_calendar_panel_Base_Component.PROPERTIESOBJECT(), Ext_calendar_panel_Base_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_panel_Base_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_panel_Base_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_panel_Base_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_panel_Base_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_panel_Base_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_A.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_A.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Base_Component;
}(Ext_calendar_panel_AbstractBase_Component);

export { Ext_calendar_panel_Base_Component as default };