import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import{ ServiceRequestService } from './service-http/service-request.service'
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { GithubDetailsComponent } from './github-details/github-details.component';

const routes:Routes =[
  {path:'',redirectTo:'/search-details',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    GithubDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
