

export default function FloatNone({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-float-none" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/float-none</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect width="6" height="6" x="4" y="5" rx="1" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="4" y1="19" x2="20" y2="19" />
</svg>



    );
}

