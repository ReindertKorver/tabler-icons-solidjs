

export default function Mars({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mars" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/mars</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="10" cy="14" r="5" />
  <line x1="19" y1="5" x2="13.6" y2="10.4" />
  <line x1="19" y1="5" x2="14" y2="5" />
  <line x1="19" y1="5" x2="19" y2="10" />
</svg>



    );
}

