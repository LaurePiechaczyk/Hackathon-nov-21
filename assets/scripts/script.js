let eventInCard = 
[
  {"image":"images/doctor.png","title":"Why it is important to screen for breast cancer as early as possible","speaker":"Doctor Ivan Green, Oncologist","city":"London","adress":"20th  Downhill street","short_Summary":"We always said early diagnosis is important. In the event Doctor Green will explain why","longuer_Summary":"Details about the event","thema":"Diagnosis","when":"20th November 2021, 15h","audience":"All public"},
  {"image":"images/cells-fluorescence.jpg","title":"We use cells in a lab to find new treatments for breast cancer","speaker":"Mary Blue, PhD","city":"London","adress":"20th  Downhill street","short_Summary":"How cells in a lab are used will be explained in an easy way.","longuer_Summary":"Details about the event","thema":"Basic research","when":"25th November 2021, 15h","audience":"All public"},
  {"image":"images/mix-cancer-research.png","title":"Coffee and Science","speaker":"Panel discussion","city":"London","adress":"Coffee George, 66 Flanelstreet","short_Summary":"Come and talk casually to researchers and doctors on the thema breast cancer","longuer_Summary":"Details about the event","thema":"Casual","when":"30th November 2021, 15h","audience":"All public"}
  ,
  {"image":"images/fly.png","title":"Small flyes for cancer science","speaker":"Lionel Bernard","city":"London","adress":"20th  Downhill street","short_Summary":"Why on earth are we using small animals in research?","longuer_Summary":"Details about the event","thema":"Basic research","when":"5th December 2021, 14h","audience":"All public"}
  ]

// function to render the cards with events
function renderCards(eventsToDisplay){
    // start by removing cards if some are alredy there
    document.getElementById('to-display-events').innerHTML = "";

    for(var i = 0; i < eventsToDisplay.length; i++){
        var div = document.createElement('div');
          div.innerHTML = `
          <div class=" m-1">
          <div class="card ">
          <img src="assets/${eventsToDisplay[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${eventsToDisplay[i].title}</h5>
              <p><strong>Speaker:</strong> ${eventsToDisplay[i].speaker}</p>
              <p><strong>Audience:</strong> ${eventsToDisplay[i].audience}</p>
              <p class="card-text">
                 ${eventsToDisplay[i].short_Summary}<br>
              </p>
              <a data-toggle="collapse" href="#collapse${[i]}"  aria-expanded="false" aria-controls="collapseExample">
                more details
              </a>
            
            <div class="collapse" id="collapse${[i]}">
              <div class="card card-body">
              ${eventsToDisplay[i].longuer_Summary}
              </div>
            </div>
              
          </div>
          <div class="card-footer">
              <p>${eventsToDisplay[i].when} </p>
              <small class="text-muted"><strong>${eventsToDisplay[i].city}</strong> ${eventsToDisplay[i].adress}</small> <br>
              <a href="#">find on map</a>
          </div>
          </div>
          </div>
          `
          //  div.innerHTML = eventInCard[i].presentateur
          document.getElementById('to-display-events').appendChild(div);
    }
  }
renderCards(eventInCard)


// To filter by cities
// make and array with all the cities.
let arrayCities = [];
let citiesListUnique = [];
function makeArrayCities() {
  for (let i = 0; i < eventInCard.length; i++) {
    arrayCities.push(eventInCard[i].city);
  }
}
makeArrayCities();
//make a list of the cities
function makeListCities() {
  citiesListUnique = Array.from(new Set(arrayCities)); //A Set is a collection of unique values https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
}
makeListCities()
//to display the cities in the Html
function renderCities(citieToDisplay){
  for(var i = 0; i < citieToDisplay.length; i++){
      var cityDiv = document.createElement('div');
      cityDiv.innerHTML = `
      <a class="dropdown-item cityChoice"  href="#">${citieToDisplay[i]}</a>
        `
        //  div.innerHTML = eventInCard[i].presentateur
        document.getElementById('cities').appendChild(cityDiv);
  }
}
renderCities(citiesListUnique)
//to render the correct cities when clicked
$(".cityChoice").on('click', function(event){
  var clickedCity = $(event.target).text();
  console.log(clickedCity)

  var cityEvents = eventInCard.filter(function (e) {  // filter function
    return e.city == clickedCity;
  });

  renderCards(cityEvents)
});

// To filter by thema
// make and array with all the thema.
let arrayThemas = [];
let themassListUnique = [];
function makeArrayThemas() {
  for (let i = 0; i < eventInCard.length; i++) {
    arrayThemas.push(eventInCard[i].thema);
  }
};
makeArrayThemas();
console.log(arrayThemas)
//make a list of the Themas
function makeListThemas() {
  themasListUnique = Array.from(new Set(arrayThemas));
}
makeListThemas()
//to display the cities in the Html
function renderThemas(themaToDisplay){
  for(var i = 0; i < themaToDisplay.length; i++){
      var themaDiv = document.createElement('div');
      themaDiv.innerHTML = `
      <a class="dropdown-item themaChoice"  href="#">${themaToDisplay[i]}</a>
        `
        //  div.innerHTML = eventInCard[i].presentateur
        document.getElementById('themas').appendChild(themaDiv);
  }
}
renderThemas(themasListUnique)
//to render the correct cities when clicked
$(".themaChoice").on('click', function(event){
  var clickedThema = $(event.target).text();
  console.log(clickedThema)

  var themaEvents = eventInCard.filter(function (e) {  // filter function
    return e.thema == clickedThema;
  });
  renderCards(themaEvents)
});