function WriteToFile(passForm) {
 
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("<your Path>/filename.txt", True);
 
    var firstName = document.getElementById('username');
    var lastName  = document.getElementById('userpass');
 
    s.writeline("First Name :" + username);
    s.writeline("User Password :" + userpass);
 
    s.writeline("-----------------------------");
    s.Close();
 }
