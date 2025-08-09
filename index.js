var a = parseInt($(".obs4m").css("grid-column-start"));
var b = parseInt($(".obs4m").css("grid-column-end"));
var c = parseInt($(".obs4m").css("grid-row-start"));
var d = parseInt($(".obs4m").css("grid-row-end"));

var m = parseInt($(".obs5r").css("grid-column-start"));

var n = parseInt($(".obs5r").css("grid-row-start"));
alert("How to play? Press Enter for instructions!");
alert("Use ArrowUp to move up. ArrowDown to move down. ArrowLeft to move left. ArrowRight to move Right. Press Enter");
alert("A game to fetch the rakhi. While you can enjoy the beautiful landscapes, you are not allowed to enter them! Lets Begin. Press Enter");
var yt;
var yt;
$("body").keydown(function (event) {
    let nextA = a;
    let nextB = b;
    let nextC = c;
    let nextD = d;
    if(a===m&&c===n){
        return;
    }
     if (event.key === "ArrowUp") {
         if(c===1)
        {
            return;
        }
        nextC -= 1;
        nextD -= 1;
        yt = new Audio('./audio/game-click.mp3')
        yt.play();
    } else if (event.key === "ArrowDown") {
         if(d===7)
        {
            return;
        }
        nextC += 1;
        nextD += 1;
        yt = new Audio('./audio/game-click.mp3')
        yt.play();
    } else if (event.key === "ArrowLeft") {
        if(a===1)
        {
            return;
        }
        nextA -= 1;
        nextB -= 1;
        yt = new Audio('./audio/game-click.mp3')
        yt.play();
    } else if (event.key === "ArrowRight") {
         if(b===7)
        {
            return;
        }
        nextA += 1;
        nextB += 1;
        yt = new Audio('./audio/game-click.mp3')
        yt.play();
    }

    let blocked = false;
    $(".obst").each(function() {
        let p = parseInt($(this).css("grid-column-start"));
        let q = parseInt($(this).css("grid-column-end"));
        let r = parseInt($(this).css("grid-row-start"));
        let s = parseInt($(this).css("grid-row-end"));
        
        for (let i = r; i < s; i++) {
            for (let j = p; j < q; j++) {
                if (nextC === i && nextA === j) {
                    blocked = true;
                }
            }
        }
        
    });

    if (!blocked) {
        a = nextA;
        b = nextB;
        c = nextC;
        d = nextD;
        
        $(".obs4m").css({
            "grid-column-start": a,
            "grid-column-end": b,
            "grid-row-start": c,
            "grid-row-end": d
        });
        if(a===m&&c===n){
        var cat= new Audio('./audio/win.mp3');
        cat.play();
        $("h1").text("YOU GOT YOUR RAKHI ㄟ(≧◇≦)ㄏ!!!").addClass("pit");
        $("#tb").append("<div class='ntm'></div>")
        return; 
    }
    }
    else{
        $(".obs4m img").addClass("notrun");
        yt.pause();
        var at= new Audio('./audio/negat.mp3');
        at.play();
        setTimeout(function()
    {
        $(".obs4m img").removeClass("notrun");
    },200)    
    }
});

