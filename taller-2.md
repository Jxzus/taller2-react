# Taller 2 Corte: Investigación sobre React

**Asignatura:** Desarrollo web  
**Modalidad:** Individual  
**Fecha de entrega:** 16 de octubre de 2026  

---

## Punto 1. ¿Qué es React?

### ¿Qué es y para qué sirve?

React es una herramienta de JavaScript pensada para construir la parte visual de una aplicación web. Se utiliza cuando una página necesita mostrar información y reaccionar a lo que hace una persona, por ejemplo, seleccionar una opción, filtrar resultados o completar un formulario. En vez de escribir toda la pantalla como un bloque único, React permite organizarla en secciones que pueden desarrollarse y mantenerse por separado.

### ¿Quién lo creó y cuándo apareció?

El equipo de Facebook —compañía que actualmente se llama Meta— desarrolló React para atender las necesidades de sus interfaces web. La biblioteca se presentó públicamente en 2013. Desde entonces, su uso se ha extendido a distintos tipos de sitios y aplicaciones.

### ¿Es una librería o un framework?

React se clasifica como una **biblioteca de JavaScript**. Una biblioteca proporciona herramientas para una tarea concreta y el programador decide cómo integrarlas en su proyecto. En cambio, un framework suele ofrecer una estructura más amplia y pautas para resolver varias partes de una aplicación.

React se enfoca principalmente en construir interfaces. Si un proyecto necesita administrar direcciones web, consultar servicios externos o preparar los archivos para publicarlos, se pueden agregar otras herramientas. Esa separación permite escoger las soluciones que mejor se ajusten al proyecto.

### ¿Qué significa que sea declarativo?

El enfoque declarativo consiste en describir el resultado que se quiere ver en pantalla a partir de los datos disponibles. El desarrollador no tiene que indicar por separado cada modificación visual. Por ejemplo, puede expresar que una etiqueta muestre “Disponible” si quedan cupos y “Agotado” cuando no quedan. Al cambiar los datos, React se encarga de actualizar la vista para representar la nueva situación.

---

## Punto 2. ¿Qué problema resuelve React?

### Dificultades de modificar el DOM manualmente

El DOM es la estructura que el navegador crea para representar los elementos de una página. Con JavaScript tradicional se puede buscar un elemento y cambiar su texto, sus atributos o su apariencia. El inconveniente aparece cuando hay muchos elementos relacionados: el programador debe controlar qué cambiar, cuándo hacerlo y cómo evitar que una parte de la pantalla quede mostrando datos antiguos.

En una aplicación con filtros, formularios, listas y notificaciones, estas actualizaciones manuales pueden repetirse y dispersarse por el código. Eso hace más difícil encontrar errores y mantener el comportamiento cuando se agregan nuevas funciones.

### Diferencia entre el enfoque imperativo y el declarativo

- **Imperativo:** se escriben las instrucciones paso a paso para lograr un cambio. Por ejemplo, localizar el indicador de inventario, reemplazar su texto y cambiar su color cuando las unidades lleguen a cero.
- **Declarativo:** se describe qué debe aparecer según la información actual. Por ejemplo, se establece que el indicador diga “En existencia” si la cantidad es mayor que cero y “Sin unidades” si es cero.

En pocas palabras, el enfoque imperativo se centra en las operaciones que deben ejecutarse; el declarativo se centra en el resultado que debe representar la interfaz.

### ¿Cómo mantiene React la interfaz sincronizada con el estado?

El estado contiene información que puede variar durante el uso de la aplicación, como una opción seleccionada, el número de artículos elegidos o el contenido de un campo. Cuando el componente actualiza ese estado usando las herramientas de React, React vuelve a ejecutar el componente y calcula qué debe mostrar. Después actualiza la parte necesaria de la interfaz.

Así, la vista se deriva de los datos y no depende de que el programador recuerde modificar manualmente cada elemento relacionado.

