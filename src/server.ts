import fastify from "fastify";
import { dataManager } from "./services/DataManagers";
import cors from "@fastify/cors"

const server = fastify(
    { logger: true }
)

server.register(cors, {
    origin: "*"    
})

server.get("/teams", async (req, res) => {
    res.type("application/json").code(200)

    return dataManager("teams")
});


/*server.get("/drivers", async (req, res) => {
    res.type("application/json").code(200);

    return dataManager("drivers")
});*/

interface DriveParams{
    name: string
}

server.get<{Params: DriveParams}>("/drivers/:name", async(req, res) => {
    const name = req.params.name;
    const data = dataManager("drivers", name);

    res.type("application/json").code(200);
    return data
})

server.listen(
    { port: 3333 },
    () => console.log("Server running.")
)