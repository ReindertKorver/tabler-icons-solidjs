

export default function DeviceMobile({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/device-mobile</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="6" y="3" width="12" height="18" rx="2" />
  <line x1="11" y1="4" x2="13" y2="4" />
  <line x1="12" y1="17" x2="12" y2="17.01" />
</svg>



    );
}

