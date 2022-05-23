

export default function BluetoothConnected({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bluetooth-connected" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/bluetooth-connected</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <polyline points="7 8 17 16 12 20 12 4 17 8 7 16" />
  <line x1="4" y1="12" x2="5" y2="12" />
  <line x1="18" y1="12" x2="19" y2="12" />
</svg>



    );
}

