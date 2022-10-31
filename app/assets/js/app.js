function save(obj) {
  chrome.storage.sync.set(obj);
}
function get(obj) {
  chrome.storage.sync.get(obj);
}

function isWhatsapWeb(){
  return location.href.startsWith("https://web.whatsapp.com/");
}

function element_exists(id){
  return $('#main').find(`data-testid=${id}`).length > 0;
}

function init(){
  // if(element_exists())
}