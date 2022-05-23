

export default function LayoutDistributeVertical({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-distribute-vertical" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/layout-distribute-vertical</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="4" y1="4" x2="4" y2="20" />
  <line x1="20" y1="4" x2="20" y2="20" />
  <rect x="9" y="6" width="6" height="12" rx="2" />
</svg>



    );
}

