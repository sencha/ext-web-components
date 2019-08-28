import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_scroll_indicator_Indicator_Component from '../../../Ext/scroll/indicator/Indicator';

var Ext_scroll_indicator_Overlay_Component =
/*#__PURE__*/
function (_Ext_scroll_indicator) {
  _inheritsLoose(Ext_scroll_indicator_Overlay_Component, _Ext_scroll_indicator);

  //events
  //configs
  Ext_scroll_indicator_Overlay_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_scroll_indicator_Overlay_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "axis": ["'x'", "'y'"],
      "hideAnimation": ["boolean", "object"],
      "hideDelay": ["number"]
    };
  };

  Ext_scroll_indicator_Overlay_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_scroll_indicator_Overlay_Component.METHODS = function METHODS() {
    return [{
      name: 'cacheStyles',
      "function": function _function() {
        return this.ext.cacheStyles();
      }
    }, {
      name: 'hasOpposite',
      "function": function _function() {
        return this.ext.hasOpposite();
      }
    }, {
      name: 'hide',
      "function": function _function() {
        return this.ext.hide();
      }
    }, {
      name: 'show',
      "function": function _function() {
        return this.ext.show();
      }
    }, {
      name: 'updateValue',
      "function": function _function(value) {
        return this.ext.updateValue(value);
      }
    }];
  };

  _createClass(Ext_scroll_indicator_Overlay_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_scroll_indicator.observedAttributes;

      for (var property in Ext_scroll_indicator_Overlay_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_scroll_indicator_Overlay_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_scroll_indicator_Overlay_Component() {
    var _this;

    _this = _Ext_scroll_indicator.call(this, Ext_scroll_indicator_Overlay_Component.METHODS(), Ext_scroll_indicator_Overlay_Component.XTYPE(), Ext_scroll_indicator_Overlay_Component.PROPERTIESOBJECT(), Ext_scroll_indicator_Overlay_Component.EVENTS()) || this;
    _this.XTYPE = Ext_scroll_indicator_Overlay_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_scroll_indicator_Overlay_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_scroll_indicator_Overlay_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_scroll_indicator_Overlay_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_scroll_indicator_Overlay_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_scroll_indicator.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_scroll_indicator.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_scroll_indicator_Overlay_Component;
}(Ext_scroll_indicator_Indicator_Component);

export { Ext_scroll_indicator_Overlay_Component as default };