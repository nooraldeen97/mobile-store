'use strict';

function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let tableElement=document.getElementById('table');

let allUserArray=[];


function Mobile(name,type) {

    this.name=name;
    this.type=type;
    this.price=randomPrice(100,500);
    this.condition='';
    
    allUserArray.push(this);
}



// console.log(allUserArray);

Mobile.prototype.mobCondition=function () {

    if (this.price< 200) {
        this.condition='Used';
        
    } else {
        this.condition='New';
    }
    
}



Mobile.prototype.render=function () {
    let trElement=document.createElement('tr');
    tableElement.appendChild(trElement);

    let td1Element=document.createElement('td');
    trElement.appendChild(td1Element);
    td1Element.textContent=this.name;

    let td2Element=document.createElement('td');
    trElement.appendChild(td2Element);
    td2Element.textContent=this.type;

    let td4Element=document.createElement('td');
    trElement.appendChild(td4Element);
    td4Element.textContent=this.price;

    let td3Element=document.createElement('td');
    trElement.appendChild(td3Element);
    td3Element.textContent=this.condition;
}



let form =document.getElementById('form');
form.addEventListener('submit',submitter)
function submitter(event) {
    event.preventDefault();

    let nameInput=event.target.name.value;
    let typeInput=event.target.type.value;

    let newUser= new Mobile (nameInput,typeInput);

    storingData();
    newUser.mobCondition();
    newUser.render();
}




function storingData() {
    let data=JSON.stringify(allUserArray);
    localStorage.setItem('users',data);
    
}



function getData() {
    let gettingData=localStorage.getItem('users');
    let usersData=JSON.parse(gettingData);

    if (usersData) {

        for (let x = 0; x < usersData.length; x++) {
            new Mobile (usersData[x].name ,usersData[x].type ,usersData[x].price , usersData[x].condition);
            
        }
        
    }
    
}


getData();

for (let i = 0; i < allUserArray.length; i++) {
    allUserArray[i].mobCondition();
    allUserArray[i].render();
     
 }