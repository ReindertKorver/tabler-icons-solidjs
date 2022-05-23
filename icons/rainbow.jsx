

export default function Rainbow({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rainbow" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/rainbow</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
  <path d="M18 17a6 6 0 1 0 -12 0" />
  <path d="M14 17a2 2 0 1 0 -4 0" />
</svg>



    );
}

