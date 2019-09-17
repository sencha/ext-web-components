import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_MessageBox_Component from '../Ext/MessageBox';

var Ext_Msg_Component =
/*#__PURE__*/
function (_Ext_MessageBox_Compo) {
  _inheritsLoose(Ext_Msg_Component, _Ext_MessageBox_Compo);

  //events
  //configs
  Ext_Msg_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_Msg_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_Msg_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Msg_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_Msg_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_MessageBox_Compo.observedAttributes;

      for (var property in Ext_Msg_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Msg_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Msg_Component(propertiesobject, methods, events) {
    return _Ext_MessageBox_Compo.call(this, Object.assign(propertiesobject, Ext_Msg_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Msg_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Msg_Component.METHODS()), events.concat(Ext_Msg_Component.EVENTS())) || this; //this.XTYPE = Ext_Msg_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Msg_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Msg_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Msg_Component.EVENTS());
  }

  var _proto = Ext_Msg_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_MessageBox_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_MessageBox_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Msg_Component;
}(Ext_MessageBox_Component);

export { Ext_Msg_Component as default };