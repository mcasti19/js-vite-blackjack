import { crearCarta, pedirCarta, valorCarta } from "./index";
/**
 * 
 * @param {Number} puntosMinimos Puntos minumos que la PC necesita para ganar
 * @param {HTMLElement} puntosHTML  elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora  elemento HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {


    if ( !puntosMinimos ) throw new Error( 'Puntos minimos son Necesiarios' );
    if ( !puntosHTML ) throw new Error( 'Arguemnto puntosHTML es necesario' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = crearCarta( carta );
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }

    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

    setTimeout( () => {
        if ( puntosComputadora === puntosMinimos ) {
            alert( 'Nadie gana :(' );
        } else if ( puntosMinimos > 21 ) {
            alert( 'Computadora gana' )
        } else if ( puntosComputadora > 21 ) {
            alert( 'Jugador Gana' );
        } else {
            alert( 'Computadora Gana' )
        }
    }, 100 );
}