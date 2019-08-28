import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_TitleBar_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_TitleBar_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_TitleBar_Component.XTYPE = function XTYPE() {
    return 'titlebar';
  };

  Ext_TitleBar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoSize": ["boolean"],
      "border": ["boolean"],
      "cls": ["string", "string[]"],
      "defaultButtonUI": ["string"],
      "defaultType": ["string"],
      "items": ["array", "object"],
      "layout": ["any"],
      "maxButtonWidth": ["string"],
      "minHeight": ["number", "string"],
      "title": ["string"],
      "titleAlign": ["string"]
    };
  };

  Ext_TitleBar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_TitleBar_Component.METHODS = function METHODS() {
    return [{
      name: 'updateTitle',
      "function": function _function(newTitle) {
        return this.ext.updateTitle(newTitle);
      }
    }];
  };

  _createClass(Ext_TitleBar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_TitleBar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_TitleBar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_TitleBar_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this, Ext_TitleBar_Component.METHODS(), Ext_TitleBar_Component.XTYPE(), Ext_TitleBar_Component.PROPERTIESOBJECT(), Ext_TitleBar_Component.EVENTS()) || this;
    _this.XTYPE = Ext_TitleBar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_TitleBar_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_TitleBar_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_TitleBar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_TitleBar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_TitleBar_Component;
}(Ext_Container_Component);

export { Ext_TitleBar_Component as default };