

export default function RadarTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-radar-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/radar-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="12" r="1" />
  <path d="M15.51 15.56a5 5 0 1 0 -3.51 1.44" />
  <path d="M18.832 17.86a9 9 0 1 0 -6.832 3.14" />
  <path d="M12 12v9" />
</svg>



    );
}

