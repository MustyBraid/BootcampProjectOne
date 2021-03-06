var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('searchButton');


function getApi() {
  var searchQuery = localStorage.getItem('searchTerm');
  searchQuery = searchQuery.replace(' ','%20');
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' + searchQuery +'&key=AIzaSyAm4-o6YGzSk0a2S2qVj0KcA9g0uyb_RiM';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      data = data.items
      console.log(data)
      
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('button');
        //Create buttons for each youtube video, using the button's class to store the video ID
        link.setAttribute("class", data[i].id.videoId);
        link.setAttribute("id",'button' + i);
        link.addEventListener('click', storeVid);

        // Setting the text of link and the href of the link
        link.textContent = data[i].snippet.title;
        link.href = "https://www.youtube.com/watch?v=" + data[i].id.videoId;
        
        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

//storeVid stores the video ID into local storage and refreshes the page. On refresh, the embedded player loads the video automatically
function storeVid (event) {
  localStorage.setItem('video', this.className);
  console.log(localStorage.getItem('video'));
  location.reload();
}
//fetchButton.addEventListener('click', getApi);
getApi();
