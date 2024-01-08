const validateContactData = (req, res, next) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields' });
    }
  
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
        return res.status(400).json({ error: 'Name, email, and message must be strings' });
    }

    if (name.length < 3 || name.length > 50) {
        return res.status(400).json({ error: 'Name must be between 3 and 50 characters' });
    }

    if (email.length < 3 || email.length > 50) {
        return res.status(400).json({ error: 'Email must be between 3 and 50 characters' });
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    if (message.length < 3 || message.length > 50) {
        return res.status(400).json({ error: 'Message must be between 3 and 50 characters' });
    }

    next();
};
  
  export { validateContactData };
  