# Comparación de GPS en Ionic y Flutter asistido por Inteligencia Artificial

Este repositorio contiene el desarrollo y análisis comparativo de la implementación de geolocalización (GPS) utilizando dos frameworks híbridos (**Ionic** y **Flutter**) mediante el uso de herramientas de asistencia basadas en Inteligencia Artificial (**OpenAI Codex** y **Google Antigravity**).

A diferencia de los enfoques tradicionales, este laboratorio evalúa de forma práctica la construcción de **cuatro aplicaciones independientes**, aislando el comportamiento de los asistentes para medir su verdadera eficiencia en el manejo de hardware nativo y control de excepciones.

---

## 🛠️ Arquitectura de Software e Implementación (4 Aplicaciones)

### 1. Entorno Ionic (Capacitor Geolocation)

#### Aplicación 1: App Completa en Ionic con Google Antigravity
* **Enfoque de Desarrollo:** Diseñada mediante un flujo agéntico y autónomo. La IA inspeccionó el espacio de trabajo global, abrió de forma independiente la consola de comandos e instaló el plugin oficial de Capacitor para interactuar con las APIs del sistema operativo de forma síncrona mediante promesas.
* **Control de Interfaces:** Generó una estructura avanzada adaptada nativamente a una visualización oscura de alto contraste. Organizó la lógica en la arquitectura clásica modular enlazando correctamente el controlador con las tarjetas estilizadas de la vista, logrando un diseño adaptativo cohesivo sin intervención fragmentada.

#### Aplicación 2: App Completa en Ionic con OpenAI Codex
* **Enfoque de Desarrollo:** Construida bajo el comportamiento de un asistente lineal y reactivo. Codex truncó la estructura visual del archivo fuente inicial, obligando al programador a guiarlo secuencialmente mediante prompts comentados directamente en las etiquetas HTML para poder completar el cuerpo de la vista.
* **Control de Interfaces:** El resultado fue un diseño plano y minimalista sobre fondo claro. Debido a que la IA configuró el componente de forma independiente como un elemento Standalone, provocó un error fatal de compilación en la consola por conflicto de doble declaración en los módulos tradicionales de Angular, requiriendo que el desarrollador interviniera manualmente para limpiar y reestructurar el archivo de configuración modular.

---

### 2. Entorno Flutter (Geolocator & Streams)

#### Aplicación 3: App Completa en Flutter con Google Antigravity
* **Enfoque de Desarrollo:** El agente autónomo asumió la proactividad del entorno completo. Modificó de manera directa el archivo de configuración del proyecto, ejecutó las tareas en la consola para descargar los paquetes nativos de geolocalización e inyectó los permisos nativos en los manifiestos del sistema operativo.
* **Control de Interfaces:** Programó un árbol de widgets avanzado bajo Material 3 configurando el esquema en modo oscuro con fondos degradados. Diseñó un panel analítico completo para procesar y exponer de forma nativa la telemetría extendida del satélite en tiempo real, incluyendo datos de precisión, velocidad y altitud.

#### Aplicación 4: App Completa en Flutter con OpenAI Codex
* **Enfoque de Desarrollo:** Evidenció la ineficacia de la IA lineal para inicializar proyectos globales a partir de instrucciones sueltas en los comentarios. Al crear el entorno desde la consola, Codex sugirió un nombre de paquete inválido usando un guion medio, lo que provocó que el compilador de Dart se cayera por completo debido a las reglas de sintaxis del framework, requiriendo corrección manual.
* **Control de Interfaces:** Arrojó una aplicación visualmente plana, clara y básica implementada para entorno web. La lógica asíncrona se tuvo que construir de manera secuencial guiando a la herramienta bloque por bloque mediante comentarios de soporte para controlar los estados de carga y mapear los strings de los permisos.

---

## 📊 Matriz Comparativa de Desempeño Técnico

| Criterio Técnico | OpenAI Codex (Asistente Lineal) | Google Antigravity (Agente Autónomo) |
| :--- | :--- | :--- |
| **Capacidad de Generación** | **Incompleta y reactiva.** Trunca las estructuras de código o las limita a fragmentos sueltos, delegando la arquitectura global al programador. | **Completa y proactiva.** Resuelve de manera directa aplicaciones funcionales de punta a punta en un solo ciclo operacional. |
| **Gestión de Entorno y Dependencias** | **Nula.** Su campo de acción está bloqueado; es incapaz de interpretar la consola, descargar paquetes o editar archivos de configuración nativos. | **Automatizada.** Manipula de forma autónoma terminales CLI, gestiona archivos de dependencias e inyectó parches en manifiestos del sistema. |
| **Comprensión del Contexto** | **Baja.** Sufre de falsa autonomía. Tiende a asignar componentes fuera de los bloques condicionales (como el contenedor de mapas externo) y genera conflictos lógicos visuales. | **Alta.** Analiza el área de trabajo de forma cruzada, previene fallas de contraste visual en modo oscuro y enlaza archivos controladores con las vistas. |
| **Manejo de Hardware y Errores** | **Nulo.** No ofrece soporte para aislar o simular excepciones nativas lógicas en el hardware del sensor periférico. | **Excelente.** Intercepta fallas nativas, discrimina estados de permisos complejos y crea botones interactivos de recuperación y redirección. |

---

## 📌 Conclusiones del Análisis Técnico

* OpenAI Codex opera estrictamente como un mecanismo de autocompletado reactivo para fragmentos de código específicos. Al carecer de una visión global del entorno, traslada al desarrollador la responsabilidad de planificar la arquitectura modular y corregir manualmente los desajustes visuales y de diseño que va arrastrando.

* Google Antigravity evidenció el potencial de los agentes lógicos proactivos. Logró interpretar instrucciones directas en lenguaje natural, administró de forma autónoma la consola de comandos para instalar paquetes nativos y modificó múltiples archivos de configuración en simultáneo conservando la coherencia del software.

* Para interactuar con componentes físicos como el sensor GPS, el enfoque agéntico demostró una eficiencia infinitamente superior. Mientras Codex indujo errores de compilación modular y conflictos tipográficos por su rigidez, Antigravity automatizó el chequeo de permisos e implementó de manera proactiva soluciones interactivas, como redirigir al usuario hacia los ajustes del sistema si el GPS se encontraba apagado.
