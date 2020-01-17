import AboutComponent from './components/About.vue';
import HomeComponent from './components/Home.vue';

export default function getMenu() {
    return [
        { text: 'Home', hash: 'home', component: HomeComponent, iconCls: 'x-fa fa-home', leaf: true },
        { text: 'About', hash: 'about', component: AboutComponent, iconCls: 'x-fa fa-question', leaf: true}
    ];
}