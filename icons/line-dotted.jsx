

export default function LineDotted({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-line-dotted" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/line-dotted</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M4 12v.01" />
  <path d="M8 12v.01" />
  <path d="M12 12v.01" />
  <path d="M16 12v.01" />
  <path d="M20 12v.01" />
</svg>



    );
}

