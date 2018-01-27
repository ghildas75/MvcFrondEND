import { Component, OnInit } from "@angular/core";
import {Http} from "@angular/http";
import  "rxjs/add/operator/map";
import {ContactsService} from '../../service/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/contact.model';



@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 pageContact:any;
 motCle:string="";
 currentPage:number=0;
 size:number=3;
 pages:Array<number>;
  constructor(private  http:  Http, private contactService: ContactsService, private router:Router) { }
  onEditContact(id:number){
 this.router.navigate(["edit-contact",id]);
  }
  onSuppContact(c:Contact){

    let confirm=window.confirm("are you sure to delelete");

     if(confirm==true){
       this.contactService.suppContact(c.id)
         .subscribe(data=>{
             this.pageContact.content.splice(this.pageContact.content.indexOf(c),1);
           },
           error2 => {
             console.log("error")
           })
     }
    //alert("ok");
    //this.router.navigate(["edit-contact",id]);

  }
  chercher(){
this.doSearch();
}
doSearch(){
  this.contactService.getContact(this.motCle,this.currentPage, this.size)
    .subscribe(data=>{
      this.pageContact=data;
      console.log(data);
      this.pages=new Array(data.totalPages);
    },error2 => {
      console.log(error2);
    })
}
  ngOnInit() {
  }

  goToPage(i){
   // alert("ok");
    this.currentPage=i;
    this.doSearch();
  }


}
