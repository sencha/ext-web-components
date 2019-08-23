import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Toolbar_Component from '../../Ext/Toolbar';

var Ext_grid_PagingToolbar_Component =
/*#__PURE__*/
function (_Ext_Toolbar_Componen) {
  _inheritsLoose(Ext_grid_PagingToolbar_Component, _Ext_Toolbar_Componen);

  //events
  //configs
  Ext_grid_PagingToolbar_Component.XTYPE = function XTYPE() {
    return 'pagingtoolbar';
  };

  Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "nextButton": ["object"],
      "prevButton": ["object"],
      "sliderField": ["object"],
      "summaryComponent": ["object"]
    };
  };

  Ext_grid_PagingToolbar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_PagingToolbar_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_PagingToolbar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Toolbar_Componen.observedAttributes;

      for (var property in Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_PagingToolbar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_PagingToolbar_Component() {
    var _this;

    _this = _Ext_Toolbar_Componen.call(this, Ext_grid_PagingToolbar_Component.METHODS(), Ext_grid_PagingToolbar_Component.XTYPE(), Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT(), Ext_grid_PagingToolbar_Component.EVENTS()) || this;
    _this.XTYPE = Ext_grid_PagingToolbar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_grid_PagingToolbar_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_grid_PagingToolbar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_PagingToolbar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Toolbar_Componen.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Toolbar_Componen.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_PagingToolbar_Component;
}(Ext_Toolbar_Component);

export { Ext_grid_PagingToolbar_Component as default };