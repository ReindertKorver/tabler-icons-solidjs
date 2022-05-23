

export default function DiceFour({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dice-4" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/dice-4</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
</svg>



    );
}

