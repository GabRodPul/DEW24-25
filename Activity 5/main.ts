const DEFAULT_COLS = 5;
const DEFAULT_ROWS = 3;

const form = document.createElement( "form" );
{
    const addNumberInput = ( form: HTMLFormElement, id: string, name: string, placeholder: number ) => {
        const label = document.createElement("label");
        label.htmlFor       = id;
        label.textContent   = name.charAt(0).toUpperCase()
                            + name.substring(1)
                            + ": ";
    
        const input = document.createElement( "input" );
        input.type          = "number";
        input.id            = id;
        input.name          = name;
        input.placeholder   = placeholder.toString();
        input.min           = "1";

        const error = document.createElement("p");
        error.id = "error-" + id;
        error.textContent = `Invalid value for ${name}, must be a number >= 1`;
        error.setAttribute( "style", "color:red; display: none;" );

        const div = document.createElement( "div" );
        div.appendChild( label );
        div.appendChild( input );
        div.appendChild( error );
        form.appendChild( div );
    }

    addNumberInput( form, "rows", "rows", DEFAULT_ROWS );
    addNumberInput( form, "cols", "cols", DEFAULT_COLS );
}



const table  = document.createElement( "table" );
const keys   = [ "rows", "cols" ];
{
    const button = document.createElement( "button" );
    // button.type  = "button";
    button.textContent = "Generate Table";
    button.addEventListener( "click", (event) => {
        
        // Stop page from reloading
        event.preventDefault();

        // Validate input
        const values    = { "rows": -1, "cols": -1 };
        let   errors    = false;
        keys.forEach( (k) => {
            const element   = <HTMLInputElement>form.querySelector( "#" + k );
            const v         = parseInt( element.value );
            const nan       = Number.isNaN( v ) || v <= 0;
            errors = nan || errors;
            values[k as keyof typeof values] = v;
            form.querySelector( "#error-" + k )!
                .setAttribute("style", `color:red; display: ${ nan ? "inline-block" : "none" };`);
        });

        if ( errors ) return;
        
        // Reset table
        table.innerHTML = "";

        // Build table
        for ( let x = 1; x <= values.rows; ++x ) {
            const row = document.createElement( "tr" );
            for ( let y = 1; y <= values.cols; ++y ) {
                row.appendChild( document.createElement( "td" ) )
                   .textContent = `Row: ${x}, Col: ${y}`; 
                console.log("child")
            }
            table.appendChild( row );
        }
    });

    form.appendChild( button );
    document.querySelector( "body" )!
            .appendChild( form )
            .appendChild( table );
}