import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TitleBar_Component from '../../Ext/TitleBar';

var Ext_navigation_Bar_Component =
/*#__PURE__*/
function (_Ext_TitleBar_Compone) {
  _inheritsLoose(Ext_navigation_Bar_Component, _Ext_TitleBar_Compone);

  //configs
  Ext_navigation_Bar_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_navigation_Bar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "android2Transforms": ["boolean"],
      "animation": ["object"],
      "backButton": ["Ext.Button", "object"],
      "cls": ["string", "string[]"],
      "defaultBackButtonText": ["string"],
      "defaultType": ["any"],
      "items": ["array", "object"],
      "layout": ["any"],
      "title": ["string"],
      "ui": ["string"],
      "useTitleForBackButtonText": ["boolean"],
      "view": ["Ext.navigation.View"]
    };
  };

  Ext_navigation_Bar_Component.EVENTS = function EVENTS() {
    return [{
      name: 'back',
      parameters: 'undefined'
    }];
  };

  Ext_navigation_Bar_Component.METHODS = function METHODS() {
    return [{
      name: 'animate',
      "function": function _function(element, config, callback) {
        return this.ext.animate(element, config, callback);
      }
    }, {
      name: 'applyBackButton',
      "function": function _function(config) {
        return this.ext.applyBackButton(config);
      }
    }, {
      name: 'beforePop',
      "function": function _function(count) {
        return this.ext.beforePop(count);
      }
    }, {
      name: 'createProxy',
      "function": function _function(element) {
        return this.ext.createProxy(element);
      }
    }, {
      name: 'doChangeView',
      "function": function _function(view, hasPrevious, reverse) {
        return this.ext.doChangeView(view, hasPrevious, reverse);
      }
    }, {
      name: 'getBackButtonText',
      "function": function _function() {
        return this.ext.getBackButtonText();
      }
    }, {
      name: 'getTitleText',
      "function": function _function() {
        return this.ext.getTitleText();
      }
    }, {
      name: 'measureView',
      "function": function _function(oldLeft, oldTitle, reverse) {
        return this.ext.measureView(oldLeft, oldTitle, reverse);
      }
    }, {
      name: 'onViewAdd',
      "function": function _function(view, item) {
        return this.ext.onViewAdd(view, item);
      }
    }, {
      name: 'onViewRemove',
      "function": function _function(view) {
        return this.ext.onViewRemove(view);
      }
    }, {
      name: 'updateBackButton',
      "function": function _function(newBackButton, oldBackButton) {
        return this.ext.updateBackButton(newBackButton, oldBackButton);
      }
    }, {
      name: 'updateHidden',
      "function": function _function(hidden) {
        return this.ext.updateHidden(hidden);
      }
    }, {
      name: 'updateView',
      "function": function _function(newView) {
        return this.ext.updateView(newView);
      }
    }];
  };

  _createClass(Ext_navigation_Bar_Component, [{
    key: "onback",
    //events
    get: function get() {
      return this.getAttribute('onback');
    },
    set: function set(onback) {
      this.setAttribute('onback', onback);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_TitleBar_Compone.observedAttributes;

      for (var property in Ext_navigation_Bar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_navigation_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_navigation_Bar_Component() {
    var _this;

    _this = _Ext_TitleBar_Compone.call(this, Ext_navigation_Bar_Component.METHODS(), Ext_navigation_Bar_Component.XTYPE(), Ext_navigation_Bar_Component.PROPERTIESOBJECT(), Ext_navigation_Bar_Component.EVENTS()) || this;
    _this.XTYPE = Ext_navigation_Bar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_navigation_Bar_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_navigation_Bar_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_navigation_Bar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_navigation_Bar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_TitleBar_Compone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_TitleBar_Compone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_navigation_Bar_Component;
}(Ext_TitleBar_Component);

export { Ext_navigation_Bar_Component as default };