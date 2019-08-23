import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_SegmentedButton_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_SegmentedButton_Component, _Ext_Container_Compon);

  //configs
  Ext_SegmentedButton_Component.XTYPE = function XTYPE() {
    return 'segmentedbutton';
  };

  Ext_SegmentedButton_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowDepress": ["boolean"],
      "allowMultiple": ["boolean"],
      "allowToggle": ["boolean"],
      "autoSize": ["boolean"],
      "defaults": ["object"],
      "defaultType": ["string"],
      "defaultUI": ["string"],
      "forceSelection": ["boolean"],
      "layout": ["object", "string"],
      "pressedButtons": ["array"],
      "publishes": ["string", "string[]", "object"],
      "twoWayBindable": ["string", "string[]", "object"],
      "value": ["string", "number", "string[]", "number[]"],
      "vertical": ["boolean"]
    };
  };

  Ext_SegmentedButton_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,value,oldValue'
    }, {
      name: 'toggle',
      parameters: 'undefined,button,isPressed'
    }];
  };

  Ext_SegmentedButton_Component.METHODS = function METHODS() {
    return [{
      name: 'getButtonValue',
      "function": function _function(button) {
        return this.ext.getButtonValue(button);
      }
    }, {
      name: 'isPressed',
      "function": function _function(button) {
        return this.ext.isPressed(button);
      }
    }, {
      name: 'lookupButtonByValue',
      "function": function _function(value) {
        return this.ext.lookupButtonByValue(value);
      }
    }, {
      name: 'onButtonHiddenChange',
      "function": function _function() {
        return this.ext.onButtonHiddenChange();
      }
    }, {
      name: 'updateDisabled',
      "function": function _function(disabled, oldDisabled) {
        return this.ext.updateDisabled(disabled, oldDisabled);
      }
    }, {
      name: 'updateFirstAndLastCls',
      "function": function _function(items) {
        return this.ext.updateFirstAndLastCls(items);
      }
    }];
  };

  _createClass(Ext_SegmentedButton_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "ontoggle",
    get: function get() {
      return this.getAttribute('ontoggle');
    },
    set: function set(ontoggle) {
      this.setAttribute('ontoggle', ontoggle);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_SegmentedButton_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_SegmentedButton_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_SegmentedButton_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this, Ext_SegmentedButton_Component.METHODS(), Ext_SegmentedButton_Component.XTYPE(), Ext_SegmentedButton_Component.PROPERTIESOBJECT(), Ext_SegmentedButton_Component.EVENTS()) || this;
    _this.XTYPE = Ext_SegmentedButton_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_SegmentedButton_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_SegmentedButton_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_SegmentedButton_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_SegmentedButton_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_SegmentedButton_Component;
}(Ext_Container_Component);

export { Ext_SegmentedButton_Component as default };