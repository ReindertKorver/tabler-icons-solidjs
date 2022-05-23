

export default function ChristmasTree({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-christmas-tree" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/christmas-tree</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
  <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" />
</svg>



    );
}

