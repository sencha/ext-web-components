describe("ClassNameUpdate.js", function () {
    beforeEach(() => ST.navigate('#ClassNameUpdate'));
    
    it("Should find the created button component", () => {
        ST.component('#classUpdateButton').visible();
    });
    
    it("Should check the button component text and class", () => {
        ST.component('#classUpdateButton').visible().text("Red");
        ST.element('>> .Red').visible();
    });
    
    it("Should toggle the button component text and class", () => {
        ST.component('#classUpdateButton').visible().text("Red");
        ST.element('>> .Red').visible();
        
        ST.component('#classUpdateButton').click();
        ST.component('#classUpdateButton').visible().text("Blue");
        ST.element('>> .Blue').visible();
    });
});