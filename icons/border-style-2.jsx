

export default function BorderStyleTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-style-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/border-style-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M4 18v.01" />
  <path d="M8 18v.01" />
  <path d="M12 18v.01" />
  <path d="M16 18v.01" />
  <path d="M20 18v.01" />
  <path d="M18 12h2" />
  <path d="M11 12h2" />
  <path d="M4 12h2" />
  <path d="M4 6h16" />
</svg>



    );
}

