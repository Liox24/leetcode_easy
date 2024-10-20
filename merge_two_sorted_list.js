// Define the Node class
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the SinglyLinkedList class
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Append node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Print the list
    printList() {
      let current = this.head;
      let listStr = "";
  
      while (current) {
        listStr += current.data + " -> ";
        current = current.next;
      }
      console.log(listStr + "null");
    }
  }
  
  // Function to merge two sorted linked lists
  function mergeTwoSortedLists(list1, list2) {
    // Create a dummy node to act as the head of the new list
    const dummy = new Node(0);
    let tail = dummy;
  
    // Traverse both lists and merge them in sorted order
    while (list1 !== null && list2 !== null) {
      if (list1.data < list2.data) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }
  
    // If any nodes are remaining in either list, append them
    if (list1 !== null) {
      tail.next = list1;
    } else if (list2 !== null) {
      tail.next = list2;
    }
  
    // Return the merged list (skipping the dummy node)
    return dummy.next;
  }
  
  // Example usage:
  const ll1 = new SinglyLinkedList();
  const ll2 = new SinglyLinkedList();
  
  // List 1: 7 -> 9 -> 10 -> 20 -> 23 -> null
  ll1.append(7);
  ll1.append(9);
  ll1.append(10);
  ll1.append(20);
  ll1.append(23);
  
  ll2.append(7);
  ll2.append(8);
  ll2.append(10);
  ll2.append(15);
  ll2.append(30);
  
  console.log("List 1:");
  ll1.printList();
  
  console.log("List 2:");
  ll2.printList();
  
  const mergedListHead = mergeTwoSortedLists(ll1.head, ll2.head);
  
  const mergedList = new SinglyLinkedList();
  mergedList.head = mergedListHead;
  
  console.log("Merged List:");
  mergedList.printList();
  