

export default function FlipHorizontal({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flip-horizontal" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/flip-horizontal</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="3" y1="12" x2="21" y2="12" />
  <polyline points="7 16 17 16 7 21 7 16" />
  <polyline points="7 8 17 8 7 3 7 8" />
</svg>



    );
}

