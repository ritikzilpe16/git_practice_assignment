let count=0;
for (let i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
  
}
if(count==2){
    console.log(num,"prime")
  }
else{
    console.log(num,"Not prime")
  }