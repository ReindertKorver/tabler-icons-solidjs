

export default function Scale({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scale" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/scale</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="7" y1="20" x2="17" y2="20" />
  <path d="M6 6l6 -1l6 1" />
  <line x1="12" y1="3" x2="12" y2="20" />
  <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
  <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
</svg>



    );
}

