# Cuántica de Bolsillo

**Autor: Miguel Ángel Layunta López**

PWA educativa en español para explorar física y computación cuánticas.
No necesita compilación, cuenta de usuario, CDN ni bibliotecas externas.

## Archivos

- `index.html`: interfaz, estilos, simulación y ejercicios.
- `sw.js`: caché offline.
- `manifest.json`: metadatos de instalación.
- `icon.svg`: icono vectorial de la aplicación.
- `README.md`: documentación.

## Arranque

Desde la carpeta que contiene los cinco archivos:

```bash
python -m http.server 8080 --bind 127.0.0.1
```

En algunos sistemas el comando es `python3` en lugar de `python`.
Abre `http://localhost:8080/index.html`.

Python solo sirve los archivos durante el desarrollo. En producción basta
un alojamiento estático con HTTPS. Abrir el HTML mediante `file://` no
activa el service worker.

## Instalación y uso sin conexión

1. Abre la aplicación por HTTPS o localhost.
2. Espera el mensaje «Contenido local preparado para uso sin conexión».
3. Usa la opción de instalación del navegador cuando esté disponible.
4. Para verificar el modo offline, desactiva la red y vuelve a cargar la página.

La compatibilidad de instalación y de iconos SVG depende del navegador.
Para una distribución móvil amplia, los primeros archivos adicionales
recomendados son iconos PNG de 192 y 512 píxeles y un icono para iOS.

Al publicar cambios en los archivos precargados, incrementa `v1` en `sw.js`.
El progreso de los retos se guarda en este navegador. El circuito y el editor
son temporales: descarga el Python antes de cerrar si deseas conservarlo.

## Prueba reproducible: entrelazamiento

1. Reinicia el circuito.
2. Aplica H en A. Debes ver 50 % en 00 y 50 % en 10.
3. Aplica CNOT A→B. Ahora deben aparecer 50 % en 00 y 50 % en 11.
4. Los dos vectores de Bloch locales deben quedar en el centro.
5. La correlación conjunta de Z debe ser +1.
6. Mide ambos cúbits. Solo puedes obtener 00 o 11.
7. Repite la medición sin aplicar puertas. Debes obtener el mismo resultado.
## Versión 3 · Laboratorio de pérdida de coherencia

La lección Bell incluye una preparación con pérdida de fase ajustable.
El estudiante registra una predicción y compara las distribuciones ideales
en Z y X. Después puede simular lotes independientes y exportarlos como CSV.

El porcentaje representa la fracción de coherencia perdida, no una tasa de
inversión de bits ni un tiempo físico. La preparación del laboratorio guiado
es independiente del circuito personal del constructor.

Comprobación: al 50 % de pérdida, los resultados iguales tienen probabilidad
del 100 % en Z y del 75 % en X. Los dos vectores locales de Bloch siguen
siendo nulos. La sección Bolsillo incorpora seis pruebas para este modelo.


Deshacer recupera el historial del simulador; no representa una operación
física capaz de invertir una medición desconocida.

## Prueba de fase

Prepara H en A, seguida de Z en A. Las probabilidades de 00 y 10 siguen
siendo iguales, pero la componente x de Bloch de A cambia de +1 a −1.
Aplica otra H en A: debes obtener 10 con certeza.

## Modelos y límites

- Circuitos: vector de estado complejo de dos cúbits sin ruido. Orden de
  lectura A,B. Las esferas representan estados reducidos.
- Doble rendija: difracción de Fraunhofer para rendijas rectangulares
  idénticas, aproximación paraxial y visibilidad ajustable.
- Efecto túnel: transmisión estacionaria a través de una barrera rectangular
  unidimensional, con igual potencial a ambos lados y energía inferior a
  la altura de la barrera. No es una animación temporal de un paquete de ondas.
- Hidrógeno: muestreo de la densidad de los orbitales 1s y 2pᶻ, incluido
  el factor de volumen radial. La orientación de la vista no modifica el orbital.
- Pozo infinito: densidad separable del estado (2,1,1) en una caja cúbica.
- Calculadora: autovalores de una matriz hermítica de dos por dos y valor
  esperado en el estado reducido actual de A.
- Aprendizaje: tres retos, comprobación por fidelidad, pistas progresivas y
  recuperación local del progreso. No constituye un curso universitario completo.
