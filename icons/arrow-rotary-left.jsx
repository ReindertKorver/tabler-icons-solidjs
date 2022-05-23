

export default function ArrowRotaryLeft({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-rotary-left" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/arrow-rotary-left</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle transform="matrix(-1 0 0 1 32 0)" cx="16" cy="7" r="3" />
  <path d="M16 10v10" />
  <path d="M13 7h-10" />
  <path d="M7 11l-4 -4l4 -4" />
</svg>



    );
}

