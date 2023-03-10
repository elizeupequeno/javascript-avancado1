class DateHelper {

    constructor () {
        throw new Error('esta classe não pode ser instânciada');
    }

    static dataParaTexto(data) {

      return  `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
      
    
    }


    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw Error('Deve estar no formato aaaa/mm/dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    } 
    
}


