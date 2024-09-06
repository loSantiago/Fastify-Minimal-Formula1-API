import path from "node:path"
import fs from "node:fs"
import { sourceDirectory, projectDirectories} from "../config.utils";

const pathDir = path.join(sourceDirectory(), projectDirectories.Data);

async function getData(fileName: string) {

    const pathFile = path.join(pathDir, (fileName + ".json"))

    const data = fs.readFileSync(pathFile, { encoding: 'utf8', flag: 'r' })
        
    return data;
}

export default getData;