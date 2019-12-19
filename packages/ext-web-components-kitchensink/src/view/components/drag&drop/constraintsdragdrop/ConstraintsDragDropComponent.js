import './ConstraintsDragDropComponent.scss';
import './ConstraintsDragDropComponent.html';

export default class ConstraintsDragDropComponent {

    doDestroy = () => {
        this.sources.forEach(Ext.destroy.bind(Ext));
    }

    parentReady(ele) {
        this.parentRefCmp = ele.detail.cmp.el;
        this.sources[1].setConstrain({
            element: this.parentRefCmp, vertical: true
        });
        this.sources[2].setConstrain({
            element: this.parentRefCmp, horizontal: true
        });
        this.sources[3].setConstrain({
            element: this.parentReady,
            snap: { x: 60, y: 50 }
        });
        this.parentRefCmp.destroy = this.doDestroy.bind(this);
    }

    elementReady = (ele) => {
        this.elementRefCmp = ele.detail.cmp.el;
    }

    toParentReady = (ele) => {
        this.toParentRefCmp = ele.detail.cmp.el;
        this.sources[0].setElement(this.toParentRefCmp);
    }

    horizontalReady = (ele) => {
        this.horizontalRefCmp = ele.detail.cmp.el;
        this.sources[2].setElement(this.horizontalRefCmp);
    }

    verticalReady = (ele) => {
        this.verticalRefCmp = ele.detail.cmp.el;
        this.sources[1].setElement(this.verticalRefCmp);
    }

    snapReady = (ele) => {
        this.snapRefCmp = ele.detail.cmp.el;
        this.sources[3].setElement(this.snapRefCmp);
    }

    sources = [
        new Ext.drag.Source({
            constrain: {
                element: true
            }
        }),

        new Ext.drag.Source({
            constrain: {
                element: true
            }
        }),

        new Ext.drag.Source({
            constrain: {
                element: true
            }
        }),

        new Ext.drag.Source({
            constrain: {
                element: true
            }
        })
    ];
}
