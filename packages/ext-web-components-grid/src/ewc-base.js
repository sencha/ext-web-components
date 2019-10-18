//Wed Oct 16 2019 13:38:43 GMT-0400 (Eastern Daylight Time)

//import HTMLParsedElement from './HTMLParsedElement.js'

import {
    doProp,
    filterProp,
    isMenu,
    isRenderercell,
    isParentGridAndChildColumn,
    isTooltip,
    isPlugin
} from './util.js';
//const Ext = window.Ext;

export default class EwcBaseComponent extends HTMLElement {

    constructor(properties, events) {
        super ();
        //properties.forEach( prop => doProp(this,prop))
        this.properties = properties;
        //this.methods = methods;
        this.events = events;
    }
    connectedCallback() {
        EwcBaseComponent.elementcount++;
        EwcBaseComponent.elements.push(this);

        //this.properties = []
        //for (var property in this.propertiesobject) {
        //    this.properties.push(property)
        //}

        this.newDiv = document.createElement('div');
        //var textnode = document.createTextNode(this.xtype);
        //this.newDiv.appendChild(textnode)
        this.insertAdjacentElement('beforebegin', this.newDiv);

        this.base = EwcBaseComponent;

    }
    parsedCallback() {
        this.initMe()
    }

//******* base start */
newParsedCallback() {
    var me = this;
    this.A = {};
    this.A.CHILDREN = [];
    this.A.o = {}

    this.newCreateProps(this.properties, this.events)

    if (this.parentNode.nodeName.substring(0, 4) !== 'EXT-') {
        this.A.o.renderTo = this.parentNode; //this.newDiv;
         //this.newDiv.parentNode.removeChild(this.newDiv);
    }
    this.A.o.listeners = {}
    this.events.forEach(function (e, index, array) {
        me.setEvent(e,me.A.o,me)
    })
    this.newDoExtCreate(me);
}

newDoExtCreate(me) {
    if (EwcBaseComponent.isLoading == false) {
        EwcBaseComponent.isLoading = true;
        var csstag = document.createElement("script");
        csstag.type = "text/javascript";
        csstag.src = "../ext/css.grid.js";
        csstag.onload = function() {
            var exttag = document.createElement("script");
            exttag.type = "text/javascript";
            exttag.src = "../ext/ext.grid.js";
            exttag.onload = function() {
                EwcBaseComponent.isDone = true;
            }
            document.getElementsByTagName('head')[0].appendChild(exttag);
        }
        document.getElementsByTagName('head')[0].appendChild(csstag);
    }
    var myVar = setInterval(() => {
        if (EwcBaseComponent.isDone === true) {
            clearInterval(myVar)
            Ext.onReady(function () {

                console.log(me.A.o)
                me.A.ext = Ext.create(me.A.o)
                me.A.CHILDREN.forEach(function(child) {
                    me.addTheChild(me.A.ext,child);
                })
                if (me.parentNode.nodeName.substring(0, 4) === 'EXT-') {
                    if (me.parentNode.A.ext !== undefined) {
                        me.addTheChild(me.parentNode.A.ext,me.A.ext);
                    }
                    else {
                        me.parentNode.A.CHILDREN.push(me.A.ext);
                    }
                }


                // //console.log('Ext is there')
                // console.log(meA.props)
                // methis.currentEl.A.ext = Ext.create(meA.props);
                // methis.assessChildren(methis.base, methis.xtype);
                // if (isApplication) {
                //     Ext.application({
                //         name: 'MyEWCApp',
                //         launch: function () {
                //             Ext.Viewport.add([methis.currentEl.A.ext]);
                //             if (window['router']) {window['router'].init();}
                //             methis.sendReadyEvent(methis);
                //         }
                //     });
                // }


                console.log(EwcBaseComponent.elementcount)
                EwcBaseComponent.elementcount--;
                if (EwcBaseComponent.elementcount == 0) {
                    console.log('done');
                    var allExt = [];
                    EwcBaseComponent.elements.forEach(element => {
                        if (element.getAttribute('extname') != undefined) {
                            var o = {}
                            o.extname = element.getAttribute('extname');
                            o.ext = element.A.ext;
                            allExt.push(o);
                        }
                    })

                    EwcBaseComponent.elements.forEach(element => {
                        console.dir(element)
                        element.dispatchEvent(new CustomEvent('ready', {
                            detail: {
                                ext: element.A.ext,
                                allExt: allExt
                            }
                        }))
                    })
                }
            })
        }
    }, 0)
}

newCreateProps(properties) {
    var o = {};
    o.xtype = this.xtype;
    for (var i = 0; i < properties.length; i++) {
        var property = properties[i]
        if (this.getAttribute(property) !== null) {
            if (property == 'config') {
                var configs = JSON.parse(this.getAttribute(property))
                for (var configProp in configs) {
                    if (configs.hasOwnProperty(configProp)) {
                       o[configProp] = filterProp(configs[configProp]);
                    }
                }
            }
            else {
                o[property] = filterProp(this.getAttribute(property));
            }
        }
    }
    this.A.o = o;
}





initMe() {
    this.newParsedCallback();
    return
    //console.log('');console.log('*** initMe for ' + this.currentElName);
    this.createRawChildren();
    this.setParentType();
    this.setDirection();
    this.figureOutA();
    this.createProps(this.properties, this.events);
    this.createExtComponent();
}
createRawChildren() {
    if (this.currentEl.isAngular) {
        this.currentEl.rawChildren = this.currentEl.childComponents;
    }
    else {
        this.currentEl.ewcChildren = Array.from(this.currentEl.children);
        this.currentEl.rawChildren = [];
        var num = 0;
        for (var i = 0; i < this.currentEl.ewcChildren.length; i++) {
            if (this.currentEl.ewcChildren[i].xtype != undefined) {
                this.currentEl.rawChildren[num] = this.currentEl.ewcChildren[i];
                num++;
            }
            else {
                //do something with div (add an Ext.widget...)
            }
        }
    }
}
setParentType() {
    if (this.parentNode == null) {
        this.parentType = 'html'
    }
    else {
        if (this.parentElName.substring(0, 4) == 'EXT-') {
            this.parentType = 'ext'
        }
        else {
            this.parentType = 'html'
        }
    }
}
setDirection() {
    if (this.base.count == 0) {
        this.base.count++;
//        if (this.hasParent == false) {
        if (this.parentType != 'ext') {
            this.base.DIRECTION = 'TopToBottom';
        }
        else {
            //if (this.parentElName.substring(0, 4) == 'EXT-') {
                this.base.DIRECTION = 'BottomToTop';
            //}
            //else {
            //    this.base.DIRECTION = 'TopToBottom';
            //}
        }
    }
    //console.log(this.base.DIRECTION);
}
figureOutA() {
    if (this.parentType == 'ext' &&
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
    component.A.CHILDRENCOMPONENTS = Array.from(this.currentEl.rawChildren);
    component.A.CHILDRENCOMPONENTSCOUNT = this.currentEl.rawChildren.length;
    component.A.CHILDRENCOMPONENTSADDED = component.A.CHILDRENCOMPONENTSCOUNT;
    component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
}

createExtComponent() {
    var A = this.currentEl.A;
    //console.dir(A)
    var meA = A;
    var methis = this;

    if (methis.base.DIRECTION == 'BottomToTop') {
        //console.log('BTT')
        if (A.props['viewport'] == true) {
            //this.newDiv.parentNode.removeChild(this.newDiv);
            if (this.parentType == 'html') {
                this.doExtCreate(meA, methis, true);

                // Ext.onReady(function () {
                //     methis.currentEl.A.ext = Ext.create(meA.props);
                //     console.log('0-Ext.application: ' + meA.props.xtype);
                //     methis.assessChildren(methis.base, methis.xtype);
                //     Ext.application({
                //         name: 'MyEWCApp',
                //         launch: function () {
                //             Ext.Viewport.add([methis.currentEl.A.ext]);
                //             if (window['router']) {window['router'].init();}
                //             methis.sendReadyEvent(methis);
                //         }
                //     });
                // });


            }
            else {
                console.error('error: viewport not allowed on this element')
            }
        }
        else {
            if (this.parentType == 'html') {
                meA.props.renderTo = this.newDiv;
            }
            if (methis.currentElName == 'EXT-DIALOG') {
                meA.props.renderTo = null
            }
            this.doExtCreate(meA, methis, false);
        }
    }
    else {
        //console.log('TopToBottom')
        if (A.props['viewport'] == true) {
            //this.newDiv.parentNode.removeChild(this.newDiv);
            if (this.parentType == 'html') {
                this.doExtCreate(meA, methis, true);
            }
            else {
                console.error('error: viewport not allowed on this element')
            }
        }
        else {
            console.log(this.parentType)
            if (this.parentType == 'html') {
                meA.props.renderTo = this.newDiv;
            }
            this.doExtCreate(meA, methis, false);
        }
    }
}

doExtCreate(meA, methis,isApplication) {
    if (EwcBaseComponent.isLoading == false) {
        EwcBaseComponent.isLoading = true;
        var csstag = document.createElement("script");
        csstag.type = "text/javascript";
        csstag.src = "../ext/css.grid.js";
        csstag.onload = function() {
            var exttag = document.createElement("script");
            exttag.type = "text/javascript";
            exttag.src = "../ext/ext.grid.js";
            exttag.onload = function() {
                EwcBaseComponent.isDone = true;
            }
            document.getElementsByTagName('head')[0].appendChild(exttag);
        }
        document.getElementsByTagName('head')[0].appendChild(csstag);
    }
    var myVar = setInterval(() => {
        if (EwcBaseComponent.isDone === true) {
            clearInterval(myVar)
            Ext.onReady(function () {
                //console.log('Ext is there')
                console.log(meA.props)
                methis.currentEl.A.ext = Ext.create(meA.props);
                methis.assessChildren(methis.base, methis.xtype);
                if (isApplication) {
                    Ext.application({
                        name: 'MyEWCApp',
                        launch: function () {
                            Ext.Viewport.add([methis.currentEl.A.ext]);
                            if (window['router']) {window['router'].init();}
                            methis.sendReadyEvent(methis);
                        }
                    });
                }
                console.log(EwcBaseComponent.elementcount)
                EwcBaseComponent.elementcount--;
                if (EwcBaseComponent.elementcount == 0) {
                    console.log('done');
                    var allExt = [];

                    // for (var i = 0; i < ExtElement.elements.length; i++) {
                    //     if (ExtElement.elements[i].getAttribute('extname') != undefined) {
                    //         var o = {extname:ExtElement.elements[i].getAttribute('extname'),ext:ExtElement.elements[i].A.ext}
                    //         console.log(o)
                    //         allExt.push(o);
                    //         console.log(allExt)
                    //       }
                    // }

                    EwcBaseComponent.elements.forEach(element => {
                        if (element.getAttribute('extname') != undefined) {
                            var o = {}
                            o.extname = element.getAttribute('extname');
                            o.ext = element.A.ext;
                            allExt.push(o);
                        }
                    })

                    EwcBaseComponent.elements.forEach(element => {
                        console.dir(element)
                        element.dispatchEvent(new CustomEvent('ready', {
                            detail: {
                                ext: element.A.ext,
                                allExt: allExt
                                //allElements: ExtElement.elements
                            }
                        }))
                    })
                }
            })
        }
    }, 0)
}

assessAngularChildren(base, xtype, A) {
    if (this._extitems != undefined) {
        if (this._extitems.length == 1) {
            var el = Ext.get(this._extitem.nativeElement);
            var w = Ext.create({xtype:'widget', element: el});
            this.addTheChild(A.ext, w, null);
        }
    }
    // if (this._extitems != undefined) {
    //     if (this._extroutes.length == 1) {
    //         A.ext.setHtml(this._extroute.nativeElement);
    //     }
    // }
}



assessChildren(base, xtype) {
    //console.log('assessChildren for: ' + xtype);
    var A = this.currentEl.A;
    this.assessAngularChildren(base, xtype, A)

    if (base.DIRECTION == 'BottomToTop') {
        if (A.CHILDRENCOMPONENTSCOUNT == 0 &&
            A.CHILDRENCOMPONENTS.length == 0 &&
            this.parentType == 'html') {
            //console.log('Solo');
            //console.log('1- ready event for ' + this.currentElName);
            this.sendReadyEvent(this);
        }
        else if (A.CHILDRENCOMPONENTSADDED > 0) {
            this.addChildren(this, A.CHILDRENCOMPONENTS);
            //this.node.remove(); ?? is this needed??
        }
        if (this.parentType != 'ext') {
            if (base.DIRECTION == 'BottomToTop') {
                //console.log('5- ready event for ' + this.currentElName);
                this.sendReadyEvent(this);
            }
        }
        if (this.parentType == 'ext') {
            if (base.DIRECTION == 'BottomToTop') {
                this.parentEl.A.CHILDRENCOMPONENTS.push(this.currentEl);
                this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                //console.log('4- ready event for ' + this.currentElName);
                this.sendReadyEvent(this);
            }
            else {
                this.parentEl.A.CHILDRENCOMPONENTSLEFT--;
                if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
                    this.addChildren(this.parentEl, this.parentEl.A.CHILDRENCOMPONENTS);
                    //console.log('3- ready event for ' + this.parentElName + '(parent)');
                    this.sendReadyEvent(this.parentEl);
                }
            }
        }
    }
    else { //base.DIRECTION == 'TopToBottom'
        if (this.parentType == 'ext') {
            //console.log('this: ' + A.xtype + ' ' + A.props.title + ' parent: ' + this.parentEl.A.xtype)
            //console.log('length=0, send ready for ' + this.xtype)
            this.sendReadyEvent(this);
        }
        // else {
        //     //console.log(A.props)
        //     //console.log('this: ' + A.xtype + ' ' + A.props.title + ' root: ')
        // }
        if (A.CHILDRENCOMPONENTS.length == 0) {
            //console.log('no CHILDRENCOMPONENTS')
            this.checkParent(this.parentEl, base, this)
        }
        else {
            //console.log('else 2')
            //console.log(A.CHILDRENCOMPONENTS.length + ' CHILDRENCOMPONENTS')
        //     //base.COMPONENTCOUNT = base.COMPONENTCOUNT + A.CHILDRENCOMPONENTS.length;
        }
    }
}

checkParent(component, base, me) {
    if (component == null || component.localName.substring(0, 4) != 'EXT-') {
        console.log('send ready for ' + me.nodeName)
    //}
    //else {
        if (component != null) {
            if (component.A != null) {
                console.log(component)
                component.A.CHILDRENCOMPONENTSLEFT--
                console.log('now left for ' + component.localName + ' ' + component.A.CHILDRENCOMPONENTSLEFT)
                //base.COMPONENTLEFTCOUNT = base.COMPONENTLEFTCOUNT + 1;
                if (component.A.CHILDRENCOMPONENTSLEFT == 0) {
                    this.addChildren(component, component.A.CHILDRENCOMPONENTS)
                    this.checkParent(component.parentEl, base, component)
                }
            }
        }
    }
}

addChildren(child, children) {
    for (var i = 0; i < children.length; i++) {
        //why is this created as an object??
        var childItem = { parentCmp: {}, childCmp: {} };
        childItem.parentCmp = child.currentEl.A.ext;
        var A2
        if (children[i]._extitems != undefined) {
            A2 = children[i].node.A;
        }
        else {
            A2 = children[i].A;
        }
        childItem.childCmp = A2.ext;
        this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
    }
}

addTheChild(parentCmp, childCmp, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype;
    //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
    //if (childxtype == 'widget')
    if (this.A.ext.initialConfig.align != undefined) {
        if (parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
            console.error('Can only use align property if parent is a Titlebar or Grid or Button');
            return;
        }
    }

    switch (true) {
        case isMenu(childxtype):
            parentCmp.setMenu(childCmp);
            break;
        case isRenderercell(childxtype):
            parentCmp.setCell(childCmp);
            break;
        case isParentGridAndChildColumn(parentxtype,childxtype):
            if (location == null) {
                parentCmp.addColumn(childCmp);
            }
            else {
                var regCols = 0;
                if (parentCmp.registeredColumns != undefined) {
                    regCols = parentCmp.registeredColumns.length;
                }
                if (parentxtype == 'grid') {
                    parentCmp.insertColumn(location + regCols, childCmp);
                }
                else {
                    parentCmp.insert(location + regCols, childCmp);
                }
            }
            break;
        case isTooltip(childxtype):
            parentCmp.setTooltip(childCmp);
            break;
        case isPlugin(childxtype):
            parentCmp.setPlugin(childCmp);
            break;
        default:
            if (location == null) {
                parentCmp.add(childCmp);
            }
            else {
                parentCmp.insert(location, childCmp);
            }
    }



    // var defaultparent = false;
    // var defaultchild = false;
    // switch (parentxtype) {
    //     case 'button':
    //         switch (childxtype) {
    //             case 'menu':
    //                 parentCmp.setMenu(childCmp);
    //                 break;
    //             default:
    //                 defaultparent = true;
    //                 break;
    //         }
    //         break;
    //     case 'booleancolumn':
    //     case 'checkcolumn':
    //     case 'gridcolumn':
    //     case 'column':
    //     case 'templatecolumn':
    //     case 'gridcolumn':
    //     case 'column':
    //     case 'templatecolumn':
    //     case 'datecolumn':
    //     case 'dragcolumn':
    //     case 'numbercolumn':
    //     case 'selectioncolumn':
    //     case 'textcolumn':
    //     case 'treecolumn':
    //     case 'rownumberer':
    //         switch (childxtype) {
    //             case 'renderercell':
    //                 parentCmp.setCell(childCmp);
    //                 break;
    //             case 'column':
    //             case 'gridcolumn':
    //                 parentCmp.add(childCmp);
    //                 break;
    //             default:
    //                 defaultparent = true;
    //                 break;
    //         }
    //         break;
    //     case 'grid':
    //     case 'lockedgrid':
    //         switch (childxtype) {
    //             case 'gridcolumn':
    //             case 'column':
    //             case 'treecolumn':
    //             case 'textcolumn':
    //             case 'checkcolumn':
    //             case 'datecolumn':
    //             case 'rownumberer':
    //             case 'numbercolumn':
    //             case 'booleancolumn':
    //                 if (location == null) {
    //                     if (parentxtype == 'grid') {
    //                         parentCmp.addColumn(childCmp);
    //                     }
    //                     else {
    //                         parentCmp.add(childCmp);
    //                     }
    //                 }
    //                 else {
    //                     var regCols = 0;
    //                     if (parentCmp.registeredColumns != undefined) {
    //                         regCols = parentCmp.registeredColumns.length;
    //                     }
    //                     if (parentxtype == 'grid') {
    //                         //mjg console.log(parentCmp)
    //                         parentCmp.insertColumn(location + regCols, childCmp);
    //                     }
    //                     else {
    //                         parentCmp.insert(location + regCols, childCmp);
    //                     }
    //                 }
    //                 break;
    //             default:
    //                 defaultparent = true;
    //                 break;
    //         }
    //         break;
    //     default:
    //         defaultparent = true;
    //         break;
    // };
    // switch (childxtype) {
    //     case 'toolbar':
    //     case 'titlebar':
    //         if (parentCmp.getHideHeaders != undefined) {
    //             if (parentCmp.getHideHeaders() === false) {
    //                 parentCmp.insert(1, childCmp);
    //             }
    //             else {
    //                 parentCmp.add(childCmp);
    //             }
    //         }
    //         else {
    //             if (parentCmp.add != undefined) {
    //                 if (location == null) {
    //                     parentCmp.add(childCmp);
    //                 }
    //                 else {
    //                     parentCmp.insert(location, childCmp);
    //                 }
    //             }
    //             else {
    //                 parentCmp.add(childCmp);
    //             }
    //         }
    //         break;
    //     case 'tooltip':
    //         parentCmp.setTooltip(childCmp);
    //         break;
    //     case 'plugin':
    //         parentCmp.setPlugin(childCmp);
    //         break;
    //     default:
    //         defaultchild = true;
    //         break;
    // }
    // if (defaultparent == true && defaultchild == true) {
    //     //console.log(parentxtype + '.add(' + childxtype + ')')
    //     parentCmp.add(childCmp);
    // }
}

addTheChild2(parentCmp, childCmp, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype;
    //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
    //if (childxtype == 'widget')
    if (this.currentEl.A.ext.initialConfig.align != undefined) {
        if (parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
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
    //console.log('*** at end');
    //console.log('this - ' + this.currentElName);
    //console.dir(this.currentEl.A);
    if (this.parentEl != null) {
        //console.log('parent - ' + this.parentElName);
        //console.dir(this.parentEl.A);
    }
    else {
        //console.log('No EXT parent');
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
//******* props start */
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
    this.events.forEach(function (eventparameter, index, array) {
        me2.setEvent(eventparameter,o,me2)
    })

    this.currentEl.A.props = o
    //return o;
}
//******* props end */


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

EwcBaseComponent.elementcount = 0;
EwcBaseComponent.elements = [];

EwcBaseComponent.isLoading = false;
EwcBaseComponent.isDone = false;

EwcBaseComponent.count = 0;
EwcBaseComponent.DIRECTION = '';

//EwcBaseComponent.extendArray = function(obj, src) {
//    if (obj == undefined) {obj = []}
//    Array.prototype.push.apply(obj,src);
//    return obj;
//}
