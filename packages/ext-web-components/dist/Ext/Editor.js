import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_Editor_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_Editor_Component, _Ext_Container_Compon);

  //configs
  Ext_Editor_Component.XTYPE = function XTYPE() {
    return 'editor';
  };

  Ext_Editor_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "alignment": ["string"],
      "allowBlur": ["boolean"],
      "cancelOnClear": ["boolean"],
      "cancelOnEsc": ["boolean"],
      "completeOnEnter": ["boolean"],
      "constrain": ["boolean"],
      "field": ["object"],
      "hideEl": ["boolean"],
      "ignoreNoChange": ["boolean"],
      "matchFont": ["boolean"],
      "offset": ["number[]"],
      "parentEl": ["string", "htmlelement", "Ext.dom.Element"],
      "revertInvalid": ["boolean"],
      "shadow": ["boolean", "string"],
      "swallowKeys": ["boolean"],
      "updateEl": ["boolean"],
      "value": ["object"]
    };
  };

  Ext_Editor_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforecomplete',
      parameters: 'undefined,value,startValue'
    }, {
      name: 'beforestartedit',
      parameters: 'undefined,boundEl,value'
    }, {
      name: 'canceledit',
      parameters: 'undefined,value,startValue'
    }, {
      name: 'complete',
      parameters: 'undefined,value,startValue'
    }, {
      name: 'specialkey',
      parameters: 'undefined,field,event'
    }, {
      name: 'startedit',
      parameters: 'undefined,boundEl,value'
    }];
  };

  Ext_Editor_Component.METHODS = function METHODS() {
    return [{
      name: 'cancelEdit',
      "function": function _function(remainVisible) {
        return this.ext.cancelEdit(remainVisible);
      }
    }, {
      name: 'completeEdit',
      "function": function _function(remainVisible) {
        return this.ext.completeEdit(remainVisible);
      }
    }, {
      name: 'getLocation',
      "function": function _function() {
        return this.ext.getLocation();
      }
    }, {
      name: 'getValue',
      "function": function _function() {
        return this.ext.getValue();
      }
    }, {
      name: 'onEditComplete',
      "function": function _function(remainVisible, cancelling) {
        return this.ext.onEditComplete(remainVisible, cancelling);
      }
    }, {
      name: 'onSpecialKey',
      "function": function _function(field, event) {
        return this.ext.onSpecialKey(field, event);
      }
    }, {
      name: 'realign',
      "function": function _function() {
        return this.ext.realign();
      }
    }, {
      name: 'setValue',
      "function": function _function(value) {
        return this.ext.setValue(value);
      }
    }, {
      name: 'startEdit',
      "function": function _function(el, value, doFocus) {
        return this.ext.startEdit(el, value, doFocus);
      }
    }];
  };

  _createClass(Ext_Editor_Component, [{
    key: "onbeforecomplete",
    //events
    get: function get() {
      return this.getAttribute('onbeforecomplete');
    },
    set: function set(onbeforecomplete) {
      this.setAttribute('onbeforecomplete', onbeforecomplete);
    }
  }, {
    key: "onbeforestartedit",
    get: function get() {
      return this.getAttribute('onbeforestartedit');
    },
    set: function set(onbeforestartedit) {
      this.setAttribute('onbeforestartedit', onbeforestartedit);
    }
  }, {
    key: "oncanceledit",
    get: function get() {
      return this.getAttribute('oncanceledit');
    },
    set: function set(oncanceledit) {
      this.setAttribute('oncanceledit', oncanceledit);
    }
  }, {
    key: "oncomplete",
    get: function get() {
      return this.getAttribute('oncomplete');
    },
    set: function set(oncomplete) {
      this.setAttribute('oncomplete', oncomplete);
    }
  }, {
    key: "onspecialkey",
    get: function get() {
      return this.getAttribute('onspecialkey');
    },
    set: function set(onspecialkey) {
      this.setAttribute('onspecialkey', onspecialkey);
    }
  }, {
    key: "onstartedit",
    get: function get() {
      return this.getAttribute('onstartedit');
    },
    set: function set(onstartedit) {
      this.setAttribute('onstartedit', onstartedit);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_Editor_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Editor_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Editor_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this, Ext_Editor_Component.METHODS(), Ext_Editor_Component.XTYPE(), Ext_Editor_Component.PROPERTIESOBJECT(), Ext_Editor_Component.EVENTS()) || this;
    _this.XTYPE = Ext_Editor_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Editor_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_Editor_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_Editor_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Editor_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Editor_Component;
}(Ext_Container_Component);

export { Ext_Editor_Component as default };