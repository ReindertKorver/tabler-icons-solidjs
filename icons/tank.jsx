

export default function Tank({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tank" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/tank</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="2" y="12" width="18" height="6" rx="3" />
  <path d="M6 12l1 -5h5l3 5" />
  <line x1="21" y1="9" x2="13.2" y2="9" />
</svg>



    );
}

