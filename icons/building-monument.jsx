

export default function BuildingMonument({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-monument" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/building-monument</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M8 18l2 -13l2 -2l2 2l2 13" />
  <path d="M5 21v-3h14v3" />
  <line x1="3" y1="21" x2="21" y2="21" />
</svg>



    );
}

