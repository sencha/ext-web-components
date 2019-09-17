import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Abstract_Component from '../Ext/dataview/Abstract';

var Ext_DataView_Component =
/*#__PURE__*/
function (_Ext_dataview_Abstrac) {
  _inheritsLoose(Ext_DataView_Component, _Ext_dataview_Abstrac);

  //configs
  Ext_DataView_Component.XTYPE = function XTYPE() {
    return 'dataview';
  };

  Ext_DataView_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "lastSelected": ["Ext.data.Model"],
      "selected": ["Ext.util.Collection"]
    };
  };

  Ext_DataView_Component.EVENTS = function EVENTS() {
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
    }, {
      name: 'rowselection',
      parameters: 'view,selection'
    }, {
      name: 'selectionchange',
      parameters: 'view,records,selected,selection'
    }];
  };

  Ext_DataView_Component.METHODS = function METHODS() {
    return [{
      name: 'getItemClass',
      "function": function _function(data) {
        return this.ext.getItemClass(data);
      }
    }];
  };

  _createClass(Ext_DataView_Component, [{
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
  }, {
    key: "onrowselection",
    get: function get() {
      return this.getAttribute('onrowselection');
    },
    set: function set(onrowselection) {
      this.setAttribute('onrowselection', onrowselection);
    }
  }, {
    key: "onselectionchange",
    get: function get() {
      return this.getAttribute('onselectionchange');
    },
    set: function set(onselectionchange) {
      this.setAttribute('onselectionchange', onselectionchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_Abstrac.observedAttributes;

      for (var property in Ext_DataView_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_DataView_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_DataView_Component() {
    var _this;

    _this = _Ext_dataview_Abstrac.call(this) || this;
    _this.XTYPE = Ext_DataView_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_DataView_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_DataView_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_DataView_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_DataView_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_DataView_Component;
}(Ext_dataview_Abstract_Component);

export { Ext_DataView_Component as default };