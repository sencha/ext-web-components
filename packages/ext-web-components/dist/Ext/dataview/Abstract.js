import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_dataview_Abstract_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_dataview_Abstract_Component, _Ext_Container_Compon);

  //configs
  Ext_dataview_Abstract_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_dataview_Abstract_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "associatedData": ["boolean", "object"],
      "autoSize": ["boolean"],
      "data": ["object"],
      "deferEmptyText": ["boolean"],
      "deselectOnContainerClick": ["boolean"],
      "disableSelection": ["boolean"],
      "emptyItemText": ["string"],
      "emptyState": ["boolean"],
      "emptyText": ["string", "boolean"],
      "emptyTextDefaults": ["object", "Ext.Component"],
      "emptyTextProperty": ["string"],
      "inline": ["boolean", "object"],
      "itemButtonMode": ["boolean"],
      "itemCls": ["string"],
      "itemsFocusable": ["boolean"],
      "itemTpl": ["string", "string[]", "Ext.XTemplate"],
      "loadingHeight": ["number"],
      "loadingText": ["string", "boolean"],
      "markDirty": ["boolean"],
      "pressedDelay": ["number"],
      "publishes": ["string", "string[]", "object"],
      "scrollable": ["boolean", "string", "object"],
      "scrollDock": ["'start'", "'emd'"],
      "scrollToTopOnRefresh": ["boolean"],
      "selectable": ["object", "Ext.dataview.selection.Model"],
      "selection": ["Ext.data.Model"],
      "store": ["Ext.data.Store", "object"],
      "tabIndex": ["number"],
      "triggerCtEvent": ["'tap'", "'singletap'"],
      "triggerEvent": ["'childtap'", "'childsingletap'", "'childdoubletap'", "'childswipe'", "'childtaphold'", "'childlongpress'"],
      "twoWayBindable": ["string", "string[]", "object"]
    };
  };

  Ext_dataview_Abstract_Component.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: ''
    }, {
      name: 'beforestorechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'deselect',
      parameters: 'undefined,records'
    }, {
      name: 'itemdoubletap',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'move',
      parameters: ''
    }, {
      name: 'navigate',
      parameters: 'undefined,to,from'
    }, {
      name: 'refresh',
      parameters: 'undefined'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'select',
      parameters: 'undefined,selected'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }];
  };

  Ext_dataview_Abstract_Component.METHODS = function METHODS() {
    return [{
      name: 'ensureVisible',
      "function": function _function(record, options) {
        return this.ext.ensureVisible(record, options);
      }
    }, {
      name: 'ensureVisiblePlan',
      "function": function _function(record, plan) {
        return this.ext.ensureVisiblePlan(record, plan);
      }
    }, {
      name: 'getItemAt',
      "function": function _function(index) {
        return this.ext.getItemAt(index);
      }
    }, {
      name: 'getItemFromPagePoint',
      "function": function _function(x, y) {
        return this.ext.getItemFromPagePoint(x, y);
      }
    }, {
      name: 'getItemFromPoint',
      "function": function _function(x, y) {
        return this.ext.getItemFromPoint(x, y);
      }
    }, {
      name: 'getItemIndex',
      "function": function _function(item) {
        return this.ext.getItemIndex(item);
      }
    }, {
      name: 'getScrollDockedItems',
      "function": function _function(which) {
        return this.ext.getScrollDockedItems(which);
      }
    }, {
      name: 'getViewItems',
      "function": function _function() {
        return this.ext.getViewItems();
      }
    }, {
      name: 'indexModifiedFields',
      "function": function _function(modified) {
        return this.ext.indexModifiedFields(modified);
      }
    }, {
      name: 'itemAs',
      "function": function _function(item, as) {
        return this.ext.itemAs(item, as);
      }
    }, {
      name: 'mapToItem',
      "function": function _function(value, as) {
        return this.ext.mapToItem(value, as);
      }
    }, {
      name: 'mapToRecord',
      "function": function _function(value) {
        return this.ext.mapToRecord(value);
      }
    }, {
      name: 'mapToRecordIndex',
      "function": function _function(value, uncollapsed) {
        return this.ext.mapToRecordIndex(value, uncollapsed);
      }
    }, {
      name: 'mapToViewIndex',
      "function": function _function(value, indexOffset) {
        return this.ext.mapToViewIndex(value, indexOffset);
      }
    }, {
      name: 'nextItem',
      "function": function _function(item, as) {
        return this.ext.nextItem(item, as);
      }
    }, {
      name: 'onNavigate',
      "function": function _function(e) {
        return this.ext.onNavigate(e);
      }
    }, {
      name: 'onRelease',
      "function": function _function() {
        return this.ext.onRelease();
      }
    }, {
      name: 'prepareData',
      "function": function _function(data, index, record) {
        return this.ext.prepareData(data, index, record);
      }
    }, {
      name: 'previousItem',
      "function": function _function(item, as) {
        return this.ext.previousItem(item, as);
      }
    }, {
      name: 'refresh',
      "function": function _function() {
        return this.ext.refresh();
      }
    }, {
      name: 'saveFocusState',
      "function": function _function() {
        return this.ext.saveFocusState();
      }
    }];
  };

  _createClass(Ext_dataview_Abstract_Component, [{
    key: "onadd",
    //events
    get: function get() {
      return this.getAttribute('onadd');
    },
    set: function set(onadd) {
      this.setAttribute('onadd', onadd);
    }
  }, {
    key: "onbeforestorechange",
    get: function get() {
      return this.getAttribute('onbeforestorechange');
    },
    set: function set(onbeforestorechange) {
      this.setAttribute('onbeforestorechange', onbeforestorechange);
    }
  }, {
    key: "ondeselect",
    get: function get() {
      return this.getAttribute('ondeselect');
    },
    set: function set(ondeselect) {
      this.setAttribute('ondeselect', ondeselect);
    }
  }, {
    key: "onitemdoubletap",
    get: function get() {
      return this.getAttribute('onitemdoubletap');
    },
    set: function set(onitemdoubletap) {
      this.setAttribute('onitemdoubletap', onitemdoubletap);
    }
  }, {
    key: "onitemlongpress",
    get: function get() {
      return this.getAttribute('onitemlongpress');
    },
    set: function set(onitemlongpress) {
      this.setAttribute('onitemlongpress', onitemlongpress);
    }
  }, {
    key: "onitemmouseenter",
    get: function get() {
      return this.getAttribute('onitemmouseenter');
    },
    set: function set(onitemmouseenter) {
      this.setAttribute('onitemmouseenter', onitemmouseenter);
    }
  }, {
    key: "onitemmouseleave",
    get: function get() {
      return this.getAttribute('onitemmouseleave');
    },
    set: function set(onitemmouseleave) {
      this.setAttribute('onitemmouseleave', onitemmouseleave);
    }
  }, {
    key: "onitemsingletap",
    get: function get() {
      return this.getAttribute('onitemsingletap');
    },
    set: function set(onitemsingletap) {
      this.setAttribute('onitemsingletap', onitemsingletap);
    }
  }, {
    key: "onitemswipe",
    get: function get() {
      return this.getAttribute('onitemswipe');
    },
    set: function set(onitemswipe) {
      this.setAttribute('onitemswipe', onitemswipe);
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
    key: "onitemtaphold",
    get: function get() {
      return this.getAttribute('onitemtaphold');
    },
    set: function set(onitemtaphold) {
      this.setAttribute('onitemtaphold', onitemtaphold);
    }
  }, {
    key: "onitemtouchcancel",
    get: function get() {
      return this.getAttribute('onitemtouchcancel');
    },
    set: function set(onitemtouchcancel) {
      this.setAttribute('onitemtouchcancel', onitemtouchcancel);
    }
  }, {
    key: "onitemtouchend",
    get: function get() {
      return this.getAttribute('onitemtouchend');
    },
    set: function set(onitemtouchend) {
      this.setAttribute('onitemtouchend', onitemtouchend);
    }
  }, {
    key: "onitemtouchmove",
    get: function get() {
      return this.getAttribute('onitemtouchmove');
    },
    set: function set(onitemtouchmove) {
      this.setAttribute('onitemtouchmove', onitemtouchmove);
    }
  }, {
    key: "onitemtouchstart",
    get: function get() {
      return this.getAttribute('onitemtouchstart');
    },
    set: function set(onitemtouchstart) {
      this.setAttribute('onitemtouchstart', onitemtouchstart);
    }
  }, {
    key: "onmove",
    get: function get() {
      return this.getAttribute('onmove');
    },
    set: function set(onmove) {
      this.setAttribute('onmove', onmove);
    }
  }, {
    key: "onnavigate",
    get: function get() {
      return this.getAttribute('onnavigate');
    },
    set: function set(onnavigate) {
      this.setAttribute('onnavigate', onnavigate);
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
    key: "onremove",
    get: function get() {
      return this.getAttribute('onremove');
    },
    set: function set(onremove) {
      this.setAttribute('onremove', onremove);
    }
  }, {
    key: "onselect",
    get: function get() {
      return this.getAttribute('onselect');
    },
    set: function set(onselect) {
      this.setAttribute('onselect', onselect);
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
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_dataview_Abstract_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_Abstract_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_Abstract_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_dataview_Abstract_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_Abstract_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_Abstract_Component.METHODS()), events.concat(Ext_dataview_Abstract_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_Abstract_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_Abstract_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_Abstract_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_Abstract_Component.EVENTS());
  }

  var _proto = Ext_dataview_Abstract_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_Abstract_Component;
}(Ext_Container_Component);

export { Ext_dataview_Abstract_Component as default };