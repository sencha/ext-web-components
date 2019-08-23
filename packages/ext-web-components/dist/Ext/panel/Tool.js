import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_panel_Tool_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_panel_Tool_Component, _Ext_Component_Compon);

  //configs
  Ext_panel_Tool_Component.XTYPE = function XTYPE() {
    return 'tool';
  };

  Ext_panel_Tool_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "handler": ["function", "string"],
      "iconCls": ["string"],
      "passive": ["boolean"],
      "scope": ["object"],
      "stopEvent": ["boolean"],
      "toolOwner": ["Ext.Component"],
      "type": ["string"]
    };
  };

  Ext_panel_Tool_Component.EVENTS = function EVENTS() {
    return [{
      name: 'click',
      parameters: 'undefined,e,owner'
    }];
  };

  Ext_panel_Tool_Component.METHODS = function METHODS() {
    return [{
      name: 'onClick',
      "function": function _function(ev) {
        return this.ext.onClick(ev);
      }
    }, {
      name: 'onMouseDown',
      "function": function _function(e) {
        return this.ext.onMouseDown(e);
      }
    }, {
      name: 'onMouseOut',
      "function": function _function() {
        return this.ext.onMouseOut();
      }
    }, {
      name: 'onMouseOver',
      "function": function _function() {
        return this.ext.onMouseOver();
      }
    }, {
      name: 'onRelease',
      "function": function _function() {
        return this.ext.onRelease();
      }
    }];
  };

  _createClass(Ext_panel_Tool_Component, [{
    key: "onclick",
    //events
    get: function get() {
      return this.getAttribute('onclick');
    },
    set: function set(onclick) {
      this.setAttribute('onclick', onclick);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_panel_Tool_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_panel_Tool_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Tool_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_panel_Tool_Component.METHODS(), Ext_panel_Tool_Component.XTYPE(), Ext_panel_Tool_Component.PROPERTIESOBJECT(), Ext_panel_Tool_Component.EVENTS()) || this;
    _this.XTYPE = Ext_panel_Tool_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_panel_Tool_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_panel_Tool_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_panel_Tool_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_panel_Tool_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Tool_Component;
}(Ext_Component_Component);

export { Ext_panel_Tool_Component as default };