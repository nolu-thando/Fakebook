import { Component, OnInit } from '@angular/core';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  modalRef: MDBModalRef;
 

  constructor(private modalService: MDBModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(DeletePostComponent)
  }
 
  ngOnInit() {
  }
 

}
