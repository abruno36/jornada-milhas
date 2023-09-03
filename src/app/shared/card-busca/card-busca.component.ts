import { Component, Input } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;

  constructor(
    public formBuscaService : FormBuscaService) {}
}
