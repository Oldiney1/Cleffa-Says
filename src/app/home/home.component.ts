import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChuckJokesService } from '../services/chuck-jokes.service';
import { ModalHomeComponent } from '../modal-home/modal-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
})
export class HomeComponent implements OnInit {
  public dados: any;

  constructor(private chuckJokesService: ChuckJokesService) {}

  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.chuckJokesService.getDados().subscribe((res) => {
      this.dados = res;
    });
  }

  openModal(): void {
    this.chuckJokesService.getDados().subscribe((jokeData) => {
      const modalRef = this.modalService.open(ModalHomeComponent);
      modalRef.componentInstance.joke = jokeData;
    });
  }
}
