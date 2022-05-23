

export default function Separator({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-separator" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/separator</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <line x1="3" y1="12" x2="3" y2="12.01" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="21" y1="12" x2="21" y2="12.01" />
</svg>



    );
}

