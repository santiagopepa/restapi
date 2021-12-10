const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    const data = {"name": "carlos",
                    "apellido": "castaño"}
    res.json(data)
})


module.exports = router;