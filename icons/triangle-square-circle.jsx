

export default function TriangleSquareCircle({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle-square-circle" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/triangle-square-circle</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M12 3l-4 7h8z" />
  <circle cx="17" cy="17" r="3" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
</svg>



    );
}

