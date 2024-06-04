export const validateLeadFormData = (req, res, next) => {

  const { postcode, houseNumber, consideringEv, consideringHeatPump, isOwner, name, phone, yearlyElectricityUsage } = req.body;
  if (!isFormValid(req.body)) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  next();
}

export const isFormValid = (formData) => {
    // Implement your validation logic here
    const requiredFields = ['postcode', 'houseNumber', 'isOwner', 'yearlyElectricityUsage', 'name', 'email', 'phone'];
    return requiredFields.every(field => formData[field] !== undefined && formData[field] !== '');
}
