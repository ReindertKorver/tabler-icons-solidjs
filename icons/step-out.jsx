

export default function StepOut({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-step-out" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/step-out</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="12" y1="3" x2="12" y2="15" />
  <line x1="16" y1="7" x2="12" y2="3" />
  <line x1="8" y1="7" x2="12" y2="3" />
  <circle cx="12" cy="20" r="1" />
</svg>



    );
}

