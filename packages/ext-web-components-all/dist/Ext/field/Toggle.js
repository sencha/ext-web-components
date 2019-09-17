import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_SingleSlider_Component from '../../Ext/field/SingleSlider';

var Ext_field_Toggle_Component =
/*#__PURE__*/
function (_Ext_field_SingleSlid) {
  _inheritsLoose(Ext_field_Toggle_Component, _Ext_field_SingleSlid);

  //configs
  Ext_field_Toggle_Component.XTYPE = function XTYPE() {
    return 'togglefield';
  };

  Ext_field_Toggle_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "activeLabel": ["string"],
      "bodyAlign": ["'start'", "'center'", "'end'", "'stretch'"],
      "inactiveLabel": ["string"],
      "publishes": ["string", "string[]", "object"],
      "slider": ["any"],
      "twoWayBindable": ["string", "string[]", "object"],
      "value": ["number", "number[]"]
    };
  };

  Ext_field_Toggle_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,newValue,oldValue'
    }, {
      name: 'drag',
      parameters: ''
    }, {
      name: 'dragend',
      parameters: ''
    }, {
      name: 'dragstart',
      parameters: ''
    }];
  };

  Ext_field_Toggle_Component.METHODS = function METHODS() {
    return [{
      name: 'getRawValue',
      "function": function _function() {
        return this.ext.getRawValue();
      }
    }, {
      name: 'toggle',
      "function": function _function() {
        return this.ext.toggle();
      }
    }, {
      name: 'updateActiveLabel',
      "function": function _function(newActiveLabel, oldActiveLabel) {
        return this.ext.updateActiveLabel(newActiveLabel, oldActiveLabel);
      }
    }, {
      name: 'updateInactiveLabel',
      "function": function _function(newInactiveLabel, oldInactiveLabel) {
        return this.ext.updateInactiveLabel(newInactiveLabel, oldInactiveLabel);
      }
    }];
  };

  _createClass(Ext_field_Toggle_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "ondrag",
    get: function get() {
      return this.getAttribute('ondrag');
    },
    set: function set(ondrag) {
      this.setAttribute('ondrag', ondrag);
    }
  }, {
    key: "ondragend",
    get: function get() {
      return this.getAttribute('ondragend');
    },
    set: function set(ondragend) {
      this.setAttribute('ondragend', ondragend);
    }
  }, {
    key: "ondragstart",
    get: function get() {
      return this.getAttribute('ondragstart');
    },
    set: function set(ondragstart) {
      this.setAttribute('ondragstart', ondragstart);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_SingleSlid.observedAttributes;

      for (var property in Ext_field_Toggle_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Toggle_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Toggle_Component() {
    var _this;

    _this = _Ext_field_SingleSlid.call(this) || this;
    _this.XTYPE = Ext_field_Toggle_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_Toggle_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_field_Toggle_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_field_Toggle_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_Toggle_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_SingleSlid.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_SingleSlid.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Toggle_Component;
}(Ext_field_SingleSlider_Component);

export { Ext_field_Toggle_Component as default };