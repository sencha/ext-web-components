import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Abstract_Component from '../../Ext/dataview/Abstract';

var Ext_dataview_Component_Component =
/*#__PURE__*/
function (_Ext_dataview_Abstrac) {
  _inheritsLoose(Ext_dataview_Component_Component, _Ext_dataview_Abstrac);

  //configs
  Ext_dataview_Component_Component.XTYPE = function XTYPE() {
    return 'componentdataview';
  };

  Ext_dataview_Component_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultType": ["Ext.enums.Widget"],
      "itemConfig": ["object", "Ext.Component"],
      "itemContentCls": ["string"],
      "itemDataMap": ["object"],
      "itemInnerCls": ["string"],
      "maxItemCache": ["number"],
      "striped": ["boolean"]
    };
  };

  Ext_dataview_Component_Component.EVENTS = function EVENTS() {
    return [{
      name: 'childdoubletap',
      parameters: 'undefined,location'
    }, {
      name: 'childlongpress',
      parameters: 'undefined,location'
    }, {
      name: 'childmouseenter',
      parameters: 'undefined,location'
    }, {
      name: 'childmouseleave',
      parameters: 'undefined,location'
    }, {
      name: 'childsingletap',
      parameters: 'undefined,location'
    }, {
      name: 'childtap',
      parameters: 'undefined,location'
    }, {
      name: 'childtaphold',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchend',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchmove',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchstart',
      parameters: 'undefined,location'
    }];
  };

  Ext_dataview_Component_Component.METHODS = function METHODS() {
    return [{
      name: 'changeItem',
      "function": function _function(itemIndex, recordIndex) {
        return this.ext.changeItem(itemIndex, recordIndex);
      }
    }];
  };

  _createClass(Ext_dataview_Component_Component, [{
    key: "onchilddoubletap",
    //events
    get: function get() {
      return this.getAttribute('onchilddoubletap');
    },
    set: function set(onchilddoubletap) {
      this.setAttribute('onchilddoubletap', onchilddoubletap);
    }
  }, {
    key: "onchildlongpress",
    get: function get() {
      return this.getAttribute('onchildlongpress');
    },
    set: function set(onchildlongpress) {
      this.setAttribute('onchildlongpress', onchildlongpress);
    }
  }, {
    key: "onchildmouseenter",
    get: function get() {
      return this.getAttribute('onchildmouseenter');
    },
    set: function set(onchildmouseenter) {
      this.setAttribute('onchildmouseenter', onchildmouseenter);
    }
  }, {
    key: "onchildmouseleave",
    get: function get() {
      return this.getAttribute('onchildmouseleave');
    },
    set: function set(onchildmouseleave) {
      this.setAttribute('onchildmouseleave', onchildmouseleave);
    }
  }, {
    key: "onchildsingletap",
    get: function get() {
      return this.getAttribute('onchildsingletap');
    },
    set: function set(onchildsingletap) {
      this.setAttribute('onchildsingletap', onchildsingletap);
    }
  }, {
    key: "onchildtap",
    get: function get() {
      return this.getAttribute('onchildtap');
    },
    set: function set(onchildtap) {
      this.setAttribute('onchildtap', onchildtap);
    }
  }, {
    key: "onchildtaphold",
    get: function get() {
      return this.getAttribute('onchildtaphold');
    },
    set: function set(onchildtaphold) {
      this.setAttribute('onchildtaphold', onchildtaphold);
    }
  }, {
    key: "onchildtouchcancel",
    get: function get() {
      return this.getAttribute('onchildtouchcancel');
    },
    set: function set(onchildtouchcancel) {
      this.setAttribute('onchildtouchcancel', onchildtouchcancel);
    }
  }, {
    key: "onchildtouchend",
    get: function get() {
      return this.getAttribute('onchildtouchend');
    },
    set: function set(onchildtouchend) {
      this.setAttribute('onchildtouchend', onchildtouchend);
    }
  }, {
    key: "onchildtouchmove",
    get: function get() {
      return this.getAttribute('onchildtouchmove');
    },
    set: function set(onchildtouchmove) {
      this.setAttribute('onchildtouchmove', onchildtouchmove);
    }
  }, {
    key: "onchildtouchstart",
    get: function get() {
      return this.getAttribute('onchildtouchstart');
    },
    set: function set(onchildtouchstart) {
      this.setAttribute('onchildtouchstart', onchildtouchstart);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_Abstrac.observedAttributes;

      for (var property in Ext_dataview_Component_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_Component_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_Component_Component() {
    var _this;

    _this = _Ext_dataview_Abstrac.call(this, Ext_dataview_Component_Component.METHODS(), Ext_dataview_Component_Component.XTYPE(), Ext_dataview_Component_Component.PROPERTIESOBJECT(), Ext_dataview_Component_Component.EVENTS()) || this;
    _this.XTYPE = Ext_dataview_Component_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_dataview_Component_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_dataview_Component_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_dataview_Component_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_dataview_Component_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_Component_Component;
}(Ext_dataview_Abstract_Component);

export { Ext_dataview_Component_Component as default };