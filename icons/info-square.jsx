

export default function InfoSquare({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-square" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/info-square</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="12" y1="8" x2="12.01" y2="8" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <polyline points="11 12 12 12 12 16 13 16" />
</svg>



    );
}

