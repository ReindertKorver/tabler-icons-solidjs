

export default function Pinned({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pinned" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/pinned</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
  <line x1="12" y1="16" x2="12" y2="21" />
  <line x1="8" y1="4" x2="16" y2="4" />
</svg>



    );
}

