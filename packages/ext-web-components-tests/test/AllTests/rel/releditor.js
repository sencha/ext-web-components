describe('main rel columns inside grid', () => {
  it("should auto-assign column, nested column, cell, and widget from children", () => {
    ST.navigate('#RelEditor').and(function() {
      ST.component('#gridComponentEditor').visible().and(grid => {
          const columns = grid.getColumns();
          expect(columns.length).toBe(1);
      });

      ST.component('@ext-gridcell-1').visible();

      ST.play([
          { type: "tap", target: "#ext-gridcell-1"},
          { type: "tap", target: -1, delay:0 }
      ]);

      ST.element('>> .editor').visible();
    });
  });
});
