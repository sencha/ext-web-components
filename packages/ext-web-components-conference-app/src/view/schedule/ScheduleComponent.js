import "./ScheduleComponent.html";

export default class ScheduleComponent {
  constructor() {
    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/schedule.json'
      },
      listeners: {
        load: store => store.each(record => {
          record.set('favorite', this.favorites.indexOf(record.getId()) !== -1)
        }
      )}
    });
    this.storeDefaults = {
      source: this.store,
      autoDestroy: true,
      grouper: {
        property: 'start_time',
        sortProperty: 'startDate'
      }
    };

    this.record = null;

    if (!localStorage.getItem('favoriteEvents')) {
      localStorage.setItem('favoriteEvents', JSON.stringify([]));
    }

    this.favorites = JSON.parse(localStorage.getItem('favoriteEvents'));
  }

  scheduleSidePanelReady(event) {
    this.sidePanel = event.detail.cmp;

    this.sidePanel.setTools([{
      type: 'close',
      handler: () => { this.sidePanel.setHidden(true) }
    }]);

    if (JSON.parse(localStorage.getItem('record'))) {
      if(Ext.os.is.Phone) {
        this.banner.setHidden(true);
        main.title.setTitle(JSON.parse(localStorage.getItem('record')).title, 'Speakers');
        main.backButton();
        this.tabpanelCmp.setHidden(true);
        this.sidePanel.setHeader(false);
      }

      this.sidePanel.setHidden(false);
    }
  }

  tabpanelReady(event) {
    this.tabpanelCmp = event.detail.cmp;
  }

  sideContainerReady(event) {
    this.sideContainer = event.detail.cmp;
    const tpl = `
      <div>
        <div class="app-event-name">{title}</div>
        <div class="app-event-speaker">{[values.speakerName ? 'by ' + values.speakerName : '']}</div>
        <div class="app-event-time">{[values && values.date && values.date.match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time} - {end_time}</div>
        <div class="app-event-location">{location.name}</div>
        {[values.description ? '<hr/><div class="app-event-abstract" >' + values.description + '</div>' : '']}
      </div>
    `;
    this.sideContainer.setTpl(tpl);

    if (localStorage.getItem('record')) {
      this.sideContainer.setData(JSON.parse(localStorage.getItem('record')));
      localStorage.removeItem('record')
    }
  }

  bannerReady(event){
    this.banner = event.detail.cmp;
  }

  tabpanelReady(event){
    this.tabpanelCmp = event.detail.cmp;
    if (localStorage.getItem('record')) {
      this.record = JSON.parse(localStorage.getItem('record'));
    }

    if (this.record) {
      switch(this.record.date.match(/(Monday|Tuesday|Wednesday)/)[1])
      {
        case 'Monday' :
          this.tabpanelCmp.setActiveItem(0);
          break;
        case 'Tuesday' :
          this.tabpanelCmp.setActiveItem(1);
          break;
        case 'Wednesday' :
          this.tabpanelCmp.setActiveItem(2);
          break;
        default :
          this.tabpanelCmp.setActiveItem(0);
      }
    }
  }

  onItemTap(event) {
    if (!event) {
      this.record = JSON.parse(localStorage.getItem('record'))
    } else {
      this.record = event.detail.record.data;
    }

    if (this.sidePanel.getHidden()) {
      this.sidePanel.setHidden(false);
    }

    this.sideContainer.setData(this.record);

    if(Ext.os.is.Phone){
      this.banner.setHidden(true);
      this.tabpanelCmp.setHidden(true);
      this.sidePanel.setHeader(false);
      main.scheduleTitle(event.detail.record.data.title, 'Schedule');
      main.backButton();
    }
  }

  resetSchedule() {
    this.banner.setHidden(false);
    this.tabpanelCmp.setHidden(false);
    this.sidePanel.setHidden(true);
    main.scheduleTitle('Schedule', 'Schedule');
    main.navButton.setIconCls('x-fa fa-bars');
  }

  onFavoriteClick(currentTarget) {
    const data_id = currentTarget.dataset.id;
    Ext.get(currentTarget).ripple(event, { bound: false, color: '#999' });
    const record = this.store.findRecord('id', data_id);
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

  firstListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Monday, November 7' }]
      }
    );

    const itemTpl = `
      <div class="app-list-content">
        <div class="app-list-text">
          <div class="app-list-item-title">{title}</div>
          <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div>
          <div class="app-list-item-details">{categoryName} - {location.name}</div>
          <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div>
        </div>
        <div
          onclick="schedule.onFavoriteClick(this)"
          data-favorite={[ values.favorite ? "on" : "off" ]}
          data-id="{id}"
          class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
        />
      </div>
    `;
    this.list1 = event.detail.cmp;
    this.list1.setItemTpl(itemTpl);
    this.list1.setStore(store);
  }

  secondListReady(event) {
    const store = Ext.create('Ext.data.ChainedStore', {
      ...this.storeDefaults,
      filters: [{ property: 'date', value: 'Tuesday, November 8' }]
    });

    const itemTpl = `
      <div class="app-list-content">
        <div class="app-list-text">
          <div class="app-list-item-title">{title}</div>
          <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div>
          <div class="app-list-item-details">{categoryName} - {location.name}</div>
          <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div>
        </div>
        <div
          onclick="schedule.onFavoriteClick(this)"
          data-id="{id}"
          data-favorite={[ values.favorite ? "on" : "off" ]}
          class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
        />
      </div>
    `;
    this.list2 = event.detail.cmp;
    this.list2.setItemTpl(itemTpl);
    this.list2.setStore(store);
  }

  thirdListReady(event) {
    const store = Ext.create( 'Ext.data.ChainedStore', {
      ...this.storeDefaults,
      filters: [{ property: 'date', value: 'Wednesday, November 9' }]
    });

    const itemTpl = `
      <div class="app-list-content">
        <div class="app-list-text">
          <div class="app-list-item-title">{title}</div>
          <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div>
          <div class="app-list-item-details">{categoryName} - {location.name}</div>
          <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div>
        </div>
        <div
          onclick="schedule.onFavoriteClick(this)"
          data-id="{id}"
          data-favorite={[ values.favorite ? "on" : "off" ]}
          class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
        />
      </div>
    `;
    this.list3 = event.detail.cmp;
    this.list3.setItemTpl(itemTpl);
    this.list3.setStore(store);
  }

  starListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'favorite', value: true }],
        grouper: {
          groupFn: (item) => `${item.get('date')}, ${item.get('start_time')}`,
          sortProperty: 'startDate'
        }
      }
    );

    const itemTpl = `
      <div class="app-list-content">
        <div class="app-list-text">
          <div class="app-list-item-title">{title}</div>
          <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div>
          <div class="app-list-item-details">{categoryName} - {location.name}</div>
          <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div>
        </div>
        <div
          onclick="schedule.onFavoriteClick(this)"
          data-id="{id}"
          data-favorite={[ values.favorite ? "on" : "off" ]}
          class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
        />
      </div>
    `;
    this.listStar = event.detail.cmp;
    this.listStar.setItemTpl(itemTpl);
    this.listStar.setStore(store);
  }
}
