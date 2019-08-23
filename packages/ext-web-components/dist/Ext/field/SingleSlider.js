import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Slider_Component from '../../Ext/field/Slider';

var Ext_field_SingleSlider_Component =
/*#__PURE__*/
function (_Ext_field_Slider_Com) {
  _inheritsLoose(Ext_field_SingleSlider_Component, _Ext_field_Slider_Com);

  //configs
  Ext_field_SingleSlider_Component.XTYPE = function XTYPE() {
    return 'singlesliderfield';
  };

  Ext_field_SingleSlider_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "publishes": ["string", "string[]", "object"],
      "twoWayBindable": ["string", "string[]", "object"],
      "value": ["number", "number[]"]
    };
  };

  Ext_field_SingleSlider_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'me,newValue,oldValue'
    }, {
      name: 'drag',
      parameters: 'undefined,sl,thumb,e'
    }, {
      name: 'dragchange',
      parameters: 'me,sl,newValue,oldValue'
    }, {
      name: 'dragend',
      parameters: 'undefined,sl,thumb,value,e'
    }, {
      name: 'dragstart',
      parameters: 'undefined,sl,thumb,value,e'
    }];
  };

  Ext_field_SingleSlider_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_SingleSlider_Component, [{
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
    key: "ondragchange",
    get: function get() {
      return this.getAttribute('ondragchange');
    },
    set: function set(ondragchange) {
      this.setAttribute('ondragchange', ondragchange);
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
      var attrs = _Ext_field_Slider_Com.observedAttributes;

      for (var property in Ext_field_SingleSlider_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_SingleSlider_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_SingleSlider_Component() {
    var _this;

    _this = _Ext_field_Slider_Com.call(this, Ext_field_SingleSlider_Component.METHODS(), Ext_field_SingleSlider_Component.XTYPE(), Ext_field_SingleSlider_Component.PROPERTIESOBJECT(), Ext_field_SingleSlider_Component.EVENTS()) || this;
    _this.XTYPE = Ext_field_SingleSlider_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_SingleSlider_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_field_SingleSlider_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_field_SingleSlider_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_SingleSlider_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Slider_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Slider_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_SingleSlider_Component;
}(Ext_field_Slider_Component);

export { Ext_field_SingleSlider_Component as default };