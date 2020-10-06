// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var x = "<Tooltip placement='top' content='abcd'>abcd</Tooltip> xyz <Tooltip placement='top' content='xus'>xyx</Tooltip> asdasd <Tooltip placement='top' content='1234'>xyx</Tooltip>"
f(x)
function f(x){
  let start = x.indexOf("<Tooltip")
  let end = x.indexOf("</Tooltip>")
  let resp = x.substr(start, end);
  console.log(resp)
  let nextText = x.substr(end+10, x.length)
  if(nextText.includes("<Tooltip"))
    f(nextText)
}