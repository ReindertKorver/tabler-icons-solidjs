

export default function ViewThreeHundredSixty({
    size = 24,
    color = 'currentColor',
    ...props
}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-view-360" width={size} height={size} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" {...props} stroke-linecap="round" stroke-linejoin="round">
  <desc>Download more icon variants from https://tabler-icons.io/i/view-360</desc>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" {...props}/>
  <circle cx="12" cy="12" r="9" />
  <ellipse cx="12" cy="12" rx="4" ry="9" />
  <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" />
</svg>



    );
}

