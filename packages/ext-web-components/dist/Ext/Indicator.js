import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Indicator_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Indicator_Component, _Ext_Component_Compon);

  //configs
  Ext_Indicator_Component.XTYPE = function XTYPE() {
    return 'indicator';
  };

  Ext_Indicator_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "activeIndex": ["number"],
      "count": ["number"],
      "direction": ["string"],
      "tapMode": ["string"]
    };
  };

  Ext_Indicator_Component.EVENTS = function EVENTS() {
    return [{
      name: 'indicatortap',
      parameters: 'undefined,index,item'
    }, {
      name: 'next',
      parameters: 'undefined'
    }, {
      name: 'previous',
      parameters: 'undefined'
    }];
  };

  Ext_Indicator_Component.METHODS = function METHODS() {
    return [{
      name: 'add',
      "function": function _function() {
        return this.ext.add();
      }
    }, {
      name: 'doAdd',
      "function": function _function() {
        return this.ext.doAdd();
      }
    }, {
      name: 'doRemove',
      "function": function _function() {
        return this.ext.doRemove();
      }
    }, {
      name: 'onTap',
      "function": function _function(e) {
        return this.ext.onTap(e);
      }
    }, {
      name: 'onTapDirection',
      "function": function _function(e) {
        return this.ext.onTapDirection(e);
      }
    }, {
      name: 'onTapItem',
      "function": function _function(e) {
        return this.ext.onTapItem(e);
      }
    }, {
      name: 'remove',
      "function": function _function() {
        return this.ext.remove();
      }
    }, {
      name: 'removeAll',
      "function": function _function() {
        return this.ext.removeAll();
      }
    }, {
      name: 'sync',
      "function": function _function(count, activeIndex) {
        return this.ext.sync(count, activeIndex);
      }
    }];
  };

  _createClass(Ext_Indicator_Component, [{
    key: "onindicatortap",
    //events
    get: function get() {
      return this.getAttribute('onindicatortap');
    },
    set: function set(onindicatortap) {
      this.setAttribute('onindicatortap', onindicatortap);
    }
  }, {
    key: "onnext",
    get: function get() {
      return this.getAttribute('onnext');
    },
    set: function set(onnext) {
      this.setAttribute('onnext', onnext);
    }
  }, {
    key: "onprevious",
    get: function get() {
      return this.getAttribute('onprevious');
    },
    set: function set(onprevious) {
      this.setAttribute('onprevious', onprevious);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Indicator_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Indicator_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Indicator_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_Indicator_Component.METHODS(), Ext_Indicator_Component.XTYPE(), Ext_Indicator_Component.PROPERTIESOBJECT(), Ext_Indicator_Component.EVENTS()) || this;
    _this.XTYPE = Ext_Indicator_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Indicator_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_Indicator_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_Indicator_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Indicator_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Indicator_Component;
}(Ext_Component_Component);

export { Ext_Indicator_Component as default };