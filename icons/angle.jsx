

export default function Angle({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-angle" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/angle</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M21 19h-18l9 -15" />
  <path d="M20.615 15.171h.015" />
  <path d="M19.515 11.771h.015" />
  <path d="M17.715 8.671h.015" />
  <path d="M15.415 5.971h.015" />
</svg>



    );
}

