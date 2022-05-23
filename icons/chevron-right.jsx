

export default function ChevronRight({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/chevron-right</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <polyline points="9 6 15 12 9 18" />
</svg>



    );
}

