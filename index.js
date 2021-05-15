function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
			})
		})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	education(data.educationalqualification);
	skills(data.techinicalskills);
})


var child1 = document.querySelector(".child1");

function basic(det){
	var image1 = document.createElement("img");
	image1.src=det.image;
	image1.alt="image";
	child1.appendChild(image1);


	var name = document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);

	var email = document.createElement("a");
	email.href="mailto:suryanarla54121@gmail.com";
	email.textContent=det.email;
	child1.appendChild(email);

	var br = child1.appendChild(document.createElement("br"));

	var number = document.createElement("tel");
	number.textContent=det.number;
	child1.appendChild(number);

	var address = document.createElement("h3");
	address.textContent="Address";
	child1.appendChild(address);

	var hr = child1.appendChild(document.createElement("hr"));

	var address = document.createElement("p");
	address.textContent=det.address;
	child1.appendChild(address);
}

var child2= document.querySelector(".child2");

function education(edu){

	var heading = document.createElement("h3");
	heading.textContent="educational qualification";
	child2.appendChild(heading);

	var hr = child2.appendChild(document.createElement("hr"));

	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata = "";
	for(i=0;i<edu.length;i++){
		tabledata+= "<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";

	}
	table1.innerHTML = tabledata;


}

function skills(skillinfo){

	for(i=0;i<skillinfo.length;i++){
		var title = document.createElement("h4");
		title.textContent = skillinfo[i].title;
		child2.appendChild(title);

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);
	}
}

