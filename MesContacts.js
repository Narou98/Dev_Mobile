
//document.addEventListener('deviceready', getContactList , false);

function getContactList() {
    // Cordova is now initialized. Have fun!
	let options=new ContactFindOptions();
	options.multiple=true;
	options.hasPhoneNumber=true;
	let fields=['*'];
    
	navigator.contacts.find(fields,ShowContactlist,onLoadContactsError,options);
}
 function ShowContactlist(contacts){
	 let listeContacts + '';
	 for(let i=0;i<contacts.length;i++){
		 listeContacts+=`
		 <li contact-id ="&{contacts[i].id}">
						<a href="#show-contact">
							<img src="img/contact.PNG">
							<h1>${contacts[i].name.formatted}</h1>
	                        <p>${contacts[i].phoneNumbers[0].value}</p>
						</a>	
					</li>`;
	 }
	 contactlist.innerHTML += listeContacts;
	 $('li').click(function() {
		 showContact(
			$(this).attr('contact id');
			)
	 })
	 $(contactList).listeview('refresh');
	 
 }
 function onLoadContactsError(error){
	 console.log("Erreur dans le récuperation des contacts")
	 console.log(error);
 }
 
 function getContact(id){
	 let options=new ContactFindOptions();
	 options.filter=id;
	 options.multiple=true;
	 options.hasPhoneNumber=true;
	 let fields=['id'];
	 
	 navigator.contatcs.find(fields,ShowContact,OnshowContactError,options);
 }
 
 function ShowContact(contacts){
	 if(contacts.length !=0) {
		 let contact=contacts[0];
		 let defaultMessage "Non renseigner";
		 contactName.innerHTML=contact.name.formatted;
		 contactNumber.innerHTML=contact.phoneNumbers!=null? contact.phoneNumbers[0].value:defaultmessage;
		 contactEmail.innerHTML=contact.emails !=null? contact.emails[0].value:defaultMessage;
		 contactAddress.innerHTML=contact.addresses !=null? contact.adresses[0].formatted:defaultMessage;
		 contactOrganisation.innerHTML=contact.organisation !=null? contact.organisation[0].formatted:defaultMessage;
	 }
	 else
	 {
		 console.log("Contact non trouvé");
	 }
 }
 function OnshowContactError(error){
	  console.log("Erreur dans le récuperation du contact")
	 console.log(error);
 }
 