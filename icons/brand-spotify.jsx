

export default function BrandSpotify({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-spotify" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/brand-spotify</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="12" r="9" />
  <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
  <path d="M9 15c1.5 -1 4 -1 5 .5" />
  <path d="M7 9c2 -1 6 -2 10 .5" />
</svg>



    );
}

