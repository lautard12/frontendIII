const create = React.createElement;
const span = create(
    'span',
    {key : 2},
    'Mundo!'
)
const p = create(
    'p',
    {key:1},
    ['Hola ', span]
)


function App(){

    return(
        <div>
        <hi id = '1' style = {{color : 'red'}}>Mi titulo</hi>
        <ul>
            <li>item</li>   
            <li>item</li>
            <li>item</li>
        </ul>
        {20*5}
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)