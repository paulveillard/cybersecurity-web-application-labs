# Domain Name Server (DNS)

## Concept

1. Two type of DNS network activities:
   1. lookup: DNS client queries a DNS server for information
   2.  zone transfers: DNS server (the secondary server) requests from another DNS server (the primary server)
2. DNS lookups are usualy executed usin UDP. (If some of data is lost in transit by UDP, the lookup will be redone using TCP)
3. DNS sever uses well-known port 53 (UDP/TCP)
4. Proxying characteristics of DNS:
   1. DNS is structured so that servers always act as proxies for clients
   2.  It's also possible to use a DNS feature called **forwarding** so that a DNS server is effectively a proxy for another server
5. The **forwarders** directive tells the server that, if it doesn't know the information itself already, it should forward the query to a specific server and let this other server figure out the answer, rather than try to contact servers all over the Internet in an attempt to determine the answer itself.

## Structure of a DNS message

```

    +---------------------+
    |        Header       |
    +---------------------+
    |       Question      | the question for the name server
    +---------------------+
    |        Answer       | RRs answering the question
    +---------------------+
    |      Authority      | RRs pointing toward an authority
    +---------------------+
    |      Additional     | RRs holding additional information
    +---------------------+

```

1. Answer: The answer section contains RRs that answer the question
2. Authority: The authority section contains RRs that point toward an authoritative name server
3. Additional: The additional records section contains RRs which **relate to the query**, but are not strictly answers for the question


## DNS query flow

### DNS name lookup

Using `dig` to trace DNS query flow

```bash
$ dig +trace google.com @8.8.8.8
```

![DNS query flow](https://s3-ap-northeast-1.amazonaws.com/gist-note-assets/dns/dns_q_flow.png)


### DNS name lookup (with packet detail)

DNS server use the field:

* Authority
* Additional

to hint the DNS server to query the another DNS server

```bash
$ dig +trace google.com
```

![DNS query flow detail](https://s3-ap-northeast-1.amazonaws.com/gist-note-assets/dns/dns_q_flow_detail.png)

### DNS name lookup (when name is CNAME)

```bash
$ dig www.github.com
```
![dns-query-cname-flow](https://s3-ap-northeast-1.amazonaws.com/gist-note-assets/dns/dns_q_cname_flow.png)


### DNS with forwarding

Using `dig` to trace DNS query flow inside the internal network

```bash
$ internal_dns="192.168.53.53"
$ dig +trace google.com @${internal_dns}
```

![DNS query forwarding flow](https://s3-ap-northeast-1.amazonaws.com/gist-note-assets/dns/dns_q_flow_forward.png)

### Reverse DNS lookup

```bash
dig +trace -x 192.30.253.113 # github.com
```
![DNS query reverse flow](https://s3-ap-northeast-1.amazonaws.com/gist-note-assets/dns/dns_q_reverse_flow.png)

## Why we need a NS and a A record to point ourselves?

The reason is that sometimes we have to deal with the query which send to us directly. The following figure shows
this scenario:

![DNS need NS record](https://s3-ap-northeast-1.amazonaws.com/gist-note-assets/dns/dns_q_why_need_ns.png)

If we don't have any NS and A record to point ourselves, the client cannot find the authroizative nameserver

![DNS no NS record](https://s3-ap-northeast-1.amazonaws.com/gist-note-assets/dns/dns_q_no_ns_record.png)


## `dig` usage cheat sheet

```bash
# query A record
$ dig google.com

# query A record with short message
$ dig +short google.com

# query A record and specify the dns server
$ dig +short google.com @"${dns_server}"

# query specific record
$ rtype=txt
$ dig -t ${rtype} google.com
$ dig -t soa google.com

# query records with trace
$ dig +trace google.com

# reverse look-up
$ dig +short 172.217.24.14
```

## bind9

## Reference

* [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt)
* [Domain Name System (DNS)](https://www.cs.ait.ac.th/~on/O/oreilly/tcpip/firewall/ch08_10.htm)
* [USING DIG +TRACE TO UNDERSTAND DNS RESOLUTION FROM START TO FINISH](https://ns1.com/articles/using-dig-trace)
* [Computer network (15)](https://www.slideshare.net/NYversity/computer-network-15)
* [How To Configure BIND as a Private Network DNS Server on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-ubuntu-14-04)
