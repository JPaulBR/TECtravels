import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare function Buscar():any; 
declare var lista;

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
  HotelId: string;
  hotel=[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.HotelId = this.route.snapshot.params.HotelId;
    this.Buscar(this.HotelId);
  }

  Buscar(ciudad){
    fetch("https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where="+ciudad, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
      "x-rapidapi-key": "3c0516a99emsh2bb1ebba86dc80ap188a4ajsn3a835caf1064"
    }
    })
    .then(response => {
      if(response.ok){
          return response.json();
      }else{
          throw new Error('BAD HTTP stuff');
      }
      console.log(response);
    })
    .then( (jsonData) =>{
      this.hoteles(jsonData,ciudad);
    })
    .catch(err => {
      console.log(err);
    })
  }

  hoteles(lista,ciudad){
    var donde=ciudad;
    var respuesta=null;
    if(!(donde == null || donde == "")){
      fetch("https://apidojo-kayak-v1.p.rapidapi.com/hotels/create-session?rooms=1&citycode="+lista[0].ctid+"&checkin=2019-12-20&checkout=2019-12-24&adults=1", {
              "method": "GET",
              "headers": {
              "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
              "x-rapidapi-key": "3c0516a99emsh2bb1ebba86dc80ap188a4ajsn3a835caf1064"
              }
          })
          .then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error('BAD HTTP stuff');
            }
            console.log(response);
          })
          .then( (jsonData) =>{
            respuesta=jsonData; 
            var listTemp=[];
          this.hotel = [];
          for(var j=0;j<respuesta.hotelset.length;j++){
            this.hotel.push(
              {
                id:respuesta.hotelset[j].id,
                precio:respuesta.hotelset[j].price,
                ubicacion:respuesta.hotelset[j].address,
                nombre:respuesta.hotelset[j].name,
                imagen:"https://www.kayak.com/"+respuesta.hotelset[j].thumburl,
                searchId: respuesta.searchid+","+respuesta.hotelset[j].id+","+respuesta.hotelset[j].name+","+respuesta.hotelset[j].price+","+respuesta.hotelset[j].address
              }
            );
          }
          console.log(this.hotel);
          return this.hotel;
          })
          .catch(err => {
            console.log(err);
            return this.hotel;
          })
    }
      /*for (var i = lista.length - 1; i >= 0; i--) {
        if(lista[0].cityonly==donde){
          
          }
        }
      }
        else{
          console.log("error");
        }*/
  }
  
}
