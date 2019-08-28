describe("ClassNameUpdate.js", function () {
    beforeEach(() => ST.navigate('#ClassNameUpdate'));

    it("Should find the created button component", () => {
        ST.component('#classUpdateButton').visible();
    });

    it("Should check the button component text and class", () => {
        ST.component('#classUpdateButton').and(function(button) {
          expect(button.getText()).toEqual("Red");
        });
        ST.element('>> .Red').visible();
    });

    it("Should toggle the button component text and class", () => {
        ST.component('#classUpdateButton').click();
        ST.component('#classUpdateButton').and(function(button) {
          expect(button.getText()).toEqual("Blue");
        });
        ST.element('>> .Blue').visible();
    });
});
