var request = require('request');
var fs = require('fs');
var data = fs.readFileSync('access.log', 'utf8');
var list= new Array();
var list_unique=new Array();
var list_podset=new Array();
var list_podset_un=new Array();
var reg=/[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}/g;
var reg2=/[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}/g;
list=data.match(reg);
list.sort();
for (let i=0; i< list.length; i++) 
	if((list_unique.indexOf(list[i]))==-1) 
		list_unique.push(list[i]);
		
for (let i=0; i<list.length; i++)
	list_podset[i]=list[i].match(reg2);

for (let i=0; i<list_unique.length; i++)
	list_podset_un[i]=list_unique[i].match(reg2);

var m=0;
while(m<list_podset_un.length-1)
	if (String(list_podset_un[m])!=String(list_podset_un[m+1]))
		m=m+1;
	else
		list_podset_un.splice(m+1,1);
	
var k=0;
var j=0;
while (j<list_podset_un.length)
{
    console.log();
	console.log(list_podset_un[j]);
    while (k<list.length && String(list_podset_un[j])==String(list_podset[k]))
	{
        console.log(list[k]);
        k=k+1;
	}
	j=j+1;
}