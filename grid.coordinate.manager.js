CoordinateManager = (function(canvas, configuration){

  /* Récupère la largeur de la grille
   **/
  let getWidth = function(){
    return configuration.cellSize * configuration.cellsPerLine;
  };

  /* Récupère la hauteur de la grille
   **/
  let getHeight = function(){
    return configuration.cellSize * configuration.cellsPerColumn;
  };

  /* Récupère les coordonnées de références de
   * toutes les lignes de la grilles
   * */
  let computeLines = function(){
    let limit = configuration.cellsPerColumn;
    let index = 0;
    let segments = [];
    let line = null;
    do {
      line = getLineCoordinatesFromIndex(index++);
      segments.push(line);
    } while (limit--);
    return segments;
  };

  /* Récupère les coordonnées de références de
   * toutes les colonnes de la table
   * */
  let computeColumns = function(){
    let limit = configuration.cellsPerLine;
    let index = 0;
    let column = null;
    let segments = [];
    do {
      column = getColumnCoordinatesFromIndex(index++);
      segments.push(column);
    } while (limit--);
    return segments;
  };

  /* Calcule une position en pixel à partir d'un index de ligne
   * ou de colonne
   * */
  let getPixelOffsetFromIndex = function(index){
    let pixel = configuration.strokeSize + index * configuration.cellSize + configuration.padding;
    return pixel;
  };

  /* Récupère les coordonnées de référence d'une colonne
   * à partir d'un index
   * */
  let getColumnCoordinatesFromIndex = function(index){
    let xOffset = getPixelOffsetFromIndex(index);
    let coordinates={
      start:{
        x:xOffset,
        y:configuration.padding
      },
      end:{
        x:xOffset,
        y:configuration.padding + getHeight()
      }
    };
    return coordinates;
  };

  /* Récupère les coordonnées de référence d'une ligne
   * à partir d'un index
   * */
  let getLineCoordinatesFromIndex = function(index){
    let yOffset = getPixelOffsetFromIndex(index);
    let coordinates = {
      start:{
        x:configuration.padding,
        y:yOffset
      },
      end:{
        x:configuration.padding + getWidth(),
        y:yOffset
      }
    };
    return coordinates;
  };

  /* Récupère les coordonnées d'une cellule à partir de ces index
   * en tenant compte de la largeur du tracé de la grille
   * */
  let getCellCoordinatesFromIndexes = function(column, line){
    let xOffset = getPixelOffsetFromIndex(column);
    let yOffset = getPixelOffsetFromIndex(line);
    let coordinates={
      start:{
        x:xOffset + configuration.strokeSize,
        y:yOffset + configuration.strokeSize
      },
      size:{
        x:configuration.cellSize - 2 * configuration.strokeSize,
        y:configuration.cellSize - 2 * configuration.strokeSize
      }
    };
    return coordinates;
  };

  /* Récupère les coordonnées du tracé d'une cellule
   * */
  let getCellStrokesCoordinateFromIndexes = function(column, line){
    let xOffset = getPixelOffsetFromIndex(column);
    let yOffset = getPixelOffsetFromIndex(line);
    let coordinates={
      start:{
        x:xOffset,
        y:yOffset
      },
      size:{
        x:configuration.cellSize,
        y:configuration.cellSize
      }
    };
    return coordinates;
  };

  return {
    getLines:computeLines,
    getColumns:computeColumns,
    getCell:getCellCoordinatesFromIndexes,
    getCellStrokes:getCellStrokesCoordinateFromIndexes
  };
})(canvas, configuration);
