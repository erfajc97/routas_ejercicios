const { Router } = require("express");

const router = Router();



    router.get("/user", (req,res)=>{

        res.send("Esto es un GET a users desde mi servidor");
    })

      router.post("/user", (req, res) => {
        const body = req.body;

          return res.status(200).json({
            status: "success",
            body
        });
    });


module.exports = router;