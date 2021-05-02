

const getUsuarioByID = (id, callback ) => {
	// representaria la llamada a la base de datos
  const usuario = {
		id,
		nombre : 'Fernando'
  }

	setTimeout( ()=>{
		callback(usuario);	
	},1500)

}

getUsuarioByID( 10, (usuario) => {
	console.log( usuario);
}
)
