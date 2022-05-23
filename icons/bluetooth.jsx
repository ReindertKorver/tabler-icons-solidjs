

export default function Bluetooth({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bluetooth" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/bluetooth</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <polyline points="7 8 17 16 12 20 12 4 17 8 7 16" />
</svg>



    );
}

