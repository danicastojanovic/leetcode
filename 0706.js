/*
706. Design HashMap

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.


Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]


Constraints:

0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.

*/

 var MyHashMap = function() {
  this.storage = [];
  this.hashFn = function(key) {
      return 2069 % key;
  }
};


MyHashMap.prototype.put = function(key, value) {
  let num = this.hashFn(key);
  let updated = false;
  if (!this.storage[num]) {
      this.storage[num] = [];
      this.storage[num].push([key, value]);
  } else {
      this.storage[num].forEach(tuple => {
          if (tuple[0] === key) {
              tuple[1] = value;
              updated = true;
          }
      })
      if (!updated) {
          this.storage[num].push([key, value]);
      }
  }
};


MyHashMap.prototype.get = function(key) {
  let num = this.hashFn(key);
  let result = -1
  if (!this.storage[num]) return -1;
  this.storage[num].forEach(tuple => {
      if (tuple[0] === key) {
          result = tuple[1];
      }
  })
  return result;
};


MyHashMap.prototype.remove = function(key) {
  let num = this.hashFn(key);
  let bucket = [];
  let deleted = null;
  if (!this.storage[num]) return -1;
  this.storage[num].forEach(tuple => {
      if (tuple[0] !== key) {
          bucket.push(tuple);
      } else {
          deleted = tuple[1];
      }
  })
  this.storage[num] = bucket.length ? bucket : null;
  return deleted;
};
