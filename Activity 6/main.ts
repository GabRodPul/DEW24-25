type Employee = {
    id:         number,
    name:       string,
    department: string,
}


// Initialize elements
const fetchStatus       = document.createElement( "h2" );
fetchStatus.textContent = "Fetching employees...";

const table = document.createElement( "table" );
const keys  = [ "id", "name", "department" ];
{
    const keysRow = document.createElement( "tr" );

    keys.forEach(k => { 
        keysRow.appendChild( document.createElement( "th" ) )
               .innerText = k.charAt(0).toUpperCase()
                          + k.substring(1);
    });

    table.appendChild( keysRow );

    const container = document.querySelector( "#table-container" )!;
    container.appendChild( fetchStatus );
    container.appendChild( table  );
}


// Fetch data
fetch("./employees.json")
    .then( res => res.json() )
    .then( data => {
        if ( !Array.isArray( data ) )
            throw new Error( "Fetched data isn't an array" );

        data.forEach(e => {
            const row = document.createElement( "tr" );
        
            keys.forEach(k => {
                row.appendChild( document.createElement( "td" ) )
                   .textContent =  e[k as keyof typeof e] as string;
            });
        
            table.appendChild( row );
        });

        fetchStatus.textContent = "EMPLOYEES";
    })
    .catch( err => {
        fetchStatus.textContent = "FETCHING FAILED";
    });