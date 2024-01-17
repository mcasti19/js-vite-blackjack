import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck.js';
// la referencia anterior se usa para poder renombrar la forma en como se llama
// o se usa la importancion en este archivo

import { crearDeck, valorCarta, pedirCarta, turnoComputadora, crearCarta } from "./usecases";

// import cualquierNombreParaCrearNuevoDeck from './usecases/crear-deck.js';


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector( '#btnPedir' );
const btnDetener = document.querySelector( '#btnDetener' );
const btnNuevo = document.querySelector( '#btnNuevo' );

const divCartasJugador = document.querySelector( '#jugador-cartas' );
const divCartasComputadora = document.querySelector( '#computadora-cartas' );

const puntosHTML = document.querySelectorAll( 'small' );

deck = crearDeck( tipos, especiales );

// Eventos
btnPedir.addEventListener( 'click', () => {

    const carta = pedirCarta( deck );

    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCarta( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn( 'Lo siento mucho, perdiste' );
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML, divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn( '21, genial!' );
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML, divCartasComputadora, deck );
    }

} );


btnDetener.addEventListener( 'click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML, divCartasComputadora, deck );
} );

btnNuevo.addEventListener( 'click', () => {

    console.clear();
    deck = [];
    deck = crearDeck( tipos, especiales );

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

} );
