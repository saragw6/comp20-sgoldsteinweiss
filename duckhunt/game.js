function init() {
    var canvas = document.getElementById('game_canvas');
    var ctx = game_canvas.getContext('2d');

    var birds = new Image();
    birds.src = "duckhunt_various_sheet.png";

    var bg = new Image();
    bg.src = "duckhunt-background.gif";

    function customDraw() {
        ctx.drawImage(bg, 0, 0, 256, 240);
        ctx.drawImage(birds, 0, 115, 35, 35, 100, 50, 35, 35);
        ctx.drawImage(birds, 210, 115, 35, 35, 200, 75, 35, 35);
    }
    
    bg.onload = customDraw;

}