describe("SimpleAttributeUpdate.js", function () {
    beforeEach(() => ST.navigate('#SimpleAttributeUpdate'));
    
    it("Should find the created button component", () => {
        ST.component('#simpleUpdateButton').visible();
    });
    
    it("Should check the button component text", () => {
        ST.component('#simpleUpdateButton').visible().text("Counter");
    });
    
    it("Should increase the button component text after every click", () => {
        ST.component('#simpleUpdateButton').click();
        ST.component('#simpleUpdateButton').visible().text("1");
        ST.component('#simpleUpdateButton').click();
        ST.component('#simpleUpdateButton').visible().text("2");
        ST.component('#simpleUpdateButton').click();
        ST.component('#simpleUpdateButton').visible().text("3");
    });
});