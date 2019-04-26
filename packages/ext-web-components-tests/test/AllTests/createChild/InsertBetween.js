describe("CreateChild InsertBetween", function() {
    it("should find the click button", function() {
      ST.navigate('#InsertBetween');
      ST.button('#insert-between-button').visible();
    });

    it("should click the founded button and check whether the element is added.", function() {
      ST.button('#insert-between-button').click().wait(100).and(function () {
        var insertedComp0 = Ext.ComponentQuery.query('[cls=insertedComp0]')[0];
        expect(insertedComp0.isVisible()).toEqual(true);
        expect(insertedComp0.getHtml()).toEqual('Inserted0');
      });
    });

    it("should reclick the founded button and check whether the another element is added.", function() {
      ST.button('#insert-between-button').click().wait(100).and(function () {
        var insertedComp1 = Ext.ComponentQuery.query('[cls=insertedComp1]')[0];
        expect(insertedComp1.isVisible()).toEqual(true);
        expect(insertedComp1.getHtml()).toEqual('Inserted1');
      });
    });

    it("should check the parent of the divs to be the same as provided", function() {
      ST.component('[cls=insertedComp0]').up('#insertBetTopParent').visible();
      ST.component('[cls=insertedComp1]').up('#insertBetTopParent').visible();
    });

    it("should check the position of the divs inside the parent", function() {
        var parentPanel = Ext.ComponentQuery.query('#insertBetTopParent')[0];
        ST.component('[cls=insertedComp0]').and(function(inserted0) {
          expect(parentPanel.innerElement.dom.childNodes[1].ext.getCls()[0]).toEqual("insertedComp0");
        });

        ST.component('[cls=insertedComp1]').and(function(inserted1) {
          expect(parentPanel.innerElement.dom.childNodes[2].ext.getCls()[0]).toEqual("insertedComp1");
        });
    });
});
