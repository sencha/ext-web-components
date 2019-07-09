import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtPivotd3containerComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtPivotd3containerComponent, _ExtBase);

  ExtPivotd3containerComponent.XTYPE = function XTYPE() {
    return 'pivotd3container';
  };

  ExtPivotd3containerComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "configurator": ["Ext.pivot.plugin.Configurator"],
      "drawing": ["Ext.Component"],
      "matrix": ["Ext.pivot.matrix.Base"],
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "align": "Obyect",
      "fitToParent": "Boolean",
      "config": "Object"
    };
  };

  ExtPivotd3containerComponent.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  ExtPivotd3containerComponent.METHODS = function METHODS() {
    return [];
  };

  _createClass(ExtPivotd3containerComponent, [{
    key: "configurator",
    get: function get() {
      return this.getAttribute('configurator');
    },
    set: function set(configurator) {
      this.setAttribute('configurator', configurator);
    }
  }, {
    key: "drawing",
    get: function get() {
      return this.getAttribute('drawing');
    },
    set: function set(drawing) {
      this.setAttribute('drawing', drawing);
    }
  }, {
    key: "matrix",
    get: function get() {
      return this.getAttribute('matrix');
    },
    set: function set(matrix) {
      this.setAttribute('matrix', matrix);
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

  function ExtPivotd3containerComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtPivotd3containerComponent.METHODS();
    _this.XTYPE = ExtPivotd3containerComponent.XTYPE(); //this.PROPERTIES = ExtPivotd3containerComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtPivotd3containerComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtPivotd3containerComponent.EVENTS();
    return _this;
  }

  var _proto = ExtPivotd3containerComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtPivotd3containerComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotd3container', ExtPivotd3containerComponent);
  });
})();