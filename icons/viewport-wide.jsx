

export default function ViewportWide({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-viewport-wide" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/viewport-wide</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M10 12h-7l3 -3m0 6l-3 -3" />
  <path d="M14 12h7l-3 -3m0 6l3 -3" />
  <path d="M3 6v-3h18v3" />
  <path d="M3 18v3h18v-3" />
</svg>



    );
}

