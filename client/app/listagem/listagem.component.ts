import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { PainelComponent } from '../painel/painel.component';

@Component({
  moduleId: module.id,
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {

  fotos: Object[] = [];
  service: FotoService;
  mensagem: string = '';

  constructor(service: FotoService) {

    this.service = service;
        this.service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
  }

  remove(foto: FotoComponent, painel: PainelComponent): void {
    this.service.remove(foto)
      .subscribe(
          fotos => {
            
              painel.fadeOut(() => {
                this.mensagem = "foto removida com sucesso";
                let novasFotos = this.fotos.slice(0);
                let indexFoto = novasFotos.indexOf(foto);
                novasFotos.splice(indexFoto, 1);
                this.fotos = novasFotos;
              });

               
          },
          error => this.mensagem = "erro ao remover foto");
  }

}