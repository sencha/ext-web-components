import assign from 'object-assign';
import pascalCase from 'pascal-case';
import React from 'react';
import ReactDOM from 'react-dom';
//<script src="%PUBLIC_URL%/css.all.js"></script>
//<script src="%PUBLIC_URL%/ext.all.js"></script>

const defaults = {
    React,
    ReactDOM,
};

function syncEvent(node, eventName, newEventHandler) {
    const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventNameLc];
    if (oldEventHandler) {
        node.removeEventListener(eventNameLc, oldEventHandler);
    }
    if (newEventHandler) {
        node.addEventListener(eventNameLc, eventStore[eventNameLc] = function handler(e) {
            newEventHandler.call(this, e);
        });
    }
}

export default function (CustomElement, opts) {
    console.log('default function')
    opts = assign({}, defaults, opts);
    if (typeof CustomElement !== 'function') {
        throw new Error('Given element is not a valid constructor');
    }
    const tagName = (new CustomElement()).tagName;
    console.log('after CustomElement: ' + tagName)
    const displayName = pascalCase(tagName);
    const { React, ReactDOM } = opts;
    if (!React || !ReactDOM) {
        throw new Error('React and ReactDOM must be dependencies, globally on your `window` object or passed via opts.');
    }
    console.log('right before')

    class ReactComponent extends React.Component {
        constructor() {
            super()
            console.log('constructor')
        }

        static get displayName() {
            return displayName;
        }
        componentDidMount() {
            this.UNSAFE_componentWillReceiveProps(this.props);
        }
        UNSAFE_componentWillReceiveProps(props) {
            const node = ReactDOM.findDOMNode(this);

            Object.keys(props).forEach(name => {
                console.log(name)
                if (name === 'children' || name === 'style') {
                    return;
                }

                if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                    syncEvent(node, name.substring(2), props[name]);
                }
                else {
                    console.log('here')
                    node[name] = props[name];
                }
            });

        }
        render() {
            return React.createElement(tagName, { style: this.props.style }, this.props.children);
        }
    }

    const proto = CustomElement.prototype;
    console.dir(proto)
    console.dir(CustomElement)

    Object.getOwnPropertyNames(proto).forEach(prop => {
        console.log(prop)
        Object.defineProperty(ReactComponent.prototype, prop, Object.getOwnPropertyDescriptor(proto, prop));
    });

    return ReactComponent;
}
