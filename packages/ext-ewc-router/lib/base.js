export class base extends HTMLElement {

  constructor() {
    super()
    console.log('constructor')
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


addChildren(child, children) {
    var childItems = []
    var childItem = {}
    for (var i = children.length-1; i > -1; i--) {
        var item = children[i]
        if (item.nodeName.substring(0, 4) == 'EXT-') {
            childItem = {}
            childItem.parentCmp = child.ext
            childItem.childCmp = item.ext
            childItems.push(childItem)
        }
        else {
            childItem = {}
            childItem.parentCmp = child.ext
            childItem.childCmp = Ext.create({xtype:'widget', ewc:item.getAttribute('ewc'), element:Ext.get(item.parentNode.removeChild(item))})
            childItems.push(childItem)
        }
    }
    for (var i = childItems.length-1; i > -1; i--) {
        var childItem = childItems[i]
        this.addTheChild(childItem.parentCmp, childItem.childCmp)
    }
}

connectedCallback() {
    // console.log('Base connectedCallback ' + this.XTYPE)

    // console.log('connectedCallback for ' + this.XTYPE + '')
    // console.log(this.parentNode)
    // console.dir(this)
    this.createProps()

    // if (this.parentNode == undefined) {
    //     console.log('parent is undefined for: ' + this.nodeName)
    //     this.props.renderTo = document.getElementById('route')
    //     this.doCreate()
    // }


    if (this.parentNode.nodeName == 'APP-ROOT' ||
        this.parentElement.id == 'root'||
        this.parentNode.nodeName == 'BODY'
    ){
        //console.log('*******application at the root')
        var me = this
        me.doCreate()
        console.log('Ext.application for ' + me.props.xtype + '(' + me.props.ewc + ')')

        Ext.application({
            name: 'MyEWCApp',
            launch: function () {
                Ext.Viewport.add([me.ext])
                //if (window.router) {window.router.init();}
            }
        });
    }
    else if (this.parentNode.nodeName.substring(0, 4) != 'EXT-') {
        // console.log('parent of: ' + this.nodeName)
        // console.log(this.parentNode.nodeName)
        this.props.renderTo = this
        this.doCreate()
    }
    else {
        // console.log('parent is EXT')
        this.doCreate()
    }

    var parentEWS = false
    var parentCONNECTED = false
    this.CONNECTED = true
    this.EWSCHILDRENCOUNT = 0

    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].nodeName.substring(0, 4) == 'EXT-') {
            this.EWSCHILDRENCOUNT++
        }
    }
    this.EWSCHILDRENLEFT = this.EWSCHILDRENCOUNT
    if (this.EWSCHILDREN != undefined) {
        this.EWSCHILDRENLEFT = this.EWSCHILDRENCOUNT - this.EWSCHILDREN.length
    }

    if (this.parentNode.nodeName.substring(0, 4) == 'EXT-') {
        parentEWS = true
        if (this.parentNode.CONNECTED == true) {
            parentCONNECTED = true
        }
    }
    // console.log('children: ' + this.children.length)
    // console.log('parentEWS: ' + parentEWS)
    // console.log('parentCONNECTED: ' + parentCONNECTED)
    // console.log('EWSCHILDRENCOUNT: ' + this.EWSCHILDRENCOUNT)
    // console.log('parent EWSCHILDRENCOUNT: ' + this.parentNode.EWSCHILDRENCOUNT)
     console.log('EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)

    if (this.EWSCHILDRENCOUNT == 0) {
        this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
    }

    //if (this.EWSCHILDREN == 0) {
    if (this.EWSCHILDREN == undefined) {
        if (this.EWSCHILDRENCOUNT != 0) {
            // console.log('no children defined yet')
        }
    }
    else {
        // console.log('EWSCHILDREN.length: ' + this.EWSCHILDREN.length)
    }

    if (parentEWS == true) {
        if (this.parentNode.EWSCHILDREN == undefined) {
            this.parentNode.EWSCHILDREN = []
        }
        this.parentNode.EWSCHILDREN.push(this)
        this.parentNode.EWSCHILDRENLEFT--
        if (this.parentNode.EWSCHILDRENLEFT == 0) {
            // console.log('TOP to BOTTOM')
            // console.log('this is the last child')
            // console.log('ready to go')
            // console.dir(this.parentNode)
            // console.dir(this.parentNode.children)
            // console.dir(this.parentNode.EWSCHILDREN)

            var children = this.parentNode.children
            var child = this.parentNode
            this.addChildren(child, children)
            this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
        }
        else {
            // console.log('after EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)
        }
    }

    if(this.EWSCHILDREN == undefined) {this.EWSCHILDREN = []}
    if(this.EWSCHILDRENCOUNT > 0 && this.EWSCHILDRENCOUNT == this.EWSCHILDREN.length) {
        // console.log('BOTTOM to TOP')
        // console.log('children were done first')
        // console.log('ready to go')
        // console.log(this.children)
        // console.log(this.EWSCHILDREN)
        var children = this.children
        var child = this
         console.dir(this.children)
        // console.dir(child)

        this.addChildren(child, children)
        this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))

        console.log(this.parentNode.EWSCHILDRENLEFT)




    }
    else {
        //console.log('after EWSCHILDREN.length: ' + this.EWSCHILDREN.length)
    }
}

  doCreate() {
    this.ext = Ext.create(this.props)
    console.log('Ext.create(' + this.ext.xtype + '(' + this.props.ewc + '), ' + this.props.renderTo + ')')


    //console.log('Ext.create(' + this.ext.xtype + ')')
    //console.dir(this.props)
    //console.dir(this.ext)

    if (this.parentNode.childrenCounter != undefined) {
        this.parentNode.childrenCounter--
        if (this.parentNode.childrenCounter == 0) {
        //console.log(`ready event for this.parentNode.nodeName}`)
        //this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
        }
    }
    else {

        console.log('here')
        console.dir(this.parentNode)
    }
}

