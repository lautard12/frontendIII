//!---PASO 1 MOSTRAR LAS IMAGENES/;
import React, {Component} from 'react';
import data from '../data.json'
 
export default class Imagenes extends Component{
    render(){
        return(
            // Importo el json con la data y contiene un contador que se va a encargar de contarme la cantidad de imagenes
            <>
          <img className='historia ' src={data[this.props.contador].img} alt='imagenes'/>
            </>
        )
    }
}