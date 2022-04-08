


function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(codeEditor.getValue());
	idoc.close();
}

function setupEditor()
{
  window.codeEditor = ace.edit("editor");
  codeEditor.setTheme("ace/theme/dreamweaver");
  codeEditor.getSession().setMode("ace/mode/html");
  codeEditor.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    The content of the body element is displayed in your browser.
</body>
</html>`,1);

  codeEditor.getSession().on('change', function() {
    update();
  });

  codeEditor.focus();
  
  
  codeEditor.setOptions({
    fontSize: "16px",
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
  });

  codeEditor.setShowPrintMargin(false);
}

setupEditor();
update();