import './BasicAccordionSwiperComponent.css';
import './BasicAccordionSwiperComponent.html';
Ext.require([
  'Ext.dataview.listswiper.ListSwiper'
]);

export default class BasicAccordionSwiperComponent {
  constructor () {
    console.log('in BasicAccordionSwiperComponent constructor');

    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      sorters: ['last_name', 'first_name'],
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      }
    });
  }

  listready(event){
    debugger;
    const tpl = `<div><div style="fontSize: '16px', marginBottom: '5px'">{first_name} {last_name}</div><div style="fontSize: '12px', color: '#666'">{title}</div></div>`; 
    this.cmp = event.detail.cmp;
    this.cmp.setStore(this.store);
    this.cmp.setItemTpl(tpl);
    // this.cmp.setPlugins([{
    //   type: 'listswiper',
    //   defaults: { ui: 'action' },
    //   left: [{
    //     iconCls: 'x-fa fa-phone',
    //     text: 'Call',
    //     commit: 'basicaccordionswiper.oncall'
    //   }],
    //   right: [{
    //     iconCls: 'x-fa fa-envelope',
    //     ui: 'alt confirm',
    //     text: 'Message',
    //     commit: 'basicaccordionswiper.onmessage'
    //   }, {
    //     iconCls: 'x-fa fa-edit',
    //     text: 'Edit',
    //     commit: 'basicaccordionswiper.onedit'
    //   }],
    // }]);
  }

  oncall(list, info){
    debugger;
    const record = info.record;
    Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onmessage(list, info){
    debugger;
    const record = info.record;
    Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onedit(list, info){
    debugger;
    const record = info.record;
    Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`)
  }

}
