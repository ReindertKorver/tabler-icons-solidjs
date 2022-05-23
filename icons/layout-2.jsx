

export default function LayoutTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/layout-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="4" y="4" width="6" height="5" rx="2" />
  <rect x="4" y="13" width="6" height="7" rx="2" />
  <rect x="14" y="4" width="6" height="7" rx="2" />
  <rect x="14" y="15" width="6" height="5" rx="2" />
</svg>



    );
}

