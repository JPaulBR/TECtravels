var responseAjax=null;
function Buscar(){
  var place= document.getElementById('lugar').value;
  var settings = {
  "async": false,
  "crossDomain": true,
  "url": "https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where="+place+"",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
    "x-rapidapi-key": "186060771fmshf7ae02a6e9cc208p15f932jsn18187222e4e9"
  }
}
$.ajax(settings).done(function (response) {
responseAjax=response; 
});

console.log(responseAjax);}