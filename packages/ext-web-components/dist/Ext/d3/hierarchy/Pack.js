import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Hierarchy_Component from '../../../Ext/d3/hierarchy/Hierarchy';

var Ext_d3_hierarchy_Pack_Component =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Hie) {
  _inheritsLoose(Ext_d3_hierarchy_Pack_Component, _Ext_d3_hierarchy_Hie);

  //events
  //configs
  Ext_d3_hierarchy_Pack_Component.XTYPE = function XTYPE() {
    return 'd3-pack';
  };

  Ext_d3_hierarchy_Pack_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "clipText": ["boolean"],
      "nodeValue": ["function", "number"],
      "noSizeLayout": ["boolean"],
      "textPadding": ["array"]
    };
  };

  Ext_d3_hierarchy_Pack_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_hierarchy_Pack_Component.METHODS = function METHODS() {
    return [{
      name: 'textVisibilityFn',
      "function": function _function(selection) {
        return this.ext.textVisibilityFn(selection);
      }
    }];
  };

  _createClass(Ext_d3_hierarchy_Pack_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_Hie.observedAttributes;

      for (var property in Ext_d3_hierarchy_Pack_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_hierarchy_Pack_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_Pack_Component() {
    var _this;

    _this = _Ext_d3_hierarchy_Hie.call(this, Ext_d3_hierarchy_Pack_Component.METHODS(), Ext_d3_hierarchy_Pack_Component.XTYPE(), Ext_d3_hierarchy_Pack_Component.PROPERTIESOBJECT(), Ext_d3_hierarchy_Pack_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_hierarchy_Pack_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_hierarchy_Pack_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_hierarchy_Pack_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_hierarchy_Pack_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_hierarchy_Pack_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_Hie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_Hie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_Pack_Component;
}(Ext_d3_hierarchy_Hierarchy_Component);

export { Ext_d3_hierarchy_Pack_Component as default };