import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Title_Component from '../../Ext/panel/Title';

var Ext_panel_DateTitle_Component =
/*#__PURE__*/
function (_Ext_panel_Title_Comp) {
  _inheritsLoose(Ext_panel_DateTitle_Component, _Ext_panel_Title_Comp);

  //events
  //configs
  Ext_panel_DateTitle_Component.XTYPE = function XTYPE() {
    return 'datetitle';
  };

  Ext_panel_DateTitle_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_panel_DateTitle_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_panel_DateTitle_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_panel_DateTitle_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_panel_Title_Comp.observedAttributes;

      for (var property in Ext_panel_DateTitle_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_panel_DateTitle_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_DateTitle_Component(propertiesobject, methods, events) {
    return _Ext_panel_Title_Comp.call(this, Object.assign(propertiesobject, Ext_panel_DateTitle_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_panel_DateTitle_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_panel_DateTitle_Component.METHODS()), events.concat(Ext_panel_DateTitle_Component.EVENTS())) || this; //this.XTYPE = Ext_panel_DateTitle_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_DateTitle_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_panel_DateTitle_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_panel_DateTitle_Component.EVENTS());
  }

  var _proto = Ext_panel_DateTitle_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_panel_Title_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_panel_Title_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_DateTitle_Component;
}(Ext_panel_Title_Component);

export { Ext_panel_DateTitle_Component as default };