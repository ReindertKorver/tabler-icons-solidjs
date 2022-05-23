

export default function ChartBar({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-bar" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/chart-bar</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="3" y="12" width="6" height="8" rx="1" />
  <rect x="9" y="8" width="6" height="12" rx="1" />
  <rect x="15" y="4" width="6" height="16" rx="1" />
  <line x1="4" y1="20" x2="18" y2="20" />
</svg>



    );
}

