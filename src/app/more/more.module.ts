import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { MoreRoutes } from './more.routing';
import { SharedModule } from '../shared/shared.module';
import { ResultComponent } from './result/result.component';
import { CampusComponent } from './campus/campus.component';
import { SearchComponent } from './search/search.component';
import { PaperComponent } from './paper/paper.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { NewsComponent } from './news/news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MagazineComponent } from './magazine/magazine.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ResultComponent,
    CampusComponent,
    SearchComponent,
    PaperComponent,
    SyllabusComponent,
    NewsComponent,
    MagazineComponent,
    AcademicCalendarComponent,
    ScholarshipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoreRoutes),
    HomeModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class MoreModule { }
