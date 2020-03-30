import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VirusService {

  public URL_API = 'https://covid19.mathdro.id/api'

  constructor( private _http: HttpClient ) { }

  getConfirmed() {
    return this._http.get(`${this.URL_API}`)
    .pipe( map( (data: any) => data.confirmed));
  }

  getRecovered() {
    return this._http.get(`${this.URL_API}`)
    .pipe( map( (data: any) => data.recovered));
  }

  getDeaths() {
    return this._http.get(`${this.URL_API}`)
    .pipe( map( (data: any) => data.deaths));
  }

  getCountries() {
    return this._http.get(`${this.URL_API}/confirmed`)
  }

}
