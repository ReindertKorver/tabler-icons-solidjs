

export default function SwitchHorizontal({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-switch-horizontal" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/switch-horizontal</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <polyline points="16 3 20 7 16 11" />
  <line x1="10" y1="7" x2="20" y2="7" />
  <polyline points="8 13 4 17 8 21" />
  <line x1="4" y1="17" x2="13" y2="17" />
</svg>



    );
}

