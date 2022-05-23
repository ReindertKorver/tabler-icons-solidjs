

export default function Yoga({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-yoga" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/yoga</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="4" r="1" />
  <path d="M4 20h4l1.5 -3" />
  <path d="M17 20l-1 -5h-5l1 -7" />
  <path d="M4 10l4 -1l4 -1l4 1.5l4 1.5" />
</svg>



    );
}

