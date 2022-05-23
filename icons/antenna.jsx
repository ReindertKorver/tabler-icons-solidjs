

export default function Antenna({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-antenna" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/antenna</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M20 4v8" />
  <path d="M16 4.5v7" />
  <path d="M12 5v16" />
  <path d="M8 5.5v5" />
  <path d="M4 6v4" />
  <path d="M20 8h-16" />
</svg>



    );
}

