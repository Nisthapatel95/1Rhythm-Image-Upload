import { Component, OnInit } from '@angular/core';
// import { DialogboxComponent } from '../dialogbox/dialogbox.component';
// import { CdkOverlayService } from '../shared/services/cdk/cdk-overlay.service';

import { NotificationService } from './notification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  files: File[] = [];
  public total_images: number = 0;
  selectedImage: any;
  constructor(private notifyService: NotificationService,
    // private cdkoverlayservice: CdkOverlayService,
    private modalService: NgbModal
    
   
    ) { }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
    let beforeUpdateFile = this.files.length;
    if (event.rejectedFiles.length != 0) {
      this.notifyService.showError("Please upload a valid file format (Supported file formats: .jpg, .png, .jpeg, .heif)");
    }
    this.total_images += event.addedFiles.length;
    if (this.files.length > 5 || this.total_images > 5) {
      this.notifyService.showError("You Can Only Select Upto 5 Images !");
      this.total_images = this.files.length;
    }
    else {

      this.files.push(...event.addedFiles);
      const formData = new FormData();

      for (var i = 0; i < this.files.length; i++) {
        formData.append("file[]", this.files[i]);
      }
    }
    let afterUpdateFile = this.files.length;
    (beforeUpdateFile != afterUpdateFile) && this.notifyService.showSuccess("Image Uploaded Successfully");
  }
  onRemove(event: any) {
    console.log(event);
    // this.files.splice(this.files.indexOf(event), 1);
    
    console.log(this.total_images);
    this.modalService.open(event, { centered: true });
    
  // this.cdkoverlayservice.displayOverlay(DialogboxComponent)
  }

  setFavImage(selectedImage: any) {
    this.selectedImage = selectedImage
  }
  // openDeletePopup(event:any){
  //   this.modalService.open(event, { centered: true });
  // }
  ondelet(event:any){
    this.files.splice(this.files.indexOf(event), 1);
    this.total_images = this.total_images - 1;
  }
}