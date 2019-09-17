import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Media_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Media_Component, _Ext_Component_Compon);

  //configs
  Ext_Media_Component.XTYPE = function XTYPE() {
    return 'media';
  };

  Ext_Media_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoPause": ["boolean"],
      "autoResume": ["boolean"],
      "controls": ["boolean"],
      "loop": ["boolean"],
      "media": ["Ext.dom.Element"],
      "muted": ["boolean"],
      "preload": ["boolean"],
      "url": ["string"],
      "volume": ["number"]
    };
  };

  Ext_Media_Component.EVENTS = function EVENTS() {
    return [{
      name: 'ended',
      parameters: 'undefined,time'
    }, {
      name: 'mutedchange',
      parameters: 'undefined,muted'
    }, {
      name: 'pause',
      parameters: 'undefined,time'
    }, {
      name: 'play',
      parameters: 'undefined'
    }, {
      name: 'stop',
      parameters: 'undefined'
    }, {
      name: 'timeupdate',
      parameters: 'undefined,time'
    }, {
      name: 'volumechange',
      parameters: 'undefined,volume'
    }];
  };

  Ext_Media_Component.METHODS = function METHODS() {
    return [{
      name: 'getCurrentTime',
      "function": function _function() {
        return this.ext.getCurrentTime();
      }
    }, {
      name: 'getDuration',
      "function": function _function() {
        return this.ext.getDuration();
      }
    }, {
      name: 'isPlaying',
      "function": function _function() {
        return this.ext.isPlaying();
      }
    }, {
      name: 'onActivate',
      "function": function _function() {
        return this.ext.onActivate();
      }
    }, {
      name: 'onDeactivate',
      "function": function _function() {
        return this.ext.onDeactivate();
      }
    }, {
      name: 'pause',
      "function": function _function() {
        return this.ext.pause();
      }
    }, {
      name: 'play',
      "function": function _function() {
        return this.ext.play();
      }
    }, {
      name: 'setCurrentTime',
      "function": function _function(time) {
        return this.ext.setCurrentTime(time);
      }
    }, {
      name: 'stop',
      "function": function _function() {
        return this.ext.stop();
      }
    }, {
      name: 'toggle',
      "function": function _function() {
        return this.ext.toggle();
      }
    }, {
      name: 'updateEnableControls',
      "function": function _function(enableControls) {
        return this.ext.updateEnableControls(enableControls);
      }
    }, {
      name: 'updateLoop',
      "function": function _function(loop) {
        return this.ext.updateLoop(loop);
      }
    }, {
      name: 'updateMuted',
      "function": function _function(muted) {
        return this.ext.updateMuted(muted);
      }
    }, {
      name: 'updateUrl',
      "function": function _function(newUrl) {
        return this.ext.updateUrl(newUrl);
      }
    }, {
      name: 'updateVolume',
      "function": function _function(volume) {
        return this.ext.updateVolume(volume);
      }
    }];
  };

  _createClass(Ext_Media_Component, [{
    key: "onended",
    //events
    get: function get() {
      return this.getAttribute('onended');
    },
    set: function set(onended) {
      this.setAttribute('onended', onended);
    }
  }, {
    key: "onmutedchange",
    get: function get() {
      return this.getAttribute('onmutedchange');
    },
    set: function set(onmutedchange) {
      this.setAttribute('onmutedchange', onmutedchange);
    }
  }, {
    key: "onpause",
    get: function get() {
      return this.getAttribute('onpause');
    },
    set: function set(onpause) {
      this.setAttribute('onpause', onpause);
    }
  }, {
    key: "onplay",
    get: function get() {
      return this.getAttribute('onplay');
    },
    set: function set(onplay) {
      this.setAttribute('onplay', onplay);
    }
  }, {
    key: "onstop",
    get: function get() {
      return this.getAttribute('onstop');
    },
    set: function set(onstop) {
      this.setAttribute('onstop', onstop);
    }
  }, {
    key: "ontimeupdate",
    get: function get() {
      return this.getAttribute('ontimeupdate');
    },
    set: function set(ontimeupdate) {
      this.setAttribute('ontimeupdate', ontimeupdate);
    }
  }, {
    key: "onvolumechange",
    get: function get() {
      return this.getAttribute('onvolumechange');
    },
    set: function set(onvolumechange) {
      this.setAttribute('onvolumechange', onvolumechange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Media_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Media_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Media_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this) || this;
    _this.XTYPE = Ext_Media_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Media_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_Media_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_Media_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Media_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Media_Component;
}(Ext_Component_Component);

export { Ext_Media_Component as default };