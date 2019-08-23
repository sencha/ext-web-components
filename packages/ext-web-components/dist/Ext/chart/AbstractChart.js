import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Container_Component from '../../Ext/draw/Container';

var Ext_chart_AbstractChart_Component =
/*#__PURE__*/
function (_Ext_draw_Container_C) {
  _inheritsLoose(Ext_chart_AbstractChart_Component, _Ext_draw_Container_C);

  //configs
  Ext_chart_AbstractChart_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_chart_AbstractChart_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "animation": ["boolean", "object"],
      "axes": ["Ext.chart.axis.Axis", "array", "object"],
      "background": ["object"],
      "captions": ["object"],
      "colors": ["array"],
      "highlightItem": ["object"],
      "insetPadding": ["object", "number", "string"],
      "interactions": ["array"],
      "legend": ["Ext.chart.legend.Legend", "Ext.chart.legend.SpriteLegend", "boolean"],
      "mainRect": ["any"],
      "resizeHandler": ["any"],
      "series": ["Ext.chart.series.Series", "array"],
      "store": ["Ext.data.Store", "string", "object"],
      "style": ["object"],
      "theme": ["string"]
    };
  };

  Ext_chart_AbstractChart_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforerefresh',
      parameters: 'undefined'
    }, {
      name: 'itemclick',
      parameters: 'chart,item,event'
    }, {
      name: 'itemdblclick',
      parameters: 'chart,item,event'
    }, {
      name: 'itemhighlight',
      parameters: 'undefined,newItem,oldItem'
    }, {
      name: 'itemhighlightchange',
      parameters: 'undefined,newItem,oldItem'
    }, {
      name: 'itemmousedown',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmousemove',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmouseout',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmouseover',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmouseup',
      parameters: 'chart,item,event'
    }, {
      name: 'itemtap',
      parameters: 'chart,item,event'
    }, {
      name: 'layout',
      parameters: 'undefined'
    }, {
      name: 'redraw',
      parameters: 'undefined'
    }, {
      name: 'refresh',
      parameters: 'undefined'
    }, {
      name: 'storechange',
      parameters: 'chart,newStore,oldStore'
    }];
  };

  Ext_chart_AbstractChart_Component.METHODS = function METHODS() {
    return [{
      name: 'addSeries',
      "function": function _function(newSeries) {
        return this.ext.addSeries(newSeries);
      }
    }, {
      name: 'bindStore',
      "function": function _function(store) {
        return this.ext.bindStore(store);
      }
    }, {
      name: 'cancelChartLayout',
      "function": function _function() {
        return this.ext.cancelChartLayout();
      }
    }, {
      name: 'checkLayoutEnd',
      "function": function _function() {
        return this.ext.checkLayoutEnd();
      }
    }, {
      name: 'getAxis',
      "function": function _function(axis) {
        return this.ext.getAxis(axis);
      }
    }, {
      name: 'getChartRect',
      "function": function _function(isRecompute) {
        return this.ext.getChartRect(isRecompute);
      }
    }, {
      name: 'getEventXY',
      "function": function _function(e) {
        return this.ext.getEventXY(e);
      }
    }, {
      name: 'getInteraction',
      "function": function _function(type) {
        return this.ext.getInteraction(type);
      }
    }, {
      name: 'getItemForPoint',
      "function": function _function(x, y) {
        return this.ext.getItemForPoint(x, y);
      }
    }, {
      name: 'getItemsForPoint',
      "function": function _function(x, y) {
        return this.ext.getItemsForPoint(x, y);
      }
    }, {
      name: 'getLegendStore',
      "function": function _function() {
        return this.ext.getLegendStore();
      }
    }, {
      name: 'getRefItems',
      "function": function _function(deep) {
        return this.ext.getRefItems(deep);
      }
    }, {
      name: 'onDataChanged',
      "function": function _function() {
        return this.ext.onDataChanged();
      }
    }, {
      name: 'onLayoutEnd',
      "function": function _function() {
        return this.ext.onLayoutEnd();
      }
    }, {
      name: 'performLayout',
      "function": function _function() {
        return this.ext.performLayout();
      }
    }, {
      name: 'processData',
      "function": function _function() {
        return this.ext.processData();
      }
    }, {
      name: 'redraw',
      "function": function _function() {
        return this.ext.redraw();
      }
    }, {
      name: 'refreshBackground',
      "function": function _function(surface, newBackground, oldBackground) {
        return this.ext.refreshBackground(surface, newBackground, oldBackground);
      }
    }, {
      name: 'removeSeries',
      "function": function _function(series) {
        return this.ext.removeSeries(series);
      }
    }, {
      name: 'resumeChartLayout',
      "function": function _function() {
        return this.ext.resumeChartLayout();
      }
    }, {
      name: 'resumeThicknessChanged',
      "function": function _function() {
        return this.ext.resumeThicknessChanged();
      }
    }, {
      name: 'scheduleLayout',
      "function": function _function() {
        return this.ext.scheduleLayout();
      }
    }, {
      name: 'suspendChartLayout',
      "function": function _function() {
        return this.ext.suspendChartLayout();
      }
    }, {
      name: 'suspendThicknessChanged',
      "function": function _function() {
        return this.ext.suspendThicknessChanged();
      }
    }];
  };

  _createClass(Ext_chart_AbstractChart_Component, [{
    key: "onbeforerefresh",
    //events
    get: function get() {
      return this.getAttribute('onbeforerefresh');
    },
    set: function set(onbeforerefresh) {
      this.setAttribute('onbeforerefresh', onbeforerefresh);
    }
  }, {
    key: "onitemclick",
    get: function get() {
      return this.getAttribute('onitemclick');
    },
    set: function set(onitemclick) {
      this.setAttribute('onitemclick', onitemclick);
    }
  }, {
    key: "onitemdblclick",
    get: function get() {
      return this.getAttribute('onitemdblclick');
    },
    set: function set(onitemdblclick) {
      this.setAttribute('onitemdblclick', onitemdblclick);
    }
  }, {
    key: "onitemhighlight",
    get: function get() {
      return this.getAttribute('onitemhighlight');
    },
    set: function set(onitemhighlight) {
      this.setAttribute('onitemhighlight', onitemhighlight);
    }
  }, {
    key: "onitemhighlightchange",
    get: function get() {
      return this.getAttribute('onitemhighlightchange');
    },
    set: function set(onitemhighlightchange) {
      this.setAttribute('onitemhighlightchange', onitemhighlightchange);
    }
  }, {
    key: "onitemmousedown",
    get: function get() {
      return this.getAttribute('onitemmousedown');
    },
    set: function set(onitemmousedown) {
      this.setAttribute('onitemmousedown', onitemmousedown);
    }
  }, {
    key: "onitemmousemove",
    get: function get() {
      return this.getAttribute('onitemmousemove');
    },
    set: function set(onitemmousemove) {
      this.setAttribute('onitemmousemove', onitemmousemove);
    }
  }, {
    key: "onitemmouseout",
    get: function get() {
      return this.getAttribute('onitemmouseout');
    },
    set: function set(onitemmouseout) {
      this.setAttribute('onitemmouseout', onitemmouseout);
    }
  }, {
    key: "onitemmouseover",
    get: function get() {
      return this.getAttribute('onitemmouseover');
    },
    set: function set(onitemmouseover) {
      this.setAttribute('onitemmouseover', onitemmouseover);
    }
  }, {
    key: "onitemmouseup",
    get: function get() {
      return this.getAttribute('onitemmouseup');
    },
    set: function set(onitemmouseup) {
      this.setAttribute('onitemmouseup', onitemmouseup);
    }
  }, {
    key: "onitemtap",
    get: function get() {
      return this.getAttribute('onitemtap');
    },
    set: function set(onitemtap) {
      this.setAttribute('onitemtap', onitemtap);
    }
  }, {
    key: "onlayout",
    get: function get() {
      return this.getAttribute('onlayout');
    },
    set: function set(onlayout) {
      this.setAttribute('onlayout', onlayout);
    }
  }, {
    key: "onredraw",
    get: function get() {
      return this.getAttribute('onredraw');
    },
    set: function set(onredraw) {
      this.setAttribute('onredraw', onredraw);
    }
  }, {
    key: "onrefresh",
    get: function get() {
      return this.getAttribute('onrefresh');
    },
    set: function set(onrefresh) {
      this.setAttribute('onrefresh', onrefresh);
    }
  }, {
    key: "onstorechange",
    get: function get() {
      return this.getAttribute('onstorechange');
    },
    set: function set(onstorechange) {
      this.setAttribute('onstorechange', onstorechange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_Container_C.observedAttributes;

      for (var property in Ext_chart_AbstractChart_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_chart_AbstractChart_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_AbstractChart_Component() {
    var _this;

    _this = _Ext_draw_Container_C.call(this, Ext_chart_AbstractChart_Component.METHODS(), Ext_chart_AbstractChart_Component.XTYPE(), Ext_chart_AbstractChart_Component.PROPERTIESOBJECT(), Ext_chart_AbstractChart_Component.EVENTS()) || this;
    _this.XTYPE = Ext_chart_AbstractChart_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_chart_AbstractChart_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_chart_AbstractChart_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_chart_AbstractChart_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_chart_AbstractChart_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_Container_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_Container_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_AbstractChart_Component;
}(Ext_draw_Container_Component);

export { Ext_chart_AbstractChart_Component as default };