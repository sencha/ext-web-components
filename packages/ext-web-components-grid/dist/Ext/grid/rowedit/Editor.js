import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ListItem_Component from '../../../Ext/dataview/ListItem';

var Ext_grid_rowedit_Editor_Component =
/*#__PURE__*/
function (_Ext_dataview_ListIte) {
  _inheritsLoose(Ext_grid_rowedit_Editor_Component, _Ext_dataview_ListIte);

  //events
  //configs
  Ext_grid_rowedit_Editor_Component.XTYPE = function XTYPE() {
    return 'roweditor';
  };

  Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_grid_rowedit_Editor_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_rowedit_Editor_Component.METHODS = function METHODS() {
    return [{
      name: 'cancel',
      "function": function _function() {
        return this.ext.cancel();
      }
    }, {
      name: 'getChanges',
      "function": function _function() {
        return this.ext.getChanges();
      }
    }, {
      name: 'getEditItem',
      "function": function _function(column) {
        return this.ext.getEditItem(column);
      }
    }, {
      name: 'getEditorValues',
      "function": function _function(all) {
        return this.ext.getEditorValues(all);
      }
    }, {
      name: 'isDirty',
      "function": function _function() {
        return this.ext.isDirty();
      }
    }, {
      name: 'isValid',
      "function": function _function() {
        return this.ext.isValid();
      }
    }, {
      name: 'resetChanges',
      "function": function _function() {
        return this.ext.resetChanges();
      }
    }, {
      name: 'revertChanges',
      "function": function _function() {
        return this.ext.revertChanges();
      }
    }, {
      name: 'saveAndClose',
      "function": function _function() {
        return this.ext.saveAndClose();
      }
    }, {
      name: 'setFieldValues',
      "function": function _function(values) {
        return this.ext.setFieldValues(values);
      }
    }];
  };

  _createClass(Ext_grid_rowedit_Editor_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_ListIte.observedAttributes;

      for (var property in Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_rowedit_Editor_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_rowedit_Editor_Component() {
    var _this;

    _this = _Ext_dataview_ListIte.call(this) || this;
    _this.XTYPE = Ext_grid_rowedit_Editor_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_rowedit_Editor_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_grid_rowedit_Editor_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_grid_rowedit_Editor_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_rowedit_Editor_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_ListIte.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_ListIte.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_rowedit_Editor_Component;
}(Ext_dataview_ListItem_Component);

export { Ext_grid_rowedit_Editor_Component as default };