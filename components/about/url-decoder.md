### What is URL decoding?
URL decoding is a reverse process of url encoding. 
In this a url encoded string is converted to a plain decoded string.

### How do you decode a URL?
All web programming languages provides methods that take input the encoded string and provide the decoded string as output.

#### Example of URL decoding
Check below for the simple example:

Input URL encoded string: Hello+World+-+How+are+you%3F

Output url decoded plain string: Hello World - How are you?

If you'll notice carefully the decoded output string all "+" symbol are converted into space (while encoding all space are converted to + symbol) and other non ASCI character are converted into asci characters.


### Which programming language provides URL encoding function?
Almost all web programming languages provides URL decoding functions. So examples:
PHP URL decoding: urldecode($encoded_string)
Python URL decoding: urllib.unquote(encoded_string)
Javascript URL decoding: decodeURIComponent(encoded_string)

### How to encode and decode url online?
To encode URL online [minidev.tools URL encoding online tool](https://minidev.tools/url-encoder) provides this feature.

And to decode URL online [minidev.tools URL](https://minidev.tools/url-decoder) decoding online tool provides this feature.

### Is this URL decoder safe & secure?
Yes, this URL encoder is safe & secure. We do not save any of your data in server. Neither the data is visible to any 3rd party.
