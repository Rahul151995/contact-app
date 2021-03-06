import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./home/header/header.component";
import { AppRoutingModule } from ".//app-routing.module";
import { DataServiceService  } from "./home/msgService/data-service.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgRedux,
  DevToolsExtension,
  NgReduxModule
} from "@angular-redux/store";

import { IAppState, rootReducer ,INITIAL_STATE} from "./store";
import { ContactComponent } from './home/contact/contact.component';
import { SendMessageComponent } from './home/send-message/send-message.component';
import {Nexmo}  from "nexmo";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  counter = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {
   ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

 
}
