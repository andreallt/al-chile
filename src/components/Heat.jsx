function Heat(props){
  // declare a empty sting 'brokenhearts'
let heat = "";
  //for loop from 0 to rating add broke hearts
for(let i = 0; i < props.hotLevels; i+= 1){
  heat += ' 🔥 ';
}
  //render broken hearts
return(
  <p style={{
   margin: "0",
  }}>
    {heat} </p>
)
}

export default Heat;