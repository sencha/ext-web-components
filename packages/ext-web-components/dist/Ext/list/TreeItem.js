import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_AbstractTreeItem_Component from '../../Ext/list/AbstractTreeItem';

var Ext_list_TreeItem_Component =
/*#__PURE__*/
function (_Ext_list_AbstractTre) {
  _inheritsLoose(Ext_list_TreeItem_Component, _Ext_list_AbstractTre);

  //events
  //configs
  Ext_list_TreeItem_Component.XTYPE = function XTYPE() {
    return 'treelistitem';
  };

  Ext_list_TreeItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "rowCls": ["string"],
      "rowClsProperty": ["string"]
    };
  };

  Ext_list_TreeItem_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_list_TreeItem_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_list_TreeItem_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_list_AbstractTre.observedAttributes;

      for (var property in Ext_list_TreeItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_list_TreeItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_list_TreeItem_Component(propertiesobject, methods, events) {
    return _Ext_list_AbstractTre.call(this, Object.assign(propertiesobject, Ext_list_TreeItem_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_list_TreeItem_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_list_TreeItem_Component.METHODS()), events.concat(Ext_list_TreeItem_Component.EVENTS())) || this; //this.XTYPE = Ext_list_TreeItem_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_list_TreeItem_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_list_TreeItem_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_list_TreeItem_Component.EVENTS());
  }

  var _proto = Ext_list_TreeItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_list_AbstractTre.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_list_AbstractTre.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_list_TreeItem_Component;
}(Ext_list_AbstractTreeItem_Component);

export { Ext_list_TreeItem_Component as default };