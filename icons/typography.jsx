

export default function Typography({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-typography" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/typography</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="4" y1="20" x2="7" y2="20" />
  <line x1="14" y1="20" x2="21" y2="20" />
  <line x1="6.9" y1="15" x2="13.8" y2="15" />
  <line x1="10.2" y1="6.3" x2="16" y2="20" />
  <polyline points="5 20 11 4 13 4 20 20" />
</svg>



    );
}
