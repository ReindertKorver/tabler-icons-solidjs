

export default function Briefcase({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/briefcase</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="3" y="7" width="18" height="13" rx="2" />
  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <path d="M3 13a20 20 0 0 0 18 0" />
</svg>



    );
}

