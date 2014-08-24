//Crear el objeto pokemon
function pokemon(n,v,a,g){
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = g;
	this.gritar = function () {
		alert(this.grito);
	}
	this.tipo = "tierra";
	this.imagen = "images/"
	};


function elegir(a,nombre,vida,ataque) {	// body...

	
	var pikachu = new pokemon(nombre,vida,ataque,a.alt);
	if (a.alt == "Pika! Pika!"){
	pikachu.tipo = "Tierra";
	};
	if (a.alt == "Chard!!"){
	pikachu.tipo = "Fuego";
	};
	if (a.alt == "Buld buld!"){
	pikachu.tipo = "Planta";
	};
	if (a.alt == "Squir...!"){
	pikachu.tipo = "Agua";
	};
	datos.innerHTML = " <h2>Mi pokemon es "+ pikachu.nombre + "</h2>"+ "<p>Datos:</p> <ul>"+ 
	"<li>Vida: " + pikachu.vida + "</li>"+
	"<li>Ataque: " + pikachu.ataque + "</li>"+
	"<li>Grito: " + a.alt + "</li>"+
	"<li>Tipo: " + pikachu.tipo + "</li>";

	document.body.style.backgroundImage = "url("+pikachu.imagen+pikachu.nombre+"Fondo.png)";
	//document.body.style.backgroundImage
	
}
