import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto.component";
import { FltroPorTitulo } from './foto.pipes';
import { FotoService } from "./foto.service";

@NgModule({
    declarations: [ FotoComponent, FltroPorTitulo ],
    exports: [ FotoComponent, FltroPorTitulo ],
    providers: [ FotoService ]

})
export class FotoModule {}