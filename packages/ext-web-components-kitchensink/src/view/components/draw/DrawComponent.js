import './DrawComponent.html';

export default class DrawComponent {
    constructor() {}

    drawReady = (ele) => {
        this.drawRefCmp = ele.detail.cmp;
        this.drawRefCmp.on({
            element: 'element',
            mousedown: this.onMouseDown,
            mousemove: this.onMouseMove,
            mouseup: this.onMouseUp,
            mouseleave: this.onMouseUp
        });
    }

    headingContainerReady = (event) => {
        this.headingContainerCmp = event.detail.cmp;

        if (Ext.os.is.phone) {
            this.headingContainerCmp.setHtml('<div style="font-size:12px">Use your finger to paint on the surface below.</div>');
        } else {
            this.headingContainerCmp.setHtml('<div>Use your finger or mouse to paint on the surface below.</div>');
        }
    }

    clear = () => {
        this.drawRefCmp.getSurface().destroy();
        this.drawRefCmp.getSurface('overlay').destroy();
        this.drawRefCmp.renderFrame();
    }

    onMouseDown = (e) => {
        let surface = this.drawRefCmp.getSurface(), xy, x, y;

        if (!this.drawRefCmp.sprite) {
            xy = surface.getEventXY(e);
            x = xy[0];
            y = xy[1];

            this.drawRefCmp.list = [x, y, x, y];
            this.drawRefCmp.lastEventX = x;
            this.drawRefCmp.lastEventY = y;

            this.drawRefCmp.sprite = surface.add({
                type: 'path',
                path: [
                    'M', this.drawRefCmp.list[0], this.drawRefCmp.list[1], 'L', this.drawRefCmp.list[0] + 1e-1, this.drawRefCmp.list[1] + 1e-1
                ],
                lineWidth: 30 * Math.random() + 10,
                lineCap: 'round',
                lineJoin: 'round',
                strokeStyle: new Ext.util.Color(
                    Math.random() * 127 + 128, Math.random() * 127 + 128, Math.random() * 127 + 128
                )
            });
            surface.renderFrame();
        }
    }

    onMouseMove = (e) => {
        let surface = this.drawRefCmp.getSurface(), path, xy, x, y, dx, dy, D;

        if (this.drawRefCmp.sprite) {
            xy = surface.getEventXY(e);
            x = xy[0];
            y = xy[1];
            dx = this.drawRefCmp.lastEventX - x;
            dy = this.drawRefCmp.lastEventY - y;
            D = 10;

            if (dx * dx + dy * dy < D * D) {
                this.drawRefCmp.list.length -= 2;
                this.drawRefCmp.list.push(x, y);
            } else {
                this.drawRefCmp.list.length -= 2;
                this.drawRefCmp.list.push(this.drawRefCmp.lastEventX = x, this.drawRefCmp.lastEventY = y);
                this.drawRefCmp.list.push(this.drawRefCmp.lastEventX + 1, this.drawRefCmp.lastEventY + 1);
            }

            path = this.smoothList(this.drawRefCmp.list);

            this.drawRefCmp.sprite.setAttributes({
                path: path
            });

            if (Ext.os.is.Android) {
                Ext.this.drawRefCmp.Animator.schedule(() => surface.renderFrame(), this.drawRefCmp);
            } else {
                surface.renderFrame();
            }
        }
    }

    onMouseUp = () => {
        this.drawRefCmp.sprite = null;
    }

    onResize = () => {
        const size = this.drawRefCmp.element.getSize();
        this.drawRefCmp.getSurface().setRect([0, 0, size.width, size.height]);
        this.drawRefCmp.renderFrame();
    }

    smoothList = (points) => {
        if (points.length < 3) {
            return ['M', points[0], points[1]];
        }

        var dx = [], dy = [], result = ['M'], i, ln = points.length;

        for (i = 0; i < ln; i += 2) {
            dx.push(points[i]);
            dy.push(points[i + 1]);
        }

        dx = Ext.draw.Draw.spline(dx);
        dy = Ext.draw.Draw.spline(dy);
        result.push(dx[0], dy[0], 'C');

        for (i = 1, ln = dx.length; i < ln; i++) {
            result.push(dx[i], dy[i]);
        }

        return result;
    }
}
