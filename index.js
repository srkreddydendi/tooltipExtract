// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var arr = [];
var x = "<Tooltip placement='top' content='hello world'>abcd</Tooltip> xyz <Tooltip placement='top' content='xus'>hello world </Tooltip> asdasd <Tooltip placement='top' content='hello1 world1'>xyx</Tooltip>"
f(x)

function f(x){
 // console.log(x)
  let start = x.indexOf("<Tooltip")
  let end = x.indexOf("</Tooltip>")
  let resp = x.substr(start, end+10);
  //console.log(resp) 
  let content = prepareContent(resp)
  let text = prepateText(resp)
  arr.push({content:content,text:text })
  let nextText = x.substr(end+10, x.length)
  if(nextText.includes("<Tooltip"))
    f(nextText)
}
console.log(JSON.stringify(arr))
function prepateText(resp){
 // console.log(resp)
let start = resp.indexOf(">")
 let end = resp.lastIndexOf("<")
 //console.log(start +" "+end)
 //d =d[1].match(new RegExp("content" + "(.*)" + "</"));
 let d2 = resp.substring(start+1, end);
 //console.log(d2)
 return d2;
}

function prepareContent(resp){
 let d = resp.split("Tooltip")
 let d1=d[1]
 //console.log(d1)
 let start = d1.indexOf("content=")
 let end = d1.indexOf("'>")
 //console.log(end)
 //d =d[1].match(new RegExp("content" + "(.*)" + "</"));
 let d2 = d1.substring(start+9, end);
// console.log(d2)
return d2;
}