import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Number_Component from '../../Ext/field/Number';

var Ext_field_Spinner_Component =
/*#__PURE__*/
function (_Ext_field_Number_Com) {
  _inheritsLoose(Ext_field_Spinner_Component, _Ext_field_Number_Com);

  //configs
  Ext_field_Spinner_Component.XTYPE = function XTYPE() {
    return 'spinnerfield';
  };

  Ext_field_Spinner_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "accelerateOnTapHold": ["boolean"],
      "clearable": ["boolean"],
      "cycle": ["boolean"],
      "decimals": ["number"],
      "stepValue": ["number"],
      "value": ["mixed"]
    };
  };

  Ext_field_Spinner_Component.EVENTS = function EVENTS() {
    return [{
      name: 'action',
      parameters: ''
    }, {
      name: 'spin',
      parameters: 'undefined,value,direction'
    }, {
      name: 'spindown',
      parameters: 'undefined,value'
    }, {
      name: 'spinup',
      parameters: 'undefined,value'
    }, {
      name: 'updatedata',
      parameters: ''
    }];
  };

  Ext_field_Spinner_Component.METHODS = function METHODS() {
    return [{
      name: 'onSpinDown',
      "function": function _function() {
        return this.ext.onSpinDown();
      }
    }, {
      name: 'onSpinUp',
      "function": function _function() {
        return this.ext.onSpinUp();
      }
    }, {
      name: 'spin',
      "function": function _function(down) {
        return this.ext.spin(down);
      }
    }];
  };

  _createClass(Ext_field_Spinner_Component, [{
    key: "onaction",
    //events
    get: function get() {
      return this.getAttribute('onaction');
    },
    set: function set(onaction) {
      this.setAttribute('onaction', onaction);
    }
  }, {
    key: "onspin",
    get: function get() {
      return this.getAttribute('onspin');
    },
    set: function set(onspin) {
      this.setAttribute('onspin', onspin);
    }
  }, {
    key: "onspindown",
    get: function get() {
      return this.getAttribute('onspindown');
    },
    set: function set(onspindown) {
      this.setAttribute('onspindown', onspindown);
    }
  }, {
    key: "onspinup",
    get: function get() {
      return this.getAttribute('onspinup');
    },
    set: function set(onspinup) {
      this.setAttribute('onspinup', onspinup);
    }
  }, {
    key: "onupdatedata",
    get: function get() {
      return this.getAttribute('onupdatedata');
    },
    set: function set(onupdatedata) {
      this.setAttribute('onupdatedata', onupdatedata);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Number_Com.observedAttributes;

      for (var property in Ext_field_Spinner_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Spinner_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Spinner_Component(propertiesobject, methods, events) {
    return _Ext_field_Number_Com.call(this, Object.assign(propertiesobject, Ext_field_Spinner_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_Spinner_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_Spinner_Component.METHODS()), events.concat(Ext_field_Spinner_Component.EVENTS())) || this; //this.XTYPE = Ext_field_Spinner_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Spinner_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_Spinner_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_Spinner_Component.EVENTS());
  }

  var _proto = Ext_field_Spinner_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Number_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Number_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Spinner_Component;
}(Ext_field_Number_Component);

export { Ext_field_Spinner_Component as default };