const express = require('express');// Importa el paquete express
const bodyParser = require('body-parser');// Importa el paquete body-parser
const cors = require('cors'); // Importa el middleware cors
const app = express()// Crea una instancia de express
const PORT = 8000// Puerto en el que escuchará el servidor
const { v4: uuidv4 } = require('uuid');// Importa la función v4 del paquete uuid

let companies = [// Arreglo de empresas
  {
    id: crypto.randomUUID(),
    status: 'Activo',
    name: 'Carlos Esorche',
    email: 'carlos@email.com',
    nit: '238219329-9',
    reason: 'MM Comunicaciones Guatemala S.A',
  },
  {
    id: crypto.randomUUID(),
    status: 'Activo',
    name: 'Emilia Santander',
    email: 'emilia@email.com',
    nit: '482382323-4',
    reason: 'MM Comunicaciones Guatemala S.A',
  },
  {
    id: crypto.randomUUID(),
    status: 'Activo',
    name: 'Camila Alvarez',
    email: 'camila@email.com',
    nit: '4233492932-3',
    reason: 'MM Comunicaciones Guatemala S.A',
  },
  {
    id: crypto.randomUUID(),
    status: 'Activo',
    name: 'Laura Mendoza',
    email: 'laura@email.com',
    nit: '231238382354',
    reason: 'MM Comunicaciones Guatemala S.A',
  },
  {
    id: crypto.randomUUID(),
    status: 'Activo',
    name: 'Felix Salas',
    email: 'felix@email.com',
    nit: '1232392939-2',
    reason: 'MM Comunicaciones Guatemala S.A',
  },
]



// Middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.json());

// Middleware para permitir solicitudes CORS
app.use(cors());

app.get('/', (req, res) => {// Ruta raíz
  res.send('Companies api is running! 🚀')
})

app.get('/companies/:id', (req, res) => {// Ruta para obtener una empresa por id
  const id = req.params.id;
  const company = companies.find(c => c.id === id);
  res.json(company);
})

app.get('/companies', (req, res) => {// Ruta para obtener todas las empresas
  res.json(companies);
})

app.post("/companies", (req, res) => {// Ruta para crear una empresa
  const company = { ...req.body, id: uuidv4() };
  companies.push(company);
  res.json(company);
})

app.put('/companies', (req, res) => {// Ruta para actualizar una empresa
  const company = req.body;
  companies = companies.map(c => c.id === company.id ? company : c)
  res.json(company);
})

app.delete('/companies/:id', (req, res) => {// Ruta para eliminar una empresa
  const id = req.params?.id;
  companies = companies.filter(f => f.id !== id);
  res.json({
    message: 'Company deleted'
  })
})

app.listen(PORT, () => {// Inicia el servidor
  console.log(`✅ Server is running on port ${PORT}`);
})