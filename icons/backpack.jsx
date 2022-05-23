

export default function Backpack({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backpack" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/backpack</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M11 7h2a6 6 0 0 1 6 6v6a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-6a6 6 0 0 1 6 -6z" />
  <path d="M10 7v-1a2 2 0 1 1 4 0v1" />
  <path d="M10 15h4" />
</svg>



    );
}

