import {  HighlightResult } from 'ngx-highlightjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postagen-detail',
  templateUrl: './postagen-detail.component.html',
  styleUrls: ['./postagen-detail.component.css']
})
export class PostagenDetailComponent implements OnInit {
  response: HighlightResult;
  code = 
`from django.db import models
     
class Pessoa(models.Model):
    primeiro_nome = models.CharField(max_length=30)
    segundo_nome = models.CharField(max_length=30)
    
    `

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }
 
  constructor() { }

  ngOnInit() {
  }

}
