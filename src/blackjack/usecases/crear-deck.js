import _ from "underscore";

// expontacion individual
// export const miNombre = 'moises';

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta  Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta < 1 )
        throw new Error( 'tiposDeCarta es Obligatorio y debe ser un Arreglo de Strings' )
    if ( !tiposEspeciales || tiposEspeciales < 1 )
        throw new Error( 'tiposEspeciales es Obligatorio y debe ser un Arreglo de Strings' )

    let deck = [];
    for ( let i = 2; i <= 10; i++ ) {
        for ( let tipo of tiposDeCarta ) {
            deck.push( i + tipo );
        }
    }

    for ( let tipo of tiposDeCarta ) {
        for ( let esp of tiposEspeciales ) {
            deck.push( esp + tipo );
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// exportacion por defecto
// export default crearDeck;