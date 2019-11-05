import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent implements OnInit {
  HotelId: string;
  IdHotel: string;
  IdSearch: string;
  nombre: string;
  precio: string;
  adress: string;
  fotos = [];
  comentarios = [];
  servicios = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.HotelId = this.route.snapshot.params.HotelId;
    var cadena = this.HotelId,
    separador = ",", // un espacio en blanco
    arregloDeSubCadenas = cadena.split(separador);
    this.IdSearch = arregloDeSubCadenas[0];
    this.IdHotel = arregloDeSubCadenas[1];
    this.nombre = arregloDeSubCadenas[2];
    this.precio = arregloDeSubCadenas[3];
    this.adress = arregloDeSubCadenas[4];
    this.fotos= this.detallesFotos(this.IdSearch,this.IdHotel);
    this.servicios= this.detallesServicios(this.IdSearch,this.IdHotel);
    this.comentarios= this.detallesComentarios(this.IdSearch,this.IdHotel);
    console.log(this.fotos);
    console.log(this.servicios);
    console.log(this.comentarios);
  }

  detallesFotos(idS,idH){
    this.fotos=[]; 
    fetch("https://apidojo-kayak-v1.p.rapidapi.com/hotels/get-details?reviewCount=5&searchid="+idS+"&hid="+idH,{
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
      .then((jsonData) =>{
        //this.fotos = [];
        for(var d=0;d<jsonData.photos.length;d++){
          console.log("entra");
          this.fotos.push(
            {
              photo:"https://www.kayak.com/"+jsonData.photos[d].url
            }
          );
        }
      //console.log(this.fotos);
      this.fotos;
      return this.fotos;
      })
      .catch(err => {
        console.log(err);
      })
      return this.fotos;
    }

    detallesServicios(idS,idH){
      this.servicios=[]; 
      fetch("https://apidojo-kayak-v1.p.rapidapi.com/hotels/get-details?reviewCount=5&searchid="+idS+"&hid="+idH,{
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
        .then((jsonData) =>{
          //this.fotos = [];
          this.servicios = [];
          for (var d=0;d<jsonData.amenities.length;d++) {
            console.log("entra1");
            if (jsonData.amenities[d].available == false || jsonData.amenities[d].available == "false"){
            }
            else{
              this.servicios.push({
                servicio: jsonData.amenities[d].name
              })
            }
            
          }
          this.servicios;
        return this.servicios;
        })
        .catch(err => {
          console.log(err);
        })
        return this.servicios;
      }
    
      detallesComentarios(idS,idH){
        this.comentarios=[]; 
        fetch("https://apidojo-kayak-v1.p.rapidapi.com/hotels/get-details?reviewCount=5&searchid="+idS+"&hid="+idH,{
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
          .then((jsonData) =>{
            //this.fotos = [];
            this.comentarios = [];
            for (var d=0;d<jsonData.reviews.length;d++) {
              console.log("entra2");
              this.comentarios.push(
                {
                  comentario: jsonData.reviews[d].text,
                  fecha: jsonData.reviews[d].ctime
                }
              )
            }
            this.comentarios;
            return this.comentarios;
          })
          .catch(err => {
            console.log(err);
          })
          return this.comentarios;
        }
}
