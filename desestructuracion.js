


const deadpool = {
	nombre: 'wade',
	apellido: 'winston',
	poder: 'regeneración',
	getNombre(){
		return `${ this.nombre} ${ this.apellido }`	
	}

}


//nombre = deadpool.nombre;
//apellido= deadpool.apellido;
//poder= deadpool.poder;

const {nombre, apellido, poder} = deadpool;

console.log(nombre, apellido , poder);



const heroes = [ 'Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;
console.log(h1,h2,h3);

// desestructurando solo los que deseemos

const [,,p3] = heroes;
console.log('solo el p3: ', p3);


