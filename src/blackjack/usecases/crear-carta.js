// import { pedirCarta as carta } from "./";


/**
 * 
 * 
 * @param {String} carta Retorna en String el valor de la carta
 * @returns {HTMLImageElement} Imagen de la Carta
 */
export const crearCarta = ( carta ) => {

    if ( !carta ) throw new Error( 'La carta es un Argumento Obligatorio' );

    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add( 'carta' );
    
    return imgCarta;

}