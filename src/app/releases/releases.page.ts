import { Component, OnInit } from '@angular/core';

//Import Firebase
import * as firebase from 'firebase';

//Import resources for API
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.page.html',
  styleUrls: ['./releases.page.scss'],
})
export class ReleasesPage implements OnInit {

  name;
  release_date;
  platform;
  region;
  splitter;
  loading = "Releases Are Loading. Please wait....";

  constructor(public httpClient: HttpClient) {
    var collection = firebase.firestore().collection('gamespot');
    var apiRef = collection.doc('global');
    var articlesRef = collection.doc('releases');

    var apiUrl1;
    var apiUrl2;
    var apiKey;
    var articlesFilter;
    var api;

    this.name = new Array(100);
    this.release_date = new Array(100);
    this.platform = new Array(100);
    this.region = new Array(100);
    this.splitter = new Array(100);

    apiKey = apiRef.get().then(doc => {
      apiUrl1 = doc.data().clientId;
    })
    articlesFilter = articlesRef.get().then(doc => {
      apiUrl2 = doc.data().apiUrl;
    })

    setTimeout(() => {
      api = this.httpClient.get('https://cors-anywhere.herokuapp.com/https://www.gamespot.com/api/releases/?api_key=' + apiUrl1 + apiUrl2 + '&format=json');
      api.subscribe(data => {
        for (let i = 0; i < data.results.length; i++){
          this.name[i] = data.results[i].name;
          this.release_date[i] = 'Releases<br>' +  data.results[i].release_date.substring(5,10) + '-' +  data.results[i].release_date.substring(0,4);
          if (data.results[i].platform == 'PlayStation 4'){
            this.platform[i] = `<img src="assets/ps4.png" height='50px'>`;
          } else if (data.results[i].platform == 'Xbox One'){
            this.platform[i] = `<img src="assets/xbone.png" height='75px'>`;
          } else if (data.results[i].platform == 'Nintendo Switch'){
            this.platform[i] = `<img src="assets/switch.png" height='50px'>`;
          } else if (data.results[i].platform == 'PC'){
            this.platform[i] = `<img src="assets/pc.png" height='50px'>`;
          } else if (data.results[i].platform == 'Macintosh'){
            this.platform[i] = `<img src="assets/mac.png" height='50px'>`;
          } else if (data.results[i].platform == 'Linux'){
            this.platform[i] = `<img src="assets/linux.png" height='50px' name='Linux'>`;
          } else if (data.results[i].platform == 'Android'){
            this.platform[i] = `<img src="assets/android.png" height='50px'>`;
          } else if (data.results[i].platform == 'iOS (iPhone/iPad)'){
            this.platform[i] = `<img src="assets/ios.png" height='50px'>`;
          } else {
            this.platform[i] = data.results[i].platform;
          }
          this.region[i] = data.results[i].region + ' Release';
          this.splitter[i] = '-------------------------------------------------------------';
        }
        this.loading = "";
      })
    }, 3000);
  }

  ngOnInit() {
  }

}
