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
