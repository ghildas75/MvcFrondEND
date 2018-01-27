import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../service/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(private contactService:ContactsService) { }

  ngOnInit() {
  }
  onSave(dataForm){
    this.contactService.AddContact(dataForm)
      .subscribe(data=>{
       console.log("ok")
      },error=>{
        console.log(JSON.parse(error.body).message);
      })
    console.log(dataForm);
  }
}
