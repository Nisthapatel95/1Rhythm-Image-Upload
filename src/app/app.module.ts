import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DialogboxComponent } from './dialogbox/dialogbox.component';
// import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxDropzoneModule,
    BrowserAnimationsModule,
    NgbModule,  
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
