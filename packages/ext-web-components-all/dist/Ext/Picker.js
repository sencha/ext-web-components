import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet_Component from '../Ext/Sheet';

var Ext_Picker_Component =
/*#__PURE__*/
function (_Ext_Sheet_Component) {
  _inheritsLoose(Ext_Picker_Component, _Ext_Sheet_Component);

  //configs
  Ext_Picker_Component.XTYPE = function XTYPE() {
    return 'picker';
  };

  Ext_Picker_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "bottom": ["number", "string"],
      "cancelButton": ["string", "mixed"],
      "centered": ["any"],
      "defaultType": ["any"],
      "doneButton": ["string", "mixed"],
      "floated": ["boolean"],
      "height": ["number"],
      "layout": ["object", "string"],
      "left": ["number", "string"],
      "right": ["number", "string"],
      "side": ["'left'", "'right'", "'top'", "'bottom'"],
      "slots": ["array"],
      "tabIndex": ["number"],
      "toolbar": ["Ext.TitleBar", "Ext.Toolbar", "object"],
      "useTitles": ["boolean"],
      "value": ["object"]
    };
  };

  Ext_Picker_Component.EVENTS = function EVENTS() {
    return [{
      name: 'cancel',
      parameters: 'undefined'
    }, {
      name: 'change',
      parameters: 'undefined,values'
    }, {
      name: 'pick',
      parameters: 'undefined,values,slot'
    }];
  };

  Ext_Picker_Component.METHODS = function METHODS() {
    return [{
      name: 'applyCancelButton',
      "function": function _function(config, oldButton) {
        return this.ext.applyCancelButton(config, oldButton);
      }
    }, {
      name: 'applyDoneButton',
      "function": function _function(config, oldButton) {
        return this.ext.applyDoneButton(config, oldButton);
      }
    }, {
      name: 'applyToolbar',
      "function": function _function(config, oldToolbar) {
        return this.ext.applyToolbar(config, oldToolbar);
      }
    }, {
      name: 'getValue',
      "function": function _function(useDom) {
        return this.ext.getValue(useDom);
      }
    }, {
      name: 'getValues',
      "function": function _function() {
        return this.ext.getValues();
      }
    }, {
      name: 'onCancelButtonTap',
      "function": function _function() {
        return this.ext.onCancelButtonTap();
      }
    }, {
      name: 'onDoneButtonTap',
      "function": function _function() {
        return this.ext.onDoneButtonTap();
      }
    }, {
      name: 'onSlotPick',
      "function": function _function(slot) {
        return this.ext.onSlotPick(slot);
      }
    }, {
      name: 'setValue',
      "function": function _function(values, animated) {
        return this.ext.setValue(values, animated);
      }
    }, {
      name: 'updateSlots',
      "function": function _function(newSlots) {
        return this.ext.updateSlots(newSlots);
      }
    }, {
      name: 'updateToolbar',
      "function": function _function(newToolbar) {
        return this.ext.updateToolbar(newToolbar);
      }
    }, {
      name: 'updateUseTitles',
      "function": function _function(useTitles) {
        return this.ext.updateUseTitles(useTitles);
      }
    }];
  };

  _createClass(Ext_Picker_Component, [{
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
    key: "onpick",
    get: function get() {
      return this.getAttribute('onpick');
    },
    set: function set(onpick) {
      this.setAttribute('onpick', onpick);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Sheet_Component.observedAttributes;

      for (var property in Ext_Picker_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Picker_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Picker_Component() {
    var _this;

    _this = _Ext_Sheet_Component.call(this) || this;
    _this.XTYPE = Ext_Picker_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Picker_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_Picker_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_Picker_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Picker_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Sheet_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Sheet_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Picker_Component;
}(Ext_Sheet_Component);

export { Ext_Picker_Component as default };