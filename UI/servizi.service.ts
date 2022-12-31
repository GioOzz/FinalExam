import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiziService {
  //passo gli URL come readonly e creo con questi i metodi per la pagina
  readonly APIUrl = 'http://localhost:5000/api';
  readonly FotoUrl = 'http://localhost:5000/salvafile';
  constructor(private http: HttpClient) { }

  //? Metodi GET.POST, PUT E DELETE DI TUTTE LE PAGINE 
  //#region Clienti
  GET_Clienti(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/clienti');
  }
  POST_Clienti(val: any) {
    return this.http.post(this.APIUrl + '/clienti', val);
  }
  PUT_Clienti(val: any) {
    return this.http.put(this.APIUrl + '/clienti', val);
  }
  DELETE_Clienti(val: any) {
    return this.http.delete(this.APIUrl + '/clienti' + '/' + val);
  }
  //#endregion
  //#region Costi
  GET_Costi(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/costi');
  }
  POST_Costi(val: any) {
    return this.http.post(this.APIUrl + '/costi', val);
  }
  PUT_Costi(val: any) {
    return this.http.put(this.APIUrl + '/costi', val);
  }
  DELETE_Costi(val: any) {
    return this.http.delete(this.APIUrl + '/costi' + '/' + val);
  }
  //#endregion
  //#region Ordini
  GET_Ordini(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ordini');
  }
  POST_Ordini(val: any) {
    return this.http.post(this.APIUrl + '/ordini', val);
  }
  PUT_Ordini(val: any) {
    return this.http.put(this.APIUrl + '/ordini', val);
  }
  DELETE_Ordini(val: any) {
    return this.http.delete(this.APIUrl + '/ordini' + '/' + val);
  }
  //#endregion
  //#region Profitti
  GET_Profitti(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/profitti');
  }
  POST_Profitti(val: any) {
    return this.http.post(this.APIUrl + '/profitti', val);
  }
  PUT_Profitti(val: any) {
    return this.http.put(this.APIUrl + '/profitti', val);
  }
  DELETE_Profitti(val: any) {
    return this.http.delete(this.APIUrl + '/profitti' + '/' + val);
  }

  //#endregion
  //#region Server
  GET_Server(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/server');
  }
  POST_Server(val: any) {
    return this.http.post(this.APIUrl + '/server', val);
  }
  PUT_Server(val: any) {
    return this.http.put(this.APIUrl + '/server', val);
  }
  DELETE_Server(val: any) {
    return this.http.delete(this.APIUrl + '/server' + '/' + val);
  }
  //#endregion
  //#region Visite
  GET_Visite(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/visite');
  }
  POST_Visite(val: any) {
    return this.http.post(this.APIUrl + '/visite', val);
  }
  PUT_Visite(val: any) {
    return this.http.put(this.APIUrl + '/visite', val);
  }
  DELETE_Visite(val: any) {
    return this.http.delete(this.APIUrl + '/visite' + '/' + val);
  }

  //#endregion
  CaricaFoto(val: any) {
    return this.http.post(this.APIUrl + 'salvafile', val);
  }

}