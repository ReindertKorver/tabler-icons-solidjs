

export default function Dna({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dna" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/dna</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle transform="rotate(-45 12 12)" cx="12" cy="12" r="4" />
  <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
  <path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" />
</svg>



    );
}

