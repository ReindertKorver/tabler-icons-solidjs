

export default function ChartCircles({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-circles" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/chart-circles</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="9.5" cy="9.5" r="5.5" />
  <circle cx="14.5" cy="14.5" r="5.5" />
</svg>



    );
}

