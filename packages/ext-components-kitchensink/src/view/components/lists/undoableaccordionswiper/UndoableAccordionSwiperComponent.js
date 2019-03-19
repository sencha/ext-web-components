import './UndoableAccordionSwiperComponent.css';
import './UndoableAccordionSwiperComponent.html';
Ext.require([
  'Ext.dataview.listswiper.ListSwiper'
]);
export default class UndoableAccordionSwiperComponent {

  constructor () {
    console.log('in UndoableAccordionSwiperComponent constructor');

    yhis.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      sorters: ['last_name', 'first_name'],
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      }
    });
  }

  listready(event) {
    const tpl = `<div><div style="fontSize: '16px', marginBottom: '5px'">{first_name} {last_name}</div><div style="fontSize: '12px', color: '#666'">{title}</div></div>`;
    this.cmp = event.detail.cmp;
    this.cmp.setstore(this.store);
    this.cmp.setItemTpl(tpl);
  }

  oncall(list, info) {
    debugger;
    const record = info.record;
    Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onmessage(list, info) {
    debugger;
    const record = info.record;
    Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onedit(list, info) {
    debugger;
    const record = info.record;
    Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`)
  }

  // onCommitDeleteItem = (list, info) => {
  //   const store = list.getStore(),
  //     record = info.record;

  //   Ext.toast(`Commit delete ${record.get('first_name')} ${record.get('last_name')}`)

  //   store.remove(record);
  // }

  // onDeleteItem = (list, info) => {
  //   const record = info.record;
  //   Ext.toast(`Delete ${record.get('first_name')} ${record.get('last_name')}`)
  // }

  // onUndoDeleteItem = (list, info) => {
  //   const record = info.record;
  //   Ext.toast(`Recover ${record.get('first_name')} ${record.get('last_name')}`)
  // }

}
