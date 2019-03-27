import './UndoableStepSwiperComponent.css';
import './UndoableStepSwiperComponent.html';

export default class UndoableStepSwiperComponent {
  constructor() {
    console.log('in UndoableStepSwiperComponent constructor');
  }

  listReady(event) {
    this.list = event.detail.cmp;
    const tpl = `<div><div style="fontSize: '16px', marginBottom: '5px'">{first_name} {last_name}</div><div style="fontSize: '12px', color: '#666'">{title}</div></div>`;
    this.store = Ext.create('Ext.data.Store', { 
      autoLoad: true,
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      },
      sorters: ['last_name', 'first_name']
    });
    const plugins = [{
      type: 'listswiper',
      defaults: {
          ui: 'action'
      },
      widget: {
          xtype: 'listswiperstepper'
      },
      left: [{
          iconCls: 'x-fa fa-phone',
          text: 'Call',
          commit: this.onCall.bind(this)
      }],
      right: [{
          iconCls: 'x-fa fa-envelope',
          ui: 'alt confirm',
          text: 'Message',
          commit: this.onMessage.bind(this)
      }, {
          iconCls: 'x-fa fa-delete',
          text: 'Edit',
          precommit: this.onDeleteItem.bind(this),
          commit: this.onCommitDeleteItem.bind(this),
          revert: this.onUndoDeleteItem.bind(this),
          undoable: true
      }]
    }];
    this.list.setStore(this.store);
    this.list.setItemTpl(tpl);
    this.list.setPlugins(plugins);
  }

  onCall(list, info) {
    const record = info.record;
    Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onMessage(list, info) {
    const record = info.record;
    Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onEdit(list, info) {
    const record = info.record;
    Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onSelect(event) {
    const selected = event.detail.selected.data;
    Ext.toast(`You selected ${selected.first_name} ${selected.last_name}.`);
  }

  onCommitDeleteItem = (list, info) => {
      const record = info.record;

    Ext.toast(`Commit delete ${record.get('first_name')} ${record.get('last_name')}`)

    this.store.remove(record);
    this.cmp.setStore(this.store);
  }

  onDeleteItem = (list, info) => {
    const record = info.record;
    Ext.toast(`Delete ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onUndoDeleteItem = (list, info) => {
    const record = info.record;
    Ext.toast(`Recover ${record.get('first_name')} ${record.get('last_name')}`)
  }    

}