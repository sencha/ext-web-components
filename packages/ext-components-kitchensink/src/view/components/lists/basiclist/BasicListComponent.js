import './BasicListComponent.html';

export default class BasicListComponent {
  constructor () {
    console.log('in BasicListComponent constructor');
  }

  listready(event) {
    const store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        proxy: {
          type: 'rest',
          url: 'resources/data/people.json'
        },
        sorters: ['last_name', 'first_name']
    });

    const tpl = `
        <div>
            <div style="fontSize: '16px', marginBottom: '5px'">
                {first_name} {last_name}
            </div>
            <div style="fontSize: '12px', color: '#666'">
                {title}
            </div>
        </di
        v>
    `;
    this.cmp = event.detail.cmp;
    this.cmp.setItemTpl(tpl);
    this.cmp.setStore(this.store);
  }
}
