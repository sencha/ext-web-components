import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_SurfaceBase_Component from '../../Ext/draw/SurfaceBase';

var Ext_draw_Surface_Component =
/*#__PURE__*/
function (_Ext_draw_SurfaceBase) {
  _inheritsLoose(Ext_draw_Surface_Component, _Ext_draw_SurfaceBase);

  //events
  //configs
  Ext_draw_Surface_Component.XTYPE = function XTYPE() {
    return 'surface';
  };

  Ext_draw_Surface_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "background": ["object"],
      "dirty": ["boolean"],
      "flipRtlText": ["boolean"],
      "items": ["array"],
      "rect": ["array"]
    };
  };

  Ext_draw_Surface_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_draw_Surface_Component.METHODS = function METHODS() {
    return [{
      name: 'add',
      "function": function _function(sprite) {
        return this.ext.add(sprite);
      }
    }, {
      name: 'applyItems',
      "function": function _function(items) {
        return this.ext.applyItems(items);
      }
    }, {
      name: 'clear',
      "function": function _function() {
        return this.ext.clear();
      }
    }, {
      name: 'clearTransform',
      "function": function _function() {
        return this.ext.clearTransform();
      }
    }, {
      name: 'createItem',
      "function": function _function(config) {
        return this.ext.createItem(config);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'flatten',
      "function": function _function(size, surfaces) {
        return this.ext.flatten(size, surfaces);
      }
    }, {
      name: 'get',
      "function": function _function(id) {
        return this.ext.get(id);
      }
    }, {
      name: 'getBBox',
      "function": function _function(sprites, isWithoutTransform) {
        return this.ext.getBBox(sprites, isWithoutTransform);
      }
    }, {
      name: 'getEventXY',
      "function": function _function(e) {
        return this.ext.getEventXY(e);
      }
    }, {
      name: 'getOwnerBody',
      "function": function _function() {
        return this.ext.getOwnerBody();
      }
    }, {
      name: 'hitTest',
      "function": function _function(point, options) {
        return this.ext.hitTest(point, options);
      }
    }, {
      name: 'hitTestEvent',
      "function": function _function(event, options) {
        return this.ext.hitTestEvent(event, options);
      }
    }, {
      name: 'onAdd',
      "function": function _function(sprite) {
        return this.ext.onAdd(sprite);
      }
    }, {
      name: 'orderByZIndex',
      "function": function _function() {
        return this.ext.orderByZIndex();
      }
    }, {
      name: 'remove',
      "function": function _function(sprite, isDestroy) {
        return this.ext.remove(sprite, isDestroy);
      }
    }, {
      name: 'removeAll',
      "function": function _function(isDestroy) {
        return this.ext.removeAll(isDestroy);
      }
    }, {
      name: 'renderFrame',
      "function": function _function() {
        return this.ext.renderFrame();
      }
    }, {
      name: 'renderSprite',
      "function": function _function(sprite) {
        return this.ext.renderSprite(sprite);
      }
    }, {
      name: 'repaint',
      "function": function _function() {
        return this.ext.repaint();
      }
    }, {
      name: 'resetTransform',
      "function": function _function() {
        return this.ext.resetTransform();
      }
    }, {
      name: 'roundPixel',
      "function": function _function(num) {
        return this.ext.roundPixel(num);
      }
    }, {
      name: 'waitFor',
      "function": function _function(surface) {
        return this.ext.waitFor(surface);
      }
    }];
  };

  _createClass(Ext_draw_Surface_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_SurfaceBase.observedAttributes;

      for (var property in Ext_draw_Surface_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_draw_Surface_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_Surface_Component() {
    var _this;

    _this = _Ext_draw_SurfaceBase.call(this) || this;
    _this.XTYPE = Ext_draw_Surface_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_draw_Surface_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_draw_Surface_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_draw_Surface_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_draw_Surface_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_SurfaceBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_SurfaceBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_Surface_Component;
}(Ext_draw_SurfaceBase_Component);

export { Ext_draw_Surface_Component as default };