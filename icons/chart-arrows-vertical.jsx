

export default function ChartArrowsVertical({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arrows-vertical" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/chart-arrows-vertical</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M18 21v-14" />
  <path d="M9 15l3 -3l3 3" />
  <path d="M15 10l3 -3l3 3" />
  <line x1="3" y1="21" x2="21" y2="21" />
  <line x1="12" y1="21" x2="12" y2="12" />
  <path d="M3 6l3 -3l3 3" />
  <path d="M6 21v-18" />
</svg>



    );
}

