import { Component, OnInit } from '@angular/core';
import { VirusService } from '../../services/virus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public confirmed: any;
  public recovered: any;
  public deaths: any;
  public countries: any;
  public filterSearch = '';

  constructor( private _dataApi: VirusService ) {
    this.onConfirmed(); 
    this.onRecovered();
    this.onDeaths();
    this.onCountries();
  }

  ngOnInit() {}

  onConfirmed() {
    this._dataApi.getConfirmed()
      .subscribe( res => this.confirmed = res.value );
  }

  onRecovered() {
    this._dataApi.getRecovered()
      .subscribe( res => this.recovered = res.value );
  }

  onDeaths() {
    this._dataApi.getDeaths()
      .subscribe( res => this.deaths = res.value );
  }

  onCountries() {
    this._dataApi.getCountries()
      .subscribe( res => {
        this.countries = res;
      })
  }
}
