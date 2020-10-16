// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var arr = [];
var x =
  "<p> abcd <Tooltip placement='top' content='hello world aurn welcome'>abcd hello worlds ared </Tooltip> xyz asdfsadfsdfsdfsdfdsf <Tooltip placement='top' content='xus asdfsadfdfa'>hello world </Tooltip> asdasd <Tooltip placement='top' content='hello1 world1'>xyx sdfsdfsdfdsf sss</Tooltip>jjjj</p>";
var i = 0;
f(x);

function f(x) {
  //console.log(x);
  let start = x.indexOf("<Tooltip");
  let end = x.indexOf("</Tooltip>");
  let resp = x.substring(start, end + 10);
  //console.log("start " + start + " end " + end);
  //if (i === 0) {
  //console.log("aaa "+i)
  extractRemainingText(i, start, x);
  //}
  /*else {
    extractRemainingText(i, start, x);
  }*/
  //console.log(resp)
  let content = prepareContent(resp);
  let text = prepateText(resp);
  arr.push({ content: content, text: text });
  let nextText = x.substr(end + 10, x.length);
  if (nextText.includes("<Tooltip")) {
    i++;
    f(nextText);
  } else {
    extractRemainingText(end + 10, x.length, x);
  }
}
//console.log(JSON.stringify(arr));
function prepateText(resp) {
  // console.log(resp)
  let start = resp.indexOf(">");
  let end = resp.lastIndexOf("<");
  //console.log(start +" "+end)
  //d =d[1].match(new RegExp("content" + "(.*)" + "</"));
  let d2 = resp.substring(start + 1, end);
  //console.log(d2)
  return d2;
}

function extractRemainingText(i, j, t) {
  //console.log(i + " XXXX " + j);
  let r = t.substring(i, j);
  console.log(r);
}

function prepareContent(resp) {
  let d = resp.split("Tooltip");
  let d1 = d[1];
  //console.log(d1)
  let start = d1.indexOf("content=");
  let end = d1.indexOf("'>");
  //console.log(end)
  //d =d[1].match(new RegExp("content" + "(.*)" + "</"));
  let d2 = d1.substring(start + 9, end);
  // console.log(d2)
  return d2;
}
