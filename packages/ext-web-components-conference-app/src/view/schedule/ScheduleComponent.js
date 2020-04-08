import './ScheduleComponent.html';

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
          if (this.favorites != null) {
            record.set('favorite', this.favorites.indexOf(record.getId()) !== -1);
          }
        })
      }
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

  readyPage = (event) => {
    for (var prop in event.detail.cmpObj) { this[prop] = event.detail.cmpObj[prop]; }

    this.sidePanel.setTools([{
      type: 'close',
      handler: () => {this.sidePanel.setHidden(true);}
    }]);

    if (JSON.parse(localStorage.getItem('record'))) {
      if(Ext.os.is.Phone) {
        this.banner.setHidden(true);
        window.main.title.setTitle(JSON.parse(localStorage.getItem('record')).title, 'Speakers');
        window.main.backButton();
        this.tabPanel.setHidden(true);
        this.sidePanel.setHeader(false);
      }
      this.sidePanel.setHidden(false);
    }

    const tplsideContainer = `
      <div>
        <div class="app-event-name">{title}</div>
        <div class="app-event-speaker">{[values.speakerName ? 'by ' + values.speakerName : '']}</div>
        <div class="app-event-time">{[values && values.date && values.date.match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time} - {end_time}</div>
        <div class="app-event-location">{location.name}</div>
        {[values.description ? '<hr/><div class="app-event-abstract" >' + values.description + '</div>' : '']}
      </div>
    `;
    this.sideContainer.setTpl(tplsideContainer);

    if (localStorage.getItem('record')) {
        this.sideContainer.setData(JSON.parse(localStorage.getItem('record')));
        localStorage.removeItem('record');
    }

    if (localStorage.getItem('record')) {
        this.record = JSON.parse(localStorage.getItem('record'));
    }

    if (this.record) {
      switch(this.record.date.match(/(Monday|Tuesday|Wednesday)/)[1])
      {
      case 'Monday' :
          this.tabPanel.setActiveItem(0);
          break;
      case 'Tuesday' :
          this.tabPanel.setActiveItem(1);
          break;
      case 'Wednesday' :
          this.tabPanel.setActiveItem(2);
          break;
      default :
          this.tabPanel.setActiveItem(0);
      }
    }

    const storelist1 = Ext.create('Ext.data.ChainedStore', {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Monday, November 7' }]
      }
    );
    const itemTpllist1 = `
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
      >
      </div>
    </div>
    `;
    this.list1.setItemTpl(itemTpllist1);
    this.list1.setStore(storelist1);

    const storelist2 = Ext.create('Ext.data.ChainedStore', {
      ...this.storeDefaults,
      filters: [{ property: 'date', value: 'Tuesday, November 8' }]
    });
    const itemTpllist2 = `
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
        >
        </div>
      </div>
    `;
    this.list2.setItemTpl(itemTpllist2);
    this.list2.setStore(storelist2);

    const storelist3 = Ext.create('Ext.data.ChainedStore', {
      ...this.storeDefaults,
      filters: [{ property: 'date', value: 'Wednesday, November 9' }]
    });
    const itemTpllist3 = `
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
      >
        </div>
      </div>
    `;
    this.list3.setItemTpl(itemTpllist3);
    this.list3.setStore(storelist3);

    const storelistStar = Ext.create('Ext.data.ChainedStore', {
        ...this.storeDefaults,
        filters: [{ property: 'favorite', value: true }],
        grouper: {
          groupFn: (item) => `${item.get('date')}, ${item.get('start_time')}`,
          sortProperty: 'startDate'
        }
      }
    );
    const itemTpllistStar = `
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
      >
      </div>
    </div>
    `;
    this.listStar.setItemTpl(itemTpllistStar);
    this.listStar.setStore(storelistStar);
  }


  onItemTap = (event) => {
    if (!event) {
      this.record = JSON.parse(localStorage.getItem('record'));
    } else {
      this.record = event.detail.record.data;
    }
    if (this.sidePanel.getHidden()) {
      this.sidePanel.setHidden(false);
    }
    this.sideContainer.setData(this.record);
    if(Ext.os.is.Phone){
      this.banner.setHidden(true);
      this.tabPanel.setHidden(true);
      this.sidePanel.setHeader(false);
      window.main.scheduleTitle(event.detail.record.data.title, 'Schedule');
      window.main.backButton();
    }
    this.store.clearFilter();
  }

  resetSchedule = () => {
    this.banner.setHidden(false);
    this.tabPanel.setHidden(false);
    this.sidePanel.setHidden(true);
    window.main.scheduleTitle('Schedule', 'Schedule');
    window.main.navButton.setIconCls('x-fa fa-bars');
  }

  onFavoriteClick = (currentTarget) => {
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

}
