const express = require("express");
const { z } = require("zod"); // Correct CommonJS import

const app = express();
app.use(express.json());

const schema = z.object({
  kidneys: z.array(z.number()).nonempty("Kidneys array must not be empty"),
});

app.post("/health-checkup", (req, res) => {
const kidneys = req.body.kidneys;
const response = schema.safeParse(kidneys);

if (!response.success) {
    return res.status(411).json({
        msg: "Input is not valid. It should be an array of numbers.",
    });
}

res.json({
    msg: "Input is valid!",
    data: response.data,
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));