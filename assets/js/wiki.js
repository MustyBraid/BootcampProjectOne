wikiQuery = localStorage.getItem('searchTerm');
wikiQuery = wikiQuery.replace(' ', '+');
url = 'https://en.wikipedia.org/wiki/Special:Search?search=' +  wikiQuery + '&go=Go&ns0=1';
document.getElementById('wikiEmbed').src = url;


//super straightforward. We can just point the url to here

