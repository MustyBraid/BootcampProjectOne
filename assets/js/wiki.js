wikiQuery = localStorage.getItem('searchTerm');
wikiQuery = wikiQuery.replace(' ', '+');
url = 'https://en.wikipedia.org/wiki/Special:Search?search=' +  wikiQuery + '&go=Go&ns0=1';
document.getElementById('wikiEmbed').src = url;


//super straightforward. We can just point the url to here and it makes a little iframe
//The iframes width and height are hardcoded into the html, which isn't optimal but it works

