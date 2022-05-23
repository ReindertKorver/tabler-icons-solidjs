

export default function SortAscendingTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sort-ascending-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/sort-ascending-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M14 9l3 -3l3 3" />
  <rect x="5" y="5" width="5" height="5" rx=".5" />
  <rect x="5" y="14" width="5" height="5" rx=".5" />
  <path d="M17 6v12" />
</svg>



    );
}

