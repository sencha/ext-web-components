import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget_Component from '../../Ext/Widget';

var Ext_lib_Component_Component =
/*#__PURE__*/
function (_Ext_Widget_Component) {
  _inheritsLoose(Ext_lib_Component_Component, _Ext_Widget_Component);

  //configs
  Ext_lib_Component_Component.XTYPE = function XTYPE() {
    return 'component';
  };

  Ext_lib_Component_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "axisLock": ["boolean"],
      "bottom": ["number", "string"],
      "centered": ["boolean"],
      "contentEl": ["Ext.dom.Element", "htmlelement", "string"],
      "data": ["object"],
      "displayed": ["boolean"],
      "docked": ["string"],
      "draggable": ["boolean", "object", "Ext.drag.Source"],
      "fullscreen": ["boolean"],
      "hideAnimation": ["string", "mixed"],
      "hideOnMaskTap": ["boolean"],
      "html": ["string", "Ext.dom.Element", "htmlelement"],
      "left": ["number", "string"],
      "maxHeight": ["number", "string"],
      "maxWidth": ["number", "string"],
      "minHeight": ["number", "string"],
      "minWidth": ["number", "string"],
      "modal": ["boolean"],
      "modelValidation": ["boolean"],
      "padding": ["number", "string"],
      "record": ["Ext.data.Model"],
      "right": ["number", "string"],
      "scrollable": ["boolean", "string", "object"],
      "showAnimation": ["string", "mixed"],
      "tabIndex": ["number"],
      "tooltip": ["string", "object"],
      "top": ["number", "string"],
      "tpl": ["string", "string[]", "Ext.Template", "Ext.XTemplate[]"],
      "tplWriteMode": ["string"],
      "userSelectable": ["boolean", "string", "object"],
      "weight": ["number"],
      "xtype": ["string"],
      "zIndex": ["number"]
    };
  };

  Ext_lib_Component_Component.EVENTS = function EVENTS() {
    return [{
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }];
  };

  Ext_lib_Component_Component.METHODS = function METHODS() {
    return [{
      name: 'afterEdit',
      "function": function _function() {
        return this.ext.afterEdit();
      }
    }, {
      name: 'afterErase',
      "function": function _function() {
        return this.ext.afterErase();
      }
    }, {
      name: 'alignTo',
      "function": function _function(component, alignment, options) {
        return this.ext.alignTo(component, alignment, options);
      }
    }, {
      name: 'applyCentered',
      "function": function _function(centered) {
        return this.ext.applyCentered(centered);
      }
    }, {
      name: 'applyTpl',
      "function": function _function(tpl) {
        return this.ext.applyTpl(tpl);
      }
    }, {
      name: 'beforeInitialize',
      "function": function _function() {
        return this.ext.beforeInitialize();
      }
    }, {
      name: 'center',
      "function": function _function() {
        return this.ext.center();
      }
    }, {
      name: 'constructor',
      "function": function _function(config) {
        return this.ext.constructor(config);
      }
    }, {
      name: 'doDestroy',
      "function": function _function() {
        return this.ext.doDestroy();
      }
    }, {
      name: 'getModalSibling',
      "function": function _function() {
        return this.ext.getModalSibling();
      }
    }, {
      name: 'getRenderTarget',
      "function": function _function() {
        return this.ext.getRenderTarget();
      }
    }, {
      name: 'getScrollableClientRegion',
      "function": function _function() {
        return this.ext.getScrollableClientRegion();
      }
    }, {
      name: 'getXTypes',
      "function": function _function() {
        return this.ext.getXTypes();
      }
    }, {
      name: 'hide',
      "function": function _function(animation) {
        return this.ext.hide(animation);
      }
    }, {
      name: 'initDragConstraints',
      "function": function _function(draggable) {
        return this.ext.initDragConstraints(draggable);
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'initInheritedState',
      "function": function _function(inheritedState) {
        return this.ext.initInheritedState(inheritedState);
      }
    }, {
      name: 'isCentered',
      "function": function _function() {
        return this.ext.isCentered();
      }
    }, {
      name: 'isPainted',
      "function": function _function() {
        return this.ext.isPainted();
      }
    }, {
      name: 'isRendered',
      "function": function _function() {
        return this.ext.isRendered();
      }
    }, {
      name: 'onInitialized',
      "function": function _function(fn, scope, args) {
        return this.ext.onInitialized(fn, scope, args);
      }
    }, {
      name: 'onResize',
      "function": function _function(width, height, oldWidth, oldHeight) {
        return this.ext.onResize(width, height, oldWidth, oldHeight);
      }
    }, {
      name: 'onScrollEnd',
      "function": function _function(x, y) {
        return this.ext.onScrollEnd(x, y);
      }
    }, {
      name: 'onScrollMove',
      "function": function _function(x, y) {
        return this.ext.onScrollMove(x, y);
      }
    }, {
      name: 'onScrollStart',
      "function": function _function(x, y) {
        return this.ext.onScrollStart(x, y);
      }
    }, {
      name: 'preprocessShow',
      "function": function _function(component, alignment, options) {
        return this.ext.preprocessShow(component, alignment, options);
      }
    }, {
      name: 'resetFloating',
      "function": function _function() {
        return this.ext.resetFloating();
      }
    }, {
      name: 'resetPositioned',
      "function": function _function() {
        return this.ext.resetPositioned();
      }
    }, {
      name: 'setVisibility',
      "function": function _function(isVisible) {
        return this.ext.setVisibility(isVisible);
      }
    }, {
      name: 'setXY',
      "function": function _function(x, y, animation) {
        return this.ext.setXY(x, y, animation);
      }
    }, {
      name: 'show',
      "function": function _function(animation, options) {
        return this.ext.show(animation, options);
      }
    }, {
      name: 'showAt',
      "function": function _function(x, y) {
        return this.ext.showAt(x, y);
      }
    }, {
      name: 'showBy',
      "function": function _function(component, alignment, options) {
        return this.ext.showBy(component, alignment, options);
      }
    }, {
      name: 'triggerInitialized',
      "function": function _function() {
        return this.ext.triggerInitialized();
      }
    }, {
      name: 'updateData',
      "function": function _function(newData) {
        return this.ext.updateData(newData);
      }
    }, {
      name: 'whenVisible',
      "function": function _function(fn, args) {
        return this.ext.whenVisible(fn, args);
      }
    }];
  };

  _createClass(Ext_lib_Component_Component, [{
    key: "onadded",
    //events
    get: function get() {
      return this.getAttribute('onadded');
    },
    set: function set(onadded) {
      this.setAttribute('onadded', onadded);
    }
  }, {
    key: "onbeforebottomchange",
    get: function get() {
      return this.getAttribute('onbeforebottomchange');
    },
    set: function set(onbeforebottomchange) {
      this.setAttribute('onbeforebottomchange', onbeforebottomchange);
    }
  }, {
    key: "onbeforecenteredchange",
    get: function get() {
      return this.getAttribute('onbeforecenteredchange');
    },
    set: function set(onbeforecenteredchange) {
      this.setAttribute('onbeforecenteredchange', onbeforecenteredchange);
    }
  }, {
    key: "onbeforedockedchange",
    get: function get() {
      return this.getAttribute('onbeforedockedchange');
    },
    set: function set(onbeforedockedchange) {
      this.setAttribute('onbeforedockedchange', onbeforedockedchange);
    }
  }, {
    key: "onbeforehide",
    get: function get() {
      return this.getAttribute('onbeforehide');
    },
    set: function set(onbeforehide) {
      this.setAttribute('onbeforehide', onbeforehide);
    }
  }, {
    key: "onbeforeleftchange",
    get: function get() {
      return this.getAttribute('onbeforeleftchange');
    },
    set: function set(onbeforeleftchange) {
      this.setAttribute('onbeforeleftchange', onbeforeleftchange);
    }
  }, {
    key: "onbeforemaxHeightchange",
    get: function get() {
      return this.getAttribute('onbeforemaxHeightchange');
    },
    set: function set(onbeforemaxHeightchange) {
      this.setAttribute('onbeforemaxHeightchange', onbeforemaxHeightchange);
    }
  }, {
    key: "onbeforemaxWidthchange",
    get: function get() {
      return this.getAttribute('onbeforemaxWidthchange');
    },
    set: function set(onbeforemaxWidthchange) {
      this.setAttribute('onbeforemaxWidthchange', onbeforemaxWidthchange);
    }
  }, {
    key: "onbeforeminHeightchange",
    get: function get() {
      return this.getAttribute('onbeforeminHeightchange');
    },
    set: function set(onbeforeminHeightchange) {
      this.setAttribute('onbeforeminHeightchange', onbeforeminHeightchange);
    }
  }, {
    key: "onbeforeminWidthchange",
    get: function get() {
      return this.getAttribute('onbeforeminWidthchange');
    },
    set: function set(onbeforeminWidthchange) {
      this.setAttribute('onbeforeminWidthchange', onbeforeminWidthchange);
    }
  }, {
    key: "onbeforeorientationchange",
    get: function get() {
      return this.getAttribute('onbeforeorientationchange');
    },
    set: function set(onbeforeorientationchange) {
      this.setAttribute('onbeforeorientationchange', onbeforeorientationchange);
    }
  }, {
    key: "onbeforerightchange",
    get: function get() {
      return this.getAttribute('onbeforerightchange');
    },
    set: function set(onbeforerightchange) {
      this.setAttribute('onbeforerightchange', onbeforerightchange);
    }
  }, {
    key: "onbeforescrollablechange",
    get: function get() {
      return this.getAttribute('onbeforescrollablechange');
    },
    set: function set(onbeforescrollablechange) {
      this.setAttribute('onbeforescrollablechange', onbeforescrollablechange);
    }
  }, {
    key: "onbeforeshow",
    get: function get() {
      return this.getAttribute('onbeforeshow');
    },
    set: function set(onbeforeshow) {
      this.setAttribute('onbeforeshow', onbeforeshow);
    }
  }, {
    key: "onbeforetopchange",
    get: function get() {
      return this.getAttribute('onbeforetopchange');
    },
    set: function set(onbeforetopchange) {
      this.setAttribute('onbeforetopchange', onbeforetopchange);
    }
  }, {
    key: "onbottomchange",
    get: function get() {
      return this.getAttribute('onbottomchange');
    },
    set: function set(onbottomchange) {
      this.setAttribute('onbottomchange', onbottomchange);
    }
  }, {
    key: "oncenteredchange",
    get: function get() {
      return this.getAttribute('oncenteredchange');
    },
    set: function set(oncenteredchange) {
      this.setAttribute('oncenteredchange', oncenteredchange);
    }
  }, {
    key: "ondestroy",
    get: function get() {
      return this.getAttribute('ondestroy');
    },
    set: function set(ondestroy) {
      this.setAttribute('ondestroy', ondestroy);
    }
  }, {
    key: "ondockedchange",
    get: function get() {
      return this.getAttribute('ondockedchange');
    },
    set: function set(ondockedchange) {
      this.setAttribute('ondockedchange', ondockedchange);
    }
  }, {
    key: "onerased",
    get: function get() {
      return this.getAttribute('onerased');
    },
    set: function set(onerased) {
      this.setAttribute('onerased', onerased);
    }
  }, {
    key: "onfloatingchange",
    get: function get() {
      return this.getAttribute('onfloatingchange');
    },
    set: function set(onfloatingchange) {
      this.setAttribute('onfloatingchange', onfloatingchange);
    }
  }, {
    key: "onfullscreen",
    get: function get() {
      return this.getAttribute('onfullscreen');
    },
    set: function set(onfullscreen) {
      this.setAttribute('onfullscreen', onfullscreen);
    }
  }, {
    key: "onhide",
    get: function get() {
      return this.getAttribute('onhide');
    },
    set: function set(onhide) {
      this.setAttribute('onhide', onhide);
    }
  }, {
    key: "oninitialize",
    get: function get() {
      return this.getAttribute('oninitialize');
    },
    set: function set(oninitialize) {
      this.setAttribute('oninitialize', oninitialize);
    }
  }, {
    key: "onleftchange",
    get: function get() {
      return this.getAttribute('onleftchange');
    },
    set: function set(onleftchange) {
      this.setAttribute('onleftchange', onleftchange);
    }
  }, {
    key: "onmaxHeightchange",
    get: function get() {
      return this.getAttribute('onmaxHeightchange');
    },
    set: function set(onmaxHeightchange) {
      this.setAttribute('onmaxHeightchange', onmaxHeightchange);
    }
  }, {
    key: "onmaxWidthchange",
    get: function get() {
      return this.getAttribute('onmaxWidthchange');
    },
    set: function set(onmaxWidthchange) {
      this.setAttribute('onmaxWidthchange', onmaxWidthchange);
    }
  }, {
    key: "onminHeightchange",
    get: function get() {
      return this.getAttribute('onminHeightchange');
    },
    set: function set(onminHeightchange) {
      this.setAttribute('onminHeightchange', onminHeightchange);
    }
  }, {
    key: "onminWidthchange",
    get: function get() {
      return this.getAttribute('onminWidthchange');
    },
    set: function set(onminWidthchange) {
      this.setAttribute('onminWidthchange', onminWidthchange);
    }
  }, {
    key: "onmoved",
    get: function get() {
      return this.getAttribute('onmoved');
    },
    set: function set(onmoved) {
      this.setAttribute('onmoved', onmoved);
    }
  }, {
    key: "onorientationchange",
    get: function get() {
      return this.getAttribute('onorientationchange');
    },
    set: function set(onorientationchange) {
      this.setAttribute('onorientationchange', onorientationchange);
    }
  }, {
    key: "onpainted",
    get: function get() {
      return this.getAttribute('onpainted');
    },
    set: function set(onpainted) {
      this.setAttribute('onpainted', onpainted);
    }
  }, {
    key: "onpositionedchange",
    get: function get() {
      return this.getAttribute('onpositionedchange');
    },
    set: function set(onpositionedchange) {
      this.setAttribute('onpositionedchange', onpositionedchange);
    }
  }, {
    key: "onremoved",
    get: function get() {
      return this.getAttribute('onremoved');
    },
    set: function set(onremoved) {
      this.setAttribute('onremoved', onremoved);
    }
  }, {
    key: "onresize",
    get: function get() {
      return this.getAttribute('onresize');
    },
    set: function set(onresize) {
      this.setAttribute('onresize', onresize);
    }
  }, {
    key: "onrightchange",
    get: function get() {
      return this.getAttribute('onrightchange');
    },
    set: function set(onrightchange) {
      this.setAttribute('onrightchange', onrightchange);
    }
  }, {
    key: "onscrollablechange",
    get: function get() {
      return this.getAttribute('onscrollablechange');
    },
    set: function set(onscrollablechange) {
      this.setAttribute('onscrollablechange', onscrollablechange);
    }
  }, {
    key: "onshow",
    get: function get() {
      return this.getAttribute('onshow');
    },
    set: function set(onshow) {
      this.setAttribute('onshow', onshow);
    }
  }, {
    key: "ontopchange",
    get: function get() {
      return this.getAttribute('ontopchange');
    },
    set: function set(ontopchange) {
      this.setAttribute('ontopchange', ontopchange);
    }
  }, {
    key: "onupdatedata",
    get: function get() {
      return this.getAttribute('onupdatedata');
    },
    set: function set(onupdatedata) {
      this.setAttribute('onupdatedata', onupdatedata);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget_Component.observedAttributes;

      for (var property in Ext_lib_Component_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_lib_Component_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_lib_Component_Component() {
    var _this;

    _this = _Ext_Widget_Component.call(this) || this;
    _this.XTYPE = Ext_lib_Component_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_lib_Component_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_lib_Component_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_lib_Component_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_lib_Component_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_lib_Component_Component;
}(Ext_Widget_Component);

export { Ext_lib_Component_Component as default };