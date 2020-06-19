import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'https://bit.ly/30XLGzh',
    'https://bit.ly/37Jznrt',
    'https://bit.ly/3ejnaw7'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
