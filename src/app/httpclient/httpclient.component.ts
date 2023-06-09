import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../httpclient.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
})
export class HttpclientComponent implements OnInit {
  pageTitle: String = 'Example Http Service';

  httpusers: any;
  constructor(private httpclientList: HttpclientService) {}

  ngOnInit(): void {
    this.httpclientList.getUserfromServer().subscribe((data) => {
      this.httpusers = data;
    });
  }
}
