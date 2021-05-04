import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';


export class registration{
  // UserId:number=0;
  UserName:string="";
  Password:string="";
  ConfirmPassword:string="";
  Email:string="";
  FirstName:string="";
  LastName:string="";

}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registrationData1:registration[]=[];
  registrationmember:registration=new registration();
  // UserId:number=0;
  // UserName:string="";
  // Password:string="";
  // ConfirmPassword:string="";
  // Email:string="";
  // FirstName:string="";
  // LastName:string="";

   constructor(private service:UserService, private rou:Router) { 
    // this.registrationData1=this.service.registrationData;
    // this.service.PostUserData().subscribe((rawdata:any) =>{
    // this.registrationData1=rawdata;
    // }
    // )
    
   }
   onSubmit(data:any){
    if(this.registrationmember.Password=this.registrationmember.ConfirmPassword){
 this.registrationData1=data;
    console.log(this.registrationData1);
    this.service.PostUserData(this.registrationmember).subscribe()
    alert("Signup Successfully Completed");
    this.rou.navigate(['login']);
    }
    else{
alert("Please Enter Details");

    }
   
  }

  ngOnInit(): void {
    // this.registrationmember=new registration();
    // this.registrationmember.UserId=this.UserId;
    // this.registrationmember.UserName="Arvnd";
    // this.registrationmember.Password="arun123";
    // this.registrationmember.ConfirmPassword="arun123";
    // this.registrationmember.FirstName="aravind";
    // this.registrationmember.LastName="yelle";
    // this.registrationmember.Email="aravindyelle6@gmail.com";
    // this.registrationData1.push(this.registrationmember); 
  }
 login(){
  this.rou.navigate(['/login']);
 }
  // show(){
  //   console.log(this.registrationData1);
  // }

}
