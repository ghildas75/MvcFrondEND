import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../service/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode:number=1;
contact:Contact;
idContact:number;
//pour recuperer les parametere entre dans l'url il faut uiliser objet activateRoute
  constructor(private activateRoute:ActivatedRoute, private contactService:ContactsService, private router:Router) {
   // console.log(activateRoute.snapshot.params['id']);
    this.idContact=activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactService.getEditContact(this.idContact).
      subscribe(data=>{
        this.contact=data;
    },error=>{
        console.log(error);
    })
  }
updateContact(){
   this.contactService.saveContact(this.contact)
     .subscribe(data=>{
       console.log(data);
      alert("mise a jour effectue");
      this.router.navigate(["contacts"])
     }, error=>{
       console.log(error);
     })
}
}
