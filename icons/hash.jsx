

export default function Hash({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hash" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/hash</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="5" y1="9" x2="19" y2="9" />
  <line x1="5" y1="15" x2="19" y2="15" />
  <line x1="11" y1="4" x2="7" y2="20" />
  <line x1="17" y1="4" x2="13" y2="20" />
</svg>



    );
}

