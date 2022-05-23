

export default function DiceSix({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dice-6" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/dice-6</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="7.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="12" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="12" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="16.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="16.5" r=".5" fill="currentColor" />
</svg>



    );
}

