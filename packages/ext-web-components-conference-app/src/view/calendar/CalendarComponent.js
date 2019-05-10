import "./CalendarComponent.html";

export default class CalendarComponent {
  constructor(props) {
    this.showEvent = false;
    const favs = localStorage.getItem('favoriteEvents');
    this.favorites = favs ? JSON.parse(favs) : [];
  }

  calendarReady(event) {
    const store = Ext.create('Ext.calendar.store.Calendars', {
      eventStoreDefaults: {
        proxy: {
          type: 'ajax',
          url: 'resources/schedule.json'
        },
        filters: item => this.favorites.indexOf(item.get('id')) >= 0
      },
      data: [{
        id: 1,
        name: 'myCal'
      }]
    })
    this.calendar = event.detail.cmp;
    this.calendar.setValue(new Date(2016, 10, 7));
    this.calendar.setStore(store);
  }

  onTap(event) {
    let data = event.detail.context.event.data;
    const day = data && data.date && data.date.match(/(Monday|Tuesday|Wednesday)/)[1];
    this.sidePanel.setHidden(false);
    this.sidePanel.setFlex(1);
    let horizontalRule = '';
    if (data.description) {
      horizontalRule = '<hr/>';
    }

    this.sidePanel.setHtml(`
      <div>
                    <div class="app-event-name">${data.title}</div>
                    <div class="app-event-time">${day} ${data.start_time} - ${data.end_time}</div>
                    <div class="app-event-location">${data.location.name}</div>
                    ${horizontalRule}
                    <div class="app-event-abstract">${data.description}</div>
                </div>`
    )
    if (Ext.os.is.Phone) {
      main.scheduleTitle(event.detail.context.event.data.title);
      main.backButton();
    }
  }

  sidePanelReady(event) {
    this.sidePanel = event.detail.cmp;
  }

  resetCalendar() {
    this.sidePanel.setHidden(true);
    main.scheduleTitle('Calendar');
    main.navButton.setIconCls('x-fa fa-bars');
  }
}
