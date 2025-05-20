import { Component, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-home.component.html',
  styleUrl: './modal-home.component.scss'
})
export class ModalHomeComponent {
  private modalService = inject(NgbModal);

  @Input() joke: any = null; 

  ngOnInit() {
    console.warn('Joke recebida no modal =>', this.joke);
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
