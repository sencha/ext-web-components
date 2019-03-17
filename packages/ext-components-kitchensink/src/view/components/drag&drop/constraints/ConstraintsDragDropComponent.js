import './ConstraintsDragDropComponent.css';
import './ConstraintsDragDropComponent.html';


export default class ConstraintsDragDropComponent {

  constructor () {}

  doDestroy() {
    this.sources.forEach(Ext.destroy.bind(Ext));
  }

  parentReady = (ele) => {
    this.parentRef = ele.detail.cmp.el;
    this.sources[1].setConstrain({
        element: this.parentRef, vertical: true
    });
    this.sources[2].setConstrain({
        element: this.parentRef, horizontal: true
    });
    this.sources[3].setConstrain({
        element: this.parentReady,
        snap: { x: 60, y: 50 }
    });
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  elementReady = (ele) => {
    this.elementRef = ele.detail.cmp.el;
  }

  toParentReady = (ele) => {
    this.toParentRef = ele.detail.cmp.el;
    this.sources[0].setElement(this.toParentRef);
  }

  horizontalReady = (ele) => {
    this.horizontalRef = ele.detail.cmp.el;
    this.sources[2].setElement(this.horizontalRef);
  }

  verticalReady = (ele) => {
    this.verticalRef = ele.detail.cmp.el;
    this.sources[1].setElement(this.verticalRef);
  }

  snapReady = (ele) => {
    this.snapRef = ele.detail.cmp.el;
    this.sources[3].setElement(this.snapRef);
  }

  sources = [
    // Constrain to direct parent
    new Ext.drag.Source({
        constrain: {
            element: true
        }
    }),

     // Allow only vertical dragging. Constrain to the owner Panel.
    new Ext.drag.Source({
      constrain: {
        element: true
      }
    }),

    // Allow only horizontal dragging. Constrain to the owner Panel.
    new Ext.drag.Source({
      constrain: {
        element: true
      }
    }),

    // Snap drag to a [30, 50] grid. Constrain to the owner panel.
    new Ext.drag.Source({
      constrain: {
        element: true
      }
    })
  ];
}
