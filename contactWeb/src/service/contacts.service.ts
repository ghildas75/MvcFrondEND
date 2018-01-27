import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from '../model/contact.model';


@Injectable()
export  class ContactsService{
  constructor(private http:Http){

  }
  getContact(motCle:String,page:number,size:number){
return  this.http.get("http://localhost:8083/chercher?mc="+motCle+"&p="+page+"&size= "+size)
  .map(resp=>resp.json());
  }
//addContact cote backend retourne un objet de type contact par consequent on le convertit en json
  AddContact(contact:Contact){
    return  this.http.post("http://localhost:8083/contacts",contact)

      .map(resp=>resp.json());

  // cas ou la methode restfull  est void  on retourne juste la resp on va pas convertir un objet null en joson
    // map(resp=>resp);
  }
 suppContact( id:number){
   return  this.http.delete("http://localhost:8083/contacts/"+id)
     .map(resp=>resp.json());
}
  getEditContact(id:number){
    return  this.http.get("http://localhost:8083/contacts/"+id)
      .map(resp=>resp.json());
  }
  saveContact(contact:Contact){
    return  this.http.put("http://localhost:8083/contacts/"+contact.id,contact)

      .map(resp=>resp.json());


  }
}
