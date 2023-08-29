import { Component, OnInit } from '@angular/core';
import { PaperRequestService } from '../services/paper-request.service';
import { PaperRequestHistory } from '../models/paper-request-history.model';

@Component({
  selector: 'app-paper-request-history',
  templateUrl: './paper-request-history.page.html',
  styleUrls: ['./paper-request-history.page.scss'],
})
export class PaperRequestHistoryPage implements OnInit {
  paperRequestHistory: PaperRequestHistory[] = [];
  spinner: boolean = true;

  constructor(private paperRequestService: PaperRequestService) { }

  getDate(date: string) {
    let dateSplit = date.split('-');

    return dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0];
  }

  ngOnInit() {
    // Paper Request History
    this.paperRequestService.getPaperRequestHistory().subscribe((data: any) => {
      this.spinner = false;
      data.forEach((item: any) => {
        this.paperRequestHistory.push({
          id: item.id,
          // papierType: item.papier.type,
          // dateDemande: item.dateDemande.split('T')[0],
          // statut: item.statut
          papier: item.papier,
          dateDemande: this.getDate(item.dateDemande.split('T')[0]),
          statut: item.statut,
          statutLibelle: item.statutLibelle
        });
      });
    });
    // 
  }

}
