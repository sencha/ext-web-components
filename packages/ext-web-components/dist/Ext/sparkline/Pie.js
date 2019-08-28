import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

var Ext_sparkline_Pie_Component =
/*#__PURE__*/
function (_Ext_sparkline_Base_C) {
  _inheritsLoose(Ext_sparkline_Pie_Component, _Ext_sparkline_Base_C);

  //events
  //configs
  Ext_sparkline_Pie_Component.XTYPE = function XTYPE() {
    return 'sparklinepie';
  };

  Ext_sparkline_Pie_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "borderColor": ["string"],
      "borderWidth": ["number"],
      "offset": ["number"],
      "sliceColors": ["string[]"]
    };
  };

  Ext_sparkline_Pie_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_sparkline_Pie_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_sparkline_Pie_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Base_C.observedAttributes;

      for (var property in Ext_sparkline_Pie_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_sparkline_Pie_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Pie_Component() {
    var _this;

    _this = _Ext_sparkline_Base_C.call(this, Ext_sparkline_Pie_Component.METHODS(), Ext_sparkline_Pie_Component.XTYPE(), Ext_sparkline_Pie_Component.PROPERTIESOBJECT(), Ext_sparkline_Pie_Component.EVENTS()) || this;
    _this.XTYPE = Ext_sparkline_Pie_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_sparkline_Pie_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_sparkline_Pie_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_sparkline_Pie_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_sparkline_Pie_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Base_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Base_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Pie_Component;
}(Ext_sparkline_Base_Component);

export { Ext_sparkline_Pie_Component as default };