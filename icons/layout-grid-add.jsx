

export default function LayoutGridAdd({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid-add" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/layout-grid-add</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="4" y="4" width="6" height="6" rx="1" />
  <rect x="14" y="4" width="6" height="6" rx="1" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
  <path d="M14 17h6m-3 -3v6" />
</svg>



    );
}

