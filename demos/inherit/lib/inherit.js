class A {
    constructor(events) {
        //super ();
        console.log(events)
    }
}

class B extends A {

    static EVENTS() { return [
        {name:'B1',parameters:'undefined'},
        {name:'B2',parameters:'undefined'},
        {name:'B3',parameters:'undefined,context'}
    ]}

    constructor(events) {
        super (
            events.concat(B.EVENTS())
        )
    }
}

class C extends B {

    static EVENTS() { return [
        {name:'C1',parameters:'undefined'},
        {name:'C2',parameters:'undefined'},
        {name:'C3',parameters:'undefined,context'}
    ]}

    constructor(events) {
        super (
            events.concat(C.EVENTS())
        );
    }

}

class D extends C {

    constructor() {
        super (
            []
        );
    }
}

var E = new D()