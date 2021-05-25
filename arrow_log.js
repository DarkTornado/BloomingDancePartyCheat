var keyMap = [];
keyMap[38] = "↑";
keyMap[40] = "↓";
keyMap[37] = "←";
keyMap[39] = "→";

var doubleClick = false;

document.addEventListener('keydown', function(e) {
    var p = document.getElementById('key_input');
    var code = e.keyCode;
    if (code == 13) {
        p.innerHTML = "";
    }
    if (code == 32) {
        if (doubleClick) {
            p.innerHTML = "";
            doubleClick = false;
        } else {
            var str = p.innerHTML;
            var arr = str.trim().split(" ");
            arr.pop();
            p.innerHTML = arr.join(" ") + " ";
            if (!doubleClick) {
                doubleClick = true;
                setTimeout(function() {
                    doubleClick = false
                }, 200);
            }
        }
    } else if (keyMap[code] !== undefined) {
        p.innerHTML += keyMap[code] + " ";
    }
});