addTheChild(parentCmp, childCmp, location) {
    var parentxtype = parentCmp.xtype
    var childxtype = childCmp.xtype
    console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ewc + ')' + ' - ' + childxtype + '(' + childCmp.ewc + ')')
    if (childxtype == 'widget')
    if (this.ext.initialConfig.align != undefined) {
        if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
        console.error('Can only use align property if parent is a Titlebar or Grid or Button')
        return
        }
    }
    var defaultparent = false
    var defaultchild = false

    switch(parentxtype) {
        case 'button':
            switch(childxtype) {
                case 'menu':
                    parentCmp.setMenu(childCmp)
                    break;
                default:
                    defaultparent = true
                    break;
            }
            break;
        case 'gridcolumn':
        case 'column':
        case 'treecolumn':
        case 'textcolumn':
        case 'checkcolumn':
        case 'datecolumn':
        case 'rownumberer':
        case 'numbercolumn':
        case 'booleancolumn':
            switch(childxtype) {
                case 'renderercell':
                    parentCmp.setCell(childCmp)
                    break;
                case 'column':
                case 'gridcolumn':
                    parentCmp.add(childCmp)
                    break;
                default:
                    defaultparent = true
                    break;
            }
            break;
        case 'grid':
        case 'lockedgrid':
            switch(childxtype) {
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
                            parentCmp.addColumn(childCmp)
                        }
                        else {
                            parentCmp.add(childCmp)
                        }
                    }
                    else {
                        var regCols = 0;
                        if(parentCmp.registeredColumns != undefined) {
                            regCols = parentCmp.registeredColumns.length;
                        }
                        if (parentxtype == 'grid') {
                            parentCmp.insertColumn(location + regCols, childCmp)
                        }
                        else {
                            parentCmp.insert(location + regCols, childCmp)
                        }
                    }
                    break;
                default:
                    defaultparent = true
                    break;
            }
            break;
        default:
            defaultparent = true
            break;
    };

    switch(childxtype) {
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
                    if(location == null) {
                        parentCmp.add(childCmp)
                    }
                    else {
                        parentCmp.insert(location, childCmp)
                    }
                }
                else {
                    parentCmp.add(childCmp);
                }
            }
            break;
        case 'tooltip':
            parentCmp.setTooltip(childCmp)
            break;
        case 'plugin':
            parentCmp.setPlugin(childCmp)
            break;
        default:
            defaultchild = true
            break;
    }

    if (defaultparent == true && defaultchild == true) {
        //console.log(parentxtype + '.add(' + childxtype + ')')
        parentCmp.add(childCmp)
    }

    if (this.parentNode.childrenYetToBeDefined > 0) {
        this.parentNode.childrenYetToBeDefined--
    }
    //console.log('childrenYetToBeDefined(after) '  + this.parentNode.childrenYetToBeDefined)
    if (this.parentNode.childrenYetToBeDefined == 0) {
        this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
    }
}

setEvent(eventparameters,o,me) {
    o.listeners[eventparameters.name] = function() {
      let eventname = eventparameters.name
      let parameters = eventparameters.parameters;
      let parms = parameters.split(',');
      let args = Array.prototype.slice.call(arguments);
      let event = {};
      for (let i = 0, j = parms.length; i < j; i++ ) {
        event[parms[i]] = args[i];
      }
      this.dispatchEvent(new CustomEvent(eventname,{detail: event}))
    }
  }


}
