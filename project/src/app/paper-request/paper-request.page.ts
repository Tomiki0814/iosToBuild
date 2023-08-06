import { Component, OnInit } from '@angular/core';
import { PaperRequestService } from '../services/paper-request.service';
import { Router } from '@angular/router';
import { PaperType } from '../models/paper-type.model';
import { userConnected } from 'src/environments/environment';

@Component({
  selector: 'app-paper-request',
  templateUrl: './paper-request.page.html',
  styleUrls: ['./paper-request.page.scss'],
})
export class PaperRequestPage implements OnInit {
  papier: number = 0;
  message: any = "";
  papersType: PaperType[] = [];
  constructor(private paperRequestService: PaperRequestService, private route: Router) { }

  ngOnInit() {
    // Papers
    this.paperRequestService.getPapersType().subscribe((data: any) => {
      console.log("Papers ===> ", data);
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
    // paper request
    const input = {
      utilisateur: userConnected.id,
      papier: this.papier
    }
    console.log("input ==> ", input);
    const success = (response: any) => {
      this.message = "Ok";
      this.route.navigateByUrl("/paper-request-history");
    }

    const error = (response: any) => {
      this.message = "Server error!";
    }

    try {
      if (userConnected.id == 0 || this.papier == 0) {
        this.message = "Veuillez compléter les informations manquantes";
      } else {
        this.paperRequestService.requestPaper(input).subscribe(success, error);
      }

    } catch (err) {
      this.message = err;
    } finally {

    }
    // 
  }

}
