const h_1 = React.createElement(
    'h1',
    {key : 1},
    'Con lo visto hasta ahora'
);
const h_2 = React.createElement(
    'h2',
    {key : 2},
    'Replica este HTML'
);
const h_3 = React.createElement(
    'h3',
    {key : 3},
    'Usando'
);
const h_4 = React.createElement(
    'h4',
    {key : 4},
    'React.js'
);
const div_el = React.createElement(
    'div',
    null,
    [h_1, h_2, h_3, h_4]
);

ReactDOM.render(div_el, document.getElementById("root"));