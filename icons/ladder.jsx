

export default function Ladder({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ladder" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/ladder</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M8 3v18" />
  <path d="M16 3v18" />
  <path d="M8 14h8" />
  <path d="M8 10h8" />
  <path d="M8 6h8" />
  <path d="M8 18h8" />
</svg>



    );
}

