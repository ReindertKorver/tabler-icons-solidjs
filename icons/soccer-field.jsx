

export default function SoccerField({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-soccer-field" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/soccer-field</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="12" r="3" />
  <path d="M3 9h3v6h-3z" />
  <path d="M18 9h3v6h-3z" />
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <line x1="12" y1="5" x2="12" y2="19" />
</svg>



    );
}
