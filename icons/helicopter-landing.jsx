

export default function HelicopterLanding({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-helicopter-landing" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/helicopter-landing</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="9" y1="8" x2="9" y2="16" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="15" y1="8" x2="15" y2="16" />
</svg>



    );
}

