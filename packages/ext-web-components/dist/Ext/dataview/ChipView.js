import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataView_Component from '../../Ext/dataview/DataView';

var Ext_dataview_ChipView_Component =
/*#__PURE__*/
function (_Ext_dataview_DataVie) {
  _inheritsLoose(Ext_dataview_ChipView_Component, _Ext_dataview_DataVie);

  //events
  //configs
  Ext_dataview_ChipView_Component.XTYPE = function XTYPE() {
    return 'chipview';
  };

  Ext_dataview_ChipView_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "closable": ["boolean"],
      "closableField": ["string"],
      "closeHandler": ["function", "string"],
      "displayField": ["string"],
      "displayTpl": ["string", "string[]", "Ext.XTemplate"],
      "iconClsField": ["string"],
      "iconField": ["string"],
      "itemTpl": ["any"],
      "scope": ["object"],
      "ui": ["string", "string[]"]
    };
  };

  Ext_dataview_ChipView_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_ChipView_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_ChipView_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataVie.observedAttributes;

      for (var property in Ext_dataview_ChipView_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_ChipView_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_ChipView_Component(propertiesobject, methods, events) {
    return _Ext_dataview_DataVie.call(this, Object.assign(propertiesobject, Ext_dataview_ChipView_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_ChipView_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_ChipView_Component.METHODS()), events.concat(Ext_dataview_ChipView_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_ChipView_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_ChipView_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_ChipView_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_ChipView_Component.EVENTS());
  }

  var _proto = Ext_dataview_ChipView_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataVie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataVie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_ChipView_Component;
}(Ext_dataview_DataView_Component);

export { Ext_dataview_ChipView_Component as default };