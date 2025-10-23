const // employees = [
    {"id":1,"name":"MIRIAM CASTIÑEIRA BREA","department":"IT"},
    {"id":2,"name":"GONZALO MULET FIGUERAS","department":"IT"},
    {"id":3,"name":"FRANCISCO JOSE GRAÑA BARBERA","department":"IT"},
    {"id":4,"name":"IRENE POMBO JORDA","department":"HR"}
];

// alert(employees);

const // table = document.createElement( "table" );
const // keys  = Object.keys( employees[0] );
{
    const keysRow = document.createElement( "tr" );

    keys.forEach(k => { 
        keysRow.appendChild( document.createElement( "th" ) )
               .innerText = k.charAt(0).toUpperCase()
                          + k.substring(1);
    });

    table.appendChild( keysRow );
}

employees.forEach(e => {
    const row = document.createElement( "tr" );

    keys.forEach(k => {
        row.appendChild( document.createElement( "td" ) )
           .textContent = e[k];
    });

    table.appendChild( row );
});

document.querySelector( "#table-container" )
        .appendChild( table );