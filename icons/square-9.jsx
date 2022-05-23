

export default function SquareNine({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-9" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/square-9</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="10" r="2" />
  <path d="M10 14a2 2 0 1 0 4 0v-4" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
</svg>



    );
}
