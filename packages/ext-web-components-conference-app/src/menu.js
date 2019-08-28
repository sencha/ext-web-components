import ScheduleComponent from './view/schedule/ScheduleComponent.js';
import SpeakersComponent from './view/speakers/SpeakersComponent.js';
import CalendarComponent from './view/calendar/CalendarComponent.js';
import AttendeesComponent from './view/attendees/AttendeesComponent.js';
import AboutComponent from './view/about/AboutComponent.js';

export default function getMenu() {
    return [
        { text: 'Schedule', component: ScheduleComponent, iconCls: 'x-font-icon md-icon-schedule', default: true, leaf: true },
        { text: 'Speakers', component: SpeakersComponent, iconCls: 'x-font-icon md-icon-mic', leaf: true },
        { text: 'Calendar', component: CalendarComponent, iconCls: 'x-font-icon md-icon-event-available', leaf: true },
        { text: 'Attendees', component: AttendeesComponent, iconCls: 'x-font-icon md-icon-people', leaf: true },
        { text: 'About', component: AboutComponent, iconCls: 'x-font-icon md-icon-info-outline', leaf: true },
    ];
}
