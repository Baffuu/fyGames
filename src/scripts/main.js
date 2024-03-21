function MakeButton(onclick, title, glitch, tag) {
    return `<button class="cybr-btn" onclick="${onclick}"}>
                ${title}<span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">${glitch}</span>
                <span aria-hidden class="cybr-btn__tag">${tag}</span>
            </button>`;
}

function AddButton(url, title, glitch=null, tag="R%^$", iframe=true) {
    glitch = glitch == null ? (title).split("").reverse().join(""): glitch; // if glitch was not provided, make the glitch be reversed title
    const buttons = document.getElementById("buttons");
    console.log(url);
    buttons.innerHTML += MakeButton((`Move('${url}', ${iframe})`), title, glitch, tag);
    return true;
}

let isMoving = false;
let SetIsMoving = function () { isMoving = true };

const Template = (link) => `
    <!DOCTYPE html>
    <html>
        <head>
            <title>mbfy</title>
        </head>
        <body> 
            <script src='./src/scripts/onunload.js'><\/script>
            <iframe src='${link}' width=100% height=100% title="box" allowfullscreen="true" style="border: 0; height: 100%; left: 0; position: absolute; top: 0; width: 100%;"></iframe>
        </body>
    </html>
`

function Move (link, iframe=true) {
    SetIsMoving();

    if (!iframe){
        return window.open(link, "_blank");
    }

    return window.open("about:blank", "blank").document.write(Template(link));
}

function GoTo () {
    let url = prompt("Enter the url of the website you wanna visit.");
    Move(url);
}

const buttons = document.getElementById("buttons");

buttons.innerHTML = MakeButton("SetIsMoving();window.location.href='./src/iSearch.html'", "iFrame Search", "best thing ever", "tag loves tagging");
AddButton("https://arjun99ab.github.io/ovo/1.4.4", "Modded OvO", "OwO OwO OwO", "v1.4.4");
AddButton("https://arjun99ab.github.io/ovo/1.4", "Modded OvO", "OOOOWWWWOOOO", "v1.4 (old)");
AddButton("https://sky.shiiyu.moe/", "SkyCrypt", "made for nerds", "sky.shiiyu.moe");
AddButton("https://mountain658.github.io", "MountainGames", "weird website ngl", "MOUNTAIN");
AddButton("https://golddigger.frvr.com/", "Gold Digger FRVR", "gold N*****", "fif");
AddButton("https://twoplayergames.org", "twoplayergames", "Lonely?");
AddButton("https://tgcofficial.github.io", "TGC");
AddButton("https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/607721921917323670/burrito-bison-ll.html", "Burito Bison");
AddButton("https://minesweeper.online", "Minesweeper Online");
AddButton("https://vscode.dev", "Visual Studio Code", null, "vsc", false);
AddButton("https://kitsunee.me", "Kitsune", "ANIME IS MY LIFE", "anime"); 
buttons.innerHTML += MakeButton("GoTo()", "goto", "i like to move it move it", "tag loves tagging");