- Fórmulas: MathML nativo para la regla de Born; sin motor LaTeX externo.
- Python: el editor exporta código Qiskit real. Para ejecutarlo hace falta
  un entorno Python con Qiskit instalado. El archivo exportado construye
  y dibuja el circuito; no realiza envíos a proveedores.

## Ampliaciones previstas según el alcance del proyecto

1. **Contenido:** evolución temporal de paquetes de ondas, gato de Schrödinger
   como modelo de correlación y decoherencia, formalismo universitario,
   Grover, Shor, corrección de errores y criptografía cuántica.
2. **Herramientas:** productos tensoriales generales, biblioteca de circuitos,
   ejercicios de ecuaciones paso a paso y renderizador LaTeX alojado localmente.
3. **Ejecución de código:** entorno aislado con límites de tiempo y memoria
   para ejecutar programas de Qiskit, Cirq o PennyLane.
4. **Hardware:** servicio autenticado para enviar trabajos, consultar su
   estado y comparar histogramas ideales con mediciones reales. No colocar
   claves de proveedor en el HTML, el manifiesto ni el service worker.
5. **Comunidad:** usuarios, publicación de circuitos, denuncias, cola de
   moderación y política de privacidad antes de habilitar un foro público.
   ## Versión 2 · Preparar, predecir y medir

- El constructor distingue entre medir el par actual y ejecutar un lote de
  preparaciones independientes. Los lotes no alteran el estado del constructor.
- Los resultados separan probabilidad ideal, frecuencia observada y recuento.
  Pueden descargarse como CSV.
- La lección Bell frente a mezcla clásica compara dos fuentes en las bases
  Z y X. Cada fuente se simula mediante un conjunto ponderado de estados puros.
- La comparación distingue esas dos preparaciones concretas; no constituye
  una prueba experimental de violación de una desigualdad de Bell.
- El túnel incluye perfil de potencial, escala espacial, curva logarítmica
  de transmisión y exportación de datos.
- Las nubes orbitales, el pozo y la doble rendija permiten descargar los datos
  representados. Las coordenadas de las nubes son coordenadas de visualización,
  no distancias calibradas en metros.
- Las cámaras permiten restablecer la orientación original.
- Los enlaces con el parámetro `c` cargan circuitos de hasta 128 puertas.
  No incluyen resultados de mediciones. Un enlace localhost no es público.
- El modo Bolsillo incluye comprobaciones deterministas del simulador.
- La ficha Bell se puede imprimir desde su propia sección.

### Protocolo de aceptación

1. En Bolsillo, ejecuta las comprobaciones y revisa sus resultados.
2. Carga la pareja de Bell y ejecuta 1 000 preparaciones. Solo deben aparecer
   00 y 11, aunque sus recuentos no tienen por qué ser exactamente iguales.
3. En la lección Bell, compara ambas fuentes primero en Z y después en X.
   En X, la mezcla debe tener cuatro probabilidades ideales del 25 %.
4. Genera un enlace de tres puertas y ábrelo en otra pestaña; comprueba
   la secuencia y sus probabilidades.
5. Una vez activada la caché v2, desconecta la red y recarga la aplicación.
   Repite la comparación Bell y descarga un CSV sin conexión.
## Versión 4 · La fuente misteriosa

Misión de inferencia con 30 pares independientes y tres fuentes candidatas:
Bell+, Bell− y una mezcla equiprobable de 00 y 11. El estudiante registra
su hipótesis, elige la base y el tamaño de cada tanda y justifica su conclusión.

La valoración distingue entre una fuente incompatible, una fuente favorecida
y una fuente identificada sin ambigüedad dentro del modelo ideal. No se
asignan probabilidades posteriores ni se califica automáticamente el texto libre.

El enlace de clase fija la fuente, pero no los resultados aleatorios.
Es una actividad didáctica local, no un examen con secreto criptográfico.
El cuaderno se conserva en memoria y puede descargarse como texto antes
de cerrar o recargar la página. La revelación no altera el circuito personal.
## Versión 1.0 educativa

Edición con lección de Bell, laboratorio de coherencia y misión
«La fuente misteriosa». El cuaderno se guarda en el navegador:
conserva las tandas originales, el borrador y la conclusión.
El enlace de clase comparte la fuente, no el trabajo del estudiante.
En equipos compartidos, descarga y descarta el cuaderno al terminar.


