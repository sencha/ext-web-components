import './BasicStepSwiperComponent.html';

export default class BasicStepSwiperComponent {
  constructor () {}

  onItemReady = (event) => {
    this.theListview = event.detail.cmp;
    const tpl =`<div>
    <div style="font-size:16px;margin-bottom:5px;">{first_name} {last_name}</div>
      <div style="font-size:12px;color:#666;">{title}</div>
    </div>`;

    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      },
      sorters: ['last_name', 'first_name']
    });

    const plugins=[{
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
          iconCls: 'x-fa fa-edit',
          text: 'Edit',
          commit: this.onEdit.bind(this)
      }]
    }]

    this.theListview.setStore(this.store);
    this.theListview.setItemTpl(tpl);
    this.theListview.setPlugins(plugins);
  }

  onSelect = (event) => {
    const selected = event.detail.selected.data;
    Ext.toast(`You selected ${selected.first_name} ${selected.last_name}.`);
  }

  onCall = (list, {record}) => {
    Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onMessage = (list, {record}) => {
    Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onEdit = (list, {record}) => {
    Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`)
  }

}
