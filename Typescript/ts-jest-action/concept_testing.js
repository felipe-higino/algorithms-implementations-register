let fooContainer = [
  ()=>console.log('primero'),
  ()=>console.log('secundo'),
]

fooContainer.push( () => console.log('tercero') )

fooContainer.forEach((foo)=>foo())