

export default function Dialpad({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dialpad" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/dialpad</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M3 3h4v4h-4z" />
  <path d="M17 3h4v4h-4z" />
  <path d="M10 3h4v4h-4z" />
  <path d="M3 10h4v4h-4z" />
  <path d="M17 10h4v4h-4z" />
  <path d="M10 10h4v4h-4z" />
  <path d="M10 17h4v4h-4z" />
</svg>



    );
}

