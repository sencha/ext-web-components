import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_dataview_IndexBar_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_dataview_IndexBar_Component, _Ext_Component_Compon);

  //configs
  Ext_dataview_IndexBar_Component.XTYPE = function XTYPE() {
    return 'indexbar';
  };

  Ext_dataview_IndexBar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "animation": ["boolean", "object"],
      "autoHide": ["boolean", "string"],
      "direction": ["'vertical'", "'horizontal'"],
      "dynamic": ["boolean"],
      "indicator": ["boolean"],
      "letters": ["string", "string[]"],
      "listPrefix": ["string"]
    };
  };

  Ext_dataview_IndexBar_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforedirectionchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'directionchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'index',
      parameters: 'undefined,html,target'
    }];
  };

  Ext_dataview_IndexBar_Component.METHODS = function METHODS() {
    return [{
      name: 'shouldAutoHide',
      "function": function _function(trigger) {
        return this.ext.shouldAutoHide(trigger);
      }
    }];
  };

  _createClass(Ext_dataview_IndexBar_Component, [{
    key: "onbeforedirectionchange",
    //events
    get: function get() {
      return this.getAttribute('onbeforedirectionchange');
    },
    set: function set(onbeforedirectionchange) {
      this.setAttribute('onbeforedirectionchange', onbeforedirectionchange);
    }
  }, {
    key: "ondirectionchange",
    get: function get() {
      return this.getAttribute('ondirectionchange');
    },
    set: function set(ondirectionchange) {
      this.setAttribute('ondirectionchange', ondirectionchange);
    }
  }, {
    key: "onindex",
    get: function get() {
      return this.getAttribute('onindex');
    },
    set: function set(onindex) {
      this.setAttribute('onindex', onindex);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_dataview_IndexBar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_IndexBar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_IndexBar_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_dataview_IndexBar_Component.METHODS(), Ext_dataview_IndexBar_Component.XTYPE(), Ext_dataview_IndexBar_Component.PROPERTIESOBJECT(), Ext_dataview_IndexBar_Component.EVENTS()) || this;
    _this.XTYPE = Ext_dataview_IndexBar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_dataview_IndexBar_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_dataview_IndexBar_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_dataview_IndexBar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_dataview_IndexBar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_IndexBar_Component;
}(Ext_Component_Component);

export { Ext_dataview_IndexBar_Component as default };