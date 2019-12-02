//Mon Dec 02 2019 00:00:12 GMT-0500 (Eastern Standard Time)

import {
    doProp,
    filterProp,
    isMenu,
    isRenderercell,
    isParentGridAndChildColumn,
    isTooltip,
    isPlugin
} from './util.js';

export default class EleBaseComponent extends HTMLElement {

    constructor(properties, events) {
        super ();
        this.properties = properties;
        this.events = events;
        this.eventnames = [];
        var eventnamesall = [];

         //if (Ext.isClassic) {
         //  console.log('classic')
         //}
         //else {
         //  console.log('modern')
         //}

        const distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        };

        this.events.forEach((event) => {
            eventnamesall.push(event.name);
        });

        this.eventnames = eventnamesall.filter(distinct);

        this.A = {};
        this.A.CHILDREN = [];
        this.A.ITEMS = [];
        this.A.o = {};
        this.attributeObjects = {};

        this.base = EleBaseComponent;

        // this.newDiv = document.createElement('div');
        // //var textnode = document.createTextNode(this.xtype);
        // //this.newDiv.appendChild(textnode)
        // this.insertAdjacentElement('beforebegin', this.newDiv);
    }

    connectedCallback() {
        //console.log('connectedCallback');
        // console.log(this.xtype);
        var x = this.xtype;

        if (this.counted == undefined) {
            const distinct = (value, index, self) => {
                return self.indexOf(value) === index;
            };
            this.counted = true;
            var properties2 = [];
            var arrayLength = this.properties.length;
            for (var i = 0; i < arrayLength; i++) {
                properties2.push(this.properties[i]);
            }
            //console.dir(this.properties)
            //console.dir(properties2)
            //this.propertiesDistinct = this.properties.filter(distinct);
            this.propertiesDistinct = properties2.filter(distinct);
            this.propertiesDistinct.forEach(prop => {
                doProp(this, prop);
            });

            EleBaseComponent.elementcount++;
            EleBaseComponent.elements.push(this);
            //console.log('added: ' + this.tagName + ': elementcount is now ' + EleBaseComponent.elementcount);
        }
        this.xtype = x;
    }

    parsedCallback() {
        //console.log('parsedCallback');
        //console.log(this.xtype);

        for (let child of this.children) {
            if (child.nodeName.substring(0, 4) !== 'EXT-') {
                var el = Ext.get(child);
                var w = Ext.create({xtype:'widget', element: el});
                this.A.ITEMS.push(w);
            }
            else {
                var g = {};
                g.type = 'ext';
                this.A.ITEMS.push(g);
            }
        }
        this.initMe();
    }

    //******* base start */
    initMe() {
        this.newParsedCallback();
        return;
        //console.log('');console.log('*** initMe for ' + this.currentElName);
        //this.createRawChildren();
        //this.setParentType();
        //this.setDirection();
        //this.figureOutA();
        //this.createProps(this.properties, this.events);
        //this.createExtComponent();
    }

    newParsedCallback() {
        var me = this;
        this.newCreateProps(this.properties, this.events);
        if (this.parentNode != null &&
            this.parentNode.nodeName.substring(0, 4) !== 'EXT-')
        {
          if (this.A.o.xtype != 'dialog') {
            this.A.o.renderTo = this.parentNode; //this;
          }
            //this.A.o.renderTo = this.parentNode; //this;
            //this.A.o.renderTo = this.newDiv.parentNode;
            //this.newDiv.parentNode.removeChild(this.newDiv);
        }
        this.newDoExtCreate(me, this.A.o['viewport']);
    }

    newCreateProps(properties) {
        let listenersProvided = false;
        var o = {};
        o.xtype = this.xtype;

        if (this['config'] !== null) {
            Ext.apply(o, this['config']);
        }

        if ('true' == this.fitToParent || true == this.fitToParent || this.fitToParent == '') {
            o.height='100%';
        }
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];

            if (property == 'header') { //todo to fix this
              //console.log(property)
              //console.dir(this)
              //console.log(this.getAttribute(property))
              o[property] = false; //this[property]
            }

            if (this.getAttribute(property) !== null) {

                if (property == 'config') {
                }

//                else if (property == 'config') {
//                    var configs = JSON.parse(this.getAttribute(property))
//                    for (var configProp in configs) {
//                        if (configs.hasOwnProperty(configProp)) {
//                            //o[configProp] = filterProp(configs[configProp], property, this);
//                            o[configProp] = filterProp(this.getAttribute(configs[configProp]), configProp, this);
//                        }
//                    }
//                }

                else if (property == 'renderer') {
                    //console.log(this.attributeObjects['renderer'])
                    var cellxtype = '';
                    if (Ext.ClassManager.getByAlias('widget.reactcell') == undefined) {
                      cellxtype = 'elementcell';
                    }
                    else {
                      cellxtype = 'reactcell';
                    }
                    o.cell = {};
                    o.cell.xtype = cellxtype;
                    o.cell.encodeHtml = false;
                    if (this.attributeObjects['renderer'] != undefined) {
                      o.renderer = this.attributeObjects['renderer'];
                    }
                    else {
                      o.renderer = eval(this['renderer']);
                    }
                }

                else if (this.getAttribute(property) == 'object') {
                    o[property] = this.attributeObjects[property];
                }

                else if (property == 'handler') {
                    var functionString = this.getAttribute(property);
                    if (functionString !== 'undefined') {
                        if (functionString == 'function') {
                            o[property] = this.attributeObjects[property];
                        }
                        else {
                            o[property] = eval(functionString);
                        }
                    }

                    ////error check for only 1 dot
                    //var r = functionString.split('.');
                    //var obj = r[0];
                    //var func = r[1];
                    //o[property] = window[obj][func];
                }

                // else if ((o.xtype === 'cartesian' || o.xtype === 'polar') && property === 'layout') {
                // }

                else if (property == 'listeners' && this[property] != undefined) {
                    o[property] = this[property];
                    listenersProvided = true;
                }

                else if (this[property] != undefined &&
                    property != 'listeners' &&
                    property != 'config' &&
                    property != 'handler' &&
                    property != 'fitToParent') {
                    o[property] = filterProp(this.getAttribute(property), property, this);
                }

                // else {
                //     o[property] = filterProp(this.getAttribute(property));
                // }
            }

            if (!listenersProvided) {
                o.listeners = {};
                var me = this;
                this.events.forEach(function(event) {
                    me.setEvent(event, o, me);
                });
            }
        }
        this.A.o = o;
    }

  newDoExtCreate(me, isApplication) {
    Ext.onReady(function() {
      if (isApplication) {
        if (Ext.isClassic) {
          me.A.o.plugins = {viewport: true}
        }
      }
      me.A.ext = Ext.create(me.A.o);
            me.A.CHILDREN.forEach(function(child) {
                me.addTheChild(me.A.ext, child);
            });
            if (me.parentNode != null && me.parentNode.nodeName.substring(0, 4) === 'EXT-') {
                if (me.parentNode.A.ext !== undefined) {
                    me.addTheChild(me.parentNode.A.ext, me.A.ext);
                }
                else {
                    me.parentNode.A.CHILDREN.push(me.A.ext);
                }
            }

            if (isApplication) {
              if (Ext.isModern) {
                Ext.application({
                  name: 'MyEWCApp',
                  launch: function launch() {
                    Ext.Viewport.add([me.A.ext]);
                  }
                });
              }
            }

            EleBaseComponent.elementcount--;
            //console.log('reduced: ' + me.tagName + ': elementcount reduced to ' + EleBaseComponent.elementcount)
            if (EleBaseComponent.elementcount == 0) {
                //console.log('done');
                //console.log(EleBaseComponent.elements);
                EleBaseComponent.elementsprior = [...EleBaseComponent.elements];
                EleBaseComponent.elements = [];
                //console.log(EleBaseComponent.elementsprior);
                //var allExt = [];
                var cmpObj = {};
                EleBaseComponent.elementsprior.forEach(element => {
                    //console.dir(element)
                    if (element.A != undefined) {
                        for (var i = 0; i < element.A.ITEMS.length; i++) {
                            //console.log(element.A.ITEMS[i])
                            if(element.A.ITEMS[i].xtype == 'widget') {
                                element.addTheChild(element.A.ext,element.A.ITEMS[i],i);
                            }
                        }
                    }
                    if (element.getAttribute('extname') != undefined) {
                        var o = {};
                        //o.extname = element.getAttribute('extname');
                        //o.ext = element.A.ext;
                        o.cmp = element.A.ext;
                        //allExt.push(o);
                        cmpObj[element.getAttribute('extname')] = element.A.ext;
                    }
                });

                //console.log(EleBaseComponent.elementsprior)
                me.cmp = me.A.ext;
                me.ext = me.A.ext;
                EleBaseComponent.elementsprior.forEach(element => {
                    //console.dir(element)
                    element.dispatchEvent(new CustomEvent('ready', {
                        detail: {
                            cmp: element.A.ext,
                            //allCmp: allExt,
                            //ext: element.A.ext,
                            //allExt: allExt,
                            cmpObj: cmpObj
                        }
                    }));
                });
            }
    });
  }

    addTheChild(parentCmp, childCmp, location) {
        var parentxtype = parentCmp.xtype;
        var childxtype = childCmp.xtype;
        //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.extname + ')' + ' - ' + childxtype + '(' + childCmp.extname + ')');
        //if (childxtype == 'widget')
        if (this.A.ext.initialConfig.align != undefined) {
            if (parentxtype != 'container' && parentxtype != 'toolbar' && parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
                console.error('Can only use align property if parent is a Titlebar or Grid or Button - parent: ' + parentxtype);
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
    }

    setEvent(eventparameters, o, me) {
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
            me.dispatchEvent(new CustomEvent(eventname,{detail: event}))
        }
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (/^on/.test(attr)) {
            if (newVal) {
            this.addEventListener(attr.slice(2), function(event) {
                var functionString = newVal;
                eval(functionString + '(event)');

                //// todo: error check for only 1 dot
                //var r = functionString.split('.');
                //var obj = r[0];
                //var func = r[1];
                //if (obj && func) {
                //window[obj][func](event);
                //}
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
                    if (typeof this.A.ext[method] == 'function') {
                      //console.log(method)
                      //console.log(attr)
                      //console.log(newVal)
                      //console.log(this.attributeObjects[attr])
                      //console.log(typeof newVal)
                      if (newVal == null) {
                        return;
                      }
                      var propertyVal = newVal;
                      if (newVal == '[object Object]') {
                        propertyVal = this.attributeObjects[attr]
                      }
                      if (newVal == 'object') {
                        propertyVal = this.attributeObjects[attr]
                      }
                      else if (newVal === 'true') {
                        propertyVal = true;
                      }
                      else if (newVal === 'false') {
                        propertyVal = false;
                      }
                      else {
                        try {
                          propertyVal = JSON.parse(newVal);
                        } catch (e) {}
                      }
                      //console.log(propertyVal)
                      //console.log(this.A.ext.xtype + ' ' + method)
                      //console.log(propertyVal)
                      this.A.ext[method](propertyVal);
                    }
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

    //extendObject(obj, src) {
    //    if (obj == undefined) {obj = {}}
    //    for (var key in src) {
    //        if (src.hasOwnProperty(key)) obj[key] = src[key];
    //    }
    //    return obj;
    //}

    //extendArray(obj, src) {
    //    if (obj == undefined) {obj = []}
    //    Array.prototype.push.apply(obj,src);
    //    return obj;
    //}


    disconnectedCallback() {
        //console.log('ExtBase disconnectedCallback ' + this.A.ext.xtype)
        Ext.destroy(this.A.ext)
    }




    filterPropertyToDelete(propertyValue) {
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

    newDoExtCreateNoFilesToDelete(me, isApplication) {
        //if (Ext != undefined) {
        if (window['Ext'] != undefined) {
            EleBaseComponent.isLoading = true;
            EleBaseComponent.isDone = true;
        }
        if (EleBaseComponent.isLoading == false) {
            EleBaseComponent.isLoading = true;
            var csstag = document.createElement("script");
            csstag.type = "text/javascript";
            csstag.src = "../ext/css.all.js";
            csstag.onload = function() {
                var exttag = document.createElement("script");
                exttag.type = "text/javascript";
                exttag.src = "../ext/ext.all.js";
                exttag.onload = function() {
                    EleBaseComponent.isDone = true;
                }
                document.getElementsByTagName('head')[0].appendChild(exttag);
            }
            document.getElementsByTagName('head')[0].appendChild(csstag);
        }
        var myVar = setInterval(() => {
            if (EleBaseComponent.isDone === true) {
                clearInterval(myVar)
                Ext.onReady(function () {
                    //console.log(me.A.o)
                    me.A.ext = Ext.create(me.A.o)
                    me.A.CHILDREN.forEach(function(child) {
                        me.addTheChild(me.A.ext,child);
                    })
                    //console.dir(me)
                    if (me.parentNode != null && me.parentNode.nodeName.substring(0, 4) === 'EXT-') {
                        if (me.parentNode.A.ext !== undefined) {
                            me.addTheChild(me.parentNode.A.ext,me.A.ext);
                        }
                        else {
                            me.parentNode.A.CHILDREN.push(me.A.ext);
                        }
                    }
                    if (isApplication) {
                        Ext.application({
                            name: 'MyEWCApp',
                            launch: function () {
                                Ext.Viewport.add([me.A.ext]);
                            }
                        });
                    }

                    EleBaseComponent.elementcount--;
                    //console.log('reduced: ' + me.tagName + ': elementcount reduced to ' + EleBaseComponent.elementcount)
                    if (EleBaseComponent.elementcount == 0) {
                        //console.log('done');
                        //console.log(EleBaseComponent.elements);
                        EleBaseComponent.elementsprior = [...EleBaseComponent.elements];
                        EleBaseComponent.elements = [];
                        //console.log(EleBaseComponent.elementsprior);
                        var allExt = [];
                        EleBaseComponent.elementsprior.forEach(element => {

                            //console.dir(element)
                            if (element.A != undefined) {
                                for (var i = 0; i < element.A.ITEMS.length; i++) {
                                    //console.log(element.A.ITEMS[i])
                                    if(element.A.ITEMS[i].xtype == 'widget') {
                                        //console.log('do it for ' + i)
                                        //console.log(me)
                                        //console.dir(element)
                                        //console.log(me.A.ext)
                                        //console.log(element.A.ITEMS[i])
                                        //element.A.ext.insert(i,element.A.ITEMS[i])
                                        element.addTheChild(element.A.ext,element.A.ITEMS[i],i);
                                    }
                                }
                            }
                            //console.log('after loop')

                            if (element.getAttribute('extname') != undefined) {
                                var o = {}
                                o.extname = element.getAttribute('extname');
                                o.ext = element.A.ext;
                                o.cmp = element.A.ext;
                                allExt.push(o);
                            }
                        })

                        //console.log(EleBaseComponent.elementsprior)
                        EleBaseComponent.elementsprior.forEach(element => {
                            //console.dir(element)
                            element.dispatchEvent(new CustomEvent('ready', {
                                detail: {
                                    cmp: element.A.ext,
                                    allCmp: allExt,
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






}

EleBaseComponent.elementcount = 0;
EleBaseComponent.elements = [];
EleBaseComponent.elementsprior = [];

EleBaseComponent.isLoading = false;
EleBaseComponent.isDone = false;

EleBaseComponent.count = 0;
EleBaseComponent.DIRECTION = '';

//EleBaseComponent.getCmp = function getCmp(event, value) {
//    var array = event.detail.allCmp;
//    for (var i = 0; i < array.length; i++) {
//        if (array[i]['extname'] === value) {
//        return array[i].ext;
//        }
//    }
//    return null;
//};


//EleBaseComponent.extendArray = function(obj, src) {
//    if (obj == undefined) {obj = []}
//    Array.prototype.push.apply(obj,src);
//    return obj;
//}
