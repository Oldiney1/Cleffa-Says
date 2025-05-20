import { Component, inject } from '@angular/core';
import { ModalHomeComponent } from '../modal-home/modal-home.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private modalService = inject(NgbModal);

  openModal():void {
    const modal = this.modalService.open(ModalHomeComponent);
    modal.componentInstance.valor = 'valor qualquer';
  }
}
