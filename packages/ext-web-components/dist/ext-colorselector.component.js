import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtColorselectorComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtColorselectorComponent, _ExtBase);

  ExtColorselectorComponent.XTYPE = function XTYPE() {
    return 'colorselector';
  };

  ExtColorselectorComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "alphaDecimalFormat": "String",
      "cancelButtonText": "String",
      "color": "Object",
      "fieldPad": "Number",
      "fieldWidth": "Number",
      "format": "'hex6'/'hex8'/'#hex6'/'#hex8'/'HEX6'/'HEX8'/'#HEX6'/'#HEX8'",
      "okButtonText": "String",
      "showOkCancelButtons": "Boolean",
      "showPreviousColor": "Boolean",
      "value": "String",
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "align": "Obyect",
      "fitToParent": "Boolean",
      "config": "Object"
    };
  };

  ExtColorselectorComponent.EVENTS = function EVENTS() {
    return [{
      name: 'cancel',
      parameters: 'colorselector'
    }, {
      name: 'change',
      parameters: 'colorselector,color,previousColor'
    }, {
      name: 'ok',
      parameters: 'colorselector,color'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  ExtColorselectorComponent.METHODS = function METHODS() {
    return [{
      name: 'addDeprecations',
      "function": function _function(deprecations) {
        return this.ext.addDeprecations(deprecations);
      }
    }, {
      name: 'callOverridden',
      "function": function _function(args) {
        return this.ext.callOverridden(args);
      }
    }, {
      name: 'callParent',
      "function": function _function(args) {
        return this.ext.callParent(args);
      }
    }, {
      name: 'callSuper',
      "function": function _function(args) {
        return this.ext.callSuper(args);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'destroyMembers',
      "function": function _function(args) {
        return this.ext.destroyMembers(args);
      }
    }, {
      name: 'getConfig',
      "function": function _function(name, peek, ifInitialized) {
        return this.ext.getConfig(name, peek, ifInitialized);
      }
    }, {
      name: 'getCurrentConfig',
      "function": function _function() {
        return this.ext.getCurrentConfig();
      }
    }, {
      name: 'getInitialConfig',
      "function": function _function(name) {
        return this.ext.getInitialConfig(name);
      }
    }, {
      name: 'hasConfig',
      "function": function _function(name) {
        return this.ext.hasConfig(name);
      }
    }, {
      name: 'initConfig',
      "function": function _function(instanceConfig) {
        return this.ext.initConfig(instanceConfig);
      }
    }, {
      name: 'link',
      "function": function _function(name, value) {
        return this.ext.link(name, value);
      }
    }, {
      name: 'setConfig',
      "function": function _function(name, value, options) {
        return this.ext.setConfig(name, value, options);
      }
    }, {
      name: 'statics',
      "function": function _function() {
        return this.ext.statics();
      }
    }, {
      name: 'unlink',
      "function": function _function(names) {
        return this.ext.unlink(names);
      }
    }, {
      name: 'watchConfig',
      "function": function _function(name, fn, scope) {
        return this.ext.watchConfig(name, fn, scope);
      }
    }];
  };

  _createClass(ExtColorselectorComponent, [{
    key: "alphaDecimalFormat",
    get: function get() {
      return this.getAttribute('alphaDecimalFormat');
    },
    set: function set(alphaDecimalFormat) {
      this.setAttribute('alphaDecimalFormat', alphaDecimalFormat);
    }
  }, {
    key: "cancelButtonText",
    get: function get() {
      return this.getAttribute('cancelButtonText');
    },
    set: function set(cancelButtonText) {
      this.setAttribute('cancelButtonText', cancelButtonText);
    }
  }, {
    key: "color",
    get: function get() {
      return this.getAttribute('color');
    },
    set: function set(color) {
      this.setAttribute('color', color);
    }
  }, {
    key: "fieldPad",
    get: function get() {
      return this.getAttribute('fieldPad');
    },
    set: function set(fieldPad) {
      this.setAttribute('fieldPad', fieldPad);
    }
  }, {
    key: "fieldWidth",
    get: function get() {
      return this.getAttribute('fieldWidth');
    },
    set: function set(fieldWidth) {
      this.setAttribute('fieldWidth', fieldWidth);
    }
  }, {
    key: "format",
    get: function get() {
      return this.getAttribute('format');
    },
    set: function set(format) {
      this.setAttribute('format', format);
    }
  }, {
    key: "okButtonText",
    get: function get() {
      return this.getAttribute('okButtonText');
    },
    set: function set(okButtonText) {
      this.setAttribute('okButtonText', okButtonText);
    }
  }, {
    key: "showOkCancelButtons",
    get: function get() {
      return this.getAttribute('showOkCancelButtons');
    },
    set: function set(showOkCancelButtons) {
      this.setAttribute('showOkCancelButtons', showOkCancelButtons);
    }
  }, {
    key: "showPreviousColor",
    get: function get() {
      return this.getAttribute('showPreviousColor');
    },
    set: function set(showPreviousColor) {
      this.setAttribute('showPreviousColor', showPreviousColor);
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
  }, {
    key: "oncancel",
    get: function get() {
      return this.getAttribute('oncancel');
    },
    set: function set(oncancel) {
      this.setAttribute('oncancel', oncancel);
    }
  }, {
    key: "onchange",
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "onok",
    get: function get() {
      return this.getAttribute('onok');
    },
    set: function set(onok) {
      this.setAttribute('onok', onok);
    }
  }]);

  function ExtColorselectorComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtColorselectorComponent.METHODS();
    _this.XTYPE = ExtColorselectorComponent.XTYPE(); //this.PROPERTIES = ExtColorselectorComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtColorselectorComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtColorselectorComponent.EVENTS();
    return _this;
  }

  var _proto = ExtColorselectorComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtColorselectorComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-colorselector', ExtColorselectorComponent);
  });
})();