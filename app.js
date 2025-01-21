const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el middleware cors
const app = express()
const PORT = 8000
const { v4: uuidv4 } = require('uuid');

let companies = [
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

app.get('/', (req, res) => {
  res.send('Companies api is running! 🚀')
})

app.get('/companies/:id', (req, res) => {
  const id = req.params.id;
  const company = companies.find(c => c.id === id);
  res.json(company);
})

app.get('/companies', (req, res) => {
  res.json(companies);
})

app.post("/companies", (req, res) => {
  const company = { ...req.body, id: uuidv4() };
  companies.push(company);
  res.json(company);
})

app.put('/companies', (req, res) => {
  const company = req.body;
  companies = companies.map(c => c.id === company.id ? company : c)
  res.json(company);
})

app.delete('/companies/:id', (req, res) => {
  const id = req.params?.id;
  companies = companies.filter(f => f.id !== id);
  res.json({
    message: 'Company deleted'
  })
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})