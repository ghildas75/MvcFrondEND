import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact.model';
import {ContactsService} from '../../service/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact:Contact=new Contact();
mode:number=1;
  constructor(private contactService:ContactsService) { }

  ngOnInit() {
  }
saveContact(){
   // console.log(this.contact);
  this.contactService.AddContact(this.contact)
    .subscribe(data=>
      {
        this.contact=data;
        this.mode=2;
        //console.log(data);
      },
        error=>{
      console.log(error);
      })
}
}
