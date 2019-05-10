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
    if (!localStorage.getItem('favoriteEvents')) {
      localStorage.setItem('favoriteEvents', JSON.stringify([]));
    }

    this.favorites = JSON.parse(localStorage.getItem('favoriteEvents'));
    this.schedulestore = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/schedule.json'
      },
      listeners: {
        load: store => store.each(record => record.set(
          'favorite', this.favorites.indexOf(record.getId()) !== -1
        )),
      }
    });

    this.storeDefaults = {
      source: this.schedulestore,
      autoDestroy: true,
      grouper: {
        property: 'start_time',
        sortProperty: 'startDate'
      }
    };

    this.speakerStore = Ext.create('Ext.data.Store', {
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

    this.scheduleChainedStore = Ext.create('Ext.data.ChainedStore', {
      autoDestroy: true,
      source: this.schedulestore
    });

    this.record = null;
    this.speakerId = null;

    if (this.record && this.record.sessions) {
      this.scheduleChainedStore.filter({
        value: this.record.sessions,
        property: 'id',
        operator: 'in'
      });
    }
  }

  containerReady(event) {
    this.containerCmp = event.detail.cmp;
  }

  panelReady(event) {
    this.panelCmp = event.detail.cmp;
  }

  sideContainer(event) {
    this.sideContainerCmp = event.detail.cmp;
    const tpl = `
        <div class="app-speaker-ct">
          <img class="app-speaker-image" src={avatar_url}></img>
          <div class="app-speaker-text">
              <div class="app-speaker-name">{name}</div>
              <div class="app-speaker-title">{title}</div>
              <div class="app-speaker-company">{company}</div>
              <div class="app-speaker-bio">{bio}</div>
          </div>
      </div>
      <h2 style={{marginTop: '40px', color: '#999' }}>Events</h2>
    `;
    this.sideContainerCmp.setTpl(tpl);
  }

  onFavoriteClick(currentTarget) {
    const data_id = currentTarget.dataset.id;
    Ext.get(currentTarget).ripple(event, { bound: false, color: '#999' });
    const record = this.scheduleChainedStore.findRecord('id', data_id);
    let favorites = [];
    const favoritesSet = JSON.parse(JSON.stringify(this.favorites));

    if (this.favorites.indexOf(data_id) === -1) {
      favorites = [...favoritesSet, data_id];
      record.set('favorite', true);
    } else {
      favorites = favoritesSet.filter(event => event !== data_id);
      record.set('favorite', false);
    }

    localStorage.setItem('favoriteEvents', JSON.stringify(favorites));
    this.favorites = favorites;
  }

  listReady2 (event) {
    this.listCmp2 = event.detail.cmp;
    const itemTpl = `
      <div class="app-list-content">
        <div class="app-list-text">
            <div class="app-list-item-title">{title}</div>
            <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div>
            <div class="app-list-item-details">{categoryName} - {location.name}</div>
            <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div>
        </div>
        <div
            onclick="speakers.onFavoriteClick(this)"
            data-id="{id}"
            data-favorite={[ values.favorite ? "on" : "off" ]}
            class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
          />
      </div>
    `;
    this.listCmp2.setItemTpl(itemTpl);
    this.listCmp2.on('childtap', this.onSpeakerScheduleClick.bind(this));

  }

  onSpeakerScheduleClick(location, eopts) {
    localStorage.setItem('record', JSON.stringify(eopts.record.data));
    const scheduleNode = main.navTreelistCmp.getStore().findNode('hash', 'schedule');
    window.main.navigate(scheduleNode)
    window.main.navTreelistCmp.setSelection(scheduleNode);
  }

  speakerTap(location, eopts) {
    this.record = eopts.record.data;
    this.sideContainerCmp.setData(this.record);

    this.speakerId = eopts.record.id;

    if (this.record && this.record.sessions) {
      this.scheduleChainedStore.filter('id', this.record.sessions);
    }
    this.listCmp2.setStore(this.scheduleChainedStore);

    if (this.panelCmp.getHidden()) {
      this.panelCmp.setHidden(false);
    }

    if (Ext.os.is.Phone) {
      this.listCmp.setHidden(true);
      this.panelCmp.setHidden(false);
      main.scheduleTitle(this.record.name, 'Speakers');
      main.backButton();
    }
  }

  resetSpeakers() {
    this.listCmp.setHidden(false);
    this.panelCmp.setHidden(true);
    main.scheduleTitle('Speakers', 'Speakers');
    main.navButton.setIconCls('x-fa fa-bars');
  }


  listReady(event) {
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
    this.listCmp.setStore(this.speakerStore);
    this.listCmp.on('childtap', this.speakerTap.bind(this));
  }
}
