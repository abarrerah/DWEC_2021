alert(null==undefined);

alert("Compara la igual entre ambos valores que son en ambos casos, el mismo");

alert("NaN"==NaN);

alert("Al Comparar con el toNumber(), al no ser un número, no lo considera verdadero.");

alert(NaN==NaN);

alert("Según el estándar IEEE 754(Que JavaScript sigue), no es permitida ya que no son iguales y por lo tanto, es falso");

alert(NaN!=NaN);

alert("Como he comentando antes, al no ser iguales en este caso es verdadero ya que está comprobando si son distintos")

alert(false==0);

alert("Cuando se interpreta el código de JavaScript,ambos valores son convertidos a números. False equivale a 0 , por lo es que verdadero.");

alert(true==1);

alert("Cuando se interpreta el código de JavaScript, ambos valores son convertidos a números. Em este caso, el 1 es considerado true y el true es considera 1 , por lo que es verdadero ");

alert(true==2);

alert("Cuando se interpreta el código de JavaScript,ambos valores son convertidos a números. En este caso es falso, ya que al mapearlo, considera al 2 como un valor y no como el 1, que es interpretado como true. Por lo que es falso");

alert(undefined==0);

alert("Devuelve false ya que considera 0 como un valor mientras que undefined JavaScript no considera de que tenga valor");

alert(null==0);

alert("Es falso ya que null solo coerce con undefined.");


alert("5"==5);

alert("El verdadero ya que se está comprobado ambos valores.");