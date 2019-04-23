describe("UpdateFunctions.js", function () {
    beforeEach(() => ST.navigate('#UpdateFunctions'));
    
    it("Should find the created button component", () => {
        ST.component('#button1').visible().text('Counter 1');
        ST.component('#button2').visible().text('Counter 2');
    });
    
    it("Should check the counter 1 button", () => {
        ST.component('#button1').click();
        ST.component('#button1').visible().text("1");
        ST.component('#button1').click();
        ST.component('#button1').visible().text("2");
        ST.component('#button1').click();
        ST.component('#button1').visible().text("3");
    });

    it("Should check the counter 2 button", () => {
        // ST.component('#button2').click();
        // ST.component('#button2').visible().text("1");
        // ST.component('#button2').click();
        // ST.component('#button2').visible().text("2");
        // ST.component('#button2').click();
        // ST.component('#button2').visible().text("3");
    });
    
});