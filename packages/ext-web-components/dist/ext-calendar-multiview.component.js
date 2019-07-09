import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtCalendar_multiviewComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtCalendar_multiviewComponent, _ExtBase);

  ExtCalendar_multiviewComponent.XTYPE = function XTYPE() {
    return 'calendar_multiview';
  };

  ExtCalendar_multiviewComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "compact": ["boolean"],
      "compactOptions": ["object"],
      "defaultView": ["string"],
      "layout": ["object", "string"],
      "store": ["object", "Ext.calendar.store.Calendars"],
      "timezoneOffset": ["number"],
      "value": ["date"],
      "views": ["object"],
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "align": "Obyect",
      "fitToParent": "Boolean",
      "config": "Object"
    };
  };

  ExtCalendar_multiviewComponent.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  ExtCalendar_multiviewComponent.METHODS = function METHODS() {
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

  _createClass(ExtCalendar_multiviewComponent, [{
    key: "compact",
    get: function get() {
      return this.getAttribute('compact');
    },
    set: function set(compact) {
      this.setAttribute('compact', compact);
    }
  }, {
    key: "compactOptions",
    get: function get() {
      return this.getAttribute('compactOptions');
    },
    set: function set(compactOptions) {
      this.setAttribute('compactOptions', compactOptions);
    }
  }, {
    key: "defaultView",
    get: function get() {
      return this.getAttribute('defaultView');
    },
    set: function set(defaultView) {
      this.setAttribute('defaultView', defaultView);
    }
  }, {
    key: "layout",
    get: function get() {
      return this.getAttribute('layout');
    },
    set: function set(layout) {
      this.setAttribute('layout', layout);
    }
  }, {
    key: "store",
    get: function get() {
      return this.getAttribute('store');
    },
    set: function set(store) {
      this.setAttribute('store', store);
    }
  }, {
    key: "timezoneOffset",
    get: function get() {
      return this.getAttribute('timezoneOffset');
    },
    set: function set(timezoneOffset) {
      this.setAttribute('timezoneOffset', timezoneOffset);
    }
  }, {
    key: "value",
    get: function get() {
      return this.getAttribute('value');
    },
    set: function set(value) {
      this.setAttribute('value', value);
    }
  }, {
    key: "views",
    get: function get() {
      return this.getAttribute('views');
    },
    set: function set(views) {
      this.setAttribute('views', views);
    }
  }, {
    key: "platformConfig",
    get: function get() {
      return this.getAttribute('platformConfig');
    },
    set: function set(platformConfig) {
      this.setAttribute('platformConfig', platformConfig);
    }
  }, {
    key: "responsiveConfig",
    get: function get() {
      return this.getAttribute('responsiveConfig');
    },
    set: function set(responsiveConfig) {
      this.setAttribute('responsiveConfig', responsiveConfig);
    }
  }, {
    key: "align",
    get: function get() {
      return this.getAttribute('align');
    },
    set: function set(align) {
      this.setAttribute('align', align);
    }
  }, {
    key: "fitToParent",
    get: function get() {
      return this.getAttribute('fitToParent');
    },
    set: function set(fitToParent) {
      this.setAttribute('fitToParent', fitToParent);
    }
  }, {
    key: "config",
    get: function get() {
      return this.getAttribute('config');
    },
    set: function set(config) {
      this.setAttribute('config', config);
    }
  }]);

  function ExtCalendar_multiviewComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtCalendar_multiviewComponent.METHODS();
    _this.XTYPE = ExtCalendar_multiviewComponent.XTYPE(); //this.PROPERTIES = ExtCalendar_multiviewComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtCalendar_multiviewComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtCalendar_multiviewComponent.EVENTS();
    return _this;
  }

  var _proto = ExtCalendar_multiviewComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtCalendar_multiviewComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar_multiview', ExtCalendar_multiviewComponent);
  });
})();