import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_carousel_Carousel_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_carousel_Carousel_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_carousel_Carousel_Component.XTYPE = function XTYPE() {
    return 'carousel';
  };

  Ext_carousel_Carousel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "direction": ["string"],
      "draggable": ["any"],
      "indicator": ["boolean", "Ext.carousel.Indicator"],
      "layout": ["any"],
      "ui": ["string"]
    };
  };

  Ext_carousel_Carousel_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_carousel_Carousel_Component.METHODS = function METHODS() {
    return [{
      name: 'applyActiveItem',
      "function": function _function(activeItem, oldActiveItem) {
        return this.ext.applyActiveItem(activeItem, oldActiveItem);
      }
    }, {
      name: 'applyIndicator',
      "function": function _function(indicator, currentIndicator) {
        return this.ext.applyIndicator(indicator, currentIndicator);
      }
    }, {
      name: 'getActiveIndex',
      "function": function _function() {
        return this.ext.getActiveIndex();
      }
    }, {
      name: 'getInnerItemAt',
      "function": function _function(index) {
        return this.ext.getInnerItemAt(index);
      }
    }, {
      name: 'getInnerItemIndex',
      "function": function _function(item) {
        return this.ext.getInnerItemIndex(item);
      }
    }, {
      name: 'getMaxItemIndex',
      "function": function _function() {
        return this.ext.getMaxItemIndex();
      }
    }, {
      name: 'next',
      "function": function _function() {
        return this.ext.next();
      }
    }, {
      name: 'previous',
      "function": function _function() {
        return this.ext.previous();
      }
    }, {
      name: 'setOffset',
      "function": function _function(offset) {
        return this.ext.setOffset(offset);
      }
    }, {
      name: 'setOffsetAnimated',
      "function": function _function(offset) {
        return this.ext.setOffsetAnimated(offset);
      }
    }, {
      name: 'updateIndicator',
      "function": function _function(indicator) {
        return this.ext.updateIndicator(indicator);
      }
    }];
  };

  _createClass(Ext_carousel_Carousel_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_carousel_Carousel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_carousel_Carousel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_carousel_Carousel_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this, Ext_carousel_Carousel_Component.METHODS(), Ext_carousel_Carousel_Component.XTYPE(), Ext_carousel_Carousel_Component.PROPERTIESOBJECT(), Ext_carousel_Carousel_Component.EVENTS()) || this;
    _this.XTYPE = Ext_carousel_Carousel_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_carousel_Carousel_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_carousel_Carousel_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_carousel_Carousel_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_carousel_Carousel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_carousel_Carousel_Component;
}(Ext_Container_Component);

export { Ext_carousel_Carousel_Component as default };