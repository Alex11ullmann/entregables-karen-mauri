import * as rls from "readline-sync";
import { Mago } from "./mago";
import { Guerrero } from "./guerrero";
import { Monje } from "./monje";
import { Enemigo } from "./enemigo";

let respuesta :number;
let ataque : number;
let finDeLaBatalla : boolean = false;
let finDelJuego : boolean = false;
let regaloFinal : number = 9;
let apariceEnemigo : number = 4;
let sumaAtributos:number = 2;

let enemigoDragon : Enemigo = new Enemigo ("DRAGON");

console.log ("Bienvenido a Juego de Dragones!");
let nombrePer = rls.question ("Ingrese el nombre del personaje a crear (minimo 5 caracteres): ");
do {
    if (nombrePer.length < 5) {
        console.log ("Ingresaste un nombre con menos de 5 caracteres");
        nombrePer = rls.question ("Ingrese de nuevamente el nombre (minimo 5 caracteres): ");
    }
} while (nombrePer.length < 5);

do {
    //creacion del personaje
    respuesta = rls.questionInt ("Ingrese que personaje desea crear: 1 = MAGO, 2 = GUERRERO, 3 = MONJE o 0 = SALIR DEL JUEGO, Decida: ");
    if (respuesta == 1) {
        let personajeCreado : Mago = new Mago (nombrePer,  0, 0, 0, 0);
        console.log ("Su personaje es un mago y fue creado correctamente y sus caracteristicas son: ");
        console.log (" Fue,Agi,Sta,Man,Int");
        console.log (personajeCreado.getMago());
        console.log ("Y tu nivel es: " + personajeCreado.getMostrarNivel());
        console.log ("Aqui inicia la aventura de " + personajeCreado.getMostrarNombre());
        console.log ("Estas avanzando");
        do {
            let numeroAzar = Math.random()*10;
            if (numeroAzar >= apariceEnemigo) {
                enemigoDragon.restaurarVida();
                finDeLaBatalla = false;
                console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                console.log ("--------------------------------------CUIDADO UN " + enemigoDragon.getMostrarNombre() + " AL FRENTE!!!--------------------------------------------------------------------");
                do {
                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                    respuesta = rls.questionInt ("Decide que hacer:                 1 = Ataque comun,                 2 = Defenderse,                 3 = Ataque especial                 0 = Salir del juego,     Decida: ");
                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                    if (respuesta == 1) {
                        ataque = personajeCreado.ataqueComun();
                        enemigoDragon.perdidaDeVida(ataque);
                        if (enemigoDragon.getMostrarVida() > 0) {
                            console.log ("La vida que le quedo al enemigo es " + enemigoDragon.getMostrarVida() + " puntos");
                            ataque = enemigoDragon.ataqueComun();
                            personajeCreado.perdidaDeVida (ataque);
                            if (personajeCreado.getMostrarVida() > 0){
                                console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                            } 
                            if (personajeCreado.getMostrarVida() <= 0) {
                                console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            }
                        } else if (enemigoDragon.getMostrarVida() <= 0) {
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("--------------------------------------El " + enemigoDragon.getMostrarNombre() + " ah sido derrotado----------------------------------------------------------------------");
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("Mira, el " + enemigoDragon.getMostrarNombre() + " ah soltado algo..!");
                            let numeroAzar = Math.random()*10;
                            if (numeroAzar >= regaloFinal) {
                                console.log ("Encontraste la caja magica! Has completado el objetivo! Felicidades, ganaste el juego!!!");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            } else {
                                console.log ("Que mal era chatarra...");
                                personajeCreado.subeNivel();
                                if (personajeCreado.getMostrarNivel() > 25) {
                                    personajeCreado.evolucion();
                                    console.log ("Tu personaje a evolucionado y ah mejorado sus atributos");
                                }
                                console.log ("Felicidades!! Subiste a nivel: " + personajeCreado.getMostrarNivel());
                                console.log ("Tus nuevos atributos ahora son: " + personajeCreado.getMago());
                                console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                console.log ("Listo! Continua avanzando");
                                finDeLaBatalla = true;
                            }
                        }
                    } else if (respuesta == 2) {
                        ataque = enemigoDragon.ataqueComun();
                        personajeCreado.perdidaDeVida (ataque);
                        if (personajeCreado.getMostrarVida() > 0){
                            personajeCreado.cambioEnMana(sumaAtributos);
                            console.log ("Tu mana se recupero 2 puntos, en total: " + personajeCreado.getMostrarMana() + " puntos");
                            console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                        }
                        if (personajeCreado.getMostrarVida() <= 0) {
                            console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                            finDeLaBatalla = true;
                            finDelJuego = true;
                        }
                    } else if (respuesta == 3) {
                        ataque = personajeCreado.ataqueEspecial();
                        enemigoDragon.perdidaDeVida (ataque);
                        console.log ("Tu mana quedo en : " + personajeCreado.getMostrarMana() + " puntos");
                        if (enemigoDragon.getMostrarVida() > 0) {
                            console.log ("La vida que le quedo al enemigo es " + enemigoDragon.getMostrarVida() + " puntos");
                            ataque = enemigoDragon.ataqueComun();
                            personajeCreado.perdidaDeVida (ataque);
                            if (personajeCreado.getMostrarVida() > 0){
                                console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                            }
                            if (personajeCreado.getMostrarVida() <= 0) {
                                console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            }
                        } else if (enemigoDragon.getMostrarVida() <= 0) {
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("--------------------------------------El " + enemigoDragon.getMostrarNombre() + " ah sido derrotado------------------------------------------------------------------------");
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("Mira, el " + enemigoDragon.getMostrarNombre() + " ah soltado algo..!");
                            let numeroAzar = Math.random()*10;
                            if (numeroAzar >= regaloFinal) {
                                console.log ("Encontraste la caja magica! Has completado el objetivo! Felicidades, ganaste el juego!!!");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            } else {
                                console.log ("Que mal era chatarra...");
                                personajeCreado.subeNivel();
                                if (personajeCreado.getMostrarNivel() > 25) {
                                    personajeCreado.evolucion();
                                    console.log ("Tu personaje a evolucionado y ah mejorado sus atributos");
                                }
                                console.log ("Felicidades!! Subiste a nivel: " + personajeCreado.getMostrarNivel());
                                console.log ("Tus nuevos atributos ahora son: " + personajeCreado.getMago());
                                console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                console.log ("Listo! Continua avanzando");
                                finDeLaBatalla = true;
                            }
                        }
                    } else if (respuesta == 0) {
                        console.log ("Has seleccionado salir del juego!");
                        finDeLaBatalla = true;
                        finDelJuego = true;
                    }
                } while (finDeLaBatalla == false); //si se hace true fin de la batalla
            }else {
                    console.log ("Estas avanzando bien");
            } 
        
        } while (finDelJuego == false); //si se hace true fin del juego

//---------------------------------------------------------------------------CREACION GUERRERO--------------------------------------------------------------
    } else if (respuesta == 2) {
        let personajeCreado : Guerrero = new Guerrero (nombrePer, 0, 0, 0, 0);
        console.log ("Su personaje es un Guerrero y fue creado correctamente y sus caracteristicas son: ");
        console.log (" Fue,Agi,Sta,Man,Int");
        console.log (personajeCreado.getGuerrero());
        console.log ("Y tu nivel es: " + personajeCreado.getMostrarNivel());
                console.log ("Aqui inicia la aventura de " + personajeCreado.getMostrarNombre());
                console.log ("Estas avanzando");
                do {
                    let numeroAzar = Math.random()*10;
                    if (numeroAzar >= apariceEnemigo) {
                        enemigoDragon.restaurarVida();
                        finDeLaBatalla = false;
                        console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                        console.log ("--------------------------------------CUIDADO UN " + enemigoDragon.getMostrarNombre() + " AL FRENTE!!!--------------------------------------------------------------------");
                        do {
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            respuesta = rls.questionInt ("Decide que hacer:                 1 = Ataque comun,                 2 = Defenderse,                 3 = Ataque especial                 0 = Salir del juego,     Decida: ");
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            if (respuesta == 1) {
                                ataque = personajeCreado.ataqueComun();
                                enemigoDragon.perdidaDeVida(ataque);
                                if (enemigoDragon.getMostrarVida() > 0) {
                                    console.log ("La vida que le quedo al enemigo es " + enemigoDragon.getMostrarVida() + " puntos");
                                    ataque = enemigoDragon.ataqueComun();
                                    personajeCreado.perdidaDeVida (ataque);
                                    if (personajeCreado.getMostrarVida() > 0){
                                        console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                                    } 
                                    if (personajeCreado.getMostrarVida() <= 0) {
                                        console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                                        finDeLaBatalla = true;
                                        finDelJuego = true;
                                    }
                                } else if (enemigoDragon.getMostrarVida() <= 0) {
                                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                    console.log ("--------------------------------------El " + enemigoDragon.getMostrarNombre() + " ah sido derrotado----------------------------------------------------------------------");
                                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                    console.log ("Mira, el " + enemigoDragon.getMostrarNombre() + " ah soltado algo..!");
                                    let numeroAzar = Math.random()*10;
                                    if (numeroAzar >= regaloFinal) {
                                        console.log ("Encontraste la caja magica! Has completado el objetivo! Felicidades, ganaste el juego!!!");
                                        finDeLaBatalla = true;
                                        finDelJuego = true;
                                    } else {
                                        console.log ("Que mal era chatarra...");
                                        personajeCreado.subeNivel();
                                        if (personajeCreado.getMostrarNivel() > 25) {
                                            personajeCreado.evolucion();
                                            console.log ("Tu personaje a evolucionado y ah mejorado sus atributos");
                                        }
                                        console.log ("Felicidades!! Subiste a nivel: " + personajeCreado.getMostrarNivel());
                                        console.log ("Tus nuevos atributos ahora son: " + personajeCreado.getGuerrero());
                                        console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                        console.log ("Listo! Continua avanzando");
                                        finDeLaBatalla = true;
                                    }
                                }
                            } else if (respuesta == 2) {
                                ataque = enemigoDragon.ataqueComun();
                                personajeCreado.perdidaDeVida (ataque);
                                if (personajeCreado.getMostrarVida() > 0){
                                    personajeCreado.cambioEnStamina(sumaAtributos);
                                    personajeCreado.cambioEnFuerza(sumaAtributos);
                                    console.log ("Tu vida y tu fuerza subieron 2 puntos, vida: " + personajeCreado.getMostrarVida() + " puntos, fuerza: " + personajeCreado.getMostrarFuerza() + " puntos");
                                    console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                                }
                                if (personajeCreado.getMostrarVida() <= 0) {
                                    console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                                    finDeLaBatalla = true;
                                    finDelJuego = true;
                                }
                            } else if (respuesta == 3) {
                                ataque = personajeCreado.ataqueEspecial();
                                enemigoDragon.perdidaDeVida (ataque);
                                console.log ("Tu vida quedo en: " + personajeCreado.getMostrarVida() + " puntos");
                                if (personajeCreado.getMostrarFuerza() > 20) {
                                    personajeCreado.cambioEnFuerza(-20);
                                    console.log ("Y tu fuerza quedo en: " + personajeCreado.getMostrarFuerza());
                                }
                                if (enemigoDragon.getMostrarVida() > 0) {
                                    console.log ("La vida que le quedo al enemigo es " + enemigoDragon.getMostrarVida() + " puntos");
                                    ataque = enemigoDragon.ataqueComun();
                                    personajeCreado.perdidaDeVida (ataque);
                                    if (personajeCreado.getMostrarVida() > 0){
                                        console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                                    }
                                    if (personajeCreado.getMostrarVida() <= 0) {
                                        console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                                        finDeLaBatalla = true;
                                        finDelJuego = true;
                                    }
                                } else if (enemigoDragon.getMostrarVida() <= 0) {
                                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                    console.log ("--------------------------------------El " + enemigoDragon.getMostrarNombre() + " ah sido derrotado------------------------------------------------------------------------");
                                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                    console.log ("Mira, el " + enemigoDragon.getMostrarNombre() + " ah soltado algo..!");
                                    let numeroAzar = Math.random()*10;
                                    if (numeroAzar >= regaloFinal) {
                                        console.log ("Encontraste la caja magica! Has completado el objetivo! Felicidades, ganaste el juego!!!");
                                        finDeLaBatalla = true;
                                        finDelJuego = true;
                                    } else {
                                        console.log ("Que mal era chatarra...");
                                        personajeCreado.subeNivel();
                                        if (personajeCreado.getMostrarNivel() > 25) {
                                            personajeCreado.evolucion();
                                            console.log ("Tu personaje a evolucionado y ah mejorado sus atributos");
                                        }
                                        console.log ("Felicidades!! Subiste a nivel: " + personajeCreado.getMostrarNivel());
                                        console.log ("Tus nuevos atributos ahora son: " + personajeCreado.getGuerrero());
                                        console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                        console.log ("Listo! Continua avanzando");
                                        finDeLaBatalla = true;
                                    }
                                }
                            } else if (respuesta == 0) {
                                console.log ("Has seleccionado salir del juego!");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            }
                        } while (finDeLaBatalla == false); //si se hace true fin de la batalla
                    }else {
                            console.log ("Estas avanzando bien");
                    } 
                } while (finDelJuego == false); //si se hace true fin del juego

//-------------------------------------------------------------------------CREACION MONJE--------------------------------------------------------------
    } else if (respuesta == 3) {
        let personajeCreado : Monje = new Monje (nombrePer, 0, 0, 0, 0);
        console.log ("Su personaje es un Monje y fue creado correctamente y sus caracteristicas son: ");
        console.log (" Fue,Sta,Man,Int");
        console.log (personajeCreado.getMonje());
        console.log ("Y tu nivel es: " + personajeCreado.getMostrarNivel());
        console.log ("Aqui inicia la aventura de " + personajeCreado.getMostrarNombre());
        console.log ("Estas avanzando");
        do {
            let numeroAzar = Math.random()*10;
            if (numeroAzar >= apariceEnemigo) {
                enemigoDragon.restaurarVida();
                finDeLaBatalla = false;
                console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                console.log ("--------------------------------------CUIDADO UN " + enemigoDragon.getMostrarNombre() + " AL FRENTE!!!--------------------------------------------------------------------");
                do {
                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                    respuesta = rls.questionInt ("Decide que hacer:                 1 = Ataque comun,                 2 = Defenderse,                 3 = Ataque especial                 0 = Salir del juego,     Decida: ");
                    console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                    if (respuesta == 1) {
                        ataque = personajeCreado.ataqueComun();
                        enemigoDragon.perdidaDeVida(ataque);
                        if (enemigoDragon.getMostrarVida() > 0) {
                            console.log ("La vida que le quedo al enemigo es " + enemigoDragon.getMostrarVida() + " puntos");
                            ataque = enemigoDragon.ataqueComun();
                            personajeCreado.perdidaDeVida (ataque);
                            if (personajeCreado.getMostrarVida() > 0){
                                console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                            } 
                            if (personajeCreado.getMostrarVida() <= 0) {
                                console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            }
                        } else if (enemigoDragon.getMostrarVida() <= 0) {
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("--------------------------------------El " + enemigoDragon.getMostrarNombre() + " ah sido derrotado----------------------------------------------------------------------");
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("Mira, el " + enemigoDragon.getMostrarNombre() + " ah soltado algo..!");
                            let numeroAzar = Math.random()*10;
                            if (numeroAzar >= regaloFinal) {
                                console.log ("Encontraste la caja magica! Has completado el objetivo! Felicidades, ganaste el juego!!!");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            } else {
                                console.log ("Que mal era chatarra...");
                                personajeCreado.subeNivel();
                                if (personajeCreado.getMostrarNivel() > 25) {
                                    personajeCreado.evolucion();
                                    console.log ("Tu personaje a evolucionado y ah mejorado sus atributos");
                                }
                                console.log ("Felicidades!! Subiste a nivel: " + personajeCreado.getMostrarNivel());
                                console.log ("Tus nuevos atributos ahora son: " + personajeCreado.getMonje());
                                console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                console.log ("Listo! Continua avanzando");
                                finDeLaBatalla = true;
                            }
                        }
                    } else if (respuesta == 2) {
                        ataque = enemigoDragon.ataqueComun();
                        personajeCreado.perdidaDeVida (ataque);
                        if (personajeCreado.getMostrarVida() > 0){
                            personajeCreado.cambioEnMana(sumaAtributos);
                            personajeCreado.cambioEnStamina(sumaAtributos);
                            console.log ("Tu mana y tu vida se recuperaron 2 puntos, en total: " + personajeCreado.getMostrarMana() + " puntos y " + personajeCreado.getMostrarVida() + " puntos");
                        }
                        if (personajeCreado.getMostrarVida() <= 0) {
                            console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                            finDeLaBatalla = true;
                            finDelJuego = true;
                        }
                    } else if (respuesta == 3) {
                        ataque = personajeCreado.ataqueEspecial();
                        enemigoDragon.perdidaDeVida (ataque);
                        console.log ("Tu mana quedo en : " + personajeCreado.getMostrarMana() + " puntos");
                        console.log ("Tu vida quedo en : " + personajeCreado.getMostrarVida() + " puntos");
                        if (enemigoDragon.getMostrarVida() > 0) {
                            console.log ("La vida que le quedo al enemigo es " + enemigoDragon.getMostrarVida() + " puntos");
                            ataque = enemigoDragon.ataqueComun();
                            personajeCreado.perdidaDeVida (ataque);
                            if (personajeCreado.getMostrarVida() > 0){
                                console.log ("Tu vida quedo en " + personajeCreado.getMostrarVida() + " puntos");
                            }
                            if (personajeCreado.getMostrarVida() <= 0) {
                                console.log ("Que mal, no te queda mas puntos de vida :( Has muerto");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            }
                        } else if (enemigoDragon.getMostrarVida() <= 0) {
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("--------------------------------------El " + enemigoDragon.getMostrarNombre() + " ah sido derrotado------------------------------------------------------------------------");
                            console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                            console.log ("Mira, el " + enemigoDragon.getMostrarNombre() + " ah soltado algo..!");
                            let numeroAzar = Math.random()*10;
                            if (numeroAzar >= regaloFinal) {
                                console.log ("Encontraste la caja magica! Has completado el objetivo! Felicidades, ganaste el juego!!!");
                                finDeLaBatalla = true;
                                finDelJuego = true;
                            } else {
                                console.log ("Que mal era chatarra...");
                                personajeCreado.subeNivel();
                                if (personajeCreado.getMostrarNivel() > 25) {
                                    personajeCreado.evolucion();
                                    console.log ("Tu personaje a evolucionado y ah mejorado sus atributos");
                                }
                                console.log ("Felicidades!! Subiste a nivel: " + personajeCreado.getMostrarNivel());
                                console.log ("Tus nuevos atributos ahora son: " + personajeCreado.getMonje());
                                console.log ("----------------------------------------------------------------------------------------------------------------------------------------");
                                console.log ("Listo! Continua avanzando");
                                finDeLaBatalla = true;
                            }
                        }
                    } else if (respuesta == 0) {
                        console.log ("Has seleccionado salir del juego!");
                        finDeLaBatalla = true;
                        finDelJuego = true;
                    }
                } while (finDeLaBatalla == false); //si se hace true fin de la batalla
            }else {
                    console.log ("Estas avanzando bien");
            } 
        
        } while (finDelJuego == false); //si se hace true fin del juego

    } else if (respuesta == 0) {
        console.log ("Selecciono 0");
    } else {
        console.log ("Ingreso un valor incorrecto, vuelva a seleccionar una opcion: ");
    }
} while (respuesta !== 1 && respuesta !== 2 && respuesta !== 3 && respuesta !== 0);


console.log ("Fin del Juego");

