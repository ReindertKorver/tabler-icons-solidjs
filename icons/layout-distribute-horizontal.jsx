

export default function LayoutDistributeHorizontal({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-distribute-horizontal" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/layout-distribute-horizontal</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="4" y1="4" x2="20" y2="4" />
  <line x1="4" y1="20" x2="20" y2="20" />
  <rect x="6" y="9" width="12" height="6" rx="2" />
</svg>



    );
}

