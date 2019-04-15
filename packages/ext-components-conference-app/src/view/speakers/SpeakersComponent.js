// import './SpeakerComponent.js';
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
    this.speakerId = null;
  }

  containerready(event) {
    this.containerCmp = event.detail.cmp;
  }

  itemTap(location, eopts) {
    this.record = eopts.record.data;
    this.speakerId = eopts.record.id;
    if (this.sideContainer) {
    this.sideContainer.remove(this.speakerChild);
    this.containerCmp.remove(this.sideContainer);
    }

    this.sideContainer = Ext.create({
      xtype: 'panel',
      flex: '1',
      layout: 'vbox',
      padding: '20',
    });
    this.speakerChild = Ext.create({
      xtype: 'container',
      html: `
                <div class="app-speaker-ct">
                            <img class="app-speaker-image" src=${this.record.avatar_url}></img>
                            <div class="app-speaker-text">
                                <div class="app-speaker-name">${this.record.name}</div>
                                <div class="app-speaker-title">${this.record.title}</div>
                                <div class="app-speaker-company">${this.record.company}</div>
                                <div class="app-speaker-bio">${this.record.bio}</div>
                            </div>
                        </div>
                    `,
    });
    this.sideContainer.add(this.speakerChild);
    this.containerCmp.add(this.sideContainer);
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
        `);
    this.listCmp.setStore(this.store);
    this.listCmp.on('childtap', this.itemTap.bind(this));
  }
}
