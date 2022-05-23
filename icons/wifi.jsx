

export default function Wifi({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/wifi</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="12" y1="18" x2="12.01" y2="18" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
  <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
  <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
</svg>



    );
}

