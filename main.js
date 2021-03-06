
(function(window){
    if( !window.localStorage )
    {
        alert("This browser does NOT support localStorage, you can choose the Chrome browser to get better experience.") ;
        return ;
    }

    var canvas = Global.canvas ;
    var ctx = canvas.getContext("2d") ;
    var controller = new Controller() ;

    controller.setView() ;
    controller.init() ;
    controller.initTools() ;
    function MouseClick(ev) {
        ev = ev || window.event ;
        //console.log("mouse click") ;
        var getMousePosition = function(ev){
            if(ev.pageX || ev.pageY){
                return {x:ev.pageX, y:ev.pageY};
            }

            return {
                x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
                y:ev.clientY + document.body.scrollTop  - document.body.clientTop
            };
        };
        var mousePos = getMousePosition(ev) ;

        controller.selectTarget(mousePos.x, mousePos.y) ;
    };

    document.onselectstart = function() {
        return false;
    }
    document.onmouseup = MouseClick ;
    Global.MouseClick = MouseClick ;
})(window);
