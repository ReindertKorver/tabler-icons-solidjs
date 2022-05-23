

export default function AsteriskSimple({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-asterisk-simple" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/asterisk-simple</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M12 12v-9" />
  <path d="M12 12l-9 -2.5" />
  <path d="M12 12l9 -2.5" />
  <path d="M12 12l6 8.5" />
  <path d="M12 12l-6 8.5" />
</svg>



    );
}

