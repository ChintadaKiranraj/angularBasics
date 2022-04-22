import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TextComponent } from './text/text.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBingingComponent } from './event-binging/event-binging.component';
import { FormsModule } from '@angular/forms';
import { ConditonalBlockComponent } from './conditonal-block/conditonal-block.component';
import { CompIntreactionComponent } from './comp-intreaction/comp-intreaction.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TextComponent,
    ClassBindComponent,
    StyleBindingComponent,
    EventBingingComponent,
    ConditonalBlockComponent,
    CompIntreactionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
