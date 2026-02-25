   1. variables basicas 

1. ¿Qué diferencia hay entre let, var y const? 
    con let podemos cambiar el valor de la variable , pero con no permite cambiar ese valos cuando ya se ha declarado pero con var funcuina dentro de una funcion 
2. ¿Qué tipo de dato es edad? 
    es de tipo numero 
3. ¿Qué es una variable?
    tipo guarda unos datos o nombre que despues se utilizara 
    para sacar un respuesta con esa información.
  2. Función con el nombre que desee  

1. ¿Qué es una función? 
    Una función son códigos que se crean para realizar una tarea específica, como sumar, multiplicar o calcular un valor.
2. ¿Qué es un return? 
    Return es la palabra que se usa para devolver un resultado desde la función.
3. ¿Qué pasa si una función no tiene return?
   no va ninguna respuesta la función y no devuelve ningún valor por lo tanto el resultado será error(undefined).

  3. Función con parámetros 

1. ¿Qué son parámetros? 
   Los parámetros son las variables que se definen dentro de los paréntesis de una función cuando la creamos. Sirven para recibir información 
2. ¿Qué son argumentos? 
   Los argumentos son los valores reales que se envían a la función cuando se ejecuta o se llaman 
console.log(parametros(info));
3. ¿Cuál es la diferencia entre ambos? 
   los parámetros se definen al crear la función pero los argumentos son los valores que se pasan cuando la función se llama

     5. Crear objeto 
1. ¿Qué es un objeto en JavaScript?
    Un objeto es una estructura que permite guardar información relacionada en forma de propiedades y valores.
2. ¿Qué es una propiedad?
    Una propiedad es una característica o dato que pertenece a un objeto
3. ¿Cómo se accede a una propiedad?
   Se accede usando el nombre del objeto seguido de un punto y el nombre de la propiedad.
   tipo asi: console.log(persona.nombre);
   
   6. Agregar propiedad 

1. ¿Cómo se agrega una nueva propiedad a un objeto? 
    Se agrega escribiendo el nombre del objeto, seguido de un punto y el nombre de la nueva propiedad
    asi persona.telefono = 3001234567;
2. ¿Se puede modificar un objeto declarado con const? Explica.
    Si se pueden modificar las propiedades de un objeto declarado con const.
    Lo que no se puede hacer es cambiar completamente el objeto por otro diferente

   7. Función con objeto (SIN DESESTRUCTURACIÓN) 

1. ¿Por qué enviamos el objeto completo?
    Enviamos el objeto completo porque así la función puede acceder a todas sus propiedades y usar la que necesite
2. ¿Qué ventaja tiene enviar objetos a funciones?
    La ventaja es que podemos enviar mucha información en un solo parámetro y organizar mejor el código.
    8. Objeto 
1. ¿Cómo se accede a una propiedad dentro de otro objeto?
    Se accede usando punto varias veces.
    Primero el objeto principal, luego el objeto interno y después la propiedad asi:console.log(estudiante.notas.matematicas);

    10. Función  (SIN DESESTRUCTURACIÓN) 

1. ¿Qué ocurre si la propiedad no existe? 
   al ejecurar puede mostrar undefined o generar un error
2. ¿Por qué es importante validar datos?
    Es importante validar datos para evitar errores en el programa y asegurarnos de que la información existe antes de usarla
    11. Modificar propiedad

1. ¿Cómo se modifica una propiedad?
   Se modifica escribiendo el nombre del objeto, luego punto y la propiedad, y asignando un nuevo valor asi carro.propietario.edad = 35;
2. ¿Qué diferencia hay entre modificar y copiar un objeto? ¿Cómo harías la copia sin spread?
   Modificar significa cambiar directamente el objeto original.
   Copiar significa crear un nuevo objeto con los mismos valores.

   
   12. Desestructuración   
1. ¿Qué es desestructuración? 
   Es una forma de extraer propiedades de un objeto y guardarlas en variables
2. ¿Qué ventaja tiene frente al acceso con punto?   
   Es más corta, más limpia y evita repetir el nombre del objeto muchas veces
   
   13. Desestructuración de objeto carro 

1. ¿Qué pasa si el nombre de la variable no coincide con la propiedad?
    No funcionará y dará undefined 
2. ¿Es obligatorio usar el mismo nombre?
    No. Se puede renombrar usando dos puntos.
    const { marca: marcaCarro } = carro;

   14. Desestructuración  
1. ¿Por qué se usan llaves dentro de llaves?
Porque estamos extrayendo propiedades de un objeto que está dentro de otro objeto.
2. ¿Qué significa el anidamiento en desestructuración?
Significa sacar propiedades de un objeto interno usando la desestructuración dentro de otra desestructuración

   15. Parámetro desestructurado 
1. ¿Qué significa desestructurar en el parámetro?
    Significa extraer las propiedades del objeto directamente en los parámetros de la función
2. ¿Qué ventaja tiene esta técnica?
    Hace el código más limpio, más corto y evita usar punto dentro de la función
   16. Desestructuración en función

1. ¿Por qué no necesitas usar punto dentro del return?
    Porque ya extrajimos las propiedades en el parámetro, entonces podemos usarlas directamente como variables
2. ¿Qué ocurre si el objeto no tiene esa propiedad?
    Puede generar un error o devolver undefined si la propiedad no existe

    17. Renombramiento
1. ¿Qué es el renombramiento?
    Es cambiar el nombre de una propiedad cuando se desestructura un objeto.
2. ¿Cuándo es útil cambiar el nombre de una variable?
    Es útil cuando ya existe una variable con el mismo nombre o cuando queremos que el nombre sea más claro
    18. Copia con spread
1. ¿Qué hace el operador spread (...)?
    El operador spread copia todas las propiedades de un objeto o arreglo y las coloca en otro nuevo.
2. ¿La copia es profunda o superficial?
    Es una copia superficial, porque solo copia el primer nivel del objeto.
    19. Copiar objeto anidado 
1. ¿Por qué se debe copiar también el objeto interno?
    Porque el spread solo hace una copia superficial. Si no copiamos el objeto interno, ambos objetos compartirán la misma referencia.
2. ¿Qué pasa si no lo haces?
    Si no se copia el objeto interno, al modificar la copia también se modificará el objeto original
    20. Desestructuración completa  
1. ¿Qué tan recomendable es hacer desestructuración muy larga?
    No siempre es recomendable porque puede hacer el código difícil de leer.
2. ¿Cuándo es mejor dividir la desestructuración?
    Cuando el objeto es muy grande o tiene muchos niveles, es mejor dividirlo en partes para que el código sea más claro.
3. ¿Qué errores comunes se pueden cometer?
    Errores comunes son que la propiedad no exista, repetir nombres de variables o hacer una desestructuración demasiado compleja sin querer 