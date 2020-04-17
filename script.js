const logo = `   ..                                    .               
 dF                                     @88>             
'88bu.                   .d\`\`           %8P              
'*88888bu         u      @8Ne.   .u      .         .u    
  ^"*8888N     us888u.   %8888:u@88N   .@88u    ud8888.  
 beWE "888L .@88 "8888"   \`888I  888. ''888E\` :888'8888. 
 888E  888E 9888  9888     888I  888I   888E  d888 '88%" 
 888E  888E 9888  9888     888I  888I   888E  8888.+"    
 888E  888F 9888  9888   uW888L  888'   888E  8888L      
.888N..888  9888  9888  '*88888Nu88P    888&  '8888c. .+ 
 \`"888*""   "888*""888" ~ '88888F\`      R888"  "88888%   
    ""       ^Y"   ^Y'     888 ^         ""      "YP'    
                           *8E                           
                           '8>                           
                            "                            `

const error404 = `____________/\\\\\\________/\\\\\\\\\\\\\\_______________/\\\\\\____        
 __________/\\\\\\\\\\______/\\\\\\/////\\\\\\___________/\\\\\\\\\\____       
  ________/\\\\\\/\\\\\\_____/\\\\\\____\\//\\\\\\________/\\\\\\/\\\\\\____      
    ______/\\\\\\/\\/\\\\\\____\\/\\\\\\_____\\/\\\\\\______/\\\\\\/\\/\\\\\\____     
     ____/\\\\\\/__\\/\\\\\\____\\/\\\\\\_____\\/\\\\\\____/\\\\\\/__\\/\\\\\\____    
      __/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\/\\\\\\_____\\/\\\\\\__/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_   
       _\\///////////\\\\\\//__\\//\\\\\\____/\\\\\\__\\///////////\\\\\\//__  
        ___________\\/\\\\\\_____\\///\\\\\\\\\\\\\\/_____________\\/\\\\\\____ 
         ___________\\///________\\///////_______________\\///_____
`
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const commands = {
    github: {
        info: "Open my GitHub page",
        executeText: "Open GitHub...",
        func: () => {window.open("https://github.com/dapie", "_blank")},
        link: "https://github.com/dapie",
        show: true
    },
    vk: {
        info: "Open my VK page",
        executeText: "Open VK...",
        func: () => {window.open("https://vk.com/dapie", "_blank")},
        link: "https://vk.com/dapie",
        show: true
    },
    telegram: {
        info: "Open my Telegram link",
        executeText: "Open Telegram...",
        func: () => {window.open("https://teleg.run/dapie", "_blank")},
        link: "https://teleg.run/dapie",
        show: true
    },
    instagram: {
        info: "Open my Instagram page",
        executeText: "Open Instagram...",
        func: () => {window.open("https://www.instagram.com/_dapie/", "_blank")},
        link: "https://www.instagram.com/_dapie/",
        show: true
    },
    help: {
        info: "Show this help page",
        executeText: "Available commands:",
        func: () => {printHelp()},
        show: true
    },
    dark: {
        info: "Change theme to dark",
        executeText: "Set to Dark theme...",
        func: () => {setTheme("dark")},
        show: false
    },
    light: {
        info: "Change theme to light",
        executeText: "Set to Light theme...",
        func: () => {setTheme("light")},
        show: false
    }
}

const links = Object.keys(commands).reduce((acc, el) => acc += commands[el].show ? " - " + el : "")

setTheme(localStorage.getItem("theme"))
const logoElement     = document.getElementById("logo")
const linksElement    = document.getElementById("links")
const inputElement    = document.getElementById("input")
const textareaElement = document.getElementById("textarea")
const errorElement    = document.getElementById("error")

let arr, cur, interval
init()

function init(){
    !errorElement ?
    printText(logo, logoElement, 5, () => {
        printText(links, linksElement, 40, () => {
            linksElement.innerHTML = links
                .split(" - ")
                .map((el) => `<a ${isSafari && commands[el].link ? `href='${commands[el].link}'` : ""} onclick='checkCommand(this.innerText)' target="_blank"'>${el}</a>`)
                .join(" - ")
            inputElement.parentNode.style.display = "flex";
            inputElement.focus()
            inputElement.onblur = () => setTimeout(() => inputElement.focus())
            inputElement.onkeypress = (e) => {
                if(e.keyCode === 13) {
                    checkCommand(e.target.value.toLowerCase())
                    return false
                }
            }
        })
    }) :
    printText(error404, errorElement, 5, () => {
        printText("back to main page", linksElement, 60, () => {
            linksElement.innerHTML = "<a href='./index.html'>back to main page</a>"
        })
    })
}

function setTheme(theme){
    document.body.className = theme === "light" ? "light" : "dark"  
    localStorage.setItem('theme', theme)
}

function checkCommand(command){
    inputElement.value = ""
    textareaElement.innerHTML = ""
    text = commands.hasOwnProperty(command) ? commands[command].executeText : "Command not found: " + command
    func = commands.hasOwnProperty(command) ? commands[command].func : undefined
    printText(text, textareaElement, 40, func)
}

function printText(text, element, ms, callback){
    cur = 0
    arr = text.split("")
    clearInterval(interval)
    interval = setInterval(() => {
        if(cur < arr.length){   
            element.innerHTML += arr[cur]
            cur++
        } else{
            clearInterval(interval)
            typeof callback === "function" && callback()
        }
    }, ms)
}

function printHelp(){
    text = ""
    for(let cmd in commands){
        text += `\n${cmd}${cmd.length < 8 ? "\t\t" : "\t"}${commands[cmd].info}`
    }
    printText(text, textareaElement, 40)
}