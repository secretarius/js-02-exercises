function grabDoll(dolls){
  var bag=[];
 
    for (var i = 0; i < dolls.length; i++){
         if(dolls[i] == "Hello Kitty"){
      bag.push(dolls[i]);} 
        if (bag.length < 3);
        continue;
    }
  
  return bag;
}

console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]));