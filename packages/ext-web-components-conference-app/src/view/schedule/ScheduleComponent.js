import "./ScheduleComponent.html";
import MainComponent from "../main/MainComponent";

export default class ScheduleComponent {
  constructor() {
    if (!localStorage.getItem('favoriteEvents')) {
      localStorage.setItem('favoriteEvents', JSON.stringify([]));
    }
    this.favorites = JSON.parse(localStorage.getItem('favoriteEvents'));
    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/schedule.json'
      },
      listeners: {
        load: store => store.each(record => {
          record.set('favorite', this.favorites.indexOf(record.getId()) !== -1)
//          console.dir(record.data)
        }
      ),
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
  }

<<<<<<< HEAD
  panelReady(event) {
    this.containerCmp = event.detail.cmp;
    
=======
  panelready(event) {
    this.containerCmp = event.detail.cmp;    
>>>>>>> 2d407b2195ee11d8c3baec02af17773ae6786bdc
  }

  tabpanelReady(event) {
    this.tabpanelCmp = event.detail.cmp;
  }

  containerReady2(event) {
    this.containerCmp2 = event.detail.cmp;
    const tpl = `
    <div>
      <div class="app-event-name">{title}</div>
      <div class="app-event-speaker">{[values.speakerName ? 'by ' + values.speakerName : '']}</div>
      <div class="app-event-time">{[values && values.date && values.date.match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time} - {end_time}</div>
      <div class="app-event-location">{location.name}</div>
      {[values.description ? '<hr/><div class="app-event-abstract" >' + values.description + '</div>' : '']}
    </div>
    `;
    const tpl2 = `
    <div>
      <div class="app-event-name">{title}</div>
      <div class="app-event-location">{location.name}</div>
    </div>
    `;

    this.containerCmp2.setTpl(tpl);

    if (localStorage.getItem('record')) {
      debugger;
      console.log(localStorage.getItem('record'));
      this.containerCmp.setHidden(false);
      this.containerCmp2.setData(JSON.parse(localStorage.getItem('record')));
    }
  }

  containerReady(event){
    this.container = event.detail.cmp;
  }

  tabpanelReady(event){
    this.tabPanel = event.detail.cmp;
  }

  onItemTap(event) {
    if (!event) {
      this.record = JSON.parse(localStorage.getItem('record'))
    } else {
    this.record = event.detail.record.data;
    }

    if (this.containerCmp.getHidden()) {
      this.containerCmp.setHidden(false);
    }

    this.containerCmp2.setData(this.record);
  
    if(Ext.os.is.Phone){
      this.container.setHidden(true);
      this.tabPanel.setHidden(true);
      main.scheduleTitle(event.detail.record.data.title);
      main.backButton();
    }
  }

  resetSchedule() {
    this.container.setHidden(false);
    this.tabPanel.setHidden(false);
    this.containerCmp.setHidden(true);
    main.scheduleTitle('Schedule');
    main.navButton.setIconCls('x-fa fa-bars');
  }

  onFavoriteClick(event) {
    const data_id = event.currentTarget.dataset.id;
    Ext.get(event.target).ripple(event, { bound: false, color: '#999' });
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
        onclick="schedule.onFavoriteClick"
        data-favorite={[ values.favorite ? "on" : "off" ]}
        data-id="{id}"
        class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
      />
    </div>
    `
    this.list1 = event.detail.cmp;
    this.list1.setItemTpl(itemTpl);
    this.list1.setStore(store);
  }

  secondListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Tuesday, November 8' }]
      }
    );
    const itemTpl = `<div class="app-list-content">
                  <div class="app-list-text">
                    <div class="app-list-item-title">{title}</div>
                    <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div> 
                          <div class="app-list-item-details">{categoryName} - {location.name}</div>
                          <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div> 
                      </div>
                      <div
                        onclick="schedule.onFavoriteClick"
                        data-id="{id}"
                        data-favorite={[ values.favorite ? "on" : "off" ]}
                    class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
                  />
              </div>`
    this.list2 = event.detail.cmp;
    this.list2.setItemTpl(itemTpl);
    this.list2.setStore(store);
  }

  thirdListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Wednesday, November 9' }]
      }
    );
    const itemTpl = `<div class="app-list-content">
                  <div class="app-list-text">
                    <div class="app-list-item-title">{title}</div>
                    <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div> 
                          <div class="app-list-item-details">{categoryName} - {location.name}</div>
                          <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div> 
                    </div>
                    <div
                      onclick="schedule.onFavoriteClick"
                      data-id="{id}"
                      data-favorite={[ values.favorite ? "on" : "off" ]}
                      class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
                    />
                  </div>`
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
    const itemTpl = `<div class="app-list-content">
                  <div class="app-list-text">
                    <div class="app-list-item-title">{title}</div>
                    <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div> 
                          <div class="app-list-item-details">{categoryName} - {location.name}</div>
                          <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div> 
                    </div>
                    <div
                      onclick="schedule.onFavoriteClick"
                      data-id="{id}"
                      data-favorite={[ values.favorite ? "on" : "off" ]}
                      class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
                    />
                  </div>`
    this.listStar = event.detail.cmp;
    this.listStar.setItemTpl(itemTpl);

    this.listStar.setStore(store);
  }
}
