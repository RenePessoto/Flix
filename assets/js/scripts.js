const movieName = document.querySelector('#name').value;
const movieURL = document.querySelector('#url').value;

const movieList =[
  {id:0,
   Title:'Homem de Ferro 3',
   Cover:'https://upload.wikimedia.org/wikipedia/pt/1/19/Iron_Man_3_poster.jpg'
  },
  {id:1,
   Title:'Interstellar',
   Cover:'http://www.magazine-hd.com/apps/wp/wp-content/uploads/2014/10/Interstellar-o-Poster.jpg'
  }
];

const movie ={
    id:movieList.length,
    Title: (movieName),
    Cover:(movieURL)
};


var addButtonEl = document.querySelector('#add-movie');

function addMovie(){

  

  if ((movieURL.endsWith(".jpg") || movieURL.endsWith(".png") || movieURL.endsWith(".jpeg"))&&(movieName!== null)) {
    
    movieList.push(movie);
    
    return movieList[movie];
  
  } else {
    alert("URL must ends with JPG, JPEG or PNG and Name must be filled!");
} 
}

addButtonEl.addEventListener('click',addMovie)

function cleanInput(){
  return (
    document.getElementById("url").value = "",
    document.getElementById("name").value ="")
}

function show(movieList) {
  
  let element ="";

  for ( movie = 0; movie< movieList.length; movie++){
    element +='<div class="movie-box">'
    element +='<div id="show" class="show">'
    element +='<img src="${movieUrl}" alt="${movieName}">'
    element += '<label>"${movieName}"</label>'
    element+='</div>'

  }
  document.write()
}

