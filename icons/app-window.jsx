

export default function AppWindow({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-app-window" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/app-window</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M6 8h.01" />
  <path d="M9 8h.01" />
</svg>



    );
}

