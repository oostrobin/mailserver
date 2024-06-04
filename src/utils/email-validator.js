const validateContactData = (req, res, next) => {
    const { name, email, message, subject } = req.body;
  
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: 'Naam, e-mail, onderwerp en bericht zijn verplichte velden' });
    }
  
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' || typeof subject !== 'string') {
        return res.status(400).json({ error: 'Naam, e-mail, onderwerp en bericht moeten tekstwaarden zijn' });
    }

    if (name.length < 3 || name.length > 50) {
        return res.status(400).json({ error: 'Naam moet tussen 3 en 50 tekens lang zijn' });
    }

    if (email.length < 3 || email.length > 50) {
        return res.status(400).json({ error: 'E-mail moet tussen 3 en 50 tekens lang zijn' });
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        return res.status(400).json({ error: 'Ongeldig e-mailformaat' });
    }

    if (subject.length < 3 || subject.length > 50) {
        return res.status(400).json({ error: 'Onderwerp moet tussen 3 en 50 tekens lang zijn' });
    }

    if (message.length < 3 || message.length > 50) {
        return res.status(400).json({ error: 'Bericht moet tussen 3 en 50 tekens lang zijn' });
    }

    next();
};
  
export { validateContactData };


