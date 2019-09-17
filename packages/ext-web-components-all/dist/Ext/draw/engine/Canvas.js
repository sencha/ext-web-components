import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Surface_Component from '../../../Ext/draw/Surface';

var Ext_draw_engine_Canvas_Component =
/*#__PURE__*/
function (_Ext_draw_Surface_Com) {
  _inheritsLoose(Ext_draw_engine_Canvas_Component, _Ext_draw_Surface_Com);

  //events
  //configs
  Ext_draw_engine_Canvas_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_draw_engine_Canvas_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "highPrecision": ["boolean"],
      "precisionOverrides": ["object"]
    };
  };

  Ext_draw_engine_Canvas_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_draw_engine_Canvas_Component.METHODS = function METHODS() {
    return [{
      name: 'appendPath',
      "function": function _function(path) {
        return this.ext.appendPath(path);
      }
    }, {
      name: 'arc',
      "function": function _function(x, y, radius, startAngle, endAngle, anticlockwise) {
        return this.ext.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      }
    }, {
      name: 'arcTo',
      "function": function _function(x1, y1, x2, y2, radius) {
        return this.ext.arcTo(x1, y1, x2, y2, radius);
      }
    }, {
      name: 'bezierCurveTo',
      "function": function _function(c1x, c1y, c2x, c2y, x, y) {
        return this.ext.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
      }
    }, {
      name: 'clear',
      "function": function _function() {
        return this.ext.clear();
      }
    }, {
      name: 'clearRect',
      "function": function _function(x, y, w, h) {
        return this.ext.clearRect(x, y, w, h);
      }
    }, {
      name: 'clearTransform',
      "function": function _function() {
        return this.ext.clearTransform();
      }
    }, {
      name: 'createCanvas',
      "function": function _function() {
        return this.ext.createCanvas();
      }
    }, {
      name: 'createLinearGradient',
      "function": function _function(x0, y0, x1, y1) {
        return this.ext.createLinearGradient(x0, y0, x1, y1);
      }
    }, {
      name: 'createRadialGradient',
      "function": function _function(x0, y0, r0, x1, y1, r1) {
        return this.ext.createRadialGradient(x0, y0, r0, x1, y1, r1);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'disablePrecisionCompensation',
      "function": function _function(ctx) {
        return this.ext.disablePrecisionCompensation(ctx);
      }
    }, {
      name: 'drawImage',
      "function": function _function(img_elem, arg1, arg2, arg3, arg4, dst_x, dst_y, dw, dh) {
        return this.ext.drawImage(img_elem, arg1, arg2, arg3, arg4, dst_x, dst_y, dw, dh);
      }
    }, {
      name: 'ellipse',
      "function": function _function(cx, cy, rx, ry, rotation, start, end, anticlockwise) {
        return this.ext.ellipse(cx, cy, rx, ry, rotation, start, end, anticlockwise);
      }
    }, {
      name: 'enablePrecisionCompensation',
      "function": function _function(ctx) {
        return this.ext.enablePrecisionCompensation(ctx);
      }
    }, {
      name: 'fill',
      "function": function _function() {
        return this.ext.fill();
      }
    }, {
      name: 'fill',
      "function": function _function() {
        return this.ext.fill();
      }
    }, {
      name: 'fillRect',
      "function": function _function(x, y, w, h) {
        return this.ext.fillRect(x, y, w, h);
      }
    }, {
      name: 'fillStroke',
      "function": function _function(attr, transformFillStroke) {
        return this.ext.fillStroke(attr, transformFillStroke);
      }
    }, {
      name: 'fillText',
      "function": function _function(text, x, y, maxWidth) {
        return this.ext.fillText(text, x, y, maxWidth);
      }
    }, {
      name: 'lineTo',
      "function": function _function(x, y) {
        return this.ext.lineTo(x, y);
      }
    }, {
      name: 'moveTo',
      "function": function _function(x, y) {
        return this.ext.moveTo(x, y);
      }
    }, {
      name: 'quadraticCurveTo',
      "function": function _function(cx, cy, x, y) {
        return this.ext.quadraticCurveTo(cx, cy, x, y);
      }
    }, {
      name: 'rect',
      "function": function _function(x, y, w, h) {
        return this.ext.rect(x, y, w, h);
      }
    }, {
      name: 'renderSprite',
      "function": function _function(sprite) {
        return this.ext.renderSprite(sprite);
      }
    }, {
      name: 'restore',
      "function": function _function() {
        return this.ext.restore();
      }
    }, {
      name: 'rotate',
      "function": function _function(radians) {
        return this.ext.rotate(radians);
      }
    }, {
      name: 'save',
      "function": function _function() {
        return this.ext.save();
      }
    }, {
      name: 'scale',
      "function": function _function(sx, sy) {
        return this.ext.scale(sx, sy);
      }
    }, {
      name: 'setGradientBBox',
      "function": function _function(bbox) {
        return this.ext.setGradientBBox(bbox);
      }
    }, {
      name: 'setLineDash',
      "function": function _function(dashList) {
        return this.ext.setLineDash(dashList);
      }
    }, {
      name: 'setTransform',
      "function": function _function(x2x, x2y, y2x, y2y, newDx, newDy) {
        return this.ext.setTransform(x2x, x2y, y2x, y2y, newDx, newDy);
      }
    }, {
      name: 'stroke',
      "function": function _function() {
        return this.ext.stroke();
      }
    }, {
      name: 'stroke',
      "function": function _function() {
        return this.ext.stroke();
      }
    }, {
      name: 'strokeRect',
      "function": function _function(x, y, w, h) {
        return this.ext.strokeRect(x, y, w, h);
      }
    }, {
      name: 'strokeText',
      "function": function _function(text, x, y, maxWidth) {
        return this.ext.strokeText(text, x, y, maxWidth);
      }
    }, {
      name: 'transform',
      "function": function _function(x2x, x2y, y2x, y2y, newDx, newDy) {
        return this.ext.transform(x2x, x2y, y2x, y2y, newDx, newDy);
      }
    }, {
      name: 'translate',
      "function": function _function(dx, dy) {
        return this.ext.translate(dx, dy);
      }
    }, {
      name: 'updatePrecisionCompensate',
      "function": function _function() {
        return this.ext.updatePrecisionCompensate();
      }
    }, {
      name: 'updatePrecisionCompensateRect',
      "function": function _function() {
        return this.ext.updatePrecisionCompensateRect();
      }
    }, {
      name: 'updateRect',
      "function": function _function(rect) {
        return this.ext.updateRect(rect);
      }
    }];
  };

  _createClass(Ext_draw_engine_Canvas_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_Surface_Com.observedAttributes;

      for (var property in Ext_draw_engine_Canvas_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_draw_engine_Canvas_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_engine_Canvas_Component() {
    var _this;

    _this = _Ext_draw_Surface_Com.call(this) || this;
    _this.XTYPE = Ext_draw_engine_Canvas_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_draw_engine_Canvas_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_draw_engine_Canvas_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_draw_engine_Canvas_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_draw_engine_Canvas_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_Surface_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_Surface_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_engine_Canvas_Component;
}(Ext_draw_Surface_Component);

export { Ext_draw_engine_Canvas_Component as default };