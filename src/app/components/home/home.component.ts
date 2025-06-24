import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { EscolhaComponent } from '../escolha/escolha.component';
import { SobreComponent } from '../sobre/sobre.component';
import { ProcessComponent } from '../process/process.component';
import { ContatoComponent } from '../contato/contato.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [NavbarComponent, BannerComponent, ServicosComponent,EscolhaComponent, SobreComponent, ProcessComponent, ContatoComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './reshome.component.css']
})
export class HomeComponent {

}
