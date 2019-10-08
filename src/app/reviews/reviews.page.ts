import { Component, OnInit } from '@angular/core';

//Import Firebase
import * as firebase from 'firebase';

//Import resources for API
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  image;
  title;
  author;
  date;
  lede;
  score;
  link;
  name = 'Reviews Are Loading. Please wait....';

  constructor(public httpClient: HttpClient) {
    var collection = firebase.firestore().collection('gamespot');
    var apiRef = collection.doc('global');
    var articlesRef = collection.doc('reviews');

    var apiUrl1;
    var apiUrl2;
    var apiKey;
    var articlesFilter;
    var api;

    this.image = new Array(20);
    this.title = new Array(20);
    this.author = new Array(20);
    this.date = new Array(20);
    this.lede = new Array(20);
    this.score = new Array(20);
    this.link = new Array(20);

    apiKey = apiRef.get().then(doc => {
      apiUrl1 = doc.data().clientId;
    })
    articlesFilter = articlesRef.get().then(doc => {
      apiUrl2 = doc.data().apiUrl;
    })

    setTimeout(() => {
      api = this.httpClient.get('https://cors-anywhere.herokuapp.com/https://www.gamespot.com/api/reviews/?api_key=' + apiUrl1 + apiUrl2 + '&format=json');
      api.subscribe(data => {
        for (let i = 0; i < 20; i++){
          this.image[i] = data.results[i].image.square_small;
          this.title[i] = data.results[i].title;
          this.author[i] = '<br>Review by:<br>' + data.results[i].authors;
          this.date[i] = data.results[i].publish_date.substring(5,10) + "-" + data.results[i].publish_date.substring(0,4)
          this.lede[i] = data.results[i].lede;
          this.score[i] = '<br>' + data.results[i].score + '/10.0';
          this.link[i] = data.results[i].site_detail_url;
        }
        this.name = "";
      })
    }, 3000);
  }

  ngOnInit() {
  }

}
