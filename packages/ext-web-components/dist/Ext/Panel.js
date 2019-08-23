import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_Panel_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_Panel_Component, _Ext_Container_Compon);

  //configs
  Ext_Panel_Component.XTYPE = function XTYPE() {
    return 'panel';
  };

  Ext_Panel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "anchor": ["boolean"],
      "anchorPosition": ["string"],
      "bbar": ["object", "object[]"],
      "bodyBorder": ["boolean"],
      "bodyPadding": ["number", "boolean", "string"],
      "bodyStyle": ["string", "object"],
      "border": ["boolean"],
      "buttons": ["object", "Ext.Button[]"],
      "buttonToolbar": ["object", "Ext.Toolbar"],
      "closable": ["boolean"],
      "closeAction": ["string"],
      "closeToolText": ["string"],
      "collapsed": ["boolean"],
      "collapsible": ["'top'", "'right'", "'bottom'", "'left'", "boolean", "object"],
      "header": ["boolean", "object"],
      "headerPosition": ["'top'", "'right'", "'bottom'", "'left'"],
      "icon": ["string"],
      "iconAlign": ["'top'", "'right'", "'bottom'", "'left'"],
      "iconCls": ["string"],
      "lbar": ["object", "object[]"],
      "manageBorders": ["boolean"],
      "rbar": ["object", "object[]"],
      "resizable": ["object"],
      "tbar": ["object", "object[]"],
      "title": ["string", "Ext.panel.Title"],
      "titleAlign": ["'left'", "'center'", "'right'"],
      "titleCollapse": ["boolean"]
    };
  };

  Ext_Panel_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforecollapse',
      parameters: 'undefined'
    }, {
      name: 'beforeexpand',
      parameters: 'undefined'
    }, {
      name: 'beforeresizedragstart',
      parameters: 'undefined,context'
    }, {
      name: 'collapse',
      parameters: 'undefined'
    }, {
      name: 'drawerhide',
      parameters: 'undefined'
    }, {
      name: 'drawershow',
      parameters: 'undefined'
    }, {
      name: 'expand',
      parameters: 'undefined'
    }, {
      name: 'resizedrag',
      parameters: 'undefined,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'undefined,context'
    }, {
      name: 'resizedragend',
      parameters: 'undefined,context'
    }, {
      name: 'resizedragstart',
      parameters: 'undefined,context'
    }];
  };

  Ext_Panel_Component.METHODS = function METHODS() {
    return [{
      name: 'addBodyCls',
      "function": function _function(cls) {
        return this.ext.addBodyCls(cls);
      }
    }, {
      name: 'addTool',
      "function": function _function(tool) {
        return this.ext.addTool(tool);
      }
    }, {
      name: 'close',
      "function": function _function() {
        return this.ext.close();
      }
    }, {
      name: 'collapse',
      "function": function _function(animation) {
        return this.ext.collapse(animation);
      }
    }, {
      name: 'expand',
      "function": function _function(animation) {
        return this.ext.expand(animation);
      }
    }, {
      name: 'removeBodyCls',
      "function": function _function(cls) {
        return this.ext.removeBodyCls(cls);
      }
    }, {
      name: 'toggleCollapsed',
      "function": function _function(collapsed, animation) {
        return this.ext.toggleCollapsed(collapsed, animation);
      }
    }];
  };

  _createClass(Ext_Panel_Component, [{
    key: "onbeforecollapse",
    //events
    get: function get() {
      return this.getAttribute('onbeforecollapse');
    },
    set: function set(onbeforecollapse) {
      this.setAttribute('onbeforecollapse', onbeforecollapse);
    }
  }, {
    key: "onbeforeexpand",
    get: function get() {
      return this.getAttribute('onbeforeexpand');
    },
    set: function set(onbeforeexpand) {
      this.setAttribute('onbeforeexpand', onbeforeexpand);
    }
  }, {
    key: "onbeforeresizedragstart",
    get: function get() {
      return this.getAttribute('onbeforeresizedragstart');
    },
    set: function set(onbeforeresizedragstart) {
      this.setAttribute('onbeforeresizedragstart', onbeforeresizedragstart);
    }
  }, {
    key: "oncollapse",
    get: function get() {
      return this.getAttribute('oncollapse');
    },
    set: function set(oncollapse) {
      this.setAttribute('oncollapse', oncollapse);
    }
  }, {
    key: "ondrawerhide",
    get: function get() {
      return this.getAttribute('ondrawerhide');
    },
    set: function set(ondrawerhide) {
      this.setAttribute('ondrawerhide', ondrawerhide);
    }
  }, {
    key: "ondrawershow",
    get: function get() {
      return this.getAttribute('ondrawershow');
    },
    set: function set(ondrawershow) {
      this.setAttribute('ondrawershow', ondrawershow);
    }
  }, {
    key: "onexpand",
    get: function get() {
      return this.getAttribute('onexpand');
    },
    set: function set(onexpand) {
      this.setAttribute('onexpand', onexpand);
    }
  }, {
    key: "onresizedrag",
    get: function get() {
      return this.getAttribute('onresizedrag');
    },
    set: function set(onresizedrag) {
      this.setAttribute('onresizedrag', onresizedrag);
    }
  }, {
    key: "onresizedragcancel",
    get: function get() {
      return this.getAttribute('onresizedragcancel');
    },
    set: function set(onresizedragcancel) {
      this.setAttribute('onresizedragcancel', onresizedragcancel);
    }
  }, {
    key: "onresizedragend",
    get: function get() {
      return this.getAttribute('onresizedragend');
    },
    set: function set(onresizedragend) {
      this.setAttribute('onresizedragend', onresizedragend);
    }
  }, {
    key: "onresizedragstart",
    get: function get() {
      return this.getAttribute('onresizedragstart');
    },
    set: function set(onresizedragstart) {
      this.setAttribute('onresizedragstart', onresizedragstart);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_Panel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Panel_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this, Ext_Panel_Component.METHODS(), Ext_Panel_Component.XTYPE(), Ext_Panel_Component.PROPERTIESOBJECT(), Ext_Panel_Component.EVENTS()) || this;
    _this.XTYPE = Ext_Panel_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Panel_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_Panel_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_Panel_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Panel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Panel_Component;
}(Ext_Container_Component);

export { Ext_Panel_Component as default };