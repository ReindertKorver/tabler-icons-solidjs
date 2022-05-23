

export default function Fence({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fence" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/fence</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <path d="M4 12v4h16v-4z" />
  <path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
  <path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
</svg>



    );
}

