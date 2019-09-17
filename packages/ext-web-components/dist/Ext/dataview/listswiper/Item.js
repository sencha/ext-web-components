import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../../Ext/Container';

var Ext_dataview_listswiper_Item_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_dataview_listswiper_Item_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_dataview_listswiper_Item_Component.XTYPE = function XTYPE() {
    return 'listswiperitem';
  };

  Ext_dataview_listswiper_Item_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "action": ["any"],
      "state": ["any"],
      "translationTarget": ["Ext.dom.Element"],
      "undo": ["object"]
    };
  };

  Ext_dataview_listswiper_Item_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_listswiper_Item_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_listswiper_Item_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_dataview_listswiper_Item_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_listswiper_Item_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_listswiper_Item_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_dataview_listswiper_Item_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_listswiper_Item_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_listswiper_Item_Component.METHODS()), events.concat(Ext_dataview_listswiper_Item_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_listswiper_Item_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_listswiper_Item_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_listswiper_Item_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_listswiper_Item_Component.EVENTS());
  }

  var _proto = Ext_dataview_listswiper_Item_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_listswiper_Item_Component;
}(Ext_Container_Component);

export { Ext_dataview_listswiper_Item_Component as default };