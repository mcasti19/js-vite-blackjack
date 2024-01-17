/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck
 * @returns {Strig} Retorna la Carta del Deck
 */
export const pedirCarta = ( deck ) => {

    // console.log(deck);

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck, verificar';
    }
    const carta = deck.pop();
    return carta;
}