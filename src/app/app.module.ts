import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  localePt  from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule  } from '@angular/material/radio';
import { MatDividerModule   } from '@angular/material/divider';
import { MatCheckboxModule    } from '@angular/material/checkbox';

import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './pages/home/promocoes/promocoes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { SeletorPassageiroComponent } from './shared/seletor-passageiro/seletor-passageiro.component';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';
import { registerLocaleData } from '@angular/common';
import { ModalDetailComponent } from './shared/card-busca/modal-detail/modal-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    PromocoesComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    DepoimentosComponent,
    ModalDetailComponent,
    LoginComponent,
    FormBaseComponent,
    CadastroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }, provideNgxMask(),
              {provide: HTTP_INTERCEPTORS, useClass: AutenticacaoInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
