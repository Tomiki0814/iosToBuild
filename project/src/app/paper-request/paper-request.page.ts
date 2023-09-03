import { Component, OnInit } from '@angular/core';
import { PaperRequestService } from '../services/paper-request.service';
import { Router } from '@angular/router';
import { PaperType } from '../models/paper-type.model';

@Component({
  selector: 'app-paper-request',
  templateUrl: './paper-request.page.html',
  styleUrls: ['./paper-request.page.scss'],
})
export class PaperRequestPage implements OnInit {
  papier: number = 0;
  message: any = "";
  papersType: PaperType[] = [];
  spinner: boolean = false;

  constructor(private paperRequestService: PaperRequestService, private route: Router) { }

  ngOnInit() {
    // Papers
    this.paperRequestService.getPapersType().subscribe((data: any) => {
      data.forEach((item: any) => {
        this.papersType.push({
          id: item.id,
          type: item.type
        });
      });
    });
    // 
  }

  requestPaper() {
    this.spinner = true;
    // paper request
    const input = {
      id: this.papier
    }

    const success = (response: any) => {
      this.message = "";
      this.route.navigateByUrl("/paper-request-history");
    }

    const error = (response: any) => {
      this.message = response["error"]["message"];
    }

    try {
      if (this.papier == 0) {
        this.message = "Veuillez compléter les informations manquantes";
      } else {
        this.paperRequestService.requestPaper(input).subscribe(success, error);
      }

    } catch (err) {
      this.message = "Exception : " + err;
    } finally {
      this.spinner = false;
    }
  }

}
