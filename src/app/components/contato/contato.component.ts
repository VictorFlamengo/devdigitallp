import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-contato',
  standalone:true,
  imports: [NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css', './rescontato.component.css']
})
export class ContatoComponent {

}
