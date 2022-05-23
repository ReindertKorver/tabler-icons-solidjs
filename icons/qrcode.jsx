

export default function Qrcode({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-qrcode" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/qrcode</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <rect x="4" y="4" width="6" height="6" rx="1" />
  <line x1="7" y1="17" x2="7" y2="17.01" />
  <rect x="14" y="4" width="6" height="6" rx="1" />
  <line x1="7" y1="7" x2="7" y2="7.01" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
  <line x1="17" y1="7" x2="17" y2="7.01" />
  <line x1="14" y1="14" x2="17" y2="14" />
  <line x1="20" y1="14" x2="20" y2="14.01" />
  <line x1="14" y1="14" x2="14" y2="17" />
  <line x1="14" y1="20" x2="17" y2="20" />
  <line x1="17" y1="17" x2="20" y2="17" />
  <line x1="20" y1="17" x2="20" y2="20" />
</svg>



    );
}
