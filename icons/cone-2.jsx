

export default function ConeTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cone-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/cone-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
    <ellipse cx="12" cy="7" rx="7" ry="3" />
  <path d="M19 7v.5l-7 12.5l-7 -12.5v-.5" />
</svg>



    );
}

