import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_Component_Component from '../../../Ext/d3/Component';

var Ext_d3_canvas_Canvas_Component =
/*#__PURE__*/
function (_Ext_d3_Component_Com) {
  _inheritsLoose(Ext_d3_canvas_Canvas_Component, _Ext_d3_Component_Com);

  //configs
  Ext_d3_canvas_Canvas_Component.XTYPE = function XTYPE() {
    return 'd3-canvas';
  };

  Ext_d3_canvas_Canvas_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "hdpi": ["boolean"],
      "size": ["object"]
    };
  };

  Ext_d3_canvas_Canvas_Component.EVENTS = function EVENTS() {
    return [{
      name: 'sceneresize',
      parameters: 'component,canvas,size'
    }];
  };

  Ext_d3_canvas_Canvas_Component.METHODS = function METHODS() {
    return [{
      name: 'getCanvas',
      "function": function _function() {
        return this.ext.getCanvas();
      }
    }, {
      name: 'getSceneRect',
      "function": function _function() {
        return this.ext.getSceneRect();
      }
    }, {
      name: 'onSceneResize',
      "function": function _function(canvas, rect) {
        return this.ext.onSceneResize(canvas, rect);
      }
    }, {
      name: 'renderScene',
      "function": function _function(ctx) {
        return this.ext.renderScene(ctx);
      }
    }, {
      name: 'resizeHandler',
      "function": function _function(size) {
        return this.ext.resizeHandler(size);
      }
    }];
  };

  _createClass(Ext_d3_canvas_Canvas_Component, [{
    key: "onsceneresize",
    //events
    get: function get() {
      return this.getAttribute('onsceneresize');
    },
    set: function set(onsceneresize) {
      this.setAttribute('onsceneresize', onsceneresize);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_Component_Com.observedAttributes;

      for (var property in Ext_d3_canvas_Canvas_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_canvas_Canvas_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_canvas_Canvas_Component() {
    var _this;

    _this = _Ext_d3_Component_Com.call(this, Ext_d3_canvas_Canvas_Component.METHODS(), Ext_d3_canvas_Canvas_Component.XTYPE(), Ext_d3_canvas_Canvas_Component.PROPERTIESOBJECT(), Ext_d3_canvas_Canvas_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_canvas_Canvas_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_canvas_Canvas_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_canvas_Canvas_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_canvas_Canvas_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_canvas_Canvas_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_Component_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_Component_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_canvas_Canvas_Component;
}(Ext_d3_Component_Component);

export { Ext_d3_canvas_Canvas_Component as default };