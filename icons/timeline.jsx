

export default function Timeline({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-timeline" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/timeline</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M4 16l6 -7l5 5l5 -6" />
  <circle cx="15" cy="14" r="1" />
  <circle cx="10" cy="9" r="1" />
  <circle cx="4" cy="16" r="1" />
  <circle cx="20" cy="8" r="1" />
</svg>



    );
}

