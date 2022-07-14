//wiki api request

// const baseURL = "https://en.wikipedia.org/";
// const form = document.querySelector("#search-form");
// const searchEl = document.querySelector("#search-input");
// const formatEl = document.querySelector("#format-input");
// const parameters = location.search;
// const paramArr = parameters.split("&");
// console.log(paramArr);
// const formatArr = paramArr;
// const format = formatArr[0].split("=")[1];
// console.log(format);
// const url = baseURL + format + "?" + paramArr[1] + "&fo=json";
// console.log(url);

// const submitHandler = (e) => {
//   e.preventDefault();

//   const search = searchEl.value.trim();
//   const format = formatEl.value;
// const redirect = "./search-results.html";
//   if (search !== "Search!" && search) {
//     const url = redirect + "?format=" + format + "&q=" + search;
//     location.href = url;
//   }

  
//   let subjectArr = row.subject;
//       let subjects = "";
//       if (!!subjectArr) {
//         let max = subjectArr.length < 10 ? subjectArr.length : 10;
//         console.log(max);
//         for (let i = 0; i < max; i++) {
//           subjects += subjectArr[i];
//           console.log(i < max - 1);
//           if (i < max - 1) subjects += ", ";
//         };
//     }

// };

// obj.myMenu.forEach(function(item) {
//     var element = $('<div class="Wikipedia"><img src="' + item.image + '">' + item.name + '</div>');
//     item.other.forEach(function(otherItem) {
//       var otherElement = $('<div class="Wikipedia"><img src="' + otherItem.image + '">' + otherItem.name + '</div>');
//       element.append(otherElement);
//     });
//     $("body").append(element);
//   });


//Just some basic user-input storage to help with your generation stuff
// $(document).ready(() => {
//     $("#searchButton").click((event) => {
//         let query = $('#searchBar').val();
//         let format = $('#formatInput').val();
//         //Now make this pass those values into your functions.
//     console.log(format);
//     console.log(typeof(format));
//         //youtubeSearch(query, format)
//         //wikipediaSearch(query,format)
//     });


//     //this is a basic setup of what will store our metadata in the middle of the screen
//     function populateMiddle (youtubeTitle, wikiArticle, youtubeAnalytics, wikiAnalytics, youtubeLength, wikiLength){
//         $
//     }
// });

//The above is Doug's code.

//This script runs whenever the search button is pressed. It sets the current search term into local storage after trimming it
//Then it refreshes the page. Both the embedded Wikipedia and the Youtube gadgets trigger on page load using the information in local storage
$(document).ready(() => {
    $("#searchButton").click((event) => {
        let query = $('#searchBar').val();
        if (query === ''){
            console.log('null search query')
            return;
        }
        query = query.trim();
        localStorage.setItem('searchTerm',query);
        console.log(localStorage.getItem('searchTerm'));
        location.reload();
    });
});