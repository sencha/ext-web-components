import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_List_Component from '../../Ext/dataview/List';

var Ext_dataview_BoundList_Component =
/*#__PURE__*/
function (_Ext_dataview_List_Co) {
  _inheritsLoose(Ext_dataview_BoundList_Component, _Ext_dataview_List_Co);

  //events
  //configs
  Ext_dataview_BoundList_Component.XTYPE = function XTYPE() {
    return 'boundlist';
  };

  Ext_dataview_BoundList_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "triggerEvent": ["'tap'"]
    };
  };

  Ext_dataview_BoundList_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_BoundList_Component.METHODS = function METHODS() {
    return [{
      name: 'beforeSelectionRefresh',
      "function": function _function(toDeselect, toReselect) {
        return this.ext.beforeSelectionRefresh(toDeselect, toReselect);
      }
    }];
  };

  _createClass(Ext_dataview_BoundList_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_List_Co.observedAttributes;

      for (var property in Ext_dataview_BoundList_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_BoundList_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_BoundList_Component(propertiesobject, methods, events) {
    return _Ext_dataview_List_Co.call(this, Object.assign(propertiesobject, Ext_dataview_BoundList_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_BoundList_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_BoundList_Component.METHODS()), events.concat(Ext_dataview_BoundList_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_BoundList_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_BoundList_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_BoundList_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_BoundList_Component.EVENTS());
  }

  var _proto = Ext_dataview_BoundList_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_List_Co.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_List_Co.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_BoundList_Component;
}(Ext_dataview_List_Component);

export { Ext_dataview_BoundList_Component as default };