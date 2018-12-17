import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ HttpServiceService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  error: any;
  title = 'IOTHome';
  estadoEstufa1: string;
  estadoEstufa2: string;

  activarEstufa1URL: string = "http://192.168.1.1/gpio/1";
  desactivarEstufa1URL: string = "http://192.168.1.1/gpio/0";


  constructor(private httpService: HttpServiceService){}

  ngOnInit(){
    this.estadoEstufa1 = 'desactivada';
    this.estadoEstufa2 = 'desactivada';
  }

  activarEstufa1(){
    this.httpService.getHttpRequest("https://httpbin.org/get")
    .subscribe(
      (res: HttpResponse<String>) => res.body,
      (error: HttpErrorResponse) => this.error = error.message
    )
    this.estadoEstufa1 = 'activada';
  }

  desactivarEstufa1(){
    this.estadoEstufa1 = 'desactivada';
  }

  activarEstufa2(){
    this.estadoEstufa2 = 'activada';
  }

  desactivarEstufa2(){
    this.estadoEstufa2 = 'desactivada';
  }




}
