import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from '../../../Ext/Gadget';

var Ext_ux_rating_Picker_Component =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(Ext_ux_rating_Picker_Component, _Ext_Gadget_Component);

  //events
  //configs
  Ext_ux_rating_Picker_Component.XTYPE = function XTYPE() {
    return 'rating';
  };

  Ext_ux_rating_Picker_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "animate": ["boolean", "object"],
      "family": ["string"],
      "glyphs": ["string", "string[]", "number[]"],
      "limit": ["number"],
      "minimum": ["number"],
      "overStyle": ["string", "object"],
      "rounding": ["number"],
      "scale": ["string"],
      "selectedStyle": ["string", "object"],
      "tip": ["object", "string", "string[]", "Ext.XTemplate", "function"],
      "tooltipText": ["string"],
      "trackingValue": ["number"],
      "trackOver": ["boolean"],
      "value": ["number"]
    };
  };

  Ext_ux_rating_Picker_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_ux_rating_Picker_Component.METHODS = function METHODS() {
    return [{
      name: 'getGlyphTextNode',
      "function": function _function(dom) {
        return this.ext.getGlyphTextNode(dom);
      }
    }, {
      name: 'refresh',
      "function": function _function() {
        return this.ext.refresh();
      }
    }, {
      name: 'refreshGlyphs',
      "function": function _function(now) {
        return this.ext.refreshGlyphs(now);
      }
    }, {
      name: 'refreshTip',
      "function": function _function(now) {
        return this.ext.refreshTip(now);
      }
    }, {
      name: 'valueFromEvent',
      "function": function _function(event) {
        return this.ext.valueFromEvent(event);
      }
    }, {
      name: 'valueToPercent',
      "function": function _function(value) {
        return this.ext.valueToPercent(value);
      }
    }];
  };

  _createClass(Ext_ux_rating_Picker_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget_Component.observedAttributes;

      for (var property in Ext_ux_rating_Picker_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_ux_rating_Picker_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_rating_Picker_Component() {
    var _this;

    _this = _Ext_Gadget_Component.call(this) || this;
    _this.XTYPE = Ext_ux_rating_Picker_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_ux_rating_Picker_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_ux_rating_Picker_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_ux_rating_Picker_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_ux_rating_Picker_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_rating_Picker_Component;
}(Ext_Gadget_Component);

export { Ext_ux_rating_Picker_Component as default };