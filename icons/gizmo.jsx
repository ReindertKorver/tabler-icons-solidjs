

export default function Gizmo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gizmo" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/gizmo</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M20 19l-8 -5.5l-8 5.5" />
  <path d="M12 4v9.5" />
  <circle cx="12" cy="4" r="1" />
  <circle cx="4" cy="19" r="1" />
  <circle cx="20" cy="19" r="1" />
</svg>



    );
}

