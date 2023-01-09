import { Routes } from '@angular/router';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { CampusComponent } from './campus/campus.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { SearchComponent } from './search/search.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

export const MoreRoutes: Routes = [{
    path: '',
    children: [
     
        {
            path: 'paper',
            component: PaperComponent
        },
        {
            path: 'links/:id',
            component: SyllabusComponent
        },
        {
            path: 'result',
            component: ResultComponent
        },
        {
            path: 'campus',
            component: CampusComponent
        },
        {
            path: 'news',
            component: NewsComponent
        },
        {
            path:'search/:id',
            component:SearchComponent
        },
        {
            path:'magazine',
            component:MagazineComponent
        },
        {
            path:'academic-calendar',
            component:AcademicCalendarComponent
        },
        {
            path:'scholarship',
            component:ScholarshipComponent
        }
    

]
}];