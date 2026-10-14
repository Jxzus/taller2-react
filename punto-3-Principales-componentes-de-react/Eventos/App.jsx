import { useState } from 'react'

function CampoNombre() {
  const [nombre, setNombre] = useState('')

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Hola, {nombre}</p>
    </div>
  )
}

export default CampoNombre
