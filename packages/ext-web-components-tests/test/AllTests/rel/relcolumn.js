describe('main rel columns inside grid', () => {
  it("should auto-assign column, nested column, cell, and widget from children", () => {
    ST.navigate('#RelGridColumn').and(function() {
      ST.component('#gridComponent').visible().and(grid => {
          const columns = grid.getColumns();
          expect(columns.length).toBe(3);
      });
      ST.component('@ext-sparklineline-1').visible();
    });
  });
});
