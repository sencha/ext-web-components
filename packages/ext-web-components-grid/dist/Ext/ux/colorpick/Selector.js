import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Panel_Component from '../../../Ext/panel/Panel';

var Ext_ux_colorpick_Selector_Component =
/*#__PURE__*/
function (_Ext_panel_Panel_Comp) {
  _inheritsLoose(Ext_ux_colorpick_Selector_Component, _Ext_panel_Panel_Comp);

  //configs
  Ext_ux_colorpick_Selector_Component.XTYPE = function XTYPE() {
    return 'colorselector';
  };

  Ext_ux_colorpick_Selector_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "cancelButtonText": ["string"],
      "fieldPad": ["number"],
      "fieldWidth": ["number"],
      "okButtonText": ["string"],
      "showOkCancelButtons": ["boolean"],
      "showPreviousColor": ["boolean"]
    };
  };

  Ext_ux_colorpick_Selector_Component.EVENTS = function EVENTS() {
    return [{
      name: 'cancel',
      parameters: 'undefined'
    }, {
      name: 'change',
      parameters: 'undefined,color,previousColor'
    }, {
      name: 'ok',
      parameters: 'undefined,color'
    }];
  };

  Ext_ux_colorpick_Selector_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_ux_colorpick_Selector_Component, [{
    key: "oncancel",
    //events
    get: function get() {
      return this.getAttribute('oncancel');
    },
    set: function set(oncancel) {
      this.setAttribute('oncancel', oncancel);
    }
  }, {
    key: "onchange",
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "onok",
    get: function get() {
      return this.getAttribute('onok');
    },
    set: function set(onok) {
      this.setAttribute('onok', onok);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_panel_Panel_Comp.observedAttributes;

      for (var property in Ext_ux_colorpick_Selector_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_ux_colorpick_Selector_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_colorpick_Selector_Component() {
    var _this;

    _this = _Ext_panel_Panel_Comp.call(this) || this;
    _this.XTYPE = Ext_ux_colorpick_Selector_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_ux_colorpick_Selector_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_ux_colorpick_Selector_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_ux_colorpick_Selector_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_ux_colorpick_Selector_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_panel_Panel_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_panel_Panel_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_colorpick_Selector_Component;
}(Ext_panel_Panel_Component);

export { Ext_ux_colorpick_Selector_Component as default };