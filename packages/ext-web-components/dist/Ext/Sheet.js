import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../Ext/Panel';

var Ext_Sheet_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_Sheet_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_Sheet_Component.XTYPE = function XTYPE() {
    return 'sheet';
  };

  Ext_Sheet_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "centered": ["boolean"],
      "cover": ["boolean"],
      "enter": ["'top'", "'bottom'", "'left'", "'right'"],
      "exit": ["'top'", "'bottom'", "'left'", "'right'"],
      "reveal": ["boolean"],
      "side": ["'left'", "'right'", "'top'", "'bottom'"],
      "stretchX": ["boolean"],
      "stretchY": ["boolean"]
    };
  };

  Ext_Sheet_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Sheet_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_Sheet_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_Sheet_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Sheet_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Sheet_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_Sheet_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Sheet_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Sheet_Component.METHODS()), events.concat(Ext_Sheet_Component.EVENTS())) || this; //this.XTYPE = Ext_Sheet_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Sheet_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Sheet_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Sheet_Component.EVENTS());
  }

  var _proto = Ext_Sheet_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Sheet_Component;
}(Ext_Panel_Component);

export { Ext_Sheet_Component as default };