

export default function SquareHalf({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-half" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/square-half</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M12 4v16" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M12 13l7.5 -7.5" />
  <path d="M12 18l8 -8" />
  <path d="M15 20l5 -5" />
  <path d="M12 8l4 -4" />
</svg>



    );
}

