

export default function ServerTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-server-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/server-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="3" y="4" width="18" height="8" rx="3" />
  <rect x="3" y="12" width="18" height="8" rx="3" />
  <line x1="7" y1="8" x2="7" y2="8.01" />
  <line x1="7" y1="16" x2="7" y2="16.01" />
  <path d="M11 8h6" />
  <path d="M11 16h6" />
</svg>



    );
}

