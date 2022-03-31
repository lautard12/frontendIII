import React, { Component } from "react";
import Imagenes from "../Historia/Historia"
import data from "../data.json";
import Botones from "../Botones/Botones";
import Historial from "../Historial/Historial";
import Swal from "sweetalert2";


const historial = [];

class Disenio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            seleccionAnterior: "",
        };
    }

    componentDidMount() {

        const nombre = prompt("Hola humano, me gustaria saber tu nombre...");

        new Swal(`Crees en el destino ${nombre}?`, "Creas o no espero que escojas bien. Tus elecciones determinaran tu verdadero destino. Se inteligente");
    }

    componentDidUpdate(estadoPrevio) {
        if (estadoPrevio.contador !== this.state.contador) {
            historial.push(this.state.seleccionAnterior);
        }
    }

    handleClick = (element) => {
        const id = element.target.id;
        const contador = this.state.contador;
        const anterior = this.state.seleccionAnterior;
        if (contador >= 7) {
            alert(`Este es el final, espero que no estes arrepentido de tus elecciones...`);
        } else if (id === "A" && anterior !== "A") {
            this.setState({
                contador: contador + 1,
                seleccionAnterior: "A",
            });
        } else if (id === "A" && anterior === "A") {
            this.setState({
                contador: contador + 2,
            });
        } else if (id === "B" && anterior === "A") {
            this.setState({
                contador: contador + 3,
                seleccionAnterior: "B",
            });
        } else if (id === "B") {
            this.setState({
                contador: contador + 2,
                seleccionAnterior: "B",
            });
        }
        console.log(historial);

        console.log(contador);
    };

    render() {
        return (
            <>
                <Imagenes contador={[this.state.contador]} />
                <Botones
                    handleClick={this.handleClick}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Historial
                    seleccionAnterior={this.state.seleccionAnterior}
                    historial={historial.map(
                        (historial, i) => (
                            <li key={i}>{historial}</li>
                        ),
                        data[this.state.contador].id
                    )}
                />
            </>
        );
    }
}

export default Disenio;