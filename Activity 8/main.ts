const block = <T>( f: () => T ) => f();
const blockAsync = async <T>( f: () => T ) => await f();

type Track = { file: string, name: string };
const audioPlayer = {
    current: 0,
    tracks:  [
        { file: "music/music1.ogg", name: "Thousand March (SiivaGunner)" },
        { file: "music/music2.ogg", name: "Agua con gas"                 },
        { file: "music/music3.ogg", name: "Heavy Machinery"              },
    ] as Track[],
}

const elements = {
    audio:          document.querySelector( "audio" )!,
    list:           document.querySelector( "ol" )!,
    icons:          [] as HTMLElement[],
    controls:   {
        backward:   document.querySelector( ".backward" )!,
        forward:    document.querySelector( ".forward"  )!,
        play:       block( () => {
            const p = document.querySelector( ".play"   )!
            return { button: p, icon: p.querySelector( "i" )! }
        }),
    }
}

// Create elements
elements.list.innerHTML = "";
audioPlayer.tracks.forEach( t => {
    const li = elements.list.appendChild( document.createElement( "li" ) );
    li.textContent = t.name;
    
    const i = li.appendChild( document.createElement( "i" ) );
    i.className = "";
    elements.icons.push( i );
});


// Set listeners
const pauseOrPlay = () => elements.audio.paused
                  ? { action: () => elements.audio.play(),  class: "fa fa-pause", classOther: "fa fa-play"  }
                  : { action: () => elements.audio.pause(), class: "fa fa-play" , classOther: "fa fa-pause" }

const changeSong = ( dir: 1 | 0 | -1 ) => {
    const prevIdx       = audioPlayer.current;
    const prevPaused    = elements.audio.paused;
    audioPlayer.current = (audioPlayer.current + dir) 
                        % audioPlayer.tracks.length;
                        // % (audioPlayer.tracks.length * (( -1 + dir ) * audioPlayer.tracks.length >> 1));
    elements.audio.src  = audioPlayer.tracks[ audioPlayer.current ].file;

    const result                                    = pauseOrPlay();
    elements.icons[prevIdx].className                  = "";
    elements.icons[audioPlayer.current].className   = result.class;
    elements.controls.play.icon.className           = result.classOther;
};

elements.controls.backward   .addEventListener( "click", () => changeSong( -1 ) );
elements.controls.forward    .addEventListener( "click", () => changeSong(  1 ) );
elements.controls.play.button.addEventListener( "click", () => {
    const result = pauseOrPlay(); 
    result.action();
    elements.controls.play.icon.className           = result.class;
    elements.icons[audioPlayer.current].className   = result.classOther;
});

elements.audio.addEventListener( "ended", () => { 
    changeSong( 1 );
    elements.audio.play();
});

changeSong( 0 );