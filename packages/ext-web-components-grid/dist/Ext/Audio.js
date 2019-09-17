import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Media_Component from '../Ext/Media';

var Ext_Audio_Component =
/*#__PURE__*/
function (_Ext_Media_Component) {
  _inheritsLoose(Ext_Audio_Component, _Ext_Media_Component);

  //events
  //configs
  Ext_Audio_Component.XTYPE = function XTYPE() {
    return 'audio';
  };

  Ext_Audio_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "cls": ["string", "string[]"],
      "url": ["string"]
    };
  };

  Ext_Audio_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Audio_Component.METHODS = function METHODS() {
    return [{
      name: 'onActivate',
      "function": function _function() {
        return this.ext.onActivate();
      }
    }, {
      name: 'onDeactivate',
      "function": function _function() {
        return this.ext.onDeactivate();
      }
    }];
  };

  _createClass(Ext_Audio_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Media_Component.observedAttributes;

      for (var property in Ext_Audio_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Audio_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Audio_Component() {
    var _this;

    _this = _Ext_Media_Component.call(this) || this;
    _this.XTYPE = Ext_Audio_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Audio_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_Audio_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_Audio_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Audio_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Media_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Media_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Audio_Component;
}(Ext_Media_Component);

export { Ext_Audio_Component as default };