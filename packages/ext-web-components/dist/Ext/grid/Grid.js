import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_List_Component from '../../Ext/dataview/List';

var Ext_grid_Grid_Component =
/*#__PURE__*/
function (_Ext_dataview_List_Co) {
  _inheritsLoose(Ext_grid_Grid_Component, _Ext_dataview_List_Co);

  //configs
  Ext_grid_Grid_Component.XTYPE = function XTYPE() {
    return 'grid';
  };

  Ext_grid_Grid_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "columnLines": ["boolean"],
      "columnMenu": ["object"],
      "columnResize": ["boolean"],
      "columns": ["Ext.grid.column.Column[]"],
      "columnsMenuItem": ["Ext.grid.menu.Columns"],
      "enableColumnMove": ["boolean"],
      "groupHeader": ["object", "Ext.dataview.ItemHeader"],
      "hideHeaders": ["boolean"],
      "hideScrollbar": ["boolean"],
      "infinite": ["boolean"],
      "itemConfig": ["object", "Ext.grid.Row"],
      "itemsFocusable": ["any"],
      "multiColumnSort": ["boolean"],
      "pinnedHeader": ["object"],
      "reserveScrollbar": ["boolean"],
      "rowNumbers": ["boolean", "object"],
      "scrollable": ["boolean", "string", "object"],
      "scrollToTopOnRefresh": ["boolean"],
      "selectable": ["Ext.grid.selection.Model"],
      "sortable": ["boolean"],
      "striped": ["boolean"],
      "title": ["string"],
      "titleBar": ["object"]
    };
  };

  Ext_grid_Grid_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforecomplete',
      parameters: 'editor,value,startValue,The'
    }, {
      name: 'beforeedit',
      parameters: 'sender,location'
    }, {
      name: 'beforeselectionextend',
      parameters: 'grid,An,extension'
    }, {
      name: 'beforestartedit',
      parameters: 'editor,boundEl,value,The'
    }, {
      name: 'canceledit',
      parameters: 'editor,value,startValue'
    }, {
      name: 'canceledit',
      parameters: 'sender,location'
    }, {
      name: 'cellselection',
      parameters: 'grid,selection'
    }, {
      name: 'columnadd',
      parameters: 'undefined,column,index'
    }, {
      name: 'columnhide',
      parameters: 'undefined,column'
    }, {
      name: 'columnmenucreated',
      parameters: 'grid,column,menu'
    }, {
      name: 'columnmove',
      parameters: 'undefined,column,fromIndex,toIndex'
    }, {
      name: 'columnremove',
      parameters: 'undefined,column'
    }, {
      name: 'columnresize',
      parameters: 'undefined,column,width'
    }, {
      name: 'columnselection',
      parameters: 'grid,selection'
    }, {
      name: 'columnshow',
      parameters: 'undefined,column'
    }, {
      name: 'columnsort',
      parameters: 'undefined,column,direction'
    }, {
      name: 'complete',
      parameters: 'editor,value,startValue,The'
    }, {
      name: 'edit',
      parameters: 'sender,location'
    }, {
      name: 'selectionextenderdrag',
      parameters: 'grid,An,extension'
    }, {
      name: 'specialkey',
      parameters: 'editor,field,event'
    }, {
      name: 'startedit',
      parameters: 'editor,boundEl,value,The'
    }, {
      name: 'validateedit',
      parameters: 'sender,location'
    }];
  };

  Ext_grid_Grid_Component.METHODS = function METHODS() {
    return [{
      name: 'generateSelectorFunctions',
      "function": function _function() {
        return this.ext.generateSelectorFunctions();
      }
    }, {
      name: 'getColumns',
      "function": function _function(selector) {
        return this.ext.getColumns(selector);
      }
    }, {
      name: 'getSelection',
      "function": function _function() {
        return this.ext.getSelection();
      }
    }, {
      name: 'mapToCell',
      "function": function _function(value, column) {
        return this.ext.mapToCell(value, column);
      }
    }, {
      name: 'mapToRowBody',
      "function": function _function(value) {
        return this.ext.mapToRowBody(value);
      }
    }, {
      name: 'registerActionable',
      "function": function _function(actionable) {
        return this.ext.registerActionable(actionable);
      }
    }, {
      name: 'unregisterActionable',
      "function": function _function(actionable) {
        return this.ext.unregisterActionable(actionable);
      }
    }];
  };

  _createClass(Ext_grid_Grid_Component, [{
    key: "onbeforecomplete",
    //events
    get: function get() {
      return this.getAttribute('onbeforecomplete');
    },
    set: function set(onbeforecomplete) {
      this.setAttribute('onbeforecomplete', onbeforecomplete);
    }
  }, {
    key: "onbeforeedit",
    get: function get() {
      return this.getAttribute('onbeforeedit');
    },
    set: function set(onbeforeedit) {
      this.setAttribute('onbeforeedit', onbeforeedit);
    }
  }, {
    key: "onbeforeselectionextend",
    get: function get() {
      return this.getAttribute('onbeforeselectionextend');
    },
    set: function set(onbeforeselectionextend) {
      this.setAttribute('onbeforeselectionextend', onbeforeselectionextend);
    }
  }, {
    key: "onbeforestartedit",
    get: function get() {
      return this.getAttribute('onbeforestartedit');
    },
    set: function set(onbeforestartedit) {
      this.setAttribute('onbeforestartedit', onbeforestartedit);
    }
  }, {
    key: "oncanceledit",
    get: function get() {
      return this.getAttribute('oncanceledit');
    },
    set: function set(oncanceledit) {
      this.setAttribute('oncanceledit', oncanceledit);
    }
  }, {
    key: "oncellselection",
    get: function get() {
      return this.getAttribute('oncellselection');
    },
    set: function set(oncellselection) {
      this.setAttribute('oncellselection', oncellselection);
    }
  }, {
    key: "oncolumnadd",
    get: function get() {
      return this.getAttribute('oncolumnadd');
    },
    set: function set(oncolumnadd) {
      this.setAttribute('oncolumnadd', oncolumnadd);
    }
  }, {
    key: "oncolumnhide",
    get: function get() {
      return this.getAttribute('oncolumnhide');
    },
    set: function set(oncolumnhide) {
      this.setAttribute('oncolumnhide', oncolumnhide);
    }
  }, {
    key: "oncolumnmenucreated",
    get: function get() {
      return this.getAttribute('oncolumnmenucreated');
    },
    set: function set(oncolumnmenucreated) {
      this.setAttribute('oncolumnmenucreated', oncolumnmenucreated);
    }
  }, {
    key: "oncolumnmove",
    get: function get() {
      return this.getAttribute('oncolumnmove');
    },
    set: function set(oncolumnmove) {
      this.setAttribute('oncolumnmove', oncolumnmove);
    }
  }, {
    key: "oncolumnremove",
    get: function get() {
      return this.getAttribute('oncolumnremove');
    },
    set: function set(oncolumnremove) {
      this.setAttribute('oncolumnremove', oncolumnremove);
    }
  }, {
    key: "oncolumnresize",
    get: function get() {
      return this.getAttribute('oncolumnresize');
    },
    set: function set(oncolumnresize) {
      this.setAttribute('oncolumnresize', oncolumnresize);
    }
  }, {
    key: "oncolumnselection",
    get: function get() {
      return this.getAttribute('oncolumnselection');
    },
    set: function set(oncolumnselection) {
      this.setAttribute('oncolumnselection', oncolumnselection);
    }
  }, {
    key: "oncolumnshow",
    get: function get() {
      return this.getAttribute('oncolumnshow');
    },
    set: function set(oncolumnshow) {
      this.setAttribute('oncolumnshow', oncolumnshow);
    }
  }, {
    key: "oncolumnsort",
    get: function get() {
      return this.getAttribute('oncolumnsort');
    },
    set: function set(oncolumnsort) {
      this.setAttribute('oncolumnsort', oncolumnsort);
    }
  }, {
    key: "oncomplete",
    get: function get() {
      return this.getAttribute('oncomplete');
    },
    set: function set(oncomplete) {
      this.setAttribute('oncomplete', oncomplete);
    }
  }, {
    key: "onedit",
    get: function get() {
      return this.getAttribute('onedit');
    },
    set: function set(onedit) {
      this.setAttribute('onedit', onedit);
    }
  }, {
    key: "onselectionextenderdrag",
    get: function get() {
      return this.getAttribute('onselectionextenderdrag');
    },
    set: function set(onselectionextenderdrag) {
      this.setAttribute('onselectionextenderdrag', onselectionextenderdrag);
    }
  }, {
    key: "onspecialkey",
    get: function get() {
      return this.getAttribute('onspecialkey');
    },
    set: function set(onspecialkey) {
      this.setAttribute('onspecialkey', onspecialkey);
    }
  }, {
    key: "onstartedit",
    get: function get() {
      return this.getAttribute('onstartedit');
    },
    set: function set(onstartedit) {
      this.setAttribute('onstartedit', onstartedit);
    }
  }, {
    key: "onvalidateedit",
    get: function get() {
      return this.getAttribute('onvalidateedit');
    },
    set: function set(onvalidateedit) {
      this.setAttribute('onvalidateedit', onvalidateedit);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_List_Co.observedAttributes;

      for (var property in Ext_grid_Grid_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_Grid_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_Grid_Component() {
    var _this;

    _this = _Ext_dataview_List_Co.call(this, Ext_grid_Grid_Component.METHODS(), Ext_grid_Grid_Component.XTYPE(), Ext_grid_Grid_Component.PROPERTIESOBJECT(), Ext_grid_Grid_Component.EVENTS()) || this;
    _this.XTYPE = Ext_grid_Grid_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_Grid_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_grid_Grid_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_grid_Grid_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_Grid_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_List_Co.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_List_Co.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_Grid_Component;
}(Ext_dataview_List_Component);

export { Ext_grid_Grid_Component as default };