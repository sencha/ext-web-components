import { define, config } from '../../../extjs-core/src';

import { Model } from './Model';

@define
class TreeModel extends Model {
    /* eslint-disable */
    @config
    static fields = [
        { name: 'parentId',   type: 'auto',    defaultValue: null,  allowNull: true },
        { name: 'index',      type: 'int',     defaultValue: -1,    persist: false  }, // TODO , convert: null ?
        { name: 'depth',      type: 'int',     defaultValue: 0,     persist: false  }, // TODO , convert: null ?
        { name: 'expanded',   type: 'bool',    defaultValue: false, persist: false  }, // TODO , convert: null ?
        { name: 'expandable', type: 'bool',    defaultValue: true,  persist: false  }, // TODO , convert: null ?
        { name: 'checked',    type: 'auto',    defaultValue: null,  persist: false  }, // TODO , convert: null ?
        { name: 'leaf',       type: 'bool',    defaultValue: false                  },
        { name: 'cls',        type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'iconCls',    type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'icon',       type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'glyph',      type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'root',       type: 'boolean', defaultValue: false, persist: false  }, // TODO , convert: null ?
        { name: 'isLast',     type: 'boolean', defaultValue: false, persist: false  }, // TODO , convert: null ?
        { name: 'isFirst',    type: 'boolean', defaultValue: false, persist: false  }, // TODO , convert: null ?
        { name: 'allowDrop',  type: 'boolean', defaultValue: true,  persist: false  }, // TODO , convert: null ?
        { name: 'allowDrag',  type: 'boolean', defaultValue: true,  persist: false  }, // TODO , convert: null ?
        { name: 'loaded',     type: 'boolean', defaultValue: false, persist: false  }, // TODO , convert: null ?
        { name: 'loading',    type: 'boolean', defaultValue: false, persist: false  }, // TODO , convert: null ?
        { name: 'href',       type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'hrefTarget', type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'qtip',       type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'qtitle',     type: 'string',  defaultValue: '',    persist: false  }, // TODO , convert: null ?
        { name: 'qshowDelay', type: 'int',     defaultValue: 0,     persist: false  }, // TODO , convert: null ?
        { name: 'children',   type: 'auto',    defaultValue: null,  persist: false  }, // TODO , convert: null ?
        { name: 'visible',    type: 'boolean', defaultValue: true,  persist: false  },
        { name: 'text',       type: 'string',                       persist: false  }
    ];
    /* eslint-enable */
}

export { TreeModel };
