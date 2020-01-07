"# Accolite" 
1.inject the file in your main html file, like <script src="script.js"></script>
or simply you can import it using command import Tablegrid from './script.js'(import will only work if bundel is done using webpack) 
2. Directly use the componet in you view like <table-grid ></table-grid>
3. Data source
let data = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi", distance: "130km" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi",  distance: "180km" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi",   distance: "120km" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi",  distance: "150km" },
        { name: "Monte Amiata", height: 1738, place: "Siena",  distance: "200km" }
    ];

4. Some extra Properties of component to change table style
<table-grid 
    background="yellow" // chnage entire background of table
    color='black'       // Font color of table 
    >
</table-grid>
5. Add the below code to your script and chnage the table header, cell color based on value
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
