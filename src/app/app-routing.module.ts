import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'imageupload'
  },
  {
    path:'imageupload',
    component: ImageUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
