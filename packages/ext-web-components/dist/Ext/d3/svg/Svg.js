import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_Component_Component from '../../../Ext/d3/Component';

var Ext_d3_svg_Svg_Component =
/*#__PURE__*/
function (_Ext_d3_Component_Com) {
  _inheritsLoose(Ext_d3_svg_Svg_Component, _Ext_d3_Component_Com);

  //configs
  Ext_d3_svg_Svg_Component.XTYPE = function XTYPE() {
    return 'd3-svg';
  };

  Ext_d3_svg_Svg_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "clipScene": ["boolean"],
      "padding": ["object", "string", "number"],
      "size": ["object"]
    };
  };

  Ext_d3_svg_Svg_Component.EVENTS = function EVENTS() {
    return [{
      name: 'sceneresize',
      parameters: 'component,scene,size'
    }, {
      name: 'scenesetup',
      parameters: 'component,scene'
    }];
  };

  Ext_d3_svg_Svg_Component.METHODS = function METHODS() {
    return [{
      name: 'alignContent',
      "function": function _function(options, transition) {
        return this.ext.alignContent(options, transition);
      }
    }, {
      name: 'clearScene',
      "function": function _function() {
        return this.ext.clearScene();
      }
    }, {
      name: 'getDefs',
      "function": function _function() {
        return this.ext.getDefs();
      }
    }, {
      name: 'getScene',
      "function": function _function() {
        return this.ext.getScene();
      }
    }, {
      name: 'resizeHandler',
      "function": function _function(size) {
        return this.ext.resizeHandler(size);
      }
    }];
  };

  _createClass(Ext_d3_svg_Svg_Component, [{
    key: "onsceneresize",
    //events
    get: function get() {
      return this.getAttribute('onsceneresize');
    },
    set: function set(onsceneresize) {
      this.setAttribute('onsceneresize', onsceneresize);
    }
  }, {
    key: "onscenesetup",
    get: function get() {
      return this.getAttribute('onscenesetup');
    },
    set: function set(onscenesetup) {
      this.setAttribute('onscenesetup', onscenesetup);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_Component_Com.observedAttributes;

      for (var property in Ext_d3_svg_Svg_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_svg_Svg_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_svg_Svg_Component() {
    var _this;

    _this = _Ext_d3_Component_Com.call(this, Ext_d3_svg_Svg_Component.METHODS(), Ext_d3_svg_Svg_Component.XTYPE(), Ext_d3_svg_Svg_Component.PROPERTIESOBJECT(), Ext_d3_svg_Svg_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_svg_Svg_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_svg_Svg_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_svg_Svg_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_svg_Svg_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_svg_Svg_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_Component_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_Component_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_svg_Svg_Component;
}(Ext_d3_Component_Component);

export { Ext_d3_svg_Svg_Component as default };