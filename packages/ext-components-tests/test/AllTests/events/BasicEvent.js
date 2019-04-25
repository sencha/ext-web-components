describe("BasicEvent.js", function () {
    beforeEach(() => ST.navigate('#BasicEvent'));

    it("Should find the created button component", () => {
        ST.component('#basicEventButton').visible();
    });

    it("Should check the button component text and class", () => {
        ST.component('#basicEventButton').click().and(function(buttonItem) {
          expect(buttonItem.getText()).toEqual("Tapped");
        });
    });
});
