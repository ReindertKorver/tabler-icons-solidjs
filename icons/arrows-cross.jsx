

export default function ArrowsCross({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-cross" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/arrows-cross</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M16 4h4v4" />
  <path d="M15 9l5 -5" />
  <path d="M4 20l5 -5" />
  <path d="M16 20h4v-4" />
  <path d="M4 4l16 16" />
</svg>



    );
}

