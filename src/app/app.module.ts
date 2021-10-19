import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterviewPreprationComponent } from './interview-prepration/interview-prepration.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { CodinComponent } from './interview-prepration/codin/codin.component';
import { TechnicalinterviewComponent } from './interview-prepration/technicalinterview/technicalinterview.component';
import { HrinterviewComponent } from './interview-prepration/hrinterview/hrinterview.component';
import { CoresubjectsComponent } from './interview-prepration/coresubjects/coresubjects.component';
import { TreeComponent } from './interview-prepration/codin/tree/tree.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    InterviewPreprationComponent,
    BlogComponent,
    AboutComponent,
    CodinComponent,
    TechnicalinterviewComponent,
    HrinterviewComponent,
    CoresubjectsComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
