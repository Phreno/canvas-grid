CanvasManager = (function(canvas){
  /* Préparation du dessin
   * */
  var openLayer = function(){
    canvas.getContext('2d').beginPath();
  };

  /* Validation du dession
   * */
  var closeLayer = function(){
    canvas.getContext('2d').closePath();
  };
  /* Nettoyage du canvas
   * */
  var flush = function(){
    canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height);
  };

  /* Prépare un segment à partir de bornes (x,y) sur le calque courant
   * */
  var segment = function(coordinates){
    canvas.getContext('2d').moveTo(coordinates.start.x, coordinates.start.y);
    canvas.getContext('2d').lineTo(coordinates.end.x, coordinates.end.y);
  };

  /* Prépare le tracé d'un rectangle à partir de bornes (x,y) sur le calque courant
   * */
  var rectangle = function(coordinates){
    canvas.getContext('2d').rect(
      coordinates.start.x,
      coordinates.start.y,
      coordinates.size.x,
      coordinates.size.y
    );
  };

  /* Dessine les items en attente sur le calque courant
   * */
  var ink = function(color, fill=false){
    if(fill){
      canvas.getContext('2d').fillStyle = color;
      canvas.getContext('2d').fill();
    } else {
      canvas.getContext('2d').strokeStyle = color;
      canvas.getContext('2d').stroke();
    }
  };

  return {
    closeLayer: closeLayer,
    flush: flush,
    ink: ink,
    openLayer: openLayer,
    rectangle: rectangle,
    segment:segment
  };
})(canvas);
