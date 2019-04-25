import './Chart.js';
import './OrgChartComponent.html';

export default class OrgChartComponent {
  constructor() {
    this.interactionsVar = {
      type: 'panzoom',
      zoom: {
        extent: [0.5, 2],
        doubleTap: false
      },
    };
    this.store = Ext.create('Ext.data.TreeStore', {
      root: {
        name: 'Cliff Capote',
        title: 'CEO',
        url: 'resources/images/org-chart/1.jpg',
        expanded: true,
        children: [
          {
            name: 'Rina Hohn',
            title: 'Vice President, Engineering',
            url: 'resources/images/org-chart/4.jpg',
            expanded: true,
            children: [{
              name: 'Edgardo Elvin',
              title: 'Director of Engineering',
              url: 'resources/images/org-chart/2.jpg',
              expanded: true,
              children: [
                {
                  name: 'Martin Patlan',
                  title: 'Sr. Software Architect',
                  url: 'resources/images/org-chart/13.jpg'
                },
                {
                  name: 'Paola Motes',
                  title: 'Sr. Software Engineer',
                  url: 'resources/images/org-chart/8.jpg'
                },
                {
                  name: 'Angelo Aden',
                  title: 'Sr. Software Engineer',
                  url: 'resources/images/org-chart/12.jpg'
                },
                {
                  name: 'Christina Timmins',
                  title: 'Sr. Software Engineer',
                  url: 'resources/images/org-chart/14.jpg'
                },
                {
                  name: 'Derrick Curtsinger',
                  title: 'Software Engineer',
                  url: 'resources/images/org-chart/15.jpg'
                }
              ]
            }, {
              name: 'Freda Mcmurray',
              title: 'Sr. Engineering Manager',
              url: 'resources/images/org-chart/9.jpg'
            }]
          },
          {
            name: 'Ramiro Frew',
            title: 'Vice President, Marketing',
            url: 'resources/images/org-chart/5.jpg',
            expanded: true,
            children: [
              {
                name: 'Conrad Yohe',
                title: 'Sr. Director, Product Management',
                url: 'resources/images/org-chart/3.jpg'
              }
            ]
          },
          {
            name: 'Marita Meserve',
            title: 'Senior Vice President and Chief Financial Officer',
            url: 'resources/images/org-chart/7.jpg'
          },
          {
            name: 'Tory Orban',
            title: 'Vice President, Global Alliances & Professional Services',
            url: 'resources/images/org-chart/10.jpg',
            expanded: true,
            children: [
              {
                name: 'Jarred Lasky',
                title: 'Principal Architect',
                url: 'resources/images/org-chart/11.jpg'
              }
            ]
          }
        ]
      }
    });
  }

  onTooltip (component, tooltip, node, element, event){
    const record = node.data;
    const name = record.get('name'), title = record.get('title');
    tooltip.setHtml(`<span style="font-weight: bold">${name}</span><br>${title}`);
  };

  horizontalTreePanelReady(event) {
    const orgChart = new Components.Kitchensink.Orgchart();
    orgChart.setInteractions(this.interactionsVar);
    orgChart.setStore(this.store);
    orgChart.setTooltip({
      renderer: this.onTooltip.bind(this),
    });

    const targetPanel = event.detail.cmp;
    const targetPanelDom = targetPanel.getRenderTarget().el.dom;
    orgChart.setRenderTo(targetPanelDom);
  }
}
