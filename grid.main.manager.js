GridManager = (function(canvas, coordinate, configuration){
  let drawBoard = function (color = configuration.gridColor){
    let lines = coordinate.getLines();
    let columns = coordinate.getColumns();
    canvas.openLayer();
    canvas.flush();
    lines.forEach(canvas.segment);
    columns.forEach(canvas.segment);
    canvas.ink(color);
    canvas.closeLayer();
  };

  let fillCell = function (column, line, color){
    let cell = coordinate.getCell(column, line);
    let fill = true;
    canvas.openLayer();
    canvas.rectangle(cell);
    canvas.ink(color, fill);
    canvas.closeLayer();
  };

  let strokeCell = function (column, line, color){
    let stroke = coordinate.getCellStrokes(column, line);
    canvas.openLayer();
    canvas.rectangle(stroke);
    canvas.ink(color);
    canvas.closeLayer();
  };

  return {
    drawBoard:drawBoard,
    fillCell:fillCell,
    strokeCell:strokeCell
  };
})(CanvasManager, CoordinateManager, configuration);
