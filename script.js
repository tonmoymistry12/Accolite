class Tablegrid extends HTMLElement { 
	constructor () {
    super();  
    this._data=null;
    this._customdata = null;
}

static get observedAttributes(){
    return ['data','abc']
}
attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
        case 'data':
        let keys = null ;   
        this._data = JSON.parse(this.getAttribute('data'))
        
        keys = Object.keys(this._data[0]);
        let values = [];
        let finalArray = [];
        finalArray.push(keys);
        this._data.forEach((item,pos,self)=>{
        values = Object.values(item) ;
        finalArray.push(values);
        })      

        let table = document.createElement("TABLE");
        table.border = "1";
        table.style.borderCollapse="collapse"; 
        //let customdata = this.getAttribute('customData');
        //let customKey = customdata.map(({ value }) => value);
        let setBodyColor = this.getAttribute('background');
        let fontColor = this.getAttribute('color'); 
        let fontSize = this.getAttribute('fontSize'); 
        if(setBodyColor){
            table.style.background=setBodyColor;
        } 
        if(fontColor){
           table.style.color=fontColor;
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
}
customElements.define('table-grid',Tablegrid );