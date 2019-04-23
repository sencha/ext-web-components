describe("BasicEvent.js", function () {
    beforeEach(() => ST.navigate('#BasicEvent'));
    
    it("Should find the created button component", () => {
        ST.component('#button').visible();
    });
    
    it("Should check the button component text and class", () => {
        ST.component('#button').click();
        ST.component('#button').visible().text("Tapped");
    });
    
});