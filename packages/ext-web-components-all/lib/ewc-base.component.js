//Tue Sep 10 2019 06:57:45 GMT-0400 (Eastern Daylight Time)
import 'script-loader!node_modules/@sencha/ext-web-components-all/ext/ext.all.prod';
import 'script-loader!node_modules/@sencha/ext-web-components-all/ext/css.prod';
import HTMLParsedElement from './HTMLParsedElement'
//import Common from './Common'

export default class EwcBaseComponent extends HTMLElement {

    constructor() {
        super ();

        this.newDiv = document.createElement('div');
        this.insertAdjacentElement('beforebegin', this.newDiv);
        this.xtype = this.XTYPE;

        //this.XTYPE = .XTYPE()

        //this.propertiesobject = this.PROPERTIESOBJECT
        //this.methods = this.METHODS

        //this.events = this.EVENTS
        //console.log(this.methods)



        //this.properties = 'properties';
        //this.propertiesobject = propertiesobject
        //this.events = events;
        //this.eventnames = 'eventnames';

        this.base = EwcBaseComponent;
    }
    connectedCallback() {
        this.newDiv = document.createElement('div');
        this.insertAdjacentElement('beforebegin', this.newDiv);
        //this.xtype = this.XTYPE;
        //this.base = EwcBaseComponent;
        this.properties = []
        //console.log(this.PROPERTIESOBJECT)
        for (var property in this.PROPERTIESOBJECT) {
            this.properties.push(property)
        }
        this.events = this.EVENTS
    }
    parsedCallback() {
        this.initMe()
    }


//******* base start */
initMe() {
    console.log('');
    console.log('*** initMe for ' + this.currentElName);
    this.createRawChildren();
    this.setHasParent();
    this.setDirection();
    this.figureOutA();
    this.createProps(this.properties, this.propertiesobject, this.events, this.eventnames);
    this.createExtComponent();
    //this.assessChildren(this.base, this.xtype);
    //this.atEnd();
    //if (this.last == true){
    //    console.log('this is the end...')
    //}
}
;
createRawChildren() {
    //console.log('createRawChildren')
    if (this.currentEl.isAngular) {
        this.currentEl.rawChildren = this.currentEl.childComponents;
    }
    else {
        this.currentEl.ewcChildren = Array.prototype.slice.call(this.currentEl.children);
        this.currentEl.rawChildren = [];
        var num = 0;
        for (var i = 0; i < this.currentEl.ewcChildren.length; i++) {
            if (this.currentEl.ewcChildren[i].XTYPE != undefined) {
                this.currentEl.rawChildren[num] = {};
                this.currentEl.rawChildren[num] = this.currentEl.ewcChildren[i];
                this.currentEl.rawChildren[num].currentComponent = this.currentEl.ewcChildren[i];
                this.currentEl.rawChildren[num].node = this.currentEl.ewcChildren[i];
                num++;
            }
        }
    }
    //console.log('rawChildren')
    //console.log(this.currentEl.rawChildren)
}
setHasParent() {
    var hasParent;
    if (this.parentEl == null) {
        this.hasParent = false;
    }
    else {
        if (this.parentElName.substring(0, 4) == 'EXT-') {
            this.hasParent = true;
        }
        else {
            this.hasParent = false;
        }
    }
    //return hasParent
}
setDirection() {
    if (this.base.count == 0) {
        this.base.count++;
        if (this.hasParent == false) {
            this.base.DIRECTION = 'TopToBottom';
        }
        else {
            if (this.parentElName.substring(0, 4) == 'EXT-') {
                this.base.DIRECTION = 'BottomToTop';
            }
            else {
                this.base.DIRECTION = 'TopToBottom';
            }
        }
    }
    //console.log(this.base.DIRECTION);
}
figureOutA() {
    //if (this.hasParent && this.parentEl.A == undefined) {
    if (this.hasParent &&
        this.parentEl.A == undefined &&
        this.parentEl.nodeName.substring(0, 4) == 'EXT-'
        ) {
        this.init(this.parentEl);
    }
    if (this.currentEl.A == undefined) {
        this.init(this.currentEl);
    }
}
init(component) {
    component.A = {};
    component.A.props = {};
    component.A.xtype = component.xtype;
    component.A.CHILDRENCOMPONENTS = [];
    component.A.CHILDRENCOMPONENTSCOUNT = 0;
    component.A.CHILDRENCOMPONENTSADDED = 0;
    if (this.base.DIRECTION == 'TopToBottom') {
        component.A.CHILDRENCOMPONENTS = this.currentEl.rawChildren;
        for (var i = 0; i < component.A.CHILDRENCOMPONENTS.length; i++) {
            if (component.getCurrentElName(component.A.CHILDRENCOMPONENTS[i]).substring(0, 4) == 'EXT-') {
                component.A.CHILDRENCOMPONENTSCOUNT++;
            }
        }
        component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
    }
}
createExtComponent() {
    var A = this.currentEl.A;
    var meA = A;
    var methis = this;
    if (A.props['viewport'] == true) {
        this.newDiv.parentNode.removeChild(this.newDiv);
        Ext.onReady(function () {
            methis.currentEl.A.ext = Ext.create(meA.props);
            console.log('0-Ext.application: ' + meA.props.xtype);
            methis.assessChildren(methis.base, methis.xtype);
            Ext.application({
                name: 'MyEWCApp',
                launch: function () {
                    Ext.Viewport.add([methis.currentEl.A.ext]);
                    if (window['router']) {
                        window['router'].init();
                    }
                    console.log(methis.base.DIRECTION + ' in launch ');
                    if (methis.base.DIRECTION == 'BottomToTop') {
                        console.log('the last thing to do...');
                        methis.last = true;
                    }
                }
            });
        });
    }
    else if (this.parentNode == null || this.parentElName.substring(0, 4) != 'EXT-') {
        A.props.renderTo = this.newDiv;
        Ext.onReady(function () {
            console.log('1- Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
            console.dir(meA.props)
            methis.currentEl.A.ext = Ext.create(meA.props);
            methis.newDiv.parentNode.replaceChild(methis.currentEl.A.ext.el.dom, methis.newDiv);
            methis.assessChildren(methis.base, methis.xtype);
            console.log('after assessChildren');
            //var wc = meA.ext.el.dom.nextSibling;
            //wc.parentNode.removeChild(wc);
        });
    }
    else {
        Ext.onReady(function () {
            console.log('3- Ext.create: ' + methis.currentElName + '  Ext parent: ' + methis.parentElName);
            methis.currentEl.A.ext = Ext.create(meA.props);
            methis.assessChildren(methis.base, methis.xtype);
        });
    }
}
assessChildren(base, xtype) {
    console.log('assessChildren for: ' + xtype);
    var A = this.currentEl.A;
    if (this._extitems != undefined) {
        if (this._extitems.length == 1) {
            console.log('set html');
            A.ext.setHtml(this._extitem.nativeElement);
        }
    }
    if (this._extitems != undefined) {
        if (this._extroutes.length == 1) {
            console.log('set router');
            A.ext.setHtml(this._extroute.nativeElement);
            //childItem.childCmp = Ext.create({xtype:'widget', ewc:item.getAttribute('ewc'), element:Ext.get(item.parentNode.removeChild(item))})
        }
    }
    if (A.CHILDRENCOMPONENTSCOUNT == 0 &&
        A.CHILDRENCOMPONENTSLEFT == 0 &&
        A.CHILDRENCOMPONENTSADDED == 0 &&
        !this.hasParent) {
        console.log('Solo');
        console.log('ready event for ' + this.currentElName);
        this.sendReadyEvent(this);
    }
    else if (A.CHILDRENCOMPONENTSADDED > 0) {
        console.log('addChildren');
        console.dir(A.CHILDRENCOMPONENTS);
        console.log(this.node.A);
        this.addChildren(this, A.CHILDRENCOMPONENTS);
        //console.log('send ready for CHILDRENCOMPONENTSADDED > 0');
        console.log('ready event for ' + this.currentElName);
        this.sendReadyEvent(this);
        this.node.remove();
    }
    // else if (this.parentNode != null && this.A.CHILDRENCOMPONENTSCOUNT == 0) {
    //     console.log('send ready for ' + this.A.xtype);
    //     this.sendReadyEvent(this);
    // }
    //if (this.parentEl != null) {

    // if (this.hasParent &&
    //     this.parentEl.nodeName.substring(0, 4) == 'EXT-'
    //     ) {

    if (this.hasParent) {

        if (base.DIRECTION == 'TopToBottom') {
            console.log('TopToBottom');
            this.parentEl.A.CHILDRENCOMPONENTS.push(this);
            this.parentEl.A.CHILDRENCOMPONENTSADDED++;
            this.parentEl.A.CHILDRENCOMPONENTSLEFT--;
            if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
                //console.log(this.parentEl)
                this.addChildren(this.parentEl, this.parentEl.A.CHILDRENCOMPONENTS);
                console.log('ready event for ' + this.parentElName + '(parent)');
                this.sendReadyEvent(this.parentEl);
            }
        }
        else {
            this.parentEl.A.CHILDRENCOMPONENTS.push(this.currentEl);
            this.parentEl.A.CHILDRENCOMPONENTSADDED++;
            console.log('ready event for ' + this.currentElName);
            this.sendReadyEvent(this);
        }
    }
}
addChildren(child, children) {
    //console.log('addChildren for ' + child.xtype + ' - num children: ' + children.length);
    //for (var i = children.length - 1; i > -1; i--) {
    //    var childItem = { parentCmp: {}, childCmp: {} };
    //    childItem.parentCmp = child.currentEl.A.ext;
    //    childItem.childCmp = children[i].A.ext;
    //    this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
    //}
    console.dir(children)
    for (var i = 0; i < children.length; i++) {
        var childItem = { parentCmp: {}, childCmp: {} };
        childItem.parentCmp = this.currentEl.A.ext;

        var A2
        if (children[i]._extitems != undefined) {
            A2 = children[i].node.A;
        }
        else {
            A2 = children[i].A;
        }
        childItem.childCmp = A2.ext;
        //childItem.childCmp = children[i].currentEl.A.ext;

        this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
    }
}
addTheChild(parentCmp, childCmp, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype;
    //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
    //if (childxtype == 'widget')
    if (this.currentEl.A.ext.initialConfig.align != undefined) {
        if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
            console.error('Can only use align property if parent is a Titlebar or Grid or Button');
            return;
        }
    }
    var defaultparent = false;
    var defaultchild = false;
    switch (parentxtype) {
        case 'button':
            switch (childxtype) {
                case 'menu':
                    parentCmp.setMenu(childCmp);
                    break;
                default:
                    defaultparent = true;
                    break;
            }
            break;
        case 'booleancolumn':
        case 'checkcolumn':
        case 'gridcolumn':
        case 'column':
        case 'templatecolumn':
        case 'gridcolumn':
        case 'column':
        case 'templatecolumn':
        case 'datecolumn':
        case 'dragcolumn':
        case 'numbercolumn':
        case 'selectioncolumn':
        case 'textcolumn':
        case 'treecolumn':
        case 'rownumberer':
            switch (childxtype) {
                case 'renderercell':
                    parentCmp.setCell(childCmp);
                    break;
                case 'column':
                case 'gridcolumn':
                    parentCmp.add(childCmp);
                    break;
                default:
                    defaultparent = true;
                    break;
            }
            break;
        case 'grid':
        case 'lockedgrid':
            switch (childxtype) {
                case 'gridcolumn':
                case 'column':
                case 'treecolumn':
                case 'textcolumn':
                case 'checkcolumn':
                case 'datecolumn':
                case 'rownumberer':
                case 'numbercolumn':
                case 'booleancolumn':
                    if (location == null) {
                        if (parentxtype == 'grid') {
                            parentCmp.addColumn(childCmp);
                        }
                        else {
                            parentCmp.add(childCmp);
                        }
                    }
                    else {
                        var regCols = 0;
                        if (parentCmp.registeredColumns != undefined) {
                            regCols = parentCmp.registeredColumns.length;
                        }
                        if (parentxtype == 'grid') {
                            //mjg console.log(parentCmp)
                            parentCmp.insertColumn(location + regCols, childCmp);
                        }
                        else {
                            parentCmp.insert(location + regCols, childCmp);
                        }
                    }
                    break;
                default:
                    defaultparent = true;
                    break;
            }
            break;
        default:
            defaultparent = true;
            break;
    }
    ;
    switch (childxtype) {
        case 'toolbar':
        case 'titlebar':
            if (parentCmp.getHideHeaders != undefined) {
                if (parentCmp.getHideHeaders() === false) {
                    parentCmp.insert(1, childCmp);
                }
                else {
                    parentCmp.add(childCmp);
                }
            }
            else {
                if (parentCmp.add != undefined) {
                    if (location == null) {
                        parentCmp.add(childCmp);
                    }
                    else {
                        parentCmp.insert(location, childCmp);
                    }
                }
                else {
                    parentCmp.add(childCmp);
                }
            }
            break;
        case 'tooltip':
            parentCmp.setTooltip(childCmp);
            break;
        case 'plugin':
            parentCmp.setPlugin(childCmp);
            break;
        default:
            defaultchild = true;
            break;
    }
    if (defaultparent == true && defaultchild == true) {
        //console.log(parentxtype + '.add(' + childxtype + ')')
        parentCmp.add(childCmp);
    }
    // if (this.parentNode.childrenYetToBeDefined > 0) {
    //     this.parentNode.childrenYetToBeDefined--
    // }
    // //console.log('childrenYetToBeDefined(after) '  + this.parentNode.childrenYetToBeDefined)
    // if (this.parentNode.childrenYetToBeDefined == 0) {
    //     this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
    // }
}
atEnd() {
    console.log('*** at end');
    console.log('this - ' + this.currentElName);
    console.dir(this.currentEl.A);
    if (this.parentEl != null) {
        console.log('parent - ' + this.parentElName);
        console.dir(this.parentEl.A);
    }
    else {
        console.log('No EXT parent');
    }
}
get currentEl() {
    if (this._extitems != undefined) {
        return this.node;
    }
    else {
        return this;
    }
}
getCurrentElName(component) {
    if (component._extitems != undefined) {
        return component.node.nodeName;
    }
    else {
        return component.nodeName;
    }
}
get currentElName() {
    if (this._extitems != undefined) {
        return this.node.nodeName;
    }
    else {
        return this.nodeName;
    }
}
get isAngular() {
    if (this._extitems != undefined) {
        return true;
    }
    else {
        return false;
    }
}
get parentEl() {
    if (this.isAngular) {
        if (this.parentNode == null) {
            return null;
        }
        return this.parentNode.node;
    }
    else {
        return this.parentNode;
    }
}
get parentElName() {
    if (this.isAngular) {
        if (this.parentNode == null) {
            return null;
        }
        return this.parentNode.node.nodeName;
    }
    else {
        return this.parentNode.nodeName;
    }
}
sendReadyEvent(component) {
    var cmp = component.currentEl.A.ext;
    if (component._extitems != undefined) {
        component['ready'].emit({ detail: { cmp: cmp } });
    }
    else {
        component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
    }
}
//******* base end */
createProps(properties, propertiesobject, events, eventnames) {
    var o = {};
    o.xtype = this.currentEl.A.xtype;
    if (o.xtype == 'column' ||
        o.xtype == 'gridcolumn') {
        var renderer = this.getAttribute('renderer')
        if (renderer != undefined) {
            o.cell = this.cell || {}
            o.cell.xtype = 'renderercell'
            //console.log(renderer)
            o.cell.renderer = renderer
        }
    }
    //mjg fitToParent not working??
    if (true === this.fitToParent) {
        o.top=0,
        o.left=0,
        o.width='100%',
        o.height='100%'
    }
    for (var i = 0; i < properties.length; i++) {
        var property = properties[i]
        //console.log(property)
        if (this.getAttribute(property) !== null) {
            if (property == 'handler') {
                var functionString = this.getAttribute(property);
                //error check for only 1 dot
                var r = functionString.split('.');
                var obj = r[0];
                var func = r[1];
                o[property] = window[obj][func];
            }
            else {
                o[property] = this.filterProperty(this.getAttribute(property));
            }
        }
    }
    o.listeners = {}

    // this would only add events to the ones that are
    // being used for this instance
    // for (var i = 0; i < this.attributes.length; i++) {
    //     var attr = this.attributes.item(i).nodeName;

    //     if (/^on/.test(attr)) {
    //     //if (/^on/.test(attr) && attr!='onitemdisclosure') {
    //         var name = attr.slice(2);
    //         var result = this.EVENTS.filter(obj => {return obj.name === name});
    //         this.setEvent(result[0],o,this)
    //     }
    // }

    //this.EVENTS
    var me2 = this
    events.forEach(function (eventparameter, index, array) {
        me2.setEvent(eventparameter,o,me2)
    })

    this.currentEl.A.props = o
    //return o;
}






    setEvent(eventparameters,o, me3) {
        o.listeners[eventparameters.name] = function() {
            let eventname = eventparameters.name
            //console.log('in event: ' + eventname + ' ' + o.xtype)
            let parameters = eventparameters.parameters;
            let parms = parameters.split(',');
            let args = Array.prototype.slice.call(arguments);
            let event = {};
            for (let i = 0, j = parms.length; i < j; i++ ) {
                event[parms[i]] = args[i];
            }
            me3.dispatchEvent(new CustomEvent(eventname,{detail: event}))
        }
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (/^on/.test(attr)) {
            if (newVal) {
            this.addEventListener(attr.slice(2), function(event) {
                var functionString = newVal;
                // todo: error check for only 1 dot
                var r = functionString.split('.');
                var obj = r[0];
                var func = r[1];
                if (obj && func) {
                window[obj][func](event);
                }
            });
            } else {
            //delete this[attr];
            //this.removeEventListener(attr.slice(2), this);
            }
        } else {

            var ischanged
            if (this.A) {
                if (this.A.ext != undefined) {
                    ischanged = true
                    var method = 'set' + attr[0].toUpperCase() + attr.substring(1)
                    this.A.ext[method](newVal)
                }
                else {
                    ischanged = false
                }
            }
            //console.log('attr: ' + attr + ', changed is ' + ischanged)

            //if (this.A.ext === undefined) {
            //    //mjg ??
            //}
            //else {
            //    //mjg check if this method exists for this component
            //    var method = 'set' + attr[0].toUpperCase() + attr.substring(1)
            //    this.A.ext[method](newVal)
            //}
        }
    }

    extendObject(obj, src) {
        if (obj == undefined) {obj = {}}
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }

    extendArray(obj, src) {
        if (obj == undefined) {obj = []}
        Array.prototype.push.apply(obj,src);
        return obj;
    }

    filterProperty(propertyValue) {
        try {
            const parsedProp = JSON.parse(propertyValue);

            if (parsedProp === null ||
                parsedProp === undefined ||
                parsedProp === true ||
                parsedProp === false ||
                parsedProp === Object(parsedProp) ||
                (!isNaN(parsedProp) && parsedProp !== 0)
            ) {
                return parsedProp;
            } else {
                return propertyValue;
            }
        }
        catch(e) {
            return propertyValue;
        }
    }

    disconnectedCallback() {
        //console.log('ExtBase disconnectedCallback ' + this.A.ext.xtype)
        delete this.A.ext
    }

}

EwcBaseComponent.count = 0;
EwcBaseComponent.DIRECTION = '';
