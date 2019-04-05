import './OrgChartComponent.html';
// import {createStore} from './createStore';

export default class OrgChartComponent {

  constructor() {
    this.defineOrgChart();
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
        url: '1.jpg',
        expanded: true,
        children: [
          {
            name: 'Rina Hohn',
            title: 'Vice President, Engineering',
            url: '4.jpg',
            expanded: true,
            children: [{
              name: 'Edgardo Elvin',
              title: 'Director of Engineering',
              url: '2.jpg',
              expanded: true,
              children: [
                {
                  name: 'Martin Patlan',
                  title: 'Sr. Software Architect',
                  url: '13.jpg'
                },
                {
                  name: 'Paola Motes',
                  title: 'Sr. Software Engineer',
                  url: '8.jpg'
                },
                {
                  name: 'Angelo Aden',
                  title: 'Sr. Software Engineer',
                  url: '12.jpg'
                },
                {
                  name: 'Christina Timmins',
                  title: 'Sr. Software Engineer',
                  url: '14.jpg'
                },
                {
                  name: 'Derrick Curtsinger',
                  title: 'Software Engineer',
                  url: '15.jpg'
                }
              ]
            }, {
              name: 'Freda Mcmurray',
              title: 'Sr. Engineering Manager',
              url: '9.jpg'
            }]
          },
          {
            name: 'Ramiro Frew',
            title: 'Vice President, Marketing',
            url: '5.jpg',
            expanded: true,
            children: [
              {
                name: 'Conrad Yohe',
                title: 'Sr. Director, Product Management',
                url: '3.jpg'
              }
            ]
          },
          {
            name: 'Marita Meserve',
            title: 'Senior Vice President and Chief Financial Officer',
            url: '7.jpg'
          },
          {
            name: 'Tory Orban',
            title: 'Vice President, Global Alliances & Professional Services',
            url: '10.jpg',
            expanded: true,
            children: [
              {
                name: 'Jarred Lasky',
                title: 'Principal Architect',
                url: '11.jpg'
              }
            ]
          }
        ]
      }
    }), Ext.create('Ext.data.TreeStore', {
      root: {
        name: 'Cliff Capote',
        title: 'CEO',
        url: '1.jpg',
        expanded: true,
        children: [
          {
            name: 'Rina Hohn',
            title: 'Vice President, Engineering',
            url: '4.jpg',
            expanded: true,
            children: [{
              name: 'Edgardo Elvin',
              title: 'Director of Engineering',
              url: '2.jpg',
              expanded: true,
              children: [
                {
                  name: 'Martin Patlan',
                  title: 'Sr. Software Architect',
                  url: '13.jpg'
                },
                {
                  name: 'Paola Motes',
                  title: 'Sr. Software Engineer',
                  url: '8.jpg'
                },
                {
                  name: 'Angelo Aden',
                  title: 'Sr. Software Engineer',
                  url: '12.jpg'
                },
                {
                  name: 'Christina Timmins',
                  title: 'Sr. Software Engineer',
                  url: '14.jpg'
                },
                {
                  name: 'Derrick Curtsinger',
                  title: 'Software Engineer',
                  url: '15.jpg'
                }
              ]
            }, {
              name: 'Freda Mcmurray',
              title: 'Sr. Engineering Manager',
              url: '9.jpg'
            }]
          },
          {
            name: 'Ramiro Frew',
            title: 'Vice President, Marketing',
            url: '5.jpg',
            expanded: true,
            children: [
              {
                name: 'Conrad Yohe',
                title: 'Sr. Director, Product Management',
                url: '3.jpg'
              }
            ]
          },
          {
            name: 'Marita Meserve',
            title: 'Senior Vice President and Chief Financial Officer',
            url: '7.jpg'
          },
          {
            name: 'Tory Orban',
            title: 'Vice President, Global Alliances & Professional Services',
            url: '10.jpg',
            expanded: true,
            children: [
              {
                name: 'Jarred Lasky',
                title: 'Principal Architect',
                url: '11.jpg'
              }
            ]
          }
        ]
      }
    })
  }

  onTooltip (component, tooltip, node, element, event){
    const record = node.data,
          name = record.get('name'),
          title = record.get('title');
    tooltip.setHtml(`<span style="font-weight: bold">${name}</span><br>${title}`);
  };

  horizontaltreeReady(event) {
    let cmp = event.detail.cmp;
    cmp.setInteractions(this.interactionsVar);
    cmp.setStore(this.store);
    cmp.setTooltip({
      renderer: this.onTooltip.bind(this),
    });
  
  }

  defineOrgChart = function() {
    /**
* By overriding the `addNodes` and `updateNodes` of the stock tree component
* we are turning it into an org chart.
*/
Ext.define('Ext.react.Orgchart', {
 extend: 'Ext.d3.hierarchy.tree.HorizontalTree',
 xtype: 'orgchart',
 config: {
     imageField: 'url',
     imagePath: ''
 },

 /**
  * First, we create a `clipPath` element that will act as a clip mask
  * for employee images, where the clip shape is a circle.
  */
 setupScene: function () {
     this.superclass.setupScene.apply(this, arguments);

     this.getDefs().append('clipPath')
         .attr('id', 'node-clip')
         .append('circle')
         .attr('r', 45);
 },

 /**
  * Then we override the `addNodes` method that is given a selection
  * of all entering nodes (see https://bost.ocks.org/mike/selection/
  * for more info). Our method populates this selection with `image`
  * elements (instead of the `circle` and `text` elements) and sets
  * their `href` attributes to the value of the `imageField` (a custom
  * config we defined) field of a tree store record, as well as setting
  * the `clip-path` attribute to the `id` of the clip path we defined
  * in the `setupScene` method.
  */
 addNodes: function (selection) {
     var imagePath = this.getImagePath(),
         imageField = this.getImageField();

     selection
         .attr('opacity', 0)
         .append('image')
         .attr('xlink:href', function (node) {
             return imagePath + node.data.get(imageField);
         })
         .attr('x', '-45px')
         .attr('y', '-45px')
         .attr('width', '90px')
         .attr('height', '90px')
         .attr('clip-path', 'url(#node-clip)');
 },

 /**
  * Finally, the `updateNodes` method sets the position of all new and changed
  * nodes in the tree by calling the `nodeTransform` function on the selection
  * of said nodes.
  */
 updateNodes: function (update, enter) {
     var me = this,
         nodeTransform = me.getNodeTransform(),
         selection = update.merge(enter);

     selection
         .transition(me.layoutTransition)
         .attr('opacity', 1)
         .call(nodeTransform);
 }
});
  }


}
