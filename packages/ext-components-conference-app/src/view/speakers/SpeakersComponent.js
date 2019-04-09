import "./SpeakersComponent.html";
Ext.define('User', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'avatar_url', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'company', type: 'string' },
    { name: 'bio', type: 'string' },
    { name: 'sessions', type: 'string' },
  ],
});
export default class SpeakersComponent {
  constructor() {
    this.store = Ext.create('Ext.data.Store', {
      model: 'User',
      proxy: {
        type: 'ajax',
        url: 'resources/speakers.json',
      },
      reader: {
        type: 'json',
      },
      autoLoad: true,
    });

    this.record = null;
  }

  containerready(event) {
    this.containerCmp = event.detail.cmp;
  }

  itemTap(location, eopts) {
    this.record = eopts.record.data;
  }

  listready(event) {
    this.listCmp = event.detail.cmp;
    const maxWidth = !Ext.os.is.Phone && this.record && 500;
    this.listCmp.setMaxWidth(maxWidth);
    this.listCmp.setItemTpl(`
      <div class="app-list-content">
        <img class="app-list-headshot" src={avatar_url} />
          <div class="app-list-text">
            <div class="app-list-item-title">{name}</div>
            <div class="app-list-item-details">{title} - {company}</div>
          </div>
      </div>
        `)
    this.listCmp.setStore(this.store);
    this.listCmp.on('childtap', this.itemTap.bind(this));
  }
}
