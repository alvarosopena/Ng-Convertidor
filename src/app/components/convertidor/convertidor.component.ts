import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  title = 'Convertidor';
  cantidad = 0;
  tengo = "USD";
  quiero = "EUR";
  total = 0;

  monedas: string[] = ["USD", "EUR", "LIB"];

  convertir(){
    switch(this.tengo){
      case "USD":
        if(this.quiero==="USD"){
          this.total = this.cantidad;
        }
        if(this.quiero==="EUR"){
          this.total = this.cantidad*0.85;
        }
        if(this.quiero==="LIB"){
          this.total = this.cantidad*0.75;
        }
        break;
      case "EUR":
        if(this.quiero==="EUR"){
          this.total = this.cantidad;
        }
        if(this.quiero==="USD"){
          this.total = this.cantidad*1.20;
        }
        if(this.quiero==="LIB"){
          this.total = this.cantidad*0.9;
        }
        break;
      case "LIB":
        if(this.quiero==="LIB"){
          this.total = this.cantidad;
        }
        if(this.quiero==="EUR"){
          this.total = this.cantidad*1.11;
        }
        if(this.quiero==="USD"){
          this.total = this.cantidad*1.33;
        }
        break;
    }
  }
}
