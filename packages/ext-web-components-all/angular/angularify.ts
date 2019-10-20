import {
    EventEmitter,
    ContentChild,
    ContentChildren,
    QueryList,
    Component,
    Output,
    ElementRef
  } from '@angular/core';

export default function (CustomElement) {
    console.log('default function')
    if (typeof CustomElement !== 'function') {
        throw new Error('Given element is not a valid constructor');
    }
    var tagName = (new CustomElement()).tagName;
    console.log('after CustomElement: ' + tagName)

    var properties = (new CustomElement()).properties;
    var events = (new CustomElement()).events;
    var eventnamesall = [];
    events.forEach( (event: any, n: any) => {
        eventnamesall.push(event.name)
    })
    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    var eventnames = eventnamesall.filter(distinct);

    function toPascalCase(s) {
        return s.match(/[a-z]+/gi)
            .map(function (word) {
                return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
            })
            .join('')
    }
    var pascalName = toPascalCase(tagName)
    console.log(pascalName)

    @Component({
        selector: pascalName,
        inputs: properties,
        outputs: eventnames,
        template: '<ng-template></ng-template>'
    })
    class AngularComponent {
        @ContentChildren(AngularComponent) _childComponents: QueryList<AngularComponent>;
        // get childComponents(): ExtComponent[] {
        //     return this._childComponents.filter(item => item !== this);
        // }
        newDiv: any;
        node: any;
        events: any;
        eventnames: any;
        properties: any;
        constructor(eRef: ElementRef) {
            this.node = eRef.nativeElement;
            console.log('constructor: ' + this.node.nodeName)
            this.properties = properties;
            this.events = events;
            this.eventnames = eventnames;
            this.eventnames.forEach( (event: any, n: any) => {
                (<any>this)[event] = new EventEmitter();
            })
        }

        public ngOnInit() {

        }

        public ngAfterViewInit() {
            console.log('ngAfterViewInit: ' + this.node.nodeName)

            //var node = document.createElement(tagName);
            // Object.keys(props).forEach(name => {
            //     if (name === 'children' || name === 'style') {
            //         return;
            //     }
            //     if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
            //         syncEvent(node, name.substring(2), props[name]);
            //     }
            //     else {
            //         node[name] = props[name];
            //     }
            // });
            // console.log(node)

            this.newDiv = document.createElement(tagName);

            var me = this;
            me.properties.forEach( (property: any, n: any) => {
                if (this[property] != undefined) {
                    this.newDiv.setAttribute(property, this[property])
                }
            })
            me.eventnames.forEach( (eventname: any, n: any) => {
                me.newDiv.addEventListener(eventname, function(event) {
                    console.log('event in angular for ' + eventname)
                    me[eventname].emit(event)
                });
            })
            this.node.insertAdjacentElement('beforebegin', this.newDiv);
        }

        public ngOnChanges(changes) {
        }

        public ngOnDestroy() {
        }
    }
    return AngularComponent
}