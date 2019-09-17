import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../Ext/Panel';

var Ext_tip_ToolTip_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_tip_ToolTip_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_tip_ToolTip_Component.XTYPE = function XTYPE() {
    return 'tooltip';
  };

  Ext_tip_ToolTip_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "align": ["string"],
      "alignDelegate": ["string"],
      "allowOver": ["boolean"],
      "anchorToTarget": ["boolean"],
      "autoHide": ["boolean"],
      "delegate": ["string"],
      "dismissDelay": ["number"],
      "hideDelay": ["number"],
      "mouseOffset": ["number[]"],
      "quickShowInterval": ["number"],
      "showDelay": ["number"],
      "showOnTap": ["boolean", "string[]"],
      "target": ["Ext.Component", "Ext.dom.Element"],
      "trackMouse": ["boolean"]
    };
  };

  Ext_tip_ToolTip_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_tip_ToolTip_Component.METHODS = function METHODS() {
    return [{
      name: 'clearTimers',
      "function": function _function() {
        return this.ext.clearTimers();
      }
    }, {
      name: 'realignToTarget',
      "function": function _function() {
        return this.ext.realignToTarget();
      }
    }];
  };

  _createClass(Ext_tip_ToolTip_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_tip_ToolTip_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_tip_ToolTip_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tip_ToolTip_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this) || this;
    _this.XTYPE = Ext_tip_ToolTip_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_tip_ToolTip_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_tip_ToolTip_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_tip_ToolTip_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_tip_ToolTip_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tip_ToolTip_Component;
}(Ext_Panel_Component);

export { Ext_tip_ToolTip_Component as default };