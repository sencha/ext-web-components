import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_slider_Slider_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_slider_Slider_Component, _Ext_Component_Compon);

  //configs
  Ext_slider_Slider_Component.XTYPE = function XTYPE() {
    return 'slider';
  };

  Ext_slider_Slider_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowThumbsOverlapping": ["boolean"],
      "animation": ["boolean", "object"],
      "increment": ["number"],
      "maxValue": ["number"],
      "minValue": ["number"],
      "readOnly": ["boolean"],
      "thumbDefaults": ["object"],
      "value": ["number", "number[]"],
      "valueIsArray": ["boolean"],
      "values": ["number", "number[]"]
    };
  };

  Ext_slider_Slider_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,thumb,newValue,oldValue'
    }, {
      name: 'drag',
      parameters: 'undefined,thumb,e'
    }, {
      name: 'dragend',
      parameters: 'undefined,thumb,value,e'
    }, {
      name: 'dragstart',
      parameters: 'undefined,thumb,value,e'
    }];
  };

  Ext_slider_Slider_Component.METHODS = function METHODS() {
    return [{
      name: 'applyIncrement',
      "function": function _function(increment) {
        return this.ext.applyIncrement(increment);
      }
    }, {
      name: 'constrainValue',
      "function": function _function(value) {
        return this.ext.constrainValue(value);
      }
    }, {
      name: 'factoryThumb',
      "function": function _function() {
        return this.ext.factoryThumb();
      }
    }, {
      name: 'getArrayValues',
      "function": function _function() {
        return this.ext.getArrayValues();
      }
    }, {
      name: 'getThumb',
      "function": function _function(index) {
        return this.ext.getThumb(index);
      }
    }, {
      name: 'getThumbs',
      "function": function _function() {
        return this.ext.getThumbs();
      }
    }, {
      name: 'getValues',
      "function": function _function() {
        return this.ext.getValues();
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'onTap',
      "function": function _function(e) {
        return this.ext.onTap(e);
      }
    }, {
      name: 'refreshAllThumbConstraints',
      "function": function _function() {
        return this.ext.refreshAllThumbConstraints();
      }
    }, {
      name: 'refreshValue',
      "function": function _function() {
        return this.ext.refreshValue();
      }
    }, {
      name: 'setValues',
      "function": function _function(value) {
        return this.ext.setValues(value);
      }
    }, {
      name: 'updateAllowThumbsOverlapping',
      "function": function _function(newValue, oldValue) {
        return this.ext.updateAllowThumbsOverlapping(newValue, oldValue);
      }
    }, {
      name: 'updateIncrement',
      "function": function _function(newValue, oldValue) {
        return this.ext.updateIncrement(newValue, oldValue);
      }
    }, {
      name: 'updateMaxValue',
      "function": function _function(newValue, oldValue) {
        return this.ext.updateMaxValue(newValue, oldValue);
      }
    }, {
      name: 'updateMinValue',
      "function": function _function(newValue, oldValue) {
        return this.ext.updateMinValue(newValue, oldValue);
      }
    }, {
      name: 'updateThumbs',
      "function": function _function(newThumbs) {
        return this.ext.updateThumbs(newThumbs);
      }
    }, {
      name: 'updateValue',
      "function": function _function() {
        return this.ext.updateValue();
      }
    }];
  };

  _createClass(Ext_slider_Slider_Component, [{
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
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_slider_Slider_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_slider_Slider_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_slider_Slider_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_slider_Slider_Component.METHODS(), Ext_slider_Slider_Component.XTYPE(), Ext_slider_Slider_Component.PROPERTIESOBJECT(), Ext_slider_Slider_Component.EVENTS()) || this;
    _this.XTYPE = Ext_slider_Slider_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_slider_Slider_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_slider_Slider_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_slider_Slider_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_slider_Slider_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_slider_Slider_Component;
}(Ext_Component_Component);

export { Ext_slider_Slider_Component as default };