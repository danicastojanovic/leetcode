/*
535. Encode and Decode TinyURL

Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the Solution class:

Solution() Initializes the object of the system.
String encode(String longUrl) Returns a tiny URL for the given longUrl.
String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.


Example 1:

Input: url = "https://leetcode.com/problems/design-tinyurl"
Output: "https://leetcode.com/problems/design-tinyurl"

Explanation:
Solution obj = new Solution();
string tiny = obj.encode(url); // returns the encoded tiny url.
string ans = obj.decode(tiny); // returns the original url after deconding it.


Constraints:

1 <= url.length <= 104
url is guranteed to be a valid URL.

*/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

 let hashmap = new Map();

 function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
 }

 let alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

 let getRandom = function() {
     let sb = '';
     for (let i = 0; i < 6; i++) {
         sb += alphabet.charAt(getRandomInt(0, 61));
     }
     return sb;
 }

 var encode = function(longUrl) {
     let key = getRandom();
     while (hashmap.has(key)) {
         key = getRandom();
     }
     hashmap.set(key, longUrl);
     return 'http://tinyurl.com/' + key;
 };

 /**
  * Decodes a shortened URL to its original URL.
  *
  * @param {string} shortUrl
  * @return {string}
  */
 var decode = function(shortUrl) {
     let key = shortUrl.substr(19);
     return hashmap.get(key);
 };

 /**
  * Your functions will be called as such:
  * decode(encode(url));
  */
