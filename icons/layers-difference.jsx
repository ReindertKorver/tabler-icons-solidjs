

export default function LayersDifference({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layers-difference" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/layers-difference</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
  <polyline points="10 8 8 8 8 10" />
  <polyline points="8 14 8 16 10 16" />
  <polyline points="14 8 16 8 16 10" />
  <polyline points="16 14 16 16 14 16" />
</svg>



    );
}

