

export default function StackThree({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-3" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/stack-3</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M12 2l-8 4l8 4l8 -4l-8 -4" />
  <path d="M4 10l8 4l8 -4" />
  <path d="M4 18l8 4l8 -4" />
  <path d="M4 14l8 4l8 -4" />
</svg>



    );
}
