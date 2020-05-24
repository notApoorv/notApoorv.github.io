window.onload = function()
{
    
    getTeamLabels();




    
}



const base_url = "https://indipl2020.herokuapp.com/ipl2020/team/"
const token_base = "Bearer ";
const tokenID=localStorage.getItem("storedToken");
const token=token_base+tokenID;
console.log(token);
let labels = [];

let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": token
        }
    });
} 

getTeamLabels = function(){
    var s=document.getElementById("slct1");
    const url = "https://indipl2020.herokuapp.com/ipl2020/team/labels";
    response(url).then(res=>res.json()).then(data=>{
        for(var p in data)
        {
            var arr=data[p];
            for(var i=0;i<8;i++)
            {
                var option = document.createElement("option");
                option.text = arr[i];
                s.add(option); 
            }
        }
   });
 }

 dispTab=function()
 {
     var s=document.getElementById("slct1").value;
     

     const url=base_url.concat(s);
     response(url).then(res=>res.json()).then(data=>
    {
        
        document.getElementById("container").innerHTML = "";

        document.getElementById("containerTab").innerHTML = "";

        var count=0;
        var len=data.length;
        var names=new Array(len);
        var roles=new Array(len);
        var prices=new Array(len);
        var count=0;
        for(var p in data)
        {
            var arr=data[p];
            names[count]=arr.name;
            roles[count]=arr.role;
            prices[count]=arr.price;
            count++;
        }

        console.log(names);
        console.log(roles);
        console.log(prices);

        let table = document.createElement('table');
        
        table.setAttribute("id", "tab");
        
        table.insertRow();
            let newCell = table.rows[table.rows.length-1].insertCell();
            newCell.textContent="Name";
            let newCell2 = table.rows[table.rows.length-1].insertCell();
            newCell2.textContent="Role";
            let newCell3 = table.rows[table.rows.length-1].insertCell();
            newCell3.textContent="Price";
        for(var i=0;i<len;i++)
        {
            table.insertRow();
            let newCell = table.rows[table.rows.length-1].insertCell();
            newCell.textContent=names[i];
            let newCell2 = table.rows[table.rows.length-1].insertCell();
            newCell2.textContent=roles[i];
            let newCell3 = table.rows[table.rows.length-1].insertCell();
            newCell3.textContent=prices[i];
        }
        //document.body.appendChild(table);
        document.getElementById('containerTab').appendChild(table);
        var batCount=0;
        var bowCount=0;
        var allCount=0;
        var wicCount=0;
        for(var a=0;a<len;a++)
        {
            if(roles[a]=="Batsman")
            {
                batCount++;
            }
            if(roles[a]=="Wicket Keeper")
            {
                wicCount++;
            }
            if(roles[a]=="All-Rounder")
            {
                allCount++;
            }
            if(roles[a]=="Bowler")
            {
                bowCount++;
            }
        }

        var chrt=[
            {x:"Bowler",value:bowCount},
            {x:"Batsman",value:batCount},
            {x:"All-Rounder",value:allCount},
            {x:"Wicket Keeper",value:wicCount},
        ];

        var chart=anychart.pie();
        chart.data(chrt);
        chart.container('container');
        chart.draw();
    })
 }

