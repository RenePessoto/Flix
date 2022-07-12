const movieList =[];

const movie ={
    id:movieList.length,
    Title: (movieName),
    Cover:(movieURL)
};

function addMovie(){

    const movieName = document.getElementById('name').value;
    const movieURL = document.getElementById('url').value;

  if ((movieURL.endsWith(".jpg") || movieURL.endsWith(".png") || movieURL.endsWith(".jpeg"))&&(movieName!== null)) {
    movieList.push(new movie);
    return movieList;
  } else {
    alert("URL must ends with JPG, JPEG or PNG");
  } 
}

document.getElementById("url").value = "";
document.getElementById("name").value ="";

function show(movieName,movieURL) {
  var screen = "<img src=" + movieURL + " alt = "+ movieName + ">" +"<label>"+movieName+"</label>";
  var show = document.getElementById("show");
  show.innerHTML = show.innerHTML + screen;
}

