function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let lis = document.querySelectorAll(".ranked-list li")
  for(let i=0; i<lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}


function deepestChild(){
  let node = document.getElementById("grand-node")
  let nextNode = node.children[0]

  while(nextNode){
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
