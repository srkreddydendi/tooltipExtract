// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var x = "<Tooltip placement='top' content='hello world'>abcd</Tooltip> xyz <Tooltip placement='top' content='xus'>hello world </Tooltip> asdasd <Tooltip placement='top' content='hello1 world1'>xyx</Tooltip>"
f(x)
function f(x){
 // console.log(x)
  let start = x.indexOf("<Tooltip")
  let end = x.indexOf("</Tooltip>")
  let resp = x.substr(start, end+10);
  //console.log(resp) 
  prepareTooltip(resp)
  let nextText = x.substr(end+10, x.length)
  if(nextText.includes("<Tooltip"))
    f(nextText)
}


function prepareTooltip(resp){
 let d = resp.split("Tooltip")
 console.log(d[1])
 d =d[1].match(new RegExp("content" + "(.*)" + "</"));

 console.log(d)

}