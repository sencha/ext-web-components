describe("Default.js", function () {
    beforeEach(() => ST.navigate('#Defaults'));
    it("Should find the created button component", () => {
        ST.component('#defaultsButton').visible();
    });
});