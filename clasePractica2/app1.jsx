
/* const div_el = (<div> 
    <h1>Listas de productos en stock</h1>
    <ul>
        <li>Manzana</li>
        <li>Pera</li>
        <li>Naranja</li>
        <li>Banana</li>
        <li>Kiwi</li>
      </ul>
      <h2>Productos en falta:</h2>
      <ul>
        <li>Durazno</li>
        <li>Cereza</li>
        <li>Anana</li>
      </ul>
</div> ) */
const productosStock = ['raza ', 'pera', 'naranja', 'banana', 'kiwi'];
// const productosFaltantes = [durazno, cereza, anana];

const div_el = (<div> 
    <h1>Listas de productos en stock</h1>
    <ul> { productosStock.map(productos => <li>{productos}</li>)}
      </ul>
      <h2>Productos en falta:</h2>
      <ul>
        <li>Durazno</li>
        <li>Cereza</li>
        <li>Anana</li>
      </ul>
</div> )





ReactDOM.render(div_el, document.getElementById("root"));