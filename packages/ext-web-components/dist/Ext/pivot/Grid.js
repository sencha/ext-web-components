import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid_Component from '../../Ext/grid/Grid';

var Ext_pivot_Grid_Component =
/*#__PURE__*/
function (_Ext_grid_Grid_Compon) {
  _inheritsLoose(Ext_pivot_Grid_Component, _Ext_grid_Grid_Compon);

  //configs
  Ext_pivot_Grid_Component.XTYPE = function XTYPE() {
    return 'pivotgrid';
  };

  Ext_pivot_Grid_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "clsGrandTotal": ["string"],
      "clsGroupTotal": ["string"],
      "enableColumnSort": ["boolean"],
      "enableLoadMask": ["boolean"],
      "leftAxisCellConfig": ["object"],
      "matrix": ["Ext.pivot.matrix.Base"],
      "record": ["any"],
      "startColGroupsCollapsed": ["boolean"],
      "startRowGroupsCollapsed": ["boolean"],
      "topAxisCellConfig": ["object"]
    };
  };

  Ext_pivot_Grid_Component.EVENTS = function EVENTS() {
    return [{
      name: 'pivotbeforereconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'pivotbeforerequest',
      parameters: 'matrix,params'
    }, {
      name: 'pivotbuildtotals',
      parameters: 'matrix,totals'
    }, {
      name: 'pivotcolumnsbuilt',
      parameters: 'matrix,columns'
    }, {
      name: 'pivotdone',
      parameters: 'matrix'
    }, {
      name: 'pivotgroupcelldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupcelltap',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupcelltaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupcollapse',
      parameters: 'matrix,type,group'
    }, {
      name: 'pivotgroupdoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupexpand',
      parameters: 'matrix,type,group'
    }, {
      name: 'pivotgrouptap',
      parameters: 'params,e'
    }, {
      name: 'pivotgrouptaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotitemcelldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemcelltap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemcelltaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotitemdoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemtap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemtaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotmodelbuilt',
      parameters: 'matrix,model'
    }, {
      name: 'pivotprogress',
      parameters: 'matrix,index,total'
    }, {
      name: 'pivotreconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'pivotrecordbuilt',
      parameters: 'matrix,record'
    }, {
      name: 'pivotrequestexception',
      parameters: 'matrix,response'
    }, {
      name: 'pivotstart',
      parameters: 'matrix'
    }, {
      name: 'pivotstorebuilt',
      parameters: 'matrix,store'
    }, {
      name: 'pivottotalcelldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivottotalcelltap',
      parameters: 'params,e'
    }, {
      name: 'pivottotalcelltaphold',
      parameters: 'params,e'
    }, {
      name: 'pivottotaldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivottotaltap',
      parameters: 'params,e'
    }, {
      name: 'pivottotaltaphold',
      parameters: 'params,e'
    }];
  };

  Ext_pivot_Grid_Component.METHODS = function METHODS() {
    return [{
      name: 'collapseAll',
      "function": function _function() {
        return this.ext.collapseAll();
      }
    }, {
      name: 'collapseAllColumns',
      "function": function _function() {
        return this.ext.collapseAllColumns();
      }
    }, {
      name: 'collapseAllRows',
      "function": function _function() {
        return this.ext.collapseAllRows();
      }
    }, {
      name: 'collapseCol',
      "function": function _function(topAxisItemKey, includeChildren) {
        return this.ext.collapseCol(topAxisItemKey, includeChildren);
      }
    }, {
      name: 'collapseRow',
      "function": function _function(leftAxisItemKey, includeChildren) {
        return this.ext.collapseRow(leftAxisItemKey, includeChildren);
      }
    }, {
      name: 'doExpandCollapse',
      "function": function _function(type, groupId, state, includeChildren) {
        return this.ext.doExpandCollapse(type, groupId, state, includeChildren);
      }
    }, {
      name: 'doExpandCollapseTree',
      "function": function _function(tree, expanded) {
        return this.ext.doExpandCollapseTree(tree, expanded);
      }
    }, {
      name: 'expandAll',
      "function": function _function() {
        return this.ext.expandAll();
      }
    }, {
      name: 'expandAllColumns',
      "function": function _function() {
        return this.ext.expandAllColumns();
      }
    }, {
      name: 'expandAllRows',
      "function": function _function() {
        return this.ext.expandAllRows();
      }
    }, {
      name: 'expandCol',
      "function": function _function(topAxisItemKey, includeChildren) {
        return this.ext.expandCol(topAxisItemKey, includeChildren);
      }
    }, {
      name: 'expandRow',
      "function": function _function(leftAxisItemKey, includeChildren) {
        return this.ext.expandRow(leftAxisItemKey, includeChildren);
      }
    }, {
      name: 'getDataIndexColumns',
      "function": function _function(columns) {
        return this.ext.getDataIndexColumns(columns);
      }
    }, {
      name: 'getLeftAxisItem',
      "function": function _function(record) {
        return this.ext.getLeftAxisItem(record);
      }
    }, {
      name: 'getPivotColumnsState',
      "function": function _function() {
        return this.ext.getPivotColumnsState();
      }
    }, {
      name: 'getTopAxisItem',
      "function": function _function(column) {
        return this.ext.getTopAxisItem(column);
      }
    }, {
      name: 'getTopAxisKey',
      "function": function _function(column) {
        return this.ext.getTopAxisKey(column);
      }
    }, {
      name: 'getVisiblePivotColumns',
      "function": function _function(columns, group) {
        return this.ext.getVisiblePivotColumns(columns, group);
      }
    }, {
      name: 'onMatrixAfterUpdate',
      "function": function _function(matrix, changed) {
        return this.ext.onMatrixAfterUpdate(matrix, changed);
      }
    }, {
      name: 'onMatrixClearData',
      "function": function _function() {
        return this.ext.onMatrixClearData();
      }
    }, {
      name: 'onMatrixDataReady',
      "function": function _function(matrix) {
        return this.ext.onMatrixDataReady(matrix);
      }
    }, {
      name: 'onMatrixGroupExpandCollapse',
      "function": function _function(matrix, type, item) {
        return this.ext.onMatrixGroupExpandCollapse(matrix, type, item);
      }
    }, {
      name: 'onMatrixProcessProgress',
      "function": function _function(matrix, index, length) {
        return this.ext.onMatrixProcessProgress(matrix, index, length);
      }
    }, {
      name: 'onMatrixProcessStart',
      "function": function _function() {
        return this.ext.onMatrixProcessStart();
      }
    }, {
      name: 'preparePivotColumns',
      "function": function _function(columns) {
        return this.ext.preparePivotColumns(columns);
      }
    }, {
      name: 'prepareVisiblePivotColumns',
      "function": function _function(columns) {
        return this.ext.prepareVisiblePivotColumns(columns);
      }
    }, {
      name: 'reconfigurePivot',
      "function": function _function(config) {
        return this.ext.reconfigurePivot(config);
      }
    }, {
      name: 'refreshMatrixData',
      "function": function _function(matrix, keepStates) {
        return this.ext.refreshMatrixData(matrix, keepStates);
      }
    }, {
      name: 'refreshView',
      "function": function _function() {
        return this.ext.refreshView();
      }
    }, {
      name: 'restorePivotColumnsState',
      "function": function _function(columns) {
        return this.ext.restorePivotColumnsState(columns);
      }
    }, {
      name: 'setStore',
      "function": function _function(store) {
        return this.ext.setStore(store);
      }
    }];
  };

  _createClass(Ext_pivot_Grid_Component, [{
    key: "onpivotbeforereconfigure",
    //events
    get: function get() {
      return this.getAttribute('onpivotbeforereconfigure');
    },
    set: function set(onpivotbeforereconfigure) {
      this.setAttribute('onpivotbeforereconfigure', onpivotbeforereconfigure);
    }
  }, {
    key: "onpivotbeforerequest",
    get: function get() {
      return this.getAttribute('onpivotbeforerequest');
    },
    set: function set(onpivotbeforerequest) {
      this.setAttribute('onpivotbeforerequest', onpivotbeforerequest);
    }
  }, {
    key: "onpivotbuildtotals",
    get: function get() {
      return this.getAttribute('onpivotbuildtotals');
    },
    set: function set(onpivotbuildtotals) {
      this.setAttribute('onpivotbuildtotals', onpivotbuildtotals);
    }
  }, {
    key: "onpivotcolumnsbuilt",
    get: function get() {
      return this.getAttribute('onpivotcolumnsbuilt');
    },
    set: function set(onpivotcolumnsbuilt) {
      this.setAttribute('onpivotcolumnsbuilt', onpivotcolumnsbuilt);
    }
  }, {
    key: "onpivotdone",
    get: function get() {
      return this.getAttribute('onpivotdone');
    },
    set: function set(onpivotdone) {
      this.setAttribute('onpivotdone', onpivotdone);
    }
  }, {
    key: "onpivotgroupcelldoubletap",
    get: function get() {
      return this.getAttribute('onpivotgroupcelldoubletap');
    },
    set: function set(onpivotgroupcelldoubletap) {
      this.setAttribute('onpivotgroupcelldoubletap', onpivotgroupcelldoubletap);
    }
  }, {
    key: "onpivotgroupcelltap",
    get: function get() {
      return this.getAttribute('onpivotgroupcelltap');
    },
    set: function set(onpivotgroupcelltap) {
      this.setAttribute('onpivotgroupcelltap', onpivotgroupcelltap);
    }
  }, {
    key: "onpivotgroupcelltaphold",
    get: function get() {
      return this.getAttribute('onpivotgroupcelltaphold');
    },
    set: function set(onpivotgroupcelltaphold) {
      this.setAttribute('onpivotgroupcelltaphold', onpivotgroupcelltaphold);
    }
  }, {
    key: "onpivotgroupcollapse",
    get: function get() {
      return this.getAttribute('onpivotgroupcollapse');
    },
    set: function set(onpivotgroupcollapse) {
      this.setAttribute('onpivotgroupcollapse', onpivotgroupcollapse);
    }
  }, {
    key: "onpivotgroupdoubletap",
    get: function get() {
      return this.getAttribute('onpivotgroupdoubletap');
    },
    set: function set(onpivotgroupdoubletap) {
      this.setAttribute('onpivotgroupdoubletap', onpivotgroupdoubletap);
    }
  }, {
    key: "onpivotgroupexpand",
    get: function get() {
      return this.getAttribute('onpivotgroupexpand');
    },
    set: function set(onpivotgroupexpand) {
      this.setAttribute('onpivotgroupexpand', onpivotgroupexpand);
    }
  }, {
    key: "onpivotgrouptap",
    get: function get() {
      return this.getAttribute('onpivotgrouptap');
    },
    set: function set(onpivotgrouptap) {
      this.setAttribute('onpivotgrouptap', onpivotgrouptap);
    }
  }, {
    key: "onpivotgrouptaphold",
    get: function get() {
      return this.getAttribute('onpivotgrouptaphold');
    },
    set: function set(onpivotgrouptaphold) {
      this.setAttribute('onpivotgrouptaphold', onpivotgrouptaphold);
    }
  }, {
    key: "onpivotitemcelldoubletap",
    get: function get() {
      return this.getAttribute('onpivotitemcelldoubletap');
    },
    set: function set(onpivotitemcelldoubletap) {
      this.setAttribute('onpivotitemcelldoubletap', onpivotitemcelldoubletap);
    }
  }, {
    key: "onpivotitemcelltap",
    get: function get() {
      return this.getAttribute('onpivotitemcelltap');
    },
    set: function set(onpivotitemcelltap) {
      this.setAttribute('onpivotitemcelltap', onpivotitemcelltap);
    }
  }, {
    key: "onpivotitemcelltaphold",
    get: function get() {
      return this.getAttribute('onpivotitemcelltaphold');
    },
    set: function set(onpivotitemcelltaphold) {
      this.setAttribute('onpivotitemcelltaphold', onpivotitemcelltaphold);
    }
  }, {
    key: "onpivotitemdoubletap",
    get: function get() {
      return this.getAttribute('onpivotitemdoubletap');
    },
    set: function set(onpivotitemdoubletap) {
      this.setAttribute('onpivotitemdoubletap', onpivotitemdoubletap);
    }
  }, {
    key: "onpivotitemtap",
    get: function get() {
      return this.getAttribute('onpivotitemtap');
    },
    set: function set(onpivotitemtap) {
      this.setAttribute('onpivotitemtap', onpivotitemtap);
    }
  }, {
    key: "onpivotitemtaphold",
    get: function get() {
      return this.getAttribute('onpivotitemtaphold');
    },
    set: function set(onpivotitemtaphold) {
      this.setAttribute('onpivotitemtaphold', onpivotitemtaphold);
    }
  }, {
    key: "onpivotmodelbuilt",
    get: function get() {
      return this.getAttribute('onpivotmodelbuilt');
    },
    set: function set(onpivotmodelbuilt) {
      this.setAttribute('onpivotmodelbuilt', onpivotmodelbuilt);
    }
  }, {
    key: "onpivotprogress",
    get: function get() {
      return this.getAttribute('onpivotprogress');
    },
    set: function set(onpivotprogress) {
      this.setAttribute('onpivotprogress', onpivotprogress);
    }
  }, {
    key: "onpivotreconfigure",
    get: function get() {
      return this.getAttribute('onpivotreconfigure');
    },
    set: function set(onpivotreconfigure) {
      this.setAttribute('onpivotreconfigure', onpivotreconfigure);
    }
  }, {
    key: "onpivotrecordbuilt",
    get: function get() {
      return this.getAttribute('onpivotrecordbuilt');
    },
    set: function set(onpivotrecordbuilt) {
      this.setAttribute('onpivotrecordbuilt', onpivotrecordbuilt);
    }
  }, {
    key: "onpivotrequestexception",
    get: function get() {
      return this.getAttribute('onpivotrequestexception');
    },
    set: function set(onpivotrequestexception) {
      this.setAttribute('onpivotrequestexception', onpivotrequestexception);
    }
  }, {
    key: "onpivotstart",
    get: function get() {
      return this.getAttribute('onpivotstart');
    },
    set: function set(onpivotstart) {
      this.setAttribute('onpivotstart', onpivotstart);
    }
  }, {
    key: "onpivotstorebuilt",
    get: function get() {
      return this.getAttribute('onpivotstorebuilt');
    },
    set: function set(onpivotstorebuilt) {
      this.setAttribute('onpivotstorebuilt', onpivotstorebuilt);
    }
  }, {
    key: "onpivottotalcelldoubletap",
    get: function get() {
      return this.getAttribute('onpivottotalcelldoubletap');
    },
    set: function set(onpivottotalcelldoubletap) {
      this.setAttribute('onpivottotalcelldoubletap', onpivottotalcelldoubletap);
    }
  }, {
    key: "onpivottotalcelltap",
    get: function get() {
      return this.getAttribute('onpivottotalcelltap');
    },
    set: function set(onpivottotalcelltap) {
      this.setAttribute('onpivottotalcelltap', onpivottotalcelltap);
    }
  }, {
    key: "onpivottotalcelltaphold",
    get: function get() {
      return this.getAttribute('onpivottotalcelltaphold');
    },
    set: function set(onpivottotalcelltaphold) {
      this.setAttribute('onpivottotalcelltaphold', onpivottotalcelltaphold);
    }
  }, {
    key: "onpivottotaldoubletap",
    get: function get() {
      return this.getAttribute('onpivottotaldoubletap');
    },
    set: function set(onpivottotaldoubletap) {
      this.setAttribute('onpivottotaldoubletap', onpivottotaldoubletap);
    }
  }, {
    key: "onpivottotaltap",
    get: function get() {
      return this.getAttribute('onpivottotaltap');
    },
    set: function set(onpivottotaltap) {
      this.setAttribute('onpivottotaltap', onpivottotaltap);
    }
  }, {
    key: "onpivottotaltaphold",
    get: function get() {
      return this.getAttribute('onpivottotaltaphold');
    },
    set: function set(onpivottotaltaphold) {
      this.setAttribute('onpivottotaltaphold', onpivottotaltaphold);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_Grid_Compon.observedAttributes;

      for (var property in Ext_pivot_Grid_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_Grid_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_Grid_Component() {
    var _this;

    _this = _Ext_grid_Grid_Compon.call(this, Ext_pivot_Grid_Component.METHODS(), Ext_pivot_Grid_Component.XTYPE(), Ext_pivot_Grid_Component.PROPERTIESOBJECT(), Ext_pivot_Grid_Component.EVENTS()) || this;
    _this.XTYPE = Ext_pivot_Grid_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_pivot_Grid_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_pivot_Grid_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_pivot_Grid_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_pivot_Grid_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_Grid_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_Grid_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_Grid_Component;
}(Ext_grid_Grid_Component);

export { Ext_pivot_Grid_Component as default };