window.onload = function(){
    
    document.getElementById("TA").value= "";
    document.getElementById("IB").value= "";
    document.getElementById("IB2").value= "";
}


function reverse() 
{
    var s=document.getElementById("IB").value;
    var num=parseInt(s);
    var revnum=0;
    
    while(num>0)
    {
        var dig=num%10;
        revnum=revnum*10+dig;
        num = Number.parseInt(num/10)
    }
    document.getElementById("TA").value = revnum;
}

function digSum() 
{
    var s=document.getElementById("IB").value;
    var num=parseInt(s);
    var sum=0;
    
    while(num>0)
    {
        var dig=num%10;
        sum=sum+dig;
        num = Number.parseInt(num/10)
    }
    document.getElementById("TA").value = sum;
}

function checkArm() 
{
    var s=document.getElementById("IB").value;
    var num=parseInt(s);
    var num2=num;
    var sum=0;
    while(num>0)
    {
        var dig=num%10;
        sum=sum+dig*dig*dig;
        num = Number.parseInt(num/10)
    }
    var out;
    
    if(sum==num2)
        out=s+" is an armstrong number";
    else
        out=s+" is not an armstrong number";
    document.getElementById("TA").value = out;
}

function printFac() 
{
    var s=document.getElementById("IB").value;
    var num=parseInt(s);
    var out="";

    for(var i=2;i<num;i++)
    {
        var rem=parseInt(num%i);
        if(rem==0)
        {
            if(checkPrime(i)==1)
                out=out+""+i+",";
        }
    }
    out=out.substring(0,out.length-1);
    document.getElementById("TA").value = out;
}

function checkPrime(num)
{
    var f=1;
    for(var i=2;i<num;i++)
    {
        var rem=parseInt(num%i);
        if(rem==0)
        {
            f=-1;
            break;
        }
    }
    return f;
}

function printTable()
{
    var s=document.getElementById("IB").value;
    var num=parseInt(s);
    var out="";
    for(var i=1;i<=10;i++)
    {
        var line=num+" X "+i+" = "+(num*i);
        out=out+line+"\n";
    }
    document.getElementById("TA").value = out;
}

function addition()
{
    var num1=parseInt(document.getElementById("IB").value);
    var num2=parseInt(document.getElementById("IB2").value);
    
    var out=parseInt(num1+num2);
    document.getElementById("TA").value = out;
}

function subtraction()
{
    var num1=parseInt(document.getElementById("IB").value);
    var num2=parseInt(document.getElementById("IB2").value);
    
    var out=parseInt(num1-num2);
    document.getElementById("TA").value = out;
}

function multiplication()
{
    var num1=parseInt(document.getElementById("IB").value);
    var num2=parseInt(document.getElementById("IB2").value);
    
    var out=parseInt(num1*num2);
    document.getElementById("TA").value = out;
}

function division()
{
    var num1=parseInt(document.getElementById("IB").value);
    var num2=parseInt(document.getElementById("IB2").value);
    
    var out=parseInt(num1/num2);
    document.getElementById("TA").value = out;
}

function modulus()
{
    var num1=parseInt(document.getElementById("IB").value);
    var num2=parseInt(document.getElementById("IB2").value);
    
    var out=parseInt(num1%num2);
    document.getElementById("TA").value = out;
}

function exponent()
{
    var num1=parseInt(document.getElementById("IB").value);
    var num2=parseInt(document.getElementById("IB2").value);
    
    var out=parseInt(num1**num2);
    document.getElementById("TA").value = out;
}