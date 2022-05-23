

export default function TrafficLights({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-traffic-lights" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/traffic-lights</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="7" y="2" width="10" height="20" rx="5" />
  <circle cx="12" cy="7" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="17" r="1" />
</svg>



    );
}

