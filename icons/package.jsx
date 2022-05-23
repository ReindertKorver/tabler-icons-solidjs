

export default function Package({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/package</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
  <line x1="12" y1="12" x2="20" y2="7.5" />
  <line x1="12" y1="12" x2="12" y2="21" />
  <line x1="12" y1="12" x2="4" y2="7.5" />
  <line x1="16" y1="5.25" x2="8" y2="9.75" />
</svg>



    );
}

