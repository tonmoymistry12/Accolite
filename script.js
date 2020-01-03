class Tablegrid extends HTMLElement { 
	constructor () {
    super();   
let keys ;   
let data = setDetails.data;
let customHeader = setDetails.customHeader;
if(customHeader.length){
    keys = setDetails.customHeader.map((x)=>(x.value));
}
else{
    keys = Object.keys(data[0]);
}

let values = [];
let finalArray = [];
finalArray.push(keys);
data.forEach((item,pos,self)=>{
values = Object.values(item) ;
finalArray.push(values);
})      

let table = document.createElement("TABLE");
    table.border = "1";
table.style.borderCollapse="collapse";    
if(setDetails.setBodyColor){
    table.style.background=setDetails.setBodyColor.backround;
    table.style.color=setDetails.setBodyColor.color;
}    

//Get the count of columns.
let columnCount = finalArray[0].length;
 
//Add the header row.
let row = table.insertRow(-1);
        for (let i = 0; i < columnCount; i++) {
            let headerCell = document.createElement("TH");
            headerCell.innerHTML = finalArray[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (let i = 1; i < finalArray.length; i++) {
            row = table.insertRow(-1);
            for (let j = 0; j < columnCount; j++) {
                let cell = row.insertCell(-1);
                cell.innerHTML = finalArray[i][j];
            }
        }
        
        let dvTable = document.querySelector("table-grid");
        dvTable.appendChild(table);
    
	 
}

}
  
customElements.define('table-grid',Tablegrid );