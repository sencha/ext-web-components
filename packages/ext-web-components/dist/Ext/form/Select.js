import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker_Component from '../../Ext/field/Picker';

var Ext_form_Select_Component =
/*#__PURE__*/
function (_Ext_field_Picker_Com) {
  _inheritsLoose(Ext_form_Select_Component, _Ext_field_Picker_Com);

  //configs
  Ext_form_Select_Component.XTYPE = function XTYPE() {
    return 'selectfield';
  };

  Ext_form_Select_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoFocus": ["boolean"],
      "autoFocusLast": ["boolean"],
      "autoLoadOnValue": ["boolean"],
      "autoSelect": ["boolean", "'initial'"],
      "chipView": ["any"],
      "collapseOnSelect": ["boolean"],
      "delimiter": ["string"],
      "displayField": ["string", "number"],
      "displayTpl": ["string", "string[]", "Ext.XTemplate"],
      "edgePicker": ["object"],
      "editable": ["boolean"],
      "floatedPicker": ["object"],
      "forceSelection": ["boolean"],
      "hiddenName": ["string"],
      "itemCls": ["string"],
      "itemTpl": ["string", "Ext.XTemplate"],
      "multiSelect": ["boolean"],
      "options": ["array"],
      "publishes": ["string", "string[]", "object"],
      "recordCreator": ["function", "string"],
      "recordCreatorScope": ["object"],
      "selection": ["Ext.data.Model"],
      "selectOnTab": ["boolean"],
      "store": ["Ext.data.Store", "object", "string"],
      "twoWayBindable": ["string", "string[]", "object"],
      "valueCollection": ["object", "Ext.util.Collection"],
      "valueField": ["string", "number"],
      "valueNotFoundText": ["string"]
    };
  };

  Ext_form_Select_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,newValue,oldValue'
    }, {
      name: 'focus',
      parameters: 'undefined,e'
    }, {
      name: 'select',
      parameters: 'undefined,newValue'
    }];
  };

  Ext_form_Select_Component.METHODS = function METHODS() {
    return [{
      name: 'createEnteredRecord',
      "function": function _function(value) {
        return this.ext.createEnteredRecord(value);
      }
    }, {
      name: 'createSelectionRecord',
      "function": function _function(data) {
        return this.ext.createSelectionRecord(data);
      }
    }, {
      name: 'filterPicked',
      "function": function _function(record) {
        return this.ext.filterPicked(record);
      }
    }, {
      name: 'findRecordByDisplay',
      "function": function _function(value) {
        return this.ext.findRecordByDisplay(value);
      }
    }, {
      name: 'findRecordByValue',
      "function": function _function(value) {
        return this.ext.findRecordByValue(value);
      }
    }, {
      name: 'getRecordDisplayData',
      "function": function _function(record) {
        return this.ext.getRecordDisplayData(record);
      }
    }, {
      name: 'maybeCollapse',
      "function": function _function(event) {
        return this.ext.maybeCollapse(event);
      }
    }, {
      name: 'onCollectionAdd',
      "function": function _function(valueCollection, adds) {
        return this.ext.onCollectionAdd(valueCollection, adds);
      }
    }, {
      name: 'onCollectionEndUpdate',
      "function": function _function() {
        return this.ext.onCollectionEndUpdate();
      }
    }, {
      name: 'onCollectionRemove',
      "function": function _function(valueCollection, chunk) {
        return this.ext.onCollectionRemove(valueCollection, chunk);
      }
    }, {
      name: 'onStoreDataChanged',
      "function": function _function() {
        return this.ext.onStoreDataChanged();
      }
    }, {
      name: 'onStoreLoad',
      "function": function _function(store, records, success) {
        return this.ext.onStoreLoad(store, records, success);
      }
    }, {
      name: 'onStoreRecordUpdated',
      "function": function _function(store, record) {
        return this.ext.onStoreRecordUpdated(store, record);
      }
    }, {
      name: 'onStoreRefresh',
      "function": function _function(store) {
        return this.ext.onStoreRefresh(store);
      }
    }, {
      name: 'reset',
      "function": function _function() {
        return this.ext.reset();
      }
    }, {
      name: 'setFieldDisplay',
      "function": function _function() {
        return this.ext.setFieldDisplay();
      }
    }, {
      name: 'updatePickerStore',
      "function": function _function() {
        return this.ext.updatePickerStore();
      }
    }, {
      name: 'updateSelection',
      "function": function _function(selection, oldSelection) {
        return this.ext.updateSelection(selection, oldSelection);
      }
    }];
  };

  _createClass(Ext_form_Select_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "onfocus",
    get: function get() {
      return this.getAttribute('onfocus');
    },
    set: function set(onfocus) {
      this.setAttribute('onfocus', onfocus);
    }
  }, {
    key: "onselect",
    get: function get() {
      return this.getAttribute('onselect');
    },
    set: function set(onselect) {
      this.setAttribute('onselect', onselect);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Picker_Com.observedAttributes;

      for (var property in Ext_form_Select_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_Select_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Select_Component(propertiesobject, methods, events) {
    return _Ext_field_Picker_Com.call(this, Object.assign(propertiesobject, Ext_form_Select_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_form_Select_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_form_Select_Component.METHODS()), events.concat(Ext_form_Select_Component.EVENTS())) || this; //this.XTYPE = Ext_form_Select_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Select_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_form_Select_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_form_Select_Component.EVENTS());
  }

  var _proto = Ext_form_Select_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Picker_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Picker_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Select_Component;
}(Ext_field_Picker_Component);

export { Ext_form_Select_Component as default };