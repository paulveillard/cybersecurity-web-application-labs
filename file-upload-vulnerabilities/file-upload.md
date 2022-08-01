


## What are file upload vulnerabilities?
File upload vulnerabilities are when a web server allows users to upload files to its filesystem without sufficiently validating things like their name, type, contents, or size. Failing to properly enforce restrictions on these could mean that even a basic image upload function can be used to upload arbitrary and potentially dangerous files instead. This could even include server-side script files that enable remote code execution.

> In some cases, the act of uploading the file is in itself enough to cause damage. Other attacks may involve a follow-up HTTP request for the file, typically to trigger its execution by the server. 

 - https://www.we45.com/post/how-to-exploit-file-upload-vulnerabilities-and-how-to-fix-them
 - https://portswigger.net/web-security/file-upload
 - https://0xn3va.gitbook.io/cheat-sheets/web-application/file-upload-vulnerabilities
