# What I've learned

## remainder (%) vs modulo

Remainder returns the value left over when one operand is divided by a second operand. It always takes the sign of the dividend.
Modulo and remainder act the same when the numbers are positive but differ when the numbers are negative. 

Read more: 
https://rob.conery.io/2018/08/21/mod-and-remainder-are-not-the-same/

``const remainder = 5 % 2; // 1
  const negativeRemainder = -5 % 2; // -1 
``