describe("SingleEvent.js", function () {
    beforeEach(() => ST.navigate('#SingleEvent'));
    
    it("Should find the created button component", () => {
        ST.component('#button66788').visible();
    });

    it("Should increase the div component text after every click", () => {
        ST.component('#button66788').click();
        ST.element('>> .result-div-single-event').visible().text('1');
        ST.component('#button66788').click();
        ST.element('>> .result-div-single-event').visible().text('2');
    });

});