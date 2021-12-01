let cobrowse_hub_url =  "https://kamalvm.vcloudx.com:9093/";
// Fetch Query params and extract them into a array
let prefix_name = "";
var qs = (function (a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split("=", 2);
    if (p.length == 1) b[p[0]] = "";
    else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split("&"));

// check if query param exist or it present in cookie if not then set its value
if (qs["cobrowse_name"] == null) {
  let cookie = getCookie("cobrowse_name");
  if (cookie !== null) {
    prefix_name = cookie;
  }   
} else {
  prefix_name = qs["cobrowse_name"];
  setCookie("cobrowse_name", prefix_name, 1);
}

// function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// function to get  a cookie by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// function to erase 
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// TogatherJs configuration
if(prefix_name !== "")
{
    var TogetherJSConfig_siteName = "EnableX";
    var TogetherJSConfig_toolName = "Co-Browsing";
    var TogetherJSConfig_cloneClicks = true;
    var TogetherJSConfig_findRoom = { prefix: prefix_name, max: 5 };
    var TogetherJSConfig_autoStart = true;
    var TogetherJSConfig_hubBase = cobrowse_hub_url;
}
