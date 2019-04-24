describe("CreateChild", function() {

    it("should insert an html element in the middle", function() {
        ST.navigate('#ElementInsertBetween');
        ST.button('#insertElementBetween').click();
        ST.element('>> .insertedElement0').visible();
        ST.element('>> .insertedElement0').content('Inserted0');

        ST.button('#insertElementBetween').click();
        ST.element('>> .insertedElement1').visible();
        ST.element('>> .insertedElement1').content('Inserted1');
        ST.element('>> .insertedElement1').up('#elemInsertBetTopParent').visible();
        ST.element('>> .insertedElement2').up('#elemInsertBetTopParent').visible();

        // ST.element('>> .insertedElement1').and(function(inserted) {
        //     inserted = Ext.Component.from(inserted);
        //     expect(inserted.getParent().indexOf(inserted)).toBe(0);
        //     // element.content('top');
        //     // inserted = Ext.Component.from(inserted)
        //     // expect(inserted.getParent().indexOf(inserted)).toBe(1);
        // })
        // ST.panel('#elemInsertBetTopParent').gotoComponent('#IAMACONTAINER').and(function (element) {
        //     element.content('top')
        // });

        // var abcd = ST.element('>> .insertedElement').content();
        // expect(abcd).toMatch("Inserted")
        // expect(ST.element('>> .insertedElement').items.length).toBe(1);
        // ST.button('#insertElementBetween').click();
        // expect(ST.element('>> .insertedElement').items.length).toBe(2);

        // var text = ST.element.is('div.insertedElement');
        // text.visible();
        // expect(text).toEqual('ínserted');
        //     .and(function (element) {
        //         expect(element).toBe('abc');
        //     }
        // );
        // items
        // ST.element('>> .insertedElement').and(function(inserted) {
        //     inserted = Ext.Element.from(inserted)
        //     expect(inserted.getParent().indexOf(inserted)).toBe(1);
        // })
    });

    // ST.button('#insertElementBetween').click();
    // ST.button('#insertElementBetween').click();
    // expect(ST.element('>> .insertedElement').size).toBe(1);

    // it("should insert an html element in the middle", function() {
    //     ST.navigate('#ElementInsertBetween');
    //     // ST.button('#insert').click();
    //     // let allElem = ST.element.query('>> .insertedElement');
    //     // expect(allElem.length).toBe(1);

    //     ST.button('#insert').click();
    //    let allElem =Ext.ComponentQuery.query('container');
    //     expect(allElem.length).toBe(2);
    //     // var abcd = Ext.ComponentQuery.query('>> #insertedElement');
    //     // expect(abcd.length).toBe(1);
    //     // ST.element('>> #insertedElement').and(function(inserted) {
    //     //     inserted = Ext.Component.from(inserted)
    //     //     expect(inserted.getParent().indexOf(inserted)).toBe(1);
    //     // })
    // });
});