### ¿Qué aportan los componentes reutilizables?

Los componentes permiten separar la interfaz en unidades con responsabilidades claras. Por ejemplo, una aplicación de biblioteca podría tener un componente para mostrar cada libro. Ese mismo componente serviría para muchos títulos diferentes, recibiendo el nombre, el autor y la disponibilidad como datos.

La reutilización evita duplicar estructuras similares y hace que los cambios sean más fáciles de mantener. Si se modifica la forma de presentar la disponibilidad de un libro, se puede actualizar el componente correspondiente en un solo lugar.

---

## Punto 3. Principales componentes de React

### 3.1. Componentes

**Definición:** Un componente es una función que describe una parte de la interfaz y que puede incorporarse dentro de otras partes de la aplicación. Puede representar desde una etiqueta informativa hasta una sección completa.

**Características principales:**

- En React moderno suelen declararse mediante funciones de JavaScript.
- El nombre del componente empieza con mayúscula.
- Devuelven JSX para indicar qué elementos se deben mostrar.
- Se pueden utilizar varias veces en diferentes lugares.
- Pueden recibir información mediante props y gestionar datos cambiantes con estado.

**Ejemplo de código:**

```jsx
function AvisoMantenimiento() {
  return (
    <aside>
      <strong>Servicio programado</strong>
      <p>La plataforma estará en mantenimiento a las 10:00 p. m.</p>
    </aside>
  );
}

function PanelPrincipal() {
  return (
    <section>
      <h1>Centro de ayuda</h1>
      <AvisoMantenimiento />
    </section>
  );
}
```

En este caso, `AvisoMantenimiento` reúne el mensaje en una pieza independiente. `PanelPrincipal` lo incorpora dentro de su contenido. Si el aviso necesita cambiar, se puede editar su componente sin reorganizar toda la página.

### 3.2. JSX

**Definición:** JSX es una sintaxis que permite escribir estructuras similares a HTML dentro de JavaScript. Se usa con frecuencia en React para expresar de forma legible cómo estará organizada la interfaz.

**Características principales:**

- Permite incluir expresiones de JavaScript entre llaves `{}`.
- Los elementos deben cerrarse correctamente.
- Si se devuelven varios elementos al mismo nivel, se agrupan dentro de un elemento raíz o de un fragmento.
- Algunos atributos tienen nombres propios de JSX, como `className`.
- JSX describe la estructura visual, pero la lógica de la aplicación sigue escribiéndose con JavaScript.

**Ejemplo de código:**

```jsx
function EstadoPedido() {
  const numeroPedido = 5824;
  const estado = "En camino";

  return (
    <section>
      <h2>Pedido #{numeroPedido}</h2>
      <p>Estado actual: {estado}</p>
    </section>
  );
}
```

Las variables `numeroPedido` y `estado` se insertan dentro de la estructura mediante llaves. De esta manera, el contenido de la interfaz puede construirse a partir de valores definidos en JavaScript.

### 3.3. Props

**Definición:** Las props son los valores que un componente recibe desde el lugar donde se utiliza. Funcionan como datos de entrada que permiten adaptar una misma estructura a distintas situaciones.

**Características principales:**

- Se escriben como atributos al utilizar un componente.
- Pueden contener textos, números, listas, objetos o funciones.
- Un componente puede recibir varias props.
- Se deben tratar como datos de solo lectura: el componente no debe cambiarlas directamente.
- Facilitan la comunicación de información desde un componente padre hacia uno hijo.

**Ejemplo de código:**

```jsx
function Evento({ nombre, lugar }) {
  return (
    <article>
      <h3>{nombre}</h3>
      <p>Lugar: {lugar}</p>
    </article>
  );
}

function AgendaCultural() {
  return (
    <div>
      <Evento nombre="Taller de fotografía" lugar="Sala 204" />
      <Evento nombre="Club de lectura" lugar="Biblioteca" />
    </div>
  );
}
```

