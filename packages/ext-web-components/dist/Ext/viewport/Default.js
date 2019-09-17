import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_viewport_Default_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_viewport_Default_Component, _Ext_Container_Compon);

  //configs
  Ext_viewport_Default_Component.XTYPE = function XTYPE() {
    return 'viewport';
  };

  Ext_viewport_Default_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoBlurInput": ["any"],
      "autoMaximize": ["any"],
      "autoRender": ["any"],
      "height": ["any"],
      "layout": ["object", "string"],
      "menus": ["any"],
      "orientation": ["any"],
      "preventZooming": ["boolean"],
      "swipeThreshold": ["number"],
      "width": ["any"]
    };
  };

  Ext_viewport_Default_Component.EVENTS = function EVENTS() {
    return [{
      name: 'maximize',
      parameters: 'undefined'
    }, {
      name: 'orientationchange',
      parameters: 'undefined,newOrientation,width,height'
    }, {
      name: 'ready',
      parameters: 'undefined'
    }];
  };

  Ext_viewport_Default_Component.METHODS = function METHODS() {
    return [{
      name: 'beforeMenuAnimate',
      "function": function _function(menu) {
        return this.ext.beforeMenuAnimate(menu);
      }
    }, {
      name: 'getWindowHeight',
      "function": function _function() {
        return this.ext.getWindowHeight();
      }
    }, {
      name: 'getWindowWidth',
      "function": function _function() {
        return this.ext.getWindowWidth();
      }
    }, {
      name: 'hideAllMenus',
      "function": function _function(animation) {
        return this.ext.hideAllMenus(animation);
      }
    }, {
      name: 'hideMenu',
      "function": function _function(side, animation) {
        return this.ext.hideMenu(side, animation);
      }
    }, {
      name: 'hideOtherMenus',
      "function": function _function(side, animate) {
        return this.ext.hideOtherMenus(side, animate);
      }
    }, {
      name: 'isScalable',
      "function": function _function() {
        return this.ext.isScalable();
      }
    }, {
      name: 'onEdgeSwipe',
      "function": function _function(e) {
        return this.ext.onEdgeSwipe(e);
      }
    }, {
      name: 'onEdgeSwipeEnd',
      "function": function _function(e) {
        return this.ext.onEdgeSwipeEnd(e);
      }
    }, {
      name: 'onEdgeSwipeStart',
      "function": function _function(e) {
        return this.ext.onEdgeSwipeStart(e);
      }
    }, {
      name: 'onSwipeStart',
      "function": function _function(e) {
        return this.ext.onSwipeStart(e);
      }
    }, {
      name: 'onTap',
      "function": function _function(e) {
        return this.ext.onTap(e);
      }
    }, {
      name: 'removeMenu',
      "function": function _function(side, animation) {
        return this.ext.removeMenu(side, animation);
      }
    }, {
      name: 'setMenu',
      "function": function _function(menu, config) {
        return this.ext.setMenu(menu, config);
      }
    }, {
      name: 'showMenu',
      "function": function _function(side, animation) {
        return this.ext.showMenu(side, animation);
      }
    }, {
      name: 'sideForDirection',
      "function": function _function(direction) {
        return this.ext.sideForDirection(direction);
      }
    }, {
      name: 'sideForSwipeDirection',
      "function": function _function(direction) {
        return this.ext.sideForSwipeDirection(direction);
      }
    }, {
      name: 'toggleMenu',
      "function": function _function(side) {
        return this.ext.toggleMenu(side);
      }
    }];
  };

  _createClass(Ext_viewport_Default_Component, [{
    key: "onmaximize",
    //events
    get: function get() {
      return this.getAttribute('onmaximize');
    },
    set: function set(onmaximize) {
      this.setAttribute('onmaximize', onmaximize);
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
    key: "onready",
    get: function get() {
      return this.getAttribute('onready');
    },
    set: function set(onready) {
      this.setAttribute('onready', onready);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_viewport_Default_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_viewport_Default_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_viewport_Default_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_viewport_Default_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_viewport_Default_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_viewport_Default_Component.METHODS()), events.concat(Ext_viewport_Default_Component.EVENTS())) || this; //this.XTYPE = Ext_viewport_Default_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_viewport_Default_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_viewport_Default_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_viewport_Default_Component.EVENTS());
  }

  var _proto = Ext_viewport_Default_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_viewport_Default_Component;
}(Ext_Container_Component);

export { Ext_viewport_Default_Component as default };