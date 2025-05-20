import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-home',
  imports: [],
  templateUrl: './modal-home.component.html',
  styleUrl: './modal-home.component.scss'
})
export class ModalHomeComponent {
  private modalService = inject(NgbModal);
  valor = '';

  ngOnInit(){
    console.warn("Valor ==>", this.valor)
  }

  closeModal():void{
    this.modalService.dismissAll()
  }
}
