

export default function ArrowLeftRight({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left-right" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/arrow-left-right</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M17 13l4 -4l-4 -4" />
  <path d="M7 13l-4 -4l4 -4" />
  <path d="M12 14a5 5 0 0 1 5 -5h4" />
  <path d="M12 19v-5a5 5 0 0 0 -5 -5h-4" />
</svg>



    );
}

