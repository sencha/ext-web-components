import "./CalendarComponent.html";
import '../event/CustomEvent.js';

export default class CalendarComponent {
  constructor(props) { 
    localStorage.setItem('favoriteEvents', JSON.stringify(['57f6ddc31ff4d', '57ee3b237afcb']));
    this.hideEvent = true;
    const favs = localStorage.getItem('favoriteEvents');
    this.favorites = favs ? JSON.parse(favs) : [];
  }

  containerReady(event) {
    console.log('çontainer is ready')
  }

  calendarReady(event) {
    console.log('calendar is ready')
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

  onTap(event){
      console.log(event.detail.context.event.data)
      let eventDetail = event.detail.context.event.data;
      eventDetail = JSON.stringify(eventDetail);
      console.log(eventDetail,'eventDetail');
      this.showEvent = !this.showEvent;
      document.getElementById('customEvent').setAttribute('hide', this.showEvent);
      document.getElementById('customEvent').setAttribute('event', eventDetail);
  }
}
