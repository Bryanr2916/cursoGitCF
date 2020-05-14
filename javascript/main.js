var btnCalcularPermutacion=document.getElementById('btn_per');
var btnCalcularCombinacion=document.getElementById('btn_con');
var btnCalcularCuantil=document.getElementById('btn_cuan');


btnCalcularPermutacion.addEventListener('click',calcularPermutacion);
btnCalcularCombinacion.addEventListener('click',calcularCombinacion);
btnCalcularCuantil.addEventListener('click',calcularCuantil);


function calcularCuantil()
{
  var k=document.getElementById('cuan_k').value;
  var n=document.getElementById('cuan_n').value; 
  var c=document.getElementById('cuan_c').value;
  var resultado=document.getElementById('cuan_result');

  k=parseInt(k);
  n=parseInt(n);
  c=parseInt(c);

  var multi=k*(n+1);
  var division=multi/c;

  resultado.innerHTML='Resultado: '+division;

}

function calcularPermutacion()
{
  var n=document.getElementById('per_n').value;
  var r=document.getElementById('per_r').value;
  var resultado = document.getElementById('per_result');

  n=parseInt(n);
  r=parseInt(r);

  var nFactorial=factorial(n);
  var n_minus_rFactorial=factorial(n-r);

  var division=nFactorial/n_minus_rFactorial;

  resultado.innerHTML='Resultado: '+division;

}

function calcularCombinacion()
{

  var n=document.getElementById('con_n').value;
  var r=document.getElementById('con_r').value;
  var resultado = document.getElementById('con_result');

  n=parseInt(n);
  r=parseInt(r);

  var nFactorial=factorial(n);
  var n_minus_rFactorial=factorial(n-r);
  var rFactorial=factorial(r);

  var multi=n_minus_rFactorial*rFactorial;

  var division=nFactorial/multi;

  resultado.innerHTML='Resultado: '+division;

}

function factorial(number)
{
  var signal=number>=0;
  var abs_number=Math.abs(number)==0?1:Math.abs(number);
  var factorial=1;
  do
  {
    factorial*=abs_number;
    abs_number--;
  }while(abs_number>0)

  return signal? factorial:factorial*-1;

}