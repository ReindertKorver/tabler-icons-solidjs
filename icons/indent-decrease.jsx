

export default function IndentDecrease({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-indent-decrease" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/indent-decrease</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="20" y1="6" x2="13" y2="6" />
  <line x1="20" y1="12" x2="11" y2="12" />
  <line x1="20" y1="18" x2="13" y2="18" />
  <path d="M8 8l-4 4l4 4" />
</svg>



    );
}

