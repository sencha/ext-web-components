import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Slider_Component from '../../Ext/slider/Slider';

var Ext_slider_Toggle_Component =
/*#__PURE__*/
function (_Ext_slider_Slider_Co) {
  _inheritsLoose(Ext_slider_Toggle_Component, _Ext_slider_Slider_Co);

  //events
  //configs
  Ext_slider_Toggle_Component.XTYPE = function XTYPE() {
    return 'toggleslider';
  };

  Ext_slider_Toggle_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "value": ["number", "number[]"]
    };
  };

  Ext_slider_Toggle_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_slider_Toggle_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_slider_Toggle_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_slider_Slider_Co.observedAttributes;

      for (var property in Ext_slider_Toggle_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_slider_Toggle_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_slider_Toggle_Component(propertiesobject, methods, events) {
    return _Ext_slider_Slider_Co.call(this, Object.assign(propertiesobject, Ext_slider_Toggle_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_slider_Toggle_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_slider_Toggle_Component.METHODS()), events.concat(Ext_slider_Toggle_Component.EVENTS())) || this; //this.XTYPE = Ext_slider_Toggle_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_slider_Toggle_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_slider_Toggle_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_slider_Toggle_Component.EVENTS());
  }

  var _proto = Ext_slider_Toggle_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_slider_Slider_Co.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_slider_Slider_Co.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_slider_Toggle_Component;
}(Ext_slider_Slider_Component);

export { Ext_slider_Toggle_Component as default };