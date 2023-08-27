import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PaperRequestService } from '../services/paper-request.service';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-paper-request-history-detail',
  templateUrl: './paper-request-history-detail.page.html',
  styleUrls: ['./paper-request-history-detail.page.scss'],
})
export class PaperRequestHistoryDetailPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  imageData: string = ''; // Base64-encoded image data
  safeImageData: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer, private paperRequestService: PaperRequestService) {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.paperRequestService.getPaperQrCode(id).subscribe((data: any) => {
      this.safeImageData = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/*;base64,${data["qrcode"]}`);
    });
  }

  ngOnInit() {

  }

}
