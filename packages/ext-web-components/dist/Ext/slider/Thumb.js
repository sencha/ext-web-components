import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_slider_Thumb_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_slider_Thumb_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_slider_Thumb_Component.XTYPE = function XTYPE() {
    return 'thumb';
  };

  Ext_slider_Thumb_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "draggable": ["boolean", "object", "Ext.drag.Source"],
      "fillCls": ["string"],
      "fillTrack": ["boolean", "string"]
    };
  };

  Ext_slider_Thumb_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_slider_Thumb_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_slider_Thumb_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_slider_Thumb_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_slider_Thumb_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_slider_Thumb_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_slider_Thumb_Component.METHODS(), Ext_slider_Thumb_Component.XTYPE(), Ext_slider_Thumb_Component.PROPERTIESOBJECT(), Ext_slider_Thumb_Component.EVENTS()) || this;
    _this.XTYPE = Ext_slider_Thumb_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_slider_Thumb_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_slider_Thumb_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_slider_Thumb_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_slider_Thumb_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_slider_Thumb_Component;
}(Ext_Component_Component);

export { Ext_slider_Thumb_Component as default };