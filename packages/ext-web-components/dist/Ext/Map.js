import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_Map_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_Map_Component, _Ext_Container_Compon);

  //configs
  Ext_Map_Component.XTYPE = function XTYPE() {
    return 'map';
  };

  Ext_Map_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "geo": ["Ext.util.Geolocation"],
      "map": ["google.maps.map"],
      "mapListeners": ["object"],
      "mapOptions": ["object"],
      "markers": ["Ext.data.Store", "object", "Ext.data.Model[]", "Ext.ux.google.map.Marker"],
      "markerTemplate": ["object", "Ext.util.ObjectTemplate"],
      "useCurrentLocation": ["boolean", "Ext.util.Geolocation"]
    };
  };

  Ext_Map_Component.EVENTS = function EVENTS() {
    return [{
      name: 'centerchange',
      parameters: 'undefined,map,center'
    }, {
      name: 'maprender',
      parameters: 'undefined,map'
    }, {
      name: 'markerclick',
      parameters: 'map,info'
    }, {
      name: 'markerdblclick',
      parameters: 'map,info'
    }, {
      name: 'markerdrag',
      parameters: 'map,info'
    }, {
      name: 'markerdragend',
      parameters: 'map,info'
    }, {
      name: 'markerdragstart',
      parameters: 'map,info'
    }, {
      name: 'markermousedown',
      parameters: 'map,info'
    }, {
      name: 'markermouseout',
      parameters: 'map,info'
    }, {
      name: 'markermouseover',
      parameters: 'map,info'
    }, {
      name: 'markermouseup',
      parameters: 'map,info'
    }, {
      name: 'markerrightclick',
      parameters: 'map,info'
    }, {
      name: 'typechange',
      parameters: 'undefined,map,mapType'
    }, {
      name: 'zoomchange',
      parameters: 'undefined,map,zoomLevel'
    }];
  };

  Ext_Map_Component.METHODS = function METHODS() {
    return [{
      name: 'addMapListeners',
      "function": function _function() {
        return this.ext.addMapListeners();
      }
    }, {
      name: 'fitMarkersInView',
      "function": function _function(records) {
        return this.ext.fitMarkersInView(records);
      }
    }, {
      name: 'onCenterChange',
      "function": function _function() {
        return this.ext.onCenterChange();
      }
    }, {
      name: 'onGeoError',
      "function": function _function() {
        return this.ext.onGeoError();
      }
    }, {
      name: 'onGeoUpdate',
      "function": function _function(geo) {
        return this.ext.onGeoUpdate(geo);
      }
    }, {
      name: 'onPainted',
      "function": function _function() {
        return this.ext.onPainted();
      }
    }, {
      name: 'onTilesLoaded',
      "function": function _function() {
        return this.ext.onTilesLoaded();
      }
    }, {
      name: 'onTypeChange',
      "function": function _function() {
        return this.ext.onTypeChange();
      }
    }, {
      name: 'onZoomChange',
      "function": function _function() {
        return this.ext.onZoomChange();
      }
    }, {
      name: 'setMapCenter',
      "function": function _function(coordinates) {
        return this.ext.setMapCenter(coordinates);
      }
    }];
  };

  _createClass(Ext_Map_Component, [{
    key: "oncenterchange",
    //events
    get: function get() {
      return this.getAttribute('oncenterchange');
    },
    set: function set(oncenterchange) {
      this.setAttribute('oncenterchange', oncenterchange);
    }
  }, {
    key: "onmaprender",
    get: function get() {
      return this.getAttribute('onmaprender');
    },
    set: function set(onmaprender) {
      this.setAttribute('onmaprender', onmaprender);
    }
  }, {
    key: "onmarkerclick",
    get: function get() {
      return this.getAttribute('onmarkerclick');
    },
    set: function set(onmarkerclick) {
      this.setAttribute('onmarkerclick', onmarkerclick);
    }
  }, {
    key: "onmarkerdblclick",
    get: function get() {
      return this.getAttribute('onmarkerdblclick');
    },
    set: function set(onmarkerdblclick) {
      this.setAttribute('onmarkerdblclick', onmarkerdblclick);
    }
  }, {
    key: "onmarkerdrag",
    get: function get() {
      return this.getAttribute('onmarkerdrag');
    },
    set: function set(onmarkerdrag) {
      this.setAttribute('onmarkerdrag', onmarkerdrag);
    }
  }, {
    key: "onmarkerdragend",
    get: function get() {
      return this.getAttribute('onmarkerdragend');
    },
    set: function set(onmarkerdragend) {
      this.setAttribute('onmarkerdragend', onmarkerdragend);
    }
  }, {
    key: "onmarkerdragstart",
    get: function get() {
      return this.getAttribute('onmarkerdragstart');
    },
    set: function set(onmarkerdragstart) {
      this.setAttribute('onmarkerdragstart', onmarkerdragstart);
    }
  }, {
    key: "onmarkermousedown",
    get: function get() {
      return this.getAttribute('onmarkermousedown');
    },
    set: function set(onmarkermousedown) {
      this.setAttribute('onmarkermousedown', onmarkermousedown);
    }
  }, {
    key: "onmarkermouseout",
    get: function get() {
      return this.getAttribute('onmarkermouseout');
    },
    set: function set(onmarkermouseout) {
      this.setAttribute('onmarkermouseout', onmarkermouseout);
    }
  }, {
    key: "onmarkermouseover",
    get: function get() {
      return this.getAttribute('onmarkermouseover');
    },
    set: function set(onmarkermouseover) {
      this.setAttribute('onmarkermouseover', onmarkermouseover);
    }
  }, {
    key: "onmarkermouseup",
    get: function get() {
      return this.getAttribute('onmarkermouseup');
    },
    set: function set(onmarkermouseup) {
      this.setAttribute('onmarkermouseup', onmarkermouseup);
    }
  }, {
    key: "onmarkerrightclick",
    get: function get() {
      return this.getAttribute('onmarkerrightclick');
    },
    set: function set(onmarkerrightclick) {
      this.setAttribute('onmarkerrightclick', onmarkerrightclick);
    }
  }, {
    key: "ontypechange",
    get: function get() {
      return this.getAttribute('ontypechange');
    },
    set: function set(ontypechange) {
      this.setAttribute('ontypechange', ontypechange);
    }
  }, {
    key: "onzoomchange",
    get: function get() {
      return this.getAttribute('onzoomchange');
    },
    set: function set(onzoomchange) {
      this.setAttribute('onzoomchange', onzoomchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_Map_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Map_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Map_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this, Ext_Map_Component.METHODS(), Ext_Map_Component.XTYPE(), Ext_Map_Component.PROPERTIESOBJECT(), Ext_Map_Component.EVENTS()) || this;
    _this.XTYPE = Ext_Map_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Map_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_Map_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_Map_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Map_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Map_Component;
}(Ext_Container_Component);

export { Ext_Map_Component as default };