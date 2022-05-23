

export default function Asset({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-asset" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/asset</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="9" cy="15" r="6" />
  <circle cx="9" cy="15" r="2" />
  <circle cx="19" cy="5" r="2" />
  <path d="M14.218 17.975l6.619 -12.174" />
  <path d="M6.079 9.756l12.217 -6.631" />
  <circle cx="9" cy="15" r="2" />
</svg>



    );
}
