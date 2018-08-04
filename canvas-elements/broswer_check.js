

function myFunction() {
 if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
{
    alert('Opera');
}
else if(navigator.userAgent.indexOf("Chrome") != -1 )
{
    alert('Chrome');
}
else if(navigator.userAgent.indexOf("Safari") != -1)
{
    alert('Safari');
}
else if(navigator.userAgent.indexOf("Firefox") != -1 )
{
     alert('Firefox');
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
  alert('IE');
}
else
{
   alert('unknown');
}
}
