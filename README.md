"# Accolite" 

for example below is my source data
let data = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi", distance: "130km" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi",  distance: "180km" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi",   distance: "120km" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi",  distance: "150km" },
        { name: "Monte Amiata", height: 1738, place: "Siena",  distance: "200km" }
    ];

// user will have to add component name in the view/html file 
<table-grid 
    background="yellow" // chnage entire background of table
    color='black'       // Font color of table 
    >
</table-grid>
let tableData = [
       {
           name:'Moutain Name', //  customize header name (key:" your name")
           place:'Mountain Location', 
           height:'Moutain Height', 
		   cellName:'height', // customize cell style properties based on cell name
           cellValue:1600,    // customize based on values
           cellColor:'blue:green' // color code below cellValue : color code above cellValue
       }
    ];
