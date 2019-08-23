import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Picker_Component from '../../Ext/picker/Picker';

var Ext_picker_Date_Component =
/*#__PURE__*/
function (_Ext_picker_Picker_Co) {
  _inheritsLoose(Ext_picker_Date_Component, _Ext_picker_Picker_Co);

  //configs
  Ext_picker_Date_Component.XTYPE = function XTYPE() {
    return 'datepicker';
  };

  Ext_picker_Date_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "dayText": ["string"],
      "doneButton": ["string", "mixed"],
      "monthText": ["string"],
      "slotOrder": ["array"],
      "slots": ["array"],
      "value": ["object", "date"],
      "yearFrom": ["number"],
      "yearText": ["string"],
      "yearTo": ["number"]
    };
  };

  Ext_picker_Date_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,value'
    }];
  };

  Ext_picker_Date_Component.METHODS = function METHODS() {
    return [{
      name: 'constructor',
      "function": function _function() {
        return this.ext.constructor();
      }
    }, {
      name: 'createSlot',
      "function": function _function(name, days, months, years) {
        return this.ext.createSlot(name, days, months, years);
      }
    }, {
      name: 'createSlots',
      "function": function _function() {
        return this.ext.createSlots();
      }
    }, {
      name: 'getDaysInMonth',
      "function": function _function(month, year) {
        return this.ext.getDaysInMonth(month, year);
      }
    }, {
      name: 'isLeapYear',
      "function": function _function(year) {
        return this.ext.isLeapYear(year);
      }
    }, {
      name: 'updateDayText',
      "function": function _function(newDayText, oldDayText) {
        return this.ext.updateDayText(newDayText, oldDayText);
      }
    }, {
      name: 'updateMonthText',
      "function": function _function(newMonthText, oldMonthText) {
        return this.ext.updateMonthText(newMonthText, oldMonthText);
      }
    }, {
      name: 'updateYearFrom',
      "function": function _function() {
        return this.ext.updateYearFrom();
      }
    }, {
      name: 'updateYearText',
      "function": function _function(yearText) {
        return this.ext.updateYearText(yearText);
      }
    }, {
      name: 'updateYearTo',
      "function": function _function() {
        return this.ext.updateYearTo();
      }
    }];
  };

  _createClass(Ext_picker_Date_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_picker_Picker_Co.observedAttributes;

      for (var property in Ext_picker_Date_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_picker_Date_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_picker_Date_Component() {
    var _this;

    _this = _Ext_picker_Picker_Co.call(this, Ext_picker_Date_Component.METHODS(), Ext_picker_Date_Component.XTYPE(), Ext_picker_Date_Component.PROPERTIESOBJECT(), Ext_picker_Date_Component.EVENTS()) || this;
    _this.XTYPE = Ext_picker_Date_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_picker_Date_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_picker_Date_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_picker_Date_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_picker_Date_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_picker_Picker_Co.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_picker_Picker_Co.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_picker_Date_Component;
}(Ext_picker_Picker_Component);

export { Ext_picker_Date_Component as default };