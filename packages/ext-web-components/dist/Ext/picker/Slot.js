import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataView_Component from '../../Ext/dataview/DataView';

var Ext_picker_Slot_Component =
/*#__PURE__*/
function (_Ext_dataview_DataVie) {
  _inheritsLoose(Ext_picker_Slot_Component, _Ext_dataview_DataVie);

  //configs
  Ext_picker_Slot_Component.XTYPE = function XTYPE() {
    return 'pickerslot';
  };

  Ext_picker_Slot_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "align": ["string"],
      "cls": ["string"],
      "displayField": ["string"],
      "flex": ["number"],
      "itemTpl": ["string"],
      "name": ["string"],
      "scrollable": ["object"],
      "showTitle": ["boolean"],
      "title": ["string"],
      "triggerEvent": ["'tap'"],
      "value": ["number"],
      "valueField": ["string"],
      "verticallyCenterItems": ["boolean"]
    };
  };

  Ext_picker_Slot_Component.EVENTS = function EVENTS() {
    return [{
      name: 'slotpick',
      parameters: 'undefined,value,node'
    }];
  };

  Ext_picker_Slot_Component.METHODS = function METHODS() {
    return [{
      name: 'applyData',
      "function": function _function(data) {
        return this.ext.applyData(data);
      }
    }, {
      name: 'applyTitle',
      "function": function _function(title) {
        return this.ext.applyTitle(title);
      }
    }, {
      name: 'getPicker',
      "function": function _function() {
        return this.ext.getPicker();
      }
    }, {
      name: 'getScrollableClientRegion',
      "function": function _function() {
        return this.ext.getScrollableClientRegion();
      }
    }, {
      name: 'getValue',
      "function": function _function(useDom) {
        return this.ext.getValue(useDom);
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'navigateToItem',
      "function": function _function(item, animation) {
        return this.ext.navigateToItem(item, animation);
      }
    }, {
      name: 'onPainted',
      "function": function _function() {
        return this.ext.onPainted();
      }
    }, {
      name: 'onResize',
      "function": function _function() {
        return this.ext.onResize();
      }
    }, {
      name: 'onScrollEnd',
      "function": function _function(x, y) {
        return this.ext.onScrollEnd(x, y);
      }
    }, {
      name: 'setupBar',
      "function": function _function() {
        return this.ext.setupBar();
      }
    }, {
      name: 'updateAlign',
      "function": function _function(newAlign, oldAlign) {
        return this.ext.updateAlign(newAlign, oldAlign);
      }
    }];
  };

  _createClass(Ext_picker_Slot_Component, [{
    key: "onslotpick",
    //events
    get: function get() {
      return this.getAttribute('onslotpick');
    },
    set: function set(onslotpick) {
      this.setAttribute('onslotpick', onslotpick);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataVie.observedAttributes;

      for (var property in Ext_picker_Slot_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_picker_Slot_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_picker_Slot_Component(propertiesobject, methods, events) {
    return _Ext_dataview_DataVie.call(this, Object.assign(propertiesobject, Ext_picker_Slot_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_picker_Slot_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_picker_Slot_Component.METHODS()), events.concat(Ext_picker_Slot_Component.EVENTS())) || this; //this.XTYPE = Ext_picker_Slot_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_picker_Slot_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_picker_Slot_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_picker_Slot_Component.EVENTS());
  }

  var _proto = Ext_picker_Slot_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataVie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataVie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_picker_Slot_Component;
}(Ext_dataview_DataView_Component);

export { Ext_picker_Slot_Component as default };