const fs= require("fs");
let text=fs.readFileSync("text.txt","utf-8");
console.log(text);

text=text.replace("aviii patel", "lio messi");
console.log(text);

fs.writeFileSync("messi.txt", text);