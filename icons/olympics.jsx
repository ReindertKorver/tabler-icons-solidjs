

export default function Olympics({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-olympics" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/olympics</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="6" cy="9" r="3" />
  <circle cx="18" cy="9" r="3" />
  <circle cx="12" cy="9" r="3" />
  <circle cx="9" cy="15" r="3" />
  <circle cx="15" cy="15" r="3" />
</svg>



    );
}

