import Signature from "../models/SignatureModels.js";

// Obtener todas las asignaturas
export const getAllsignatures = async (req, res) => {
  try {
    const signatures = await signature.findAll();
    res.json(signatures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la firma' });
  }
};

// Crear una nueva signatura
export const createsignature = async (req, res) => {
  const { signatureName } = req.body;
  try {
    const newsignature = await signature.create({ signatureName });
    res.json(newsignature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la firma' });
  }
};

// Otros métodos CRUD según sea necesario

export const updateSignature = async (req, res) => {
    
}

export const getSignatureById = async (req, res) => {
    
}

export const deletesignature = async (req, res) => {
    

}