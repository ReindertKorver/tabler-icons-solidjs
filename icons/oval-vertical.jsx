

export default function OvalVertical({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-oval-vertical" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/oval-vertical</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
    <ellipse transform="matrix(0 -1 -1 0 24 24)" cx="12" cy="12" rx="6" ry="9" />
</svg>



    );
}

