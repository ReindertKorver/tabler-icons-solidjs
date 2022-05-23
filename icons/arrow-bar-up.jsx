

export default function ArrowBarUp({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-up" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/arrow-bar-up</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="12" y1="4" x2="12" y2="14" />
  <line x1="12" y1="4" x2="16" y2="8" />
  <line x1="12" y1="4" x2="8" y2="8" />
  <line x1="4" y1="20" x2="20" y2="20" />
</svg>



    );
}

