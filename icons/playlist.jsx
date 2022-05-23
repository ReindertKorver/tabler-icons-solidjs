

export default function Playlist({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/playlist</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="14" cy="17" r="3" />
  <path d="M17 17v-13h4" />
  <path d="M13 5h-10" />
  <line x1="3" y1="9" x2="13" y2="9" />
  <path d="M9 13h-6" />
</svg>



    );
}

