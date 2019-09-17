import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Image_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Image_Component, _Ext_Component_Compon);

  //configs
  Ext_Image_Component.XTYPE = function XTYPE() {
    return 'image';
  };

  Ext_Image_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "backgroundCls": ["string"],
      "imageCls": ["string"],
      "mode": ["string"],
      "src": ["string"]
    };
  };

  Ext_Image_Component.EVENTS = function EVENTS() {
    return [{
      name: 'error',
      parameters: 'undefined,e'
    }, {
      name: 'load',
      parameters: 'undefined,e'
    }, {
      name: 'tap',
      parameters: 'undefined,e'
    }];
  };

  Ext_Image_Component.METHODS = function METHODS() {
    return [{
      name: 'updateSrc',
      "function": function _function(newSrc) {
        return this.ext.updateSrc(newSrc);
      }
    }];
  };

  _createClass(Ext_Image_Component, [{
    key: "onerror",
    //events
    get: function get() {
      return this.getAttribute('onerror');
    },
    set: function set(onerror) {
      this.setAttribute('onerror', onerror);
    }
  }, {
    key: "onload",
    get: function get() {
      return this.getAttribute('onload');
    },
    set: function set(onload) {
      this.setAttribute('onload', onload);
    }
  }, {
    key: "ontap",
    get: function get() {
      return this.getAttribute('ontap');
    },
    set: function set(ontap) {
      this.setAttribute('ontap', ontap);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Image_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Image_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Image_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this) || this;
    _this.XTYPE = Ext_Image_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Image_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_Image_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_Image_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Image_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Image_Component;
}(Ext_Component_Component);

export { Ext_Image_Component as default };