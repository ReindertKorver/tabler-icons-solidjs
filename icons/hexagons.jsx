

export default function Hexagons({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hexagons" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/hexagons</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M4 18v-5l4 -2l4 2v5l-4 2z" />
  <path d="M8 11v-5l4 -2l4 2v5" />
  <path d="M12 13l4 -2l4 2v5l-4 2l-4 -2" />
</svg>



    );
}

