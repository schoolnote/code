Set obj = createobject("wscript.shell")
obj.run "cmd /k yarn docs:dev && exit"
obj.run "cmd /k start http://localhost:8080/"
msgbox"���ȷ������"
obj.run "cmd /k taskkill /f /im cmd.exe"
obj.run "cmd /k taskkill /f /im node.exe"