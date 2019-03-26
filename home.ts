import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  template: `
  <ion-label position="floating">Web Calculator<ion-icon name="logo-angular"></ion-icon></ion-label>
    <form  (ngSubmit)="onSubmit(buttonType)">
      <ion-item>
      
        <ion-input type="text" [(ngModel)]="int1" name="int1"
        placeholder="Enter first integer"></ion-input>
      </ion-item>
      <ion-item>
       
        <ion-input [(ngModel)]="int2" name="int2" 
        placeholder="Enter second integer"></ion-input>
      </ion-item>
      <button ion-button type="submit" value="add"  size="small" 
      (click)="onSubmit('add')" >
      + </button>
      <button ion-button type="submit" value="subtract" size="small"
      (click)="onSubmit('subtract')" >
      - </button>
      <button ion-button type="submit" value="multiply" size="small" 
      (click)="onSubmit('multiply')" >
      * </button>
      <button ion-button type="submit" value="divide"  size="small" 
      (click)="onSubmit('divide')" >
      / </button>
      
      <button ion-button name="clear" size="small" color="secondary" (click)="clearInfo()">CLEAR</button>
    </form>
    

 
    <ion-card >
    <ion-item href="#" class="activated">  
       
    <ion-label >Result:   {{val}} </ion-label>
    
      <ion-label></ion-label>
    </ion-item>
    </ion-card>
    <ion-label position="floating">
    George Samuels  <a href="https://github.com/MrGDS2">
    <ion-icon name="logo-github"></ion-icon></a></ion-label>
  `,
})
export class HomePage {

  int1:any;
  int2:any;
  result:any=[];
  data:Observable<any>;
  val:any;

  // webhost caluations php scripts
  adding='http://localhost/calculator/add.php';
  subtracting='http://localhost/calculator/subtract.php';
  multipling='http://localhost/calculator/multiply.php';
  dividing='http://localhost/calculator/divide.php';
  


  constructor(public navCtrl: NavController, public http: HttpClient,
      public db:AngularFireDatabase) {
       this.val=db.object('/results/val')
       .valueChanges()
       .subscribe(datas=>{
       this.val=datas;
  });
  




  }
ngOnInit(){this.val=0;}

    postData(buttonType:any,url:string) {

     //post to php file for calculations
      let postData=new FormData();
      postData.append('int1',this.int1);
      postData.append('int2',this.int2);
      this.data= this.http.post(url,postData);

      this.data.subscribe(data=>{
      console.log(data);
      });

    }
  clearInfo() {
      this.int1=""
      this.int2=""
      this.val=0;

    }
  onSubmit(buttonType): void {
      if(buttonType==="add") 
        this.postData(buttonType,this.adding);

      if(buttonType==="subtract")
        this.postData(buttonType,this.subtracting);

      if(buttonType==="multiply")
        this.postData(buttonType,this.multipling);

      if(buttonType==="divide")
        this.postData(buttonType,this.dividing);
       
     }


}




