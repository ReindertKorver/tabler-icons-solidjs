

export default function TerminalTwo({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-terminal-2" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/terminal-2</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M8 9l3 3l-3 3" />
  <line x1="13" y1="15" x2="16" y2="15" />
  <rect x="3" y="4" width="18" height="16" rx="2" />
</svg>



    );
}

