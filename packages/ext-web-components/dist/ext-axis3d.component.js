import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtAxis3dComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtAxis3dComponent, _ExtBase);

  ExtAxis3dComponent.XTYPE = function XTYPE() {
    return 'axis3d';
  };

  ExtAxis3dComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "adjustByMajorUnit": ["boolean"],
      "background": ["object"],
      "center": ["array"],
      "chart": ["Ext.chart.AbstractChart"],
      "depth": ["any"],
      "expandRangeBy": ["number"],
      "fields": ["array"],
      "floating": ["number", "object"],
      "grid": ["object"],
      "hidden": ["boolean"],
      "id": ["string"],
      "label": ["object"],
      "layout": ["object", "Ext.chart.axis.layout.Layout"],
      "length": ["number"],
      "limits": ["array", "object"],
      "linkedTo": ["Ext.chart.axis.Axis", "string", "number"],
      "majorTickSteps": ["number"],
      "margin": ["number"],
      "maximum": ["number"],
      "maxZoom": ["number"],
      "minimum": ["number"],
      "minorTickSteps": ["number"],
      "minZoom": ["number"],
      "needHighPrecision": ["boolean"],
      "position": ["string"],
      "radius": ["number"],
      "reconcileRange": ["boolean"],
      "renderer": ["function"],
      "rotation": ["number"],
      "segmenter": ["object", "Ext.chart.axis.segmenter.Segmenter"],
      "style": ["object"],
      "title": ["string", "object"],
      "titleMargin": ["number"],
      "totalAngle": ["any"],
      "visibleRange": ["array"],
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "align": "Obyect",
      "fitToParent": "Boolean",
      "config": "Object"
    };
  };

  ExtAxis3dComponent.EVENTS = function EVENTS() {
    return [{
      name: 'rangechange',
      parameters: 'axis,range,oldRange'
    }, {
      name: 'visiblerangechange',
      parameters: 'axis,visibleRange'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  ExtAxis3dComponent.METHODS = function METHODS() {
    return [{
      name: 'clearRange',
      "function": function _function() {
        return this.ext.clearRange();
      }
    }, {
      name: 'getAlignment',
      "function": function _function() {
        return this.ext.getAlignment();
      }
    }, {
      name: 'getCoordFor',
      "function": function _function(value, field, idx, items) {
        return this.ext.getCoordFor(value, field, idx, items);
      }
    }, {
      name: 'getGridAlignment',
      "function": function _function() {
        return this.ext.getGridAlignment();
      }
    }, {
      name: 'getRange',
      "function": function _function(recalculate) {
        return this.ext.getRange(recalculate);
      }
    }, {
      name: 'getSurface',
      "function": function _function() {
        return this.ext.getSurface();
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
      name: 'reconcileRange',
      "function": function _function() {
        return this.ext.reconcileRange();
      }
    }, {
      name: 'renderFrame',
      "function": function _function() {
        return this.ext.renderFrame();
      }
    }, {
      name: 'setBoundSeriesRange',
      "function": function _function(range) {
        return this.ext.setBoundSeriesRange(range);
      }
    }];
  };

  _createClass(ExtAxis3dComponent, [{
    key: "adjustByMajorUnit",
    get: function get() {
      return this.getAttribute('adjustByMajorUnit');
    },
    set: function set(adjustByMajorUnit) {
      this.setAttribute('adjustByMajorUnit', adjustByMajorUnit);
    }
  }, {
    key: "background",
    get: function get() {
      return this.getAttribute('background');
    },
    set: function set(background) {
      this.setAttribute('background', background);
    }
  }, {
    key: "center",
    get: function get() {
      return this.getAttribute('center');
    },
    set: function set(center) {
      this.setAttribute('center', center);
    }
  }, {
    key: "chart",
    get: function get() {
      return this.getAttribute('chart');
    },
    set: function set(chart) {
      this.setAttribute('chart', chart);
    }
  }, {
    key: "depth",
    get: function get() {
      return this.getAttribute('depth');
    },
    set: function set(depth) {
      this.setAttribute('depth', depth);
    }
  }, {
    key: "expandRangeBy",
    get: function get() {
      return this.getAttribute('expandRangeBy');
    },
    set: function set(expandRangeBy) {
      this.setAttribute('expandRangeBy', expandRangeBy);
    }
  }, {
    key: "fields",
    get: function get() {
      return this.getAttribute('fields');
    },
    set: function set(fields) {
      this.setAttribute('fields', fields);
    }
  }, {
    key: "floating",
    get: function get() {
      return this.getAttribute('floating');
    },
    set: function set(floating) {
      this.setAttribute('floating', floating);
    }
  }, {
    key: "grid",
    get: function get() {
      return this.getAttribute('grid');
    },
    set: function set(grid) {
      this.setAttribute('grid', grid);
    }
  }, {
    key: "hidden",
    get: function get() {
      return this.getAttribute('hidden');
    },
    set: function set(hidden) {
      this.setAttribute('hidden', hidden);
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(id) {
      this.setAttribute('id', id);
    }
  }, {
    key: "label",
    get: function get() {
      return this.getAttribute('label');
    },
    set: function set(label) {
      this.setAttribute('label', label);
    }
  }, {
    key: "layout",
    get: function get() {
      return this.getAttribute('layout');
    },
    set: function set(layout) {
      this.setAttribute('layout', layout);
    }
  }, {
    key: "length",
    get: function get() {
      return this.getAttribute('length');
    },
    set: function set(length) {
      this.setAttribute('length', length);
    }
  }, {
    key: "limits",
    get: function get() {
      return this.getAttribute('limits');
    },
    set: function set(limits) {
      this.setAttribute('limits', limits);
    }
  }, {
    key: "linkedTo",
    get: function get() {
      return this.getAttribute('linkedTo');
    },
    set: function set(linkedTo) {
      this.setAttribute('linkedTo', linkedTo);
    }
  }, {
    key: "majorTickSteps",
    get: function get() {
      return this.getAttribute('majorTickSteps');
    },
    set: function set(majorTickSteps) {
      this.setAttribute('majorTickSteps', majorTickSteps);
    }
  }, {
    key: "margin",
    get: function get() {
      return this.getAttribute('margin');
    },
    set: function set(margin) {
      this.setAttribute('margin', margin);
    }
  }, {
    key: "maximum",
    get: function get() {
      return this.getAttribute('maximum');
    },
    set: function set(maximum) {
      this.setAttribute('maximum', maximum);
    }
  }, {
    key: "maxZoom",
    get: function get() {
      return this.getAttribute('maxZoom');
    },
    set: function set(maxZoom) {
      this.setAttribute('maxZoom', maxZoom);
    }
  }, {
    key: "minimum",
    get: function get() {
      return this.getAttribute('minimum');
    },
    set: function set(minimum) {
      this.setAttribute('minimum', minimum);
    }
  }, {
    key: "minorTickSteps",
    get: function get() {
      return this.getAttribute('minorTickSteps');
    },
    set: function set(minorTickSteps) {
      this.setAttribute('minorTickSteps', minorTickSteps);
    }
  }, {
    key: "minZoom",
    get: function get() {
      return this.getAttribute('minZoom');
    },
    set: function set(minZoom) {
      this.setAttribute('minZoom', minZoom);
    }
  }, {
    key: "needHighPrecision",
    get: function get() {
      return this.getAttribute('needHighPrecision');
    },
    set: function set(needHighPrecision) {
      this.setAttribute('needHighPrecision', needHighPrecision);
    }
  }, {
    key: "position",
    get: function get() {
      return this.getAttribute('position');
    },
    set: function set(position) {
      this.setAttribute('position', position);
    }
  }, {
    key: "radius",
    get: function get() {
      return this.getAttribute('radius');
    },
    set: function set(radius) {
      this.setAttribute('radius', radius);
    }
  }, {
    key: "reconcileRange",
    get: function get() {
      return this.getAttribute('reconcileRange');
    },
    set: function set(reconcileRange) {
      this.setAttribute('reconcileRange', reconcileRange);
    }
  }, {
    key: "renderer",
    get: function get() {
      return this.getAttribute('renderer');
    },
    set: function set(renderer) {
      this.setAttribute('renderer', renderer);
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.getAttribute('rotation');
    },
    set: function set(rotation) {
      this.setAttribute('rotation', rotation);
    }
  }, {
    key: "segmenter",
    get: function get() {
      return this.getAttribute('segmenter');
    },
    set: function set(segmenter) {
      this.setAttribute('segmenter', segmenter);
    }
  }, {
    key: "style",
    get: function get() {
      return this.getAttribute('style');
    },
    set: function set(style) {
      this.setAttribute('style', style);
    }
  }, {
    key: "title",
    get: function get() {
      return this.getAttribute('title');
    },
    set: function set(title) {
      this.setAttribute('title', title);
    }
  }, {
    key: "titleMargin",
    get: function get() {
      return this.getAttribute('titleMargin');
    },
    set: function set(titleMargin) {
      this.setAttribute('titleMargin', titleMargin);
    }
  }, {
    key: "totalAngle",
    get: function get() {
      return this.getAttribute('totalAngle');
    },
    set: function set(totalAngle) {
      this.setAttribute('totalAngle', totalAngle);
    }
  }, {
    key: "visibleRange",
    get: function get() {
      return this.getAttribute('visibleRange');
    },
    set: function set(visibleRange) {
      this.setAttribute('visibleRange', visibleRange);
    }
  }, {
    key: "platformConfig",
    get: function get() {
      return this.getAttribute('platformConfig');
    },
    set: function set(platformConfig) {
      this.setAttribute('platformConfig', platformConfig);
    }
  }, {
    key: "responsiveConfig",
    get: function get() {
      return this.getAttribute('responsiveConfig');
    },
    set: function set(responsiveConfig) {
      this.setAttribute('responsiveConfig', responsiveConfig);
    }
  }, {
    key: "align",
    get: function get() {
      return this.getAttribute('align');
    },
    set: function set(align) {
      this.setAttribute('align', align);
    }
  }, {
    key: "fitToParent",
    get: function get() {
      return this.getAttribute('fitToParent');
    },
    set: function set(fitToParent) {
      this.setAttribute('fitToParent', fitToParent);
    }
  }, {
    key: "config",
    get: function get() {
      return this.getAttribute('config');
    },
    set: function set(config) {
      this.setAttribute('config', config);
    }
  }, {
    key: "onrangechange",
    get: function get() {
      return this.getAttribute('onrangechange');
    },
    set: function set(onrangechange) {
      this.setAttribute('onrangechange', onrangechange);
    }
  }, {
    key: "onvisiblerangechange",
    get: function get() {
      return this.getAttribute('onvisiblerangechange');
    },
    set: function set(onvisiblerangechange) {
      this.setAttribute('onvisiblerangechange', onvisiblerangechange);
    }
  }]);

  function ExtAxis3dComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtAxis3dComponent.METHODS();
    _this.XTYPE = ExtAxis3dComponent.XTYPE(); //this.PROPERTIES = ExtAxis3dComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtAxis3dComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtAxis3dComponent.EVENTS();
    return _this;
  }

  var _proto = ExtAxis3dComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtAxis3dComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-axis3d', ExtAxis3dComponent);
  });
})();