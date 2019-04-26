describe("CreateChild ElementInsertEnd", function() {
    it("should find the click button", function() {
      ST.navigate('#ElementInsertEnd');
      ST.button('#element-insert-end-button').visible();
    });

    it("should click the founded button and check whether the element is added.", function() {
      ST.button('#element-insert-end-button').click();
      ST.element('>> .insertedElement0').visible();
      ST.element('>> .insertedElement0').content('Inserted0');
    });

    it("should reclick the founded button and check whether the another element is added.", function() {
      ST.button('#element-insert-end-button').click();
      ST.element('>> .insertedElement1').visible();
      ST.element('>> .insertedElement1').content('Inserted1');
    });

    it("should check the parent of the divs to be the same as provided", function() {
      ST.element('>> .insertedElement0').up('#elemInsertEndTopParent').visible();
      ST.element('>> .insertedElement1').up('#elemInsertEndTopParent').visible();
    });

    it("should check the position of the divs is in the end of the parent", function() {
        var parentPanel = Ext.ComponentQuery.query('panel[itemId = elemInsertEndTopParent]')[0];

        ST.element('>> .insertedElement0').and(function(inserted0) {
          expect(parentPanel.innerElement.dom.childNodes[2].className).toEqual("insertedElement1");
        });

        ST.element('>> .insertedElement1').and(function(inserted1) {
          expect(parentPanel.innerElement.dom.childNodes[3].className).toEqual("insertedElement0");
        });
    });
});
