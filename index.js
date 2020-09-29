// Gets the name of the node
function getName(node){
	return node.name
}

// Returns the head none of the Linked List 
function headNode(list, collection){
	return collection[list]
}

function next(head,collection){
	return collection[head.next]
}

// return the node at the provided index
function nodeAt(index, linkedList, collection){
	let node = collection[linkedList]
	for (let i = 0; i < index; i++){
		node = next(node, collection) 
	}
	return node 
}

// return the address of the node at the address
function addressAt(index, linkedList, collection){
	if (index == 0){
		return linkedList
	} else {
		let node = nodeAt(index -1, linkedList,collection)
		return node.next
	}
}

function indexAt(node, collection, linkedList){
	let currentNode = headNode(linkedList,collection) 
	let currentIndex = 0 
	while (currentNode !== node){
		currentIndex++
		currentNode = next(currentNode, collection)
	}
	return currentIndex
}

// REVIEW ?? REVIEW ?? REVIEW
// should set the next property of the inserted node
function insertNodeAt(index, newNodeAddress, linkedList, collection){
	let previousNode = nodeAt(index - 1, linkedList, collection)
	let subsequentNode = nodeAt(index, linkedList, collection)

	let previousNodeIndex = indexAt(previousNode, collection, linkedList)
	let subsequentNodeIndex = indexAt(subsequentNode, collection, linkedList)

	let previousNodeAddress = addressAt(previousNodeIndex, linkedList, collection)
	let subsequentNodeAddress = addressAt(subsequentNodeIndex, linkedList, collection)

	previousNode.next = newNodeAddress 
	let newNode = collection[newNodeAddress]
	newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
	let previousNode
	let currentNode = headNode(linkedList, collection)
	for (let i = 0; i < index; i ++){
		previousNode = currentNode
		currentNode = next(currentNode, collection)
	}
	previousNode.next = currentNode.next
}