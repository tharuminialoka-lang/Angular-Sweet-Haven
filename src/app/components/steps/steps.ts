import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step } from '../../models/sweet';
import { SweetService } from '../../services/sweet';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps.html',
  styleUrls: ['./steps.css']
})
export class StepsComponent implements OnInit {
  steps: Step[] = [];

  constructor(private sweetService: SweetService) {}

  ngOnInit(): void {
    this.steps = this.sweetService.getSteps();
  }
}