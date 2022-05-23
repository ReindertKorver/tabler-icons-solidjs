

export default function Bolt({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/bolt</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
</svg>



    );
}

