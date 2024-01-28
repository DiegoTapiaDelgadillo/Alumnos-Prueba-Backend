function validarHandler(schema, propiedad){
  return(req, res, next) => {
    const data = req[propiedad];
    const { error } = schema.validate(data);
    if(error){
      console.log('Error');
    }
    next();
  }
}

module.exports = validarHandler;
