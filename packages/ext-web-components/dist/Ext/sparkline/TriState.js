import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_BarBase_Component from '../../Ext/sparkline/BarBase';

var Ext_sparkline_TriState_Component =
/*#__PURE__*/
function (_Ext_sparkline_BarBas) {
  _inheritsLoose(Ext_sparkline_TriState_Component, _Ext_sparkline_BarBas);

  //events
  //configs
  Ext_sparkline_TriState_Component.XTYPE = function XTYPE() {
    return 'sparklinetristate';
  };

  Ext_sparkline_TriState_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "barSpacing": ["number"],
      "barWidth": ["number"],
      "colorMap": ["object"],
      "negBarColor": ["string"],
      "posBarColor": ["string"],
      "zeroBarColor": ["string"]
    };
  };

  Ext_sparkline_TriState_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_sparkline_TriState_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_sparkline_TriState_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_BarBas.observedAttributes;

      for (var property in Ext_sparkline_TriState_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_sparkline_TriState_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_TriState_Component(propertiesobject, methods, events) {
    return _Ext_sparkline_BarBas.call(this, Object.assign(propertiesobject, Ext_sparkline_TriState_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_sparkline_TriState_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_sparkline_TriState_Component.METHODS()), events.concat(Ext_sparkline_TriState_Component.EVENTS())) || this; //this.XTYPE = Ext_sparkline_TriState_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_TriState_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_sparkline_TriState_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_sparkline_TriState_Component.EVENTS());
  }

  var _proto = Ext_sparkline_TriState_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_BarBas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_BarBas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_TriState_Component;
}(Ext_sparkline_BarBase_Component);

export { Ext_sparkline_TriState_Component as default };