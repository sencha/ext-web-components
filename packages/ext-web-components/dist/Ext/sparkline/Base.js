import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from '../../Ext/Gadget';

var Ext_sparkline_Base_Component =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(Ext_sparkline_Base_Component, _Ext_Gadget_Component);

  //events
  //configs
  Ext_sparkline_Base_Component.XTYPE = function XTYPE() {
    return 'sparkline';
  };

  Ext_sparkline_Base_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "disableTooltips": ["boolean"],
      "highlightColor": ["string"],
      "highlightLighten": ["number"],
      "lineColor": ["string"],
      "tipTpl": ["string", "Ext.XTemplate"],
      "tooltipPrefix": ["string"],
      "tooltipSkipNull": ["boolean"],
      "tooltipSuffix": ["string"],
      "values": ["number[]"]
    };
  };

  Ext_sparkline_Base_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_sparkline_Base_Component.METHODS = function METHODS() {
    return [{
      name: 'getRegion',
      "function": function _function() {
        return this.ext.getRegion();
      }
    }, {
      name: 'getRegionTooltip',
      "function": function _function(region) {
        return this.ext.getRegionTooltip(region);
      }
    }];
  };

  _createClass(Ext_sparkline_Base_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget_Component.observedAttributes;

      for (var property in Ext_sparkline_Base_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_sparkline_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Base_Component() {
    var _this;

    _this = _Ext_Gadget_Component.call(this, Ext_sparkline_Base_Component.METHODS(), Ext_sparkline_Base_Component.XTYPE(), Ext_sparkline_Base_Component.PROPERTIESOBJECT(), Ext_sparkline_Base_Component.EVENTS()) || this;
    _this.XTYPE = Ext_sparkline_Base_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_sparkline_Base_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_sparkline_Base_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_sparkline_Base_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_sparkline_Base_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Base_Component;
}(Ext_Gadget_Component);

export { Ext_sparkline_Base_Component as default };