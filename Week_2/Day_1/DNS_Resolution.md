# What happens when...

...you type google.com into the browser and hit Enter?

## Muggle answer

We load a webpage

1. DNS Resolution

#### DNS - Domain Name System

google.com -> IP (Internet Protocol) Address

hosts file - A text file on EVERY single OS. Contains aliases for IP addresses.

Linux/Mac - /etc/hosts Windows - C:\Windows\System32\drivers\etc\hosts

127.0.0.1 localhost

DNS cache - Part of the OS

Key-value store - Key is domain name, value contains a couple of important pieces of data

IP address
TTL - Time to Live (expiration date for the IP)

#### Server

Software that is listening for an incoming request

#### IP Addresses

"###.###.###.###" (IPv4) 0-255 ###.###.###.###.###.### (IPv6) 0-255

Each group of three ### is called an octet (Because it's 2^8) and are labeled (in order) A, B, C, and D subnets.

##### Internic

Definitive domain name server on the internet. The final word on what IP address is associated with a domain name.

On average, DNS resolution takes about 300-500ms

2. Address rewriting

"google.com"
"google.com" -> 12.34.56.78
http://12.34.56.78
http://12.34.56.78:80
http://12.34.56.78:80/

#### Port

Entry/exit point for a particular application(server)

80/443 - 80 is http, 443 is https
25 - SMTP
22 - SSH
Under 1024 require admin permission for the server to "bind" to.

65535 total ports (64k)

#### Resource path

HTTP is a resource-based protocol

http://mysupercoolapp.com/users(.extension)

#### URI vs URL

URI - Uniform Resource Indicator
URL - Uniform Resource Locator
mailto:don@lighthouselabs.ca?subject=WTF

All URLs are URIs. Not all URIs are URLs

3. HTTP Request

Is just text, because the internet runs on text files.

Has two main parts - Header and a Body

#### Header

- URI
- HTTP Verb
- Cookies ( up to 4k in size, just text )
- User-Agent - How the client identifies what application it is
- Other header fields (you can see them in the DevTools in the browser!)

#### Body

- POST data
- PUT/PATCH data
- HTTP Verbs

  ..* GET - Request a copy of a resource (read-only)
  ..* POST - Sending a new resource to the server
  ..* PUT - Updating a resource, sends a new copy to the server
  ..* PATCH - Updating a resource, only sending changed data to the server
  ..* DELETE - Delete a resource

4. HTTP Response

#### Header

- Cookies
- HTTP Status Code
- HTTP Status Message
- Other fields (which can be seen in the DevTools!)

#### Body

Contents of resource

#### HTTP Status Code

100 - Informational
200 - Success
300 - Redirect (301 or 302)
400 - Client error (404)
500 - Server error

Check out http://http.cat for more.

Also check out https://github.com/alex/what-happens-when for more info about the hardware side of this.