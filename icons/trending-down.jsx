

export default function TrendingDown({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/trending-down</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <polyline points="3 7 9 13 13 9 21 17" />
  <polyline points="21 10 21 17 14 17" />
</svg>



    );
}
