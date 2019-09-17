import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Item_Component from '../../../Ext/dataview/listswiper/Item';

var Ext_dataview_listswiper_Stepper_Component =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(Ext_dataview_listswiper_Stepper_Component, _Ext_dataview_listswi);

  //events
  //configs
  Ext_dataview_listswiper_Stepper_Component.XTYPE = function XTYPE() {
    return 'listswiperstepper';
  };

  Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "animation": ["boolean", "object"],
      "iconCls": ["string"],
      "side": ["any"],
      "step": ["any"],
      "text": ["string"],
      "undo": ["object"]
    };
  };

  Ext_dataview_listswiper_Stepper_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_listswiper_Stepper_Component.METHODS = function METHODS() {
    return [{
      name: 'buildSteps',
      "function": function _function() {
        return this.ext.buildSteps();
      }
    }, {
      name: 'dismiss',
      "function": function _function(animate) {
        return this.ext.dismiss(animate);
      }
    }];
  };

  _createClass(Ext_dataview_listswiper_Stepper_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_listswi.observedAttributes;

      for (var property in Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_listswiper_Stepper_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_listswiper_Stepper_Component(propertiesobject, methods, events) {
    return _Ext_dataview_listswi.call(this, Object.assign(propertiesobject, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_listswiper_Stepper_Component.METHODS()), events.concat(Ext_dataview_listswiper_Stepper_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_listswiper_Stepper_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_listswiper_Stepper_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_listswiper_Stepper_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_listswiper_Stepper_Component.EVENTS());
  }

  var _proto = Ext_dataview_listswiper_Stepper_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_listswi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_listswi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_listswiper_Stepper_Component;
}(Ext_dataview_listswiper_Item_Component);

export { Ext_dataview_listswiper_Stepper_Component as default };