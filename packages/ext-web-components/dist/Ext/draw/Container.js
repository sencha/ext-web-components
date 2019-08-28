import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_ContainerBase_Component from '../../Ext/draw/ContainerBase';

var Ext_draw_Container_Component =
/*#__PURE__*/
function (_Ext_draw_ContainerBa) {
  _inheritsLoose(Ext_draw_Container_Component, _Ext_draw_ContainerBa);

  //configs
  Ext_draw_Container_Component.XTYPE = function XTYPE() {
    return 'draw';
  };

  Ext_draw_Container_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "downloadServerUrl": ["string"],
      "engine": ["string"],
      "gradients": ["object[]"],
      "resizeHandler": ["function"],
      "sprites": ["object[]"],
      "surfaceZIndexes": ["object"]
    };
  };

  Ext_draw_Container_Component.EVENTS = function EVENTS() {
    return [{
      name: 'bodyresize',
      parameters: 'size'
    }, {
      name: 'spriteclick',
      parameters: 'sprite,event'
    }, {
      name: 'spritedblclick',
      parameters: 'sprite,event'
    }, {
      name: 'spritemousedown',
      parameters: 'sprite,event'
    }, {
      name: 'spritemousemove',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseout',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseover',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseup',
      parameters: 'sprite,event'
    }, {
      name: 'spritetap',
      parameters: 'sprite,event'
    }];
  };

  Ext_draw_Container_Component.METHODS = function METHODS() {
    return [{
      name: 'download',
      "function": function _function(config) {
        return this.ext.download(config);
      }
    }, {
      name: 'getImage',
      "function": function _function(format) {
        return this.ext.getImage(format);
      }
    }, {
      name: 'getSurface',
      "function": function _function(id, type) {
        return this.ext.getSurface(id, type);
      }
    }, {
      name: 'getSurfaces',
      "function": function _function(sort) {
        return this.ext.getSurfaces(sort);
      }
    }, {
      name: 'handleResize',
      "function": function _function(size, instantly) {
        return this.ext.handleResize(size, instantly);
      }
    }, {
      name: 'preview',
      "function": function _function() {
        return this.ext.preview();
      }
    }, {
      name: 'renderFrame',
      "function": function _function() {
        return this.ext.renderFrame();
      }
    }, {
      name: 'stopResizeTimer',
      "function": function _function() {
        return this.ext.stopResizeTimer();
      }
    }];
  };

  _createClass(Ext_draw_Container_Component, [{
    key: "onbodyresize",
    //events
    get: function get() {
      return this.getAttribute('onbodyresize');
    },
    set: function set(onbodyresize) {
      this.setAttribute('onbodyresize', onbodyresize);
    }
  }, {
    key: "onspriteclick",
    get: function get() {
      return this.getAttribute('onspriteclick');
    },
    set: function set(onspriteclick) {
      this.setAttribute('onspriteclick', onspriteclick);
    }
  }, {
    key: "onspritedblclick",
    get: function get() {
      return this.getAttribute('onspritedblclick');
    },
    set: function set(onspritedblclick) {
      this.setAttribute('onspritedblclick', onspritedblclick);
    }
  }, {
    key: "onspritemousedown",
    get: function get() {
      return this.getAttribute('onspritemousedown');
    },
    set: function set(onspritemousedown) {
      this.setAttribute('onspritemousedown', onspritemousedown);
    }
  }, {
    key: "onspritemousemove",
    get: function get() {
      return this.getAttribute('onspritemousemove');
    },
    set: function set(onspritemousemove) {
      this.setAttribute('onspritemousemove', onspritemousemove);
    }
  }, {
    key: "onspritemouseout",
    get: function get() {
      return this.getAttribute('onspritemouseout');
    },
    set: function set(onspritemouseout) {
      this.setAttribute('onspritemouseout', onspritemouseout);
    }
  }, {
    key: "onspritemouseover",
    get: function get() {
      return this.getAttribute('onspritemouseover');
    },
    set: function set(onspritemouseover) {
      this.setAttribute('onspritemouseover', onspritemouseover);
    }
  }, {
    key: "onspritemouseup",
    get: function get() {
      return this.getAttribute('onspritemouseup');
    },
    set: function set(onspritemouseup) {
      this.setAttribute('onspritemouseup', onspritemouseup);
    }
  }, {
    key: "onspritetap",
    get: function get() {
      return this.getAttribute('onspritetap');
    },
    set: function set(onspritetap) {
      this.setAttribute('onspritetap', onspritetap);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_ContainerBa.observedAttributes;

      for (var property in Ext_draw_Container_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_draw_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_Container_Component() {
    var _this;

    _this = _Ext_draw_ContainerBa.call(this, Ext_draw_Container_Component.METHODS(), Ext_draw_Container_Component.XTYPE(), Ext_draw_Container_Component.PROPERTIESOBJECT(), Ext_draw_Container_Component.EVENTS()) || this;
    _this.XTYPE = Ext_draw_Container_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_draw_Container_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_draw_Container_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_draw_Container_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_draw_Container_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_ContainerBa.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_ContainerBa.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_Container_Component;
}(Ext_draw_ContainerBase_Component);

export { Ext_draw_Container_Component as default };