import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_HeaderContainer_Component from '../../../Ext/grid/HeaderContainer';

var Ext_grid_column_Column_Component =
/*#__PURE__*/
function (_Ext_grid_HeaderConta) {
  _inheritsLoose(Ext_grid_column_Column_Component, _Ext_grid_HeaderConta);

  //events
  //configs
  Ext_grid_column_Column_Component.XTYPE = function XTYPE() {
    return 'gridcolumn';
  };

  Ext_grid_column_Column_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "align": ["string"],
      "cell": ["object"],
      "computedWidth": ["number"],
      "dataIndex": ["string"],
      "defaultEditor": ["object", "Ext.field.Field"],
      "defaultWidth": ["number"],
      "depends": ["string[]"],
      "editable": ["boolean"],
      "editor": ["object", "string"],
      "editorDefaults": ["object"],
      "exportRenderer": ["boolean", "function", "string"],
      "exportStyle": ["Ext.exporter.file.Style", "Ext.exporter.file.Style[]"],
      "exportSummaryRenderer": ["boolean", "function", "string"],
      "filter": ["object", "boolean"],
      "formatter": ["string"],
      "groupable": ["boolean"],
      "grouper": ["function", "string", "object", "Ext.util.Grouper"],
      "groupHeaderTpl": ["string", "string[]", "Ext.XTemplate"],
      "hideable": ["boolean"],
      "hideShowMenuItem": ["Ext.menu.CheckItem", "object"],
      "ignore": ["boolean"],
      "ignoreExport": ["boolean"],
      "locked": ["boolean", "string"],
      "menu": ["Ext.menu.Menu", "object"],
      "menuDisabled": ["boolean"],
      "renderer": ["function", "string"],
      "resizable": ["boolean"],
      "scope": ["object"],
      "scratchCell": ["Ext.grid.cell.Cell", "object"],
      "sortable": ["boolean"],
      "sorter": ["function", "string", "object", "Ext.util.Sorter"],
      "summary": ["string"],
      "summaryCell": ["object"],
      "summaryDataIndex": ["string"],
      "summaryFormatter": ["string"],
      "summaryRenderer": ["function", "string"],
      "text": ["string"],
      "tpl": ["string", "string[]", "Ext.XTemplate"]
    };
  };

  Ext_grid_column_Column_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_column_Column_Component.METHODS = function METHODS() {
    return [{
      name: 'autoSize',
      "function": function _function() {
        return this.ext.autoSize();
      }
    }, {
      name: 'ensureEditor',
      "function": function _function() {
        return this.ext.ensureEditor();
      }
    }, {
      name: 'getSortParam',
      "function": function _function() {
        return this.ext.getSortParam();
      }
    }, {
      name: 'getVisibleIndex',
      "function": function _function() {
        return this.ext.getVisibleIndex();
      }
    }, {
      name: 'isHideable',
      "function": function _function() {
        return this.ext.isHideable();
      }
    }, {
      name: 'onColumnMenuGroupChange',
      "function": function _function(menu, groupName, value) {
        return this.ext.onColumnMenuGroupChange(menu, groupName, value);
      }
    }, {
      name: 'setSortState',
      "function": function _function(sorter) {
        return this.ext.setSortState(sorter);
      }
    }, {
      name: 'sort',
      "function": function _function(direction, mode) {
        return this.ext.sort(direction, mode);
      }
    }, {
      name: 'toggleSortState',
      "function": function _function() {
        return this.ext.toggleSortState();
      }
    }];
  };

  _createClass(Ext_grid_column_Column_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_HeaderConta.observedAttributes;

      for (var property in Ext_grid_column_Column_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_column_Column_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_column_Column_Component(propertiesobject, methods, events) {
    return _Ext_grid_HeaderConta.call(this, Object.assign(propertiesobject, Ext_grid_column_Column_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_column_Column_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_column_Column_Component.METHODS()), events.concat(Ext_grid_column_Column_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_column_Column_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Column_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_column_Column_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_column_Column_Component.EVENTS());
  }

  var _proto = Ext_grid_column_Column_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_HeaderConta.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_HeaderConta.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_column_Column_Component;
}(Ext_grid_HeaderContainer_Component);

export { Ext_grid_column_Column_Component as default };