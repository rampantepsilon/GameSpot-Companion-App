import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

//Import Firebase
import * as firebase from 'firebase';

//Import resources for API
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  image;
  title;
  author;
  lede;
  link;
  name = "Articles Are Loading. Please wait....";

  constructor(public httpClient: HttpClient, public loadingContoller: LoadingController) {
    var collection = firebase.firestore().collection('gamespot');
    var apiRef = collection.doc('global');
    var articlesRef = collection.doc('articles');

    var apiUrl1;
    var apiUrl2;
    var apiKey;
    var articlesFilter;
    var api;

    this.image = new Array(20);
    this.title = new Array(20);
    this.author = new Array(20);
    this.lede = new Array(20);
    this.link = new Array(20);

    apiKey = apiRef.get().then(doc => {
      apiUrl1 = doc.data().clientId;
    })
    articlesFilter = articlesRef.get().then(doc => {
      apiUrl2 = doc.data().apiUrl;
    })

    setTimeout(() => {
      api = this.httpClient.get('https://cors-anywhere.herokuapp.com/https://www.gamespot.com/api/articles/?api_key=' + apiUrl1 + apiUrl2 + '&format=json');
      api.subscribe(data => {
        for (let i = 0; i < 20; i++){
          this.image[i] = data.results[i].image.square_small;
          this.title[i] = data.results[i].title;
          this.author[i] = data.results[i].authors;
          this.lede[i] = data.results[i].lede;
          this.link[i] = data.results[i].site_detail_url;
        }
        this.name = "";
      })
    }, 3000);
  }

  ngOnInit() {
  }

}
