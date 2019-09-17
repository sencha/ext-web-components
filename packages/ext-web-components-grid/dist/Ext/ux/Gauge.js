import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from '../../Ext/Gadget';

var Ext_ux_Gauge_Component =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(Ext_ux_Gauge_Component, _Ext_Gadget_Component);

  //events
  //configs
  Ext_ux_Gauge_Component.XTYPE = function XTYPE() {
    return 'gauge';
  };

  Ext_ux_Gauge_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "angleOffset": ["number"],
      "animation": ["object", "boolean"],
      "clockwise": ["boolean"],
      "maxValue": ["number"],
      "minValue": ["number"],
      "needle": ["Ext.ux.gauge.needle.Abstract"],
      "padding": ["number", "string"],
      "textAlign": ["string"],
      "textOffset": ["object"],
      "textTpl": ["Ext.XTemplate"],
      "trackLength": ["number"],
      "trackStart": ["number"],
      "trackStyle": ["object"],
      "value": ["number"],
      "valueStyle": ["object"]
    };
  };

  Ext_ux_Gauge_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_ux_Gauge_Component.METHODS = function METHODS() {
    return [{
      name: 'animate',
      "function": function _function(from, to, duration, easing, fn, scope) {
        return this.ext.animate(from, to, duration, easing, fn, scope);
      }
    }, {
      name: 'camelToHyphen',
      "function": function _function(name) {
        return this.ext.camelToHyphen(name);
      }
    }, {
      name: 'createInterpolator',
      "function": function _function(rangeCheck) {
        return this.ext.createInterpolator(rangeCheck);
      }
    }, {
      name: 'fitSectorInPaddedRect',
      "function": function _function(width, height, padding, startAngle, lengthAngle, ratio) {
        return this.ext.fitSectorInPaddedRect(width, height, padding, startAngle, lengthAngle, ratio);
      }
    }, {
      name: 'fitSectorInRect',
      "function": function _function(width, height, startAngle, lengthAngle, ratio) {
        return this.ext.fitSectorInRect(width, height, startAngle, lengthAngle, ratio);
      }
    }, {
      name: 'getRadiusFn',
      "function": function _function(radius) {
        return this.ext.getRadiusFn(radius);
      }
    }, {
      name: 'getUnitSectorExtrema',
      "function": function _function(startAngle, lengthAngle) {
        return this.ext.getUnitSectorExtrema(startAngle, lengthAngle);
      }
    }, {
      name: 'normalizeAngle',
      "function": function _function(angle) {
        return this.ext.normalizeAngle(angle);
      }
    }, {
      name: 'resizeGradients',
      "function": function _function(size) {
        return this.ext.resizeGradients(size);
      }
    }, {
      name: 'setGradientSize',
      "function": function _function(gradient, x1, y1, x2, y2) {
        return this.ext.setGradientSize(gradient, x1, y1, x2, y2);
      }
    }, {
      name: 'setGradientStops',
      "function": function _function(gradient, stops) {
        return this.ext.setGradientStops(gradient, stops);
      }
    }, {
      name: 'stopAnimation',
      "function": function _function() {
        return this.ext.stopAnimation();
      }
    }];
  };

  _createClass(Ext_ux_Gauge_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget_Component.observedAttributes;

      for (var property in Ext_ux_Gauge_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_ux_Gauge_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_Gauge_Component() {
    var _this;

    _this = _Ext_Gadget_Component.call(this) || this;
    _this.XTYPE = Ext_ux_Gauge_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_ux_Gauge_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_ux_Gauge_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_ux_Gauge_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_ux_Gauge_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_Gauge_Component;
}(Ext_Gadget_Component);

export { Ext_ux_Gauge_Component as default };