

export default function Heading({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heading" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/heading</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M7 12h10" />
  <path d="M7 5v14" />
  <path d="M17 5v14" />
  <path d="M15 19h4" />
  <path d="M15 5h4" />
  <path d="M5 19h4" />
  <path d="M5 5h4" />
</svg>



    );
}

