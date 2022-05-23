

export default function SortDescendingTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sort-descending-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/sort-descending-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="5" y="5" width="5" height="5" rx=".5" />
  <rect x="5" y="14" width="5" height="5" rx=".5" />
  <path d="M14 15l3 3l3 -3" />
  <path d="M17 18v-12" />
</svg>



    );
}