El componente `Evento` recibe el nombre de una actividad y el lugar donde se realizará. La agenda lo utiliza dos veces con valores diferentes, por lo que no es necesario crear un componente nuevo para cada evento.

### 3.4. Estado con `useState`

**Definición:** El estado es un dato que un componente conserva mientras la persona interactúa con la aplicación. El Hook `useState` permite declarar ese dato y obtener una función para solicitar su actualización.

**Características principales:**

- Devuelve el valor actual y una función que permite actualizarlo.
- Se importa desde `react`.
- Al cambiar el estado mediante la función correspondiente, React vuelve a renderizar el componente cuando sea necesario.
- No se debe modificar directamente el valor guardado.
- Es útil para controlar selecciones, cantidades, formularios y secciones que se muestran u ocultan.

**Ejemplo de código:**

```jsx
import { useState } from "react";

function SelectorDeAsientos() {
  const [asientos, setAsientos] = useState(1);

  return (
    <section>
      <p>Asientos seleccionados: {asientos}</p>
      <button onClick={() => setAsientos(asientos + 1)}>
        Añadir asiento
      </button>
      <button
        onClick={() => setAsientos(Math.max(1, asientos - 1))}
      >
        Quitar asiento
      </button>
    </section>
  );
}
```

La selección comienza en un asiento. Al presionar los botones, se actualiza el valor guardado y el texto muestra la cantidad nueva. `Math.max(1, asientos - 1)` evita que el número baje de uno.

### 3.5. Eventos: `onClick` y `onChange`

**Definición:** Los eventos permiten ejecutar una acción como respuesta a lo que hace el usuario. Por ejemplo, se puede reaccionar al pulsar un botón o al cambiar el valor de una casilla.

**Características principales:**

- `onClick` recibe una función que se ejecuta al hacer clic.
- `onChange` permite responder cuando cambia el valor de un control de formulario.
- El manejador se escribe como una función, no como una cadena de texto.
- Los eventos pueden actualizar el estado y hacer que la interfaz refleje la interacción.

**Ejemplo de código:**

```jsx
import { useState } from "react";

function PreferenciasNotificacion() {
  const [activadas, setActivadas] = useState(false);

  return (
    <section>
      <label>
        <input
          type="checkbox"
          checked={activadas}
          onChange={(evento) => setActivadas(evento.target.checked)}
        />
        Recibir avisos por correo
      </label>

      <p>
        Notificaciones: {activadas ? "activadas" : "desactivadas"}
      </p>

      <button onClick={() => setActivadas(false)}>
        Desactivar avisos
      </button>
    </section>
  );
}
```

La casilla usa `onChange` para guardar si la opción está marcada. El texto cambia de acuerdo con ese valor. El botón utiliza `onClick` para desactivar la preferencia, por lo que ambos eventos afectan el mismo estado.

---

## Punto 4. Importancia de React en la industria

### ¿Por qué lo eligen tantas empresas?

React permite dividir una interfaz grande en partes más manejables, reutilizar elementos visuales y responder a los cambios de datos sin programar manualmente cada modificación del DOM. Estas características pueden facilitar el mantenimiento y la colaboración entre equipos, especialmente cuando una aplicación tiene muchas pantallas e interacciones.

También puede incorporarse a un proyecto existente de manera gradual. No obstante, React no es la solución ideal para todos los casos: la decisión depende del alcance del producto, los conocimientos del equipo y las tecnologías que ya tenga la organización.

### ¿Qué aporta su ecosistema?

React puede combinarse con otras herramientas que cubren necesidades diferentes:

- **Vite:** ayuda a iniciar proyectos, ejecutar el servidor de desarrollo y preparar los archivos para publicarlos.
- **React Router:** permite organizar la navegación entre vistas o rutas de una aplicación.
- **Next.js:** es un framework basado en React que ofrece funciones adicionales para desarrollar aplicaciones web, como renderizado en el servidor y herramientas de enrutamiento.
- **React Developer Tools:** facilita inspeccionar los componentes y observar información útil durante la depuración.
- **Herramientas de pruebas:** permiten comprobar que las funciones y los componentes se comporten como se espera después de realizar cambios.

