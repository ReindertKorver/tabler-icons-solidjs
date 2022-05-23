

export default function Skateboard({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-skateboard" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/skateboard</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="7" cy="15" r="2" />
  <circle cx="17" cy="15" r="2" />
  <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
</svg>



    );
}

