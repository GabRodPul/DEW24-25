const SETTINGS = Object.freeze({
    INS_DISPLAY:        true,
    WIDTH:              10,
    HEIGHT:             5,
    INIT_SPAWN_SECS:    5,
    INIT_POSTER_SECS:   6.5,
    TARGET_FPS:         60,
});

const IMAGES = Object.freeze({
    // NONE: "",
    // POSTER: "./images/urban.png",
    BACKGROUND: "./images/hinamifirgas.jpeg",
    NONE: "rgba(0,0,0,0)",
    POSTER: "#ff0000",
});

const NO_VALUE = {} as never;

const idx2D = (row: number, col: number) => row*SETTINGS.WIDTH + col;

// enum CellState { Empty, Poster, Building };
// Time

type Cell = {
    button:     HTMLButtonElement,
    img:        HTMLImageElement
}

type Game = {
    cells:          Cell[]
    cellState: { 
        empty:      Map<Cell, never>,
        building:   Map<Cell, never>,
        poster:     Map<Cell, number>,
    }
    spawnTime:      number,
    posterTime:     number,
}

const block = <T>(f: () => T) => f();

const table = document.querySelector( "#table-container" )!
                      .appendChild( document.createElement( "table" ) );

const changeCellState = 
    <T>( cell: Cell, from: Map<Cell, number> | Map<Cell, never>, to: Map<Cell, T>, value: T, imgUrl: string ): boolean => {
        if ( !from.delete( cell ) )
            return false;

        to.set( cell, value );
        cell.button.style.backgroundColor = imgUrl;
        // cell.img.src = imgUrl;
        return true;
    }

const game: Game = block( () => {
    const length     = SETTINGS.HEIGHT*SETTINGS.WIDTH;
    const posterTime = SETTINGS.INIT_POSTER_SECS;
    const newGame: Game = {
        cells:     [],
        cellState: {
            empty:    new Map<Cell, never>(),
            building: new Map<Cell, never>(),
            poster:   new Map<Cell, number>()
        },
        spawnTime:  SETTINGS.INIT_SPAWN_SECS,
        posterTime
    }

    let   rowElement = document.createElement( "tr" );
    let   rowIdx     = 0;
    
    const width = `${( 100.0 / SETTINGS.WIDTH )}%`;
    const cells  = Array.from({ length }, ( _, i ) => {
        const curIdx = Math.floor( i / SETTINGS.HEIGHT );
        if (curIdx > rowIdx) {
            rowIdx = curIdx;
            table.appendChild( rowElement );
            rowElement = document.createElement( "tr" );
        }
        
        // Having all of this outside this callback would allow
        // using cloneNode(true) efficiently, but I need to set up
        // a different ID for each and every button.
        // An alternative would be to set callbacks and IDs after creating
        // buttons.
        const tData  = document.createElement( "td" );
        tData.style.width = width;
        let   button = tData.appendChild( document.createElement( "button" ) );
        button.id    = String.fromCharCode( i );
        button.addEventListener( "click", (event) => {
            const i = (<HTMLButtonElement>event.target).id!.charCodeAt(0);
    
            const cell = newGame.cells[i];
            changeCellState(  
                cell, 
                game.cellState.poster, game.cellState.empty, 
                NO_VALUE, IMAGES.NONE
            );
        });
        button.textContent  = "OMORI ES UNA MIERDA";
        button.className    = "cell__button";
    
        const img    = tData.appendChild( document.createElement( "img" ) );
        img.src      = "";

        rowElement.appendChild( tData );    
        return { button, img } as Cell;
    });

    newGame.cells = cells;
    newGame.cellState.empty = new Map( [...cells].map( c => [ c, NO_VALUE ] ) );
    return newGame;
});

// changeCellState( 
//     game.cells[ 6 ],
//     game.cellState.empty, game.cellState.poster,
//     6, IMAGES.POSTER
// );

const time = {
    start:  0.0,
    curr:   0.0,
}

const gameLoop = () => {
    time.curr   = window.requestAnimationFrame( gameLoop );
    const delta = time.curr - time.start;

    // Update posters
    for ( let [cell, ltime] of game.cellState.poster )
        game.cellState.poster.set( cell, ltime - delta );

    [...game.cellState.poster]
        .filter( (_, v) => v <= 0.0 )
        .forEach( c => {
            changeCellState( 
                c[0], 
                game.cellState.poster, game.cellState.building,
                NO_VALUE, IMAGES.NONE
            );
        });

    
}

document.querySelector( "#exercise-instructions" )!
        .setAttribute( "style", `display: ${ SETTINGS.INS_DISPLAY ? "block" : "none" };` );

time.start = window.requestAnimationFrame( gameLoop );
