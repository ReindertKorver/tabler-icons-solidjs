

export default function BallBowling({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-bowling" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/ball-bowling</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="12" r="9" />
  <line x1="11" y1="9" x2="11" y2="9.01" />
  <line x1="15" y1="8" x2="15" y2="8.01" />
  <line x1="14" y1="12" x2="14" y2="12.01" />
</svg>



    );
}

