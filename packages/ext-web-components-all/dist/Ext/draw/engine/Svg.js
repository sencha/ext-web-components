import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Surface_Component from '../../../Ext/draw/Surface';

var Ext_draw_engine_Svg_Component =
/*#__PURE__*/
function (_Ext_draw_Surface_Com) {
  _inheritsLoose(Ext_draw_engine_Svg_Component, _Ext_draw_Surface_Com);

  //events
  //configs
  Ext_draw_engine_Svg_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_draw_engine_Svg_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "highPrecision": ["boolean"]
    };
  };

  Ext_draw_engine_Svg_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_draw_engine_Svg_Component.METHODS = function METHODS() {
    return [{
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
      name: 'createSvgNode',
      "function": function _function(type) {
        return this.ext.createSvgNode(type);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'getNextDef',
      "function": function _function(tagName) {
        return this.ext.getNextDef(tagName);
      }
    }, {
      name: 'getSvgElement',
      "function": function _function(group, tag, position) {
        return this.ext.getSvgElement(group, tag, position);
      }
    }, {
      name: 'renderSprite',
      "function": function _function(sprite) {
        return this.ext.renderSprite(sprite);
      }
    }, {
      name: 'serializeNode',
      "function": function _function(node) {
        return this.ext.serializeNode(node);
      }
    }, {
      name: 'setElementAttributes',
      "function": function _function(element, attributes) {
        return this.ext.setElementAttributes(element, attributes);
      }
    }, {
      name: 'toSVG',
      "function": function _function(size, surfaces) {
        return this.ext.toSVG(size, surfaces);
      }
    }];
  };

  _createClass(Ext_draw_engine_Svg_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_Surface_Com.observedAttributes;

      for (var property in Ext_draw_engine_Svg_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_draw_engine_Svg_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_engine_Svg_Component() {
    var _this;

    _this = _Ext_draw_Surface_Com.call(this) || this;
    _this.XTYPE = Ext_draw_engine_Svg_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_draw_engine_Svg_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_draw_engine_Svg_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_draw_engine_Svg_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_draw_engine_Svg_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_Surface_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_Surface_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_engine_Svg_Component;
}(Ext_draw_Surface_Component);

export { Ext_draw_engine_Svg_Component as default };