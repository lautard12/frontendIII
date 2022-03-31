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

ReactDOM.render(
    p,
    document.getElementById('root')
)