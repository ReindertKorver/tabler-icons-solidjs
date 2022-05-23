

export default function Viewfinder({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-viewfinder" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/viewfinder</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="3" x2="12" y2="7" />
  <line x1="12" y1="21" x2="12" y2="18" />
  <line x1="3" y1="12" x2="7" y2="12" />
  <line x1="21" y1="12" x2="18" y2="12" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
</svg>



    );
}

