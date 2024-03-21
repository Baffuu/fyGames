function AddButton(url, title, glitch=null, tag="R%^$", iframe=true) {
    glitch = glitch == null ? (title).split("").reverse().join(""): glitch; // if glitch was not provided, make the glitch be reversed title
    const buttons = document.getElementById("buttons");
    buttons.innerHTML += `<button class="cybr-btn" onclick="Move('${url}', ${iframe})">
                            ${title}<span aria-hidden>_</span>
                            <span aria-hidden class="cybr-btn__glitch">${glitch}</span>
                            <span aria-hidden class="cybr-btn__tag">${tag}</span>
                        </button>`;
    return true;
}

let isMoving = false;
var SetIsMoving = function () { isMoving = true };

var Move = function (link, iframe=true) {
    SetIsMoving();

    if (!iframe){
        window.open(link, "_blank");
        return
    }

    window.open("about:blank", "blank").document.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>mbfy</title>
            </head>
            <body> 
                <script src='./onunload.js'><\/script>
                <iframe src='${link}' width=100% height=100% title="box" allowfullscreen="true" style="border: 0; height: 100%; left: 0; position: absolute; top: 0; width: 100%;"></iframe>
            </body>
        </html>
    `)
}