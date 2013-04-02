// load('SonicUI/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("SonicUI/sonic_ui.html","SonicUI/out")
});
