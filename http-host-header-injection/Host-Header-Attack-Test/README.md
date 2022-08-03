   ![alt text](http://uupload.ir/files/54lo_website-security.png "WEBSecurity")
## Host Header Attack Test - Description (Acunetix)
In many cases, developers are trusting the HTTP Host header value and using it to generate links, import scripts and even generate password resets links with its value. This is a very bad idea, because the HTTP Host header can be controlled by an attacker. This can be exploited using web-cache poisoning and by abusing alternative channels like password reset emails.
##Install
please Installing python 2.7 or higher, for example, in centos 6.3, see the link below <br />
[Installing python 2.7 on centos 6.3](https://github.com/h2oai/h2o-2/wiki/installing-python-2.7-on-centos-6.3.-follow-this-sequence-exactly-for-centos-machine-only) <br /> <br />

in linux terminal : <br />
1. `git clone https://github.com/keramatAlijani/Host-Header-Attack-Test.git` <br />
2. `cd Host-Header-Attack-Test`<br />
3. `pip install -r requirements.txt`<br /><br />
if You are using pip version 7.1.0, You should consider upgrading via the `pip install --upgrade pip` command

##Usage
1. `python Host-Header-Vulnerability-Detection.py`<br />
2. type your domain<br />
3. Wait until the process is completed and see results directory<br />

##Remediation (Acunetix)
The web application should use the SERVER_NAME instead of the Host header. It should also create a dummy vhost that catches all requests with unrecognized Host headers. This can also be done under Nginx by specifying a non-wildcard SERVER_NAME, and under Apache by using a non-wildcard serverName and turning the UseCanonicalNam

##contact with me
Email : keramat.alijani@aut.ac.ir <br />


