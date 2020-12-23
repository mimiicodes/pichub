// https://pixabay.com/api/?key="+API_KEY+"&q=yellow+flowers&image_type=photo&pretty=true

// async function getApi (e) {
//     e.preventDefault();
//     var resolve = await fetch("https://pixabay.com/api/?key="+API_KEY+"&q=""&image_type=photo&pretty=true");
//     var result = await resolve.json(resolve);
//     console.log(result.hits);
//     var data = getResult(result.hits);

//     function getResult (data) {
//         div.innerHTML = "";
//         data.forEach(data => {
//         div.innerHTML += '<img class="img" src="${data.largeImageUrl}" alt="img">';
//          });
//     }
// };
// getApi();
// form.addEventListener("submit", getApi);

function changeHtml() {
    window.location.replace("main.html")
}


function searchInput(query) {
    const API_KEY = "15764634-c763f05961fbc2ca2ec73632b";
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true&per_page=200`;
    fetch(url)
    .then(response => response.json(response))
    .then(result => showResults(result.hits));
    // .then(result => console.log(result.hits));
};
function showResults (result) {

    var resultDiv = document.getElementById("div");
    resultDiv.innerHTML = "";

    result.forEach(result => {

        var image = document.createElement("img");
        image.src = result.largeImageURL;

        var eachResultDiv = document.createElement("div");
        eachResultDiv.className = "each";

        // var numberOfDownloads = document.createElement('h5');
        // numberOfDownloads.innerText = "Number of downloads: " + result.downloads;

        // var numberOfLikes = document.createElement('h5');
        // numberOfLikes.innerText = "Number of Likes: " + result.likes;

        // var tags = document.createElement('h5');
        // tags.innerText = "Tags: " + result.tags;

        resultDiv.appendChild(eachResultDiv);
        eachResultDiv.appendChild(image);
        // eachResultDiv.appendChild(numberOfDownloads);
        // eachResultDiv.appendChild(numberOfLikes);
        // eachResultDiv.appendChild(tags);
        
    });
 
};

window.onload = () => {
    
    var input = document.getElementById("searchinput");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        searchInput(input.value);

        if(input.value == "" || null){
       
            alert("No image Found!" );
            //window.location.href = window.location.href;
        }
    })
}