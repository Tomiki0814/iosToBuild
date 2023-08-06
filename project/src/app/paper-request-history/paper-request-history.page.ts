import { Component, OnInit } from '@angular/core';
import { PaperRequestService } from '../services/paper-request.service';
import { userConnected } from 'src/environments/environment';
import { PaperRequestHistory } from '../models/paper-request-history.model';

@Component({
  selector: 'app-paper-request-history',
  templateUrl: './paper-request-history.page.html',
  styleUrls: ['./paper-request-history.page.scss'],
})
export class PaperRequestHistoryPage implements OnInit {
  paperRequestHistory: PaperRequestHistory[] = [];

  constructor(private paperRequestService: PaperRequestService) { }

  ngOnInit() {
    // Paper Request History
    this.paperRequestService.getPaperRequestHistory(userConnected.id).subscribe((data: any) => {
      console.log("History ===> ", data);
      data.forEach((item: any) => {
        this.paperRequestHistory.push({
          id: item.id,
          papierType: item.papier.type,
          dateDemande: item.dateDemande.split('T')[0],
          statut: item.statut
        });
      });
    });
    // 
  }

}
