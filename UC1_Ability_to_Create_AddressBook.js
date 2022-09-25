class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    eMail;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.eMail = params[7];
    }

        toString(){
            return ("Name: "+this.firstName+this.lastName+" Address: "+this.address+"City: "+this.city+"State: "+this.state+"Zip Code: "+this.zip+" Mobile: "+this.phoneNumber+ " EMail: "+this.eMail);
        }
}
let contactObj = new Contact("Pallavi","Jaw","Bangalore","Bangalore","Karnataka",560027,9945007207,"pallavijaw@gmail.com");
console.log(contactObj.toString());
