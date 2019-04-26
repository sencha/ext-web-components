describe("UpdateFunctions.js", function () {
    beforeEach(() => ST.navigate('#UpdateFunctions'));

    it("Should find the created button component", () => {
        ST.component('#updatebutton1').visible().and(function(button) {
          expect(button.getText()).toEqual('Counter 1')
        });
        ST.component('#updatebutton2').visible().and(function(button) {
          expect(button.getText()).toEqual('Counter 2')
        });
    });

    it("Should check the counter 1 button", () => {
        ST.component('#updatebutton1').click();
        ST.component('#updatebutton1').and(function(button) {
          expect(button.getText()).toEqual(1);
        });
        ST.component('#updatebutton1').click();
        ST.component('#updatebutton1').and(function(button) {
          expect(button.getText()).toEqual(2);
        });
        ST.component('#updatebutton1').click();
        ST.component('#updatebutton1').and(function(button) {
          expect(button.getText()).toEqual(3);
        });
    });

    it("Should check the counter 2 button", () => {
        ST.component('#updatebutton2').click();
        ST.component('#updatebutton2').and(function(button) {
          expect(button.getText()).toEqual(1);
        });
        ST.component('#updatebutton2').click();
        ST.component('#updatebutton2').and(function(button) {
          expect(button.getText()).toEqual(2);
        });
        ST.component('#updatebutton2').click();
        ST.component('#updatebutton2').and(function(button) {
          expect(button.getText()).toEqual(3);
        });
    });

});
