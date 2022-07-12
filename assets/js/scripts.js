const movieList =[];

const movie ={
    id:movieList.length,
    Title: (movieName),
    Cover:(movieURL)
};

var addButtonEl = document.querySelector('#add-movie');

function addMovie(){

  let movieName = document.getElementById('name').value;
  let movieURL = document.getElementById('url').value;

  if ((movieURL.endsWith(".jpg") || movieURL.endsWith(".png") || movieURL.endsWith(".jpeg"))&&(movieName!== null)) {
    
    movieList.push(new movie);
    
    return movieList[movie];
  
  } else {
    alert("URL must ends with JPG, JPEG or PNG and Name must be filled!");
} 
}

addButtonEl.addEventListener('click',addMovie,cleanInput)

function cleanInput(){
  return (
    document.getElementById("url").value = "",
    document.getElementById("name").value ="")
}

function show(movieList) {
  var screen = "<img src=" + movieURL + " alt = "+ movieName + ">" + "</br>"+ "<label>"+movieName+"</label>";
  var show = document.getElementById("show");
  show.innerHTML = show.innerHTML + screen;

  
}

