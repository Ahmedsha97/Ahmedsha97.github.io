import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabOneComponent } from './tabs/components/tab-one/tab-one.component';
import { TabTwoComponent } from './tabs/components/tab-two/tab-two.component';
import { TabThreeComponent } from './tabs/components/tab-three/tab-three.component';
import { TabFourComponent } from './tabs/components/tab-four/tab-four.component';
import { TabPanelComponent } from './tabs/components/tab-panel/tab-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent,
    TabPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
