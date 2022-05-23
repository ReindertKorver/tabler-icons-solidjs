

export default function Cone({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cone" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/cone</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
    <ellipse transform="matrix(1 0 0 -1 0 34)" cx="12" cy="17" rx="7" ry="3" />
  <path d="M19 17v-.5l-7 -12.5l-7 12.5v.5" />
</svg>



    );
}