Estas opciones amplían las posibilidades de React, aunque no todas son obligatorias en cada proyecto.

### Comunidad y mantenimiento

React surgió dentro de Facebook, hoy Meta, y cuenta con mantenedores y colaboradores externos que participan en su desarrollo. En octubre de 2025 se anunció la iniciativa de crear la React Foundation bajo la Linux Foundation para apoyar una colaboración más amplia alrededor de React y React Native. Para conocer el estado actual del proyecto, conviene consultar sus canales oficiales, donde se publican novedades, documentación y cambios de versión.

Una comunidad activa aporta guías, herramientas y respuestas a problemas comunes. Sin embargo, los equipos también deben revisar las actualizaciones y mantener sus dependencias al día para aprovechar mejoras y corregir posibles vulnerabilidades.

### ¿Por qué es relevante para un desarrollador front-end?

Aprender React permite practicar la construcción de interfaces por componentes, el manejo de información cambiante y la respuesta a eventos. Esos conocimientos resultan útiles para participar en proyectos web que necesitan una interfaz dinámica. También familiariza al desarrollador con un ecosistema de herramientas que se integra con procesos de desarrollo, pruebas y publicación.

React no reemplaza los fundamentos de la web. Para trabajar bien con él también es importante conocer JavaScript, HTML, CSS, accesibilidad y pruebas de software.

---

## Punto 5. Grandes empresas que utilizan React

### 1. Meta (Facebook)

Meta desarrolló React y lo utiliza en interfaces de sus productos. Facebook es un ejemplo relevante porque reúne funciones que cambian constantemente, como publicaciones, comentarios, reacciones y notificaciones. La organización de la interfaz en componentes permite dividir esas funciones en partes que pueden desarrollarse y mantenerse con mayor independencia.

**Fuentes:** [Meta Open Source — React](https://opensource.fb.com/projects/react/) y [Engineering at Meta — Introducing the React Foundation](https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/).

### 2. Airbnb

Airbnb ha descrito el uso de React en el desarrollo de sus interfaces web. Un caso documentado por su equipo de ingeniería fue el traslado de la experiencia de búsqueda a React. Esta parte del producto es importante porque los visitantes ajustan criterios, consultan alojamientos y revisan resultados que cambian según sus selecciones. El uso de componentes ayuda a compartir patrones de interfaz y a mantener una experiencia coherente entre diferentes secciones.

**Fuentes:** [Airbnb Engineering — Moving Airbnb Search to React](https://medium.com/airbnb-engineering/moving-airbnb-search-to-react-b85b815e166c) y [Airbnb Engineering — Accelerating Large-Scale Test Migration with LLMs](https://airbnb.tech/infrastructure/accelerating-large-scale-test-migration-with-llms/).

Estos ejemplos muestran que React se utiliza más allá de ejercicios académicos. También forma parte de aplicaciones que deben responder a muchas interacciones y evolucionar con el tiempo.

---

## Referencias

1. React. *Documentación oficial de React*. https://react.dev/
2. React. *Aprende React (documentación en español)*. https://es.react.dev/learn
3. Meta Open Source. *React*. https://opensource.fb.com/projects/react/
4. React. *Conoce al equipo*. https://react.dev/community/team
5. Engineering at Meta. *Introducing the React Foundation: The New Home for React & React Native*. https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/
6. Ko, H. (2017). *Moving Airbnb Search to React*. Airbnb Engineering. https://medium.com/airbnb-engineering/moving-airbnb-search-to-react-b85b815e166c
7. Airbnb Engineering. *Accelerating Large-Scale Test Migration with LLMs*. https://airbnb.tech/infrastructure/accelerating-large-scale-test-migration-with-llms/
