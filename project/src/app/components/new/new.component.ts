import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, inject, Input } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  @Input() new?: any;

  constructor() { }

  ngOnInit() { }

}
