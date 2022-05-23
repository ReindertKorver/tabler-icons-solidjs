

export default function Components({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-components" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/components</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M3 12l3 3l3 -3l-3 -3z" />
  <path d="M15 12l3 3l3 -3l-3 -3z" />
  <path d="M9 6l3 3l3 -3l-3 -3z" />
  <path d="M9 18l3 3l3 -3l-3 -3z" />
</svg>



    );
}

