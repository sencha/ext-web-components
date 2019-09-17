import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Component_Component from '../Ext/dataview/Component';

var Ext_List_Component =
/*#__PURE__*/
function (_Ext_dataview_Compone) {
  _inheritsLoose(Ext_List_Component, _Ext_dataview_Compone);

  //configs
  Ext_List_Component.XTYPE = function XTYPE() {
    return 'list';
  };

  Ext_List_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "bufferSize": ["number"],
      "collapseDefaults": ["Ext.dataview.ListCollapser", "object"],
      "collapsible": ["Ext.dataview.ListCollapser", "object", "boolean"],
      "disclosureProperty": ["string"],
      "grouped": ["boolean"],
      "groupFooter": ["object", "Ext.dataview.ItemHeader"],
      "groupHeader": ["object", "Ext.dataview.ItemHeader"],
      "grouping": ["any"],
      "groupPlaceholder": ["object", "Ext.dataview.ListItemPlaceholder"],
      "horizontalOverflow": ["any"],
      "indexBar": ["boolean", "object", "Ext.dataview.IndexBar"],
      "infinite": ["boolean"],
      "innerCtHeight": ["any"],
      "innerWidth": ["any"],
      "itemConfig": ["object", "Ext.Component"],
      "maintainChildNodes": ["boolean"],
      "minimumBufferDistance": ["number"],
      "onItemDisclosure": ["boolean", "function", "string", "object"],
      "pinFooters": ["boolean"],
      "pinHeaders": ["boolean"],
      "pinnedFooter": ["object"],
      "pinnedFooterHeight": ["any"],
      "pinnedHeader": ["object"],
      "pinnedHeaderHeight": ["any"],
      "preventSelectionOnDisclose": ["boolean"],
      "preventSelectionOnTool": ["boolean"],
      "rowLines": ["boolean"],
      "scrollable": ["boolean", "string", "object"],
      "topRenderedIndex": ["any"],
      "variableHeights": ["boolean"],
      "verticalOverflow": ["boolean"],
      "visibleHeight": ["number"],
      "visibleLeft": ["any"],
      "visibleTop": ["number"],
      "visibleWidth": ["any"]
    };
  };

  Ext_List_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforegroupcollapse',
      parameters: 'undefined,group'
    }, {
      name: 'beforegroupexpand',
      parameters: 'undefined,group'
    }, {
      name: 'childdoubletap',
      parameters: 'undefined,location'
    }, {
      name: 'childlongpress',
      parameters: 'undefined,location'
    }, {
      name: 'childmouseenter',
      parameters: 'undefined,location'
    }, {
      name: 'childmouseleave',
      parameters: 'undefined,location'
    }, {
      name: 'childsingletap',
      parameters: 'undefined,location'
    }, {
      name: 'childtap',
      parameters: 'undefined,location'
    }, {
      name: 'childtaphold',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchend',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchmove',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchstart',
      parameters: 'undefined,location'
    }, {
      name: 'disclose',
      parameters: 'list,record,target,index,event'
    }, {
      name: 'groupcollapse',
      parameters: 'undefined,group'
    }, {
      name: 'groupexpand',
      parameters: 'undefined,group'
    }, {
      name: 'itemaction',
      parameters: 'undefined,index,record,action'
    }];
  };

  Ext_List_Component.METHODS = function METHODS() {
    return [{
      name: 'getScrollableClientRegion',
      "function": function _function() {
        return this.ext.getScrollableClientRegion();
      }
    }, {
      name: 'groupFrom',
      "function": function _function(key) {
        return this.ext.groupFrom(key);
      }
    }, {
      name: 'isRecordRendered',
      "function": function _function(recordOrIndex) {
        return this.ext.isRecordRendered(recordOrIndex);
      }
    }, {
      name: 'reorderItem',
      "function": function _function(item, ref, offset) {
        return this.ext.reorderItem(item, ref, offset);
      }
    }, {
      name: 'scrollToRecord',
      "function": function _function(record, animation) {
        return this.ext.scrollToRecord(record, animation);
      }
    }];
  };

  _createClass(Ext_List_Component, [{
    key: "onbeforegroupcollapse",
    //events
    get: function get() {
      return this.getAttribute('onbeforegroupcollapse');
    },
    set: function set(onbeforegroupcollapse) {
      this.setAttribute('onbeforegroupcollapse', onbeforegroupcollapse);
    }
  }, {
    key: "onbeforegroupexpand",
    get: function get() {
      return this.getAttribute('onbeforegroupexpand');
    },
    set: function set(onbeforegroupexpand) {
      this.setAttribute('onbeforegroupexpand', onbeforegroupexpand);
    }
  }, {
    key: "onchilddoubletap",
    get: function get() {
      return this.getAttribute('onchilddoubletap');
    },
    set: function set(onchilddoubletap) {
      this.setAttribute('onchilddoubletap', onchilddoubletap);
    }
  }, {
    key: "onchildlongpress",
    get: function get() {
      return this.getAttribute('onchildlongpress');
    },
    set: function set(onchildlongpress) {
      this.setAttribute('onchildlongpress', onchildlongpress);
    }
  }, {
    key: "onchildmouseenter",
    get: function get() {
      return this.getAttribute('onchildmouseenter');
    },
    set: function set(onchildmouseenter) {
      this.setAttribute('onchildmouseenter', onchildmouseenter);
    }
  }, {
    key: "onchildmouseleave",
    get: function get() {
      return this.getAttribute('onchildmouseleave');
    },
    set: function set(onchildmouseleave) {
      this.setAttribute('onchildmouseleave', onchildmouseleave);
    }
  }, {
    key: "onchildsingletap",
    get: function get() {
      return this.getAttribute('onchildsingletap');
    },
    set: function set(onchildsingletap) {
      this.setAttribute('onchildsingletap', onchildsingletap);
    }
  }, {
    key: "onchildtap",
    get: function get() {
      return this.getAttribute('onchildtap');
    },
    set: function set(onchildtap) {
      this.setAttribute('onchildtap', onchildtap);
    }
  }, {
    key: "onchildtaphold",
    get: function get() {
      return this.getAttribute('onchildtaphold');
    },
    set: function set(onchildtaphold) {
      this.setAttribute('onchildtaphold', onchildtaphold);
    }
  }, {
    key: "onchildtouchcancel",
    get: function get() {
      return this.getAttribute('onchildtouchcancel');
    },
    set: function set(onchildtouchcancel) {
      this.setAttribute('onchildtouchcancel', onchildtouchcancel);
    }
  }, {
    key: "onchildtouchend",
    get: function get() {
      return this.getAttribute('onchildtouchend');
    },
    set: function set(onchildtouchend) {
      this.setAttribute('onchildtouchend', onchildtouchend);
    }
  }, {
    key: "onchildtouchmove",
    get: function get() {
      return this.getAttribute('onchildtouchmove');
    },
    set: function set(onchildtouchmove) {
      this.setAttribute('onchildtouchmove', onchildtouchmove);
    }
  }, {
    key: "onchildtouchstart",
    get: function get() {
      return this.getAttribute('onchildtouchstart');
    },
    set: function set(onchildtouchstart) {
      this.setAttribute('onchildtouchstart', onchildtouchstart);
    }
  }, {
    key: "ondisclose",
    get: function get() {
      return this.getAttribute('ondisclose');
    },
    set: function set(ondisclose) {
      this.setAttribute('ondisclose', ondisclose);
    }
  }, {
    key: "ongroupcollapse",
    get: function get() {
      return this.getAttribute('ongroupcollapse');
    },
    set: function set(ongroupcollapse) {
      this.setAttribute('ongroupcollapse', ongroupcollapse);
    }
  }, {
    key: "ongroupexpand",
    get: function get() {
      return this.getAttribute('ongroupexpand');
    },
    set: function set(ongroupexpand) {
      this.setAttribute('ongroupexpand', ongroupexpand);
    }
  }, {
    key: "onitemaction",
    get: function get() {
      return this.getAttribute('onitemaction');
    },
    set: function set(onitemaction) {
      this.setAttribute('onitemaction', onitemaction);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_Compone.observedAttributes;

      for (var property in Ext_List_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_List_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_List_Component() {
    var _this;

    _this = _Ext_dataview_Compone.call(this) || this;
    _this.XTYPE = Ext_List_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_List_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_List_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_List_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_List_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_Compone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_Compone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_List_Component;
}(Ext_dataview_Component_Component);

export { Ext_List_Component as default };