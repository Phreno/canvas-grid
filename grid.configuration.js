configuration = {
  // CANVAS qui contient la grille
  canvas: document.getElementById('canvas_box'),

  // COULEUR DE LA GRILLE
  gridColor: 'gainsboro',

  // LARGEUR
  cellsPerLine: 60,

  // HAUTEUR
  cellsPerColumn: 60,

  cellSize: 5,

  padding:10,

  strokeSize:0.5
};

configuration.canvas.width = configuration.cellSize * configuration.cellsPerLine + 2 * configuration.padding;
configuration.canvas.height = configuration.cellSize * configuration.cellsPerColumn + 2 * configuration.padding;
